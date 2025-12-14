import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Card from '../../components/common/Card';
import { mockSalesData, categorySalesData, topSellingProducts } from '../../data/mockSales';
import { formatPrice } from '../../utils/helpers';

const Analytics = () => {
  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6'];

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gray-100 min-h-screen">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sales Analytics</h1>

          {/* Monthly Revenue Trend */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-6">Monthly Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={mockSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatPrice(value)} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Orders"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Category-wise Sales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <h2 className="text-xl font-bold mb-6">Category-wise Sales</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={categorySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => formatPrice(value)} />
                  <Bar dataKey="value" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-6">Sales Distribution</h2>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={categorySalesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categorySalesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatPrice(value)} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Tiles vs Fixtures Comparison */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold mb-6">Tiles vs Fixtures Monthly Comparison</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={mockSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatPrice(value)} />
                <Legend />
                <Bar dataKey="tiles" fill="#0ea5e9" name="Tiles" />
                <Bar dataKey="fixtures" fill="#10b981" name="Fixtures" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Top Selling Products */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Top Selling Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rank</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product Name</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Units Sold</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {topSellingProducts.map((product, index) => (
                    <tr key={product.id} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm">
                          {index + 1}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">{product.name}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium">{product.unitsSold}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium">{formatPrice(product.revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Highest Monthly Revenue</h3>
              <p className="text-2xl font-bold text-green-600">
                {formatPrice(Math.max(...mockSalesData.map(d => d.revenue)))}
              </p>
              <p className="text-sm text-gray-600 mt-1">November 2024</p>
            </Card>
            
            <Card>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Lowest Monthly Revenue</h3>
              <p className="text-2xl font-bold text-red-600">
                {formatPrice(Math.min(...mockSalesData.map(d => d.revenue)))}
              </p>
              <p className="text-sm text-gray-600 mt-1">January 2024</p>
            </Card>
            
            <Card>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Average Monthly Revenue</h3>
              <p className="text-2xl font-bold text-primary-600">
                {formatPrice(mockSalesData.reduce((sum, d) => sum + d.revenue, 0) / mockSalesData.length)}
              </p>
              <p className="text-sm text-gray-600 mt-1">2024 Average</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
