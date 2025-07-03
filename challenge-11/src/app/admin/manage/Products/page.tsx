// src/app/admin/manage/Products/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button, Input, Table, Tag, message, Modal } from 'antd';

interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number | null;
  category: string;
  image: string;
  rating: number;
  review_count: number;
  discount: number | null;
  createdAt: string;
}

export default function ManageProducts() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete product');
      
      message.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to delete product');
    } finally {
      setDeleteModalVisible(false);
      setProductToDelete(null);
    }
  };

  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Product) => (
        <div className="flex items-center">
          <img 
            src={record.image} 
            alt={text}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="ml-4">
            <div className="font-medium">{text}</div>
            <div className="text-sm text-gray-500">ID: {record.id.toString().substring(0, 8)}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => (
        <Tag color="blue">{category}</Tag>
      ),
    },
    {
      title: 'Price',
      key: 'price',
      render: (record: Product) => (
        <div>
          <span className="font-medium">${record.price.toFixed(2)}</span>
          {record.original_price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${record.original_price.toFixed(2)}
            </span>
          )}
        </div>
      ),
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: number) => `${rating}/5 (${rating * 20}%)`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: Product) => (
        <div className="flex space-x-2">
          <Button 
            icon={<Eye size={16} />} 
            onClick={() => router.push(`/admin/manage/Products/${record.id}`)}
          />
          <Button 
            icon={<Edit size={16} />}
            onClick={() => router.push(`/admin/manage/Products/edit/${record.id}`)}
          />
          <Button 
            danger
            icon={<Trash2 size={16} />}
            onClick={() => {
              setProductToDelete(record.id);
              setDeleteModalVisible(true);
            }}
          />
        </div>
      ),
    },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button 
          type="primary" 
          icon={<Plus size={16} />}
          onClick={() => router.push('/admin/manage/Products/create')}
        >
          Add Product
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <Input
            placeholder="Search products..."
            prefix={<Search className="h-4 w-4 text-gray-400" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
        </div>
        
        <Table
          columns={columns}
          dataSource={filteredProducts}
          rowKey="id"
          loading={loading}
          className="w-full"
          pagination={{ pageSize: 10 }}
        />
      </div>

      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onOk={() => productToDelete && handleDelete(productToDelete)}
        onCancel={() => {
          setDeleteModalVisible(false);
          setProductToDelete(null);
        }}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this product?</p>
        <p className="text-red-500">This action cannot be undone.</p>
      </Modal>
    </div>
  );
}