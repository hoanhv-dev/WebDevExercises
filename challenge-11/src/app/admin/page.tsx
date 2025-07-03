import { FiUsers, FiDollarSign, FiShoppingBag, FiActivity } from 'react-icons/fi';

const stats = [
  { name: 'Total Users', value: '2,345', icon: FiUsers, change: '+12%', changeType: 'increase' },
  { name: 'Revenue', value: '$34,546', icon: FiDollarSign, change: '+8.2%', changeType: 'increase' },
  { name: 'Products', value: '1,234', icon: FiShoppingBag, change: '-2.3%', changeType: 'decrease' },
  { name: 'Active Now', value: '573', icon: FiActivity, change: '+5.4%', changeType: 'increase' },
];

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'created a new product', time: '2 minutes ago' },
  { id: 2, user: 'Jane Smith', action: 'updated user settings', time: '1 hour ago' },
  { id: 3, user: 'Alex Johnson', action: 'deleted a comment', time: '3 hours ago' },
  { id: 4, user: 'Sarah Williams', action: 'added new category', time: '5 hours ago' },
  { id: 5, user: 'Mike Brown', action: 'processed 25 orders', time: '1 day ago' },
];

export default function AdminDashboard() {
  return (
    <div></div>
  );
}