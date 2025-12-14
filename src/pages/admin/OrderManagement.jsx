import { useState } from 'react';
import { Eye, Filter } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Card from '../../components/common/Card';
import { mockOrders } from '../../data/mockOrders';
import { formatPrice, formatDate } from '../../utils/helpers';
import { ORDER_STATUS } from '../../utils/constants';

const OrderManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  
  const filteredOrders = statusFilter === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === statusFilter);

  const getStatusBadgeClass = (status) => {
    const classes = {
      delivered: 'bg-green-100 text-green-800',
      shipped: 'bg-blue-100 text-blue-800',
      processing: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-purple-100 text-purple-800',
      pending: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gray-100 min-h-screen">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management</h1>

          <Card>
            {/* Filter Bar */}
            <div className="mb-6 flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Orders</option>
                {Object.entries(ORDER_STATUS).map(([key, value]) => (
                  <option key={value} value={value}>
                    {key.charAt(0) + key.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">
                {filteredOrders.length} orders
              </span>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Payment</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <span className="font-mono text-sm font-medium">{order.id}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm font-medium">{order.customerName}</p>
                          <p className="text-xs text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{formatDate(order.orderDate)}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium">
                        {formatPrice(order.totalAmount)}
                      </td>
                      <td className="py-3 px-4 text-sm capitalize">{order.paymentMethod.replace('-', ' ')}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Order Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
            {Object.entries(ORDER_STATUS).map(([key, value]) => {
              const count = mockOrders.filter(o => o.status === value).length;
              return (
                <Card key={value} hover>
                  <p className="text-sm text-gray-600 mb-1 capitalize">{key.toLowerCase()}</p>
                  <p className="text-2xl font-bold text-gray-900">{count}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
