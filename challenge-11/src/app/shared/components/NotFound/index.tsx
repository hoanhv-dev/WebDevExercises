'use client'

import React from 'react';
import { Result, Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const handleBackHome = () => {
    router.push('/');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={handleBackHome}>Trang chủ</Button>}
      />
    </div>
  );
};
