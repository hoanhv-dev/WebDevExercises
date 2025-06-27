'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

// Helper function to set cookie
async function setAuthCookie(user: { id: string; name: string; email: string }) {
  const cookieStore = await cookies()
  cookieStore.set('user', JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: 'Invalid email or password' }
  }

  await setAuthCookie(user)
  return { user: { id: user.id, name: user.name, email: user.email } }
}

export async function register(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!name || !email || !password) {
    return { error: 'All fields are required' }
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    return { error: 'Email already in use' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  await setAuthCookie(user)
  return { user: { id: user.id, name: user.name, email: user.email } }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.set('user', '', { 
    expires: new Date(0),
    path: '/',
  })
  return { success: true }
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')?.value
  return user ? JSON.parse(user) : null
}