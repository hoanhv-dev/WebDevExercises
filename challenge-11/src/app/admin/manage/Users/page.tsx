// src/app/admin/manage/Users/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/shared/providers/AuthProvider';
import { Search, User, Mail, Phone, MoreVertical, Edit, Trash2, Eye, Plus } from 'lucide-react';
import { Button, Input, Table, Tag, message, Modal } from 'antd';

interface User {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  addresses: Array<{
    id: string;
    street: string;
    city: string;
    ward: string;
    isDefault: boolean;
  }>;
  createdAt: string;
  updatedAt: string;
}

export default function ManageUsers() {
  const router = useRouter();
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
        message.error('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: User) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <User className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {text || 'No name'}
            </div>
            <div className="text-sm text-gray-500">ID: {record.id.substring(0, 8)}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Contact',
      key: 'contact',
      render: (record: User) => (
        <div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2" />
            {record.email}
          </div>
          {record.phone && (
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Phone className="h-4 w-4 mr-2" />
              {record.phone}
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: User) => (
        <div className="flex space-x-2">
          <Button 
            icon={<Eye size={16} />} 
            onClick={() => router.push(`/admin/manage/Users/${record.id}`)}
          />
          <Button 
            icon={<Edit size={16} />}
            onClick={() => router.push(`/admin/manage/Users/edit/${record.id}`)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button 
          type="primary" 
          icon={<Plus size={16} />}
          onClick={() => router.push('/admin/manage/Users/create')}
        >
          Add User
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <Input
            placeholder="Search users..."
            prefix={<Search className="h-4 w-4 text-gray-400" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
        </div>
        
        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          loading={loading}
          className="w-full"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
}