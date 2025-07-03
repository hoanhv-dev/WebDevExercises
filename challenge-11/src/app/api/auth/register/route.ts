import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    console.log('Registration request body:', body);
    
    const { email, password, name } = body;
    
    if (!email || !password || !name) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: "Email, password, and name are required" }, 
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      console.error('Email already in use:', email);
      return NextResponse.json(
        { error: "Email already in use" }, 
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    
    console.log('User created successfully:', { id: user.id, email: user.email });
    
    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });   
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { 
        error: "Registration failed",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}