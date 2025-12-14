import { Package, ShoppingBag, DollarSign, Users } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import StatsCard from '../../components/admin/StatsCard';
import Card from '../../components/common/Card';
import { mockOrders } from '../../data/mockOrders';
import { revenueMetrics } from '../../data/mockSales';
import { formatPrice, formatDate } from '../../utils/helpers';

const Dashboard = () => {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gray-100 min-h-screen">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Revenue"
              value={formatPrice(revenueMetrics.totalRevenue)}
              icon={DollarSign}
              trend="up"
              trendValue="12.5% from last month"
              color="green"
            />
            <StatsCard
              title="Total Orders"
              value={revenueMetrics.totalOrders}
              icon={ShoppingBag}
              trend="up"
              trendValue="8.2% from last month"
              color="blue"
            />
            <StatsCard
              title="Total Customers"
              value={revenueMetrics.totalCustomers}
              icon={Users}
              trend="up"
              trendValue="5.4% from last month"
              color="primary"
            />
            <StatsCard
              title="Avg. Order Value"
              value={formatPrice(revenueMetrics.averageOrderValue)}
              icon={Package}
              trend="up"
              trendValue="3.1% from last month"
              color="orange"
            />
          </div>

          {/* Recent Orders */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
              <a href="/admin/orders" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All →
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">{order.id}</td>
                      <td className="py-3 px-4 text-sm">{order.customerName}</td>
                      <td className="py-3 px-4 text-sm">{formatDate(order.orderDate)}</td>
                      <td className="py-3 px-4 text-sm font-medium">{formatPrice(order.totalAmount)}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'confirmed' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <h3 className="text-lg font-semibold mb-4">Conversion Rate</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-primary-600">{revenueMetrics.conversionRate}%</span>
                <span className="ml-2 text-sm text-gray-600">of visitors</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Visitors who made a purchase
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-4">Returning Customers</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-green-600">{revenueMetrics.returningCustomerRate}%</span>
                <span className="ml-2 text-sm text-gray-600">return rate</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Customers who made repeat purchases
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
