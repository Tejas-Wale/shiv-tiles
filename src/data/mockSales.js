// Mock sales data for 12 months with seasonal variations

export const mockSalesData = [
  {
    month: 'Jan 2024',
    revenue: 285000,
    orders: 45,
    tiles: 165000,
    fixtures: 120000,
  },
  {
    month: 'Feb 2024',
    revenue: 310000,
    orders: 52,
    tiles: 180000,
    fixtures: 130000,
  },
  {
    month: 'Mar 2024',
    revenue: 425000,
    orders: 68,
    tiles: 245000,
    fixtures: 180000,
  },
  {
    month: 'Apr 2024',
    revenue: 480000,
    orders: 75,
    tiles: 280000,
    fixtures: 200000,
  },
  {
    month: 'May 2024',
    revenue: 520000,
    orders: 82,
    tiles: 305000,
    fixtures: 215000,
  },
  {
    month: 'Jun 2024',
    revenue: 390000,
    orders: 61,
    tiles: 225000,
    fixtures: 165000,
  },
  {
    month: 'Jul 2024',
    revenue: 340000,
    orders: 55,
    tiles: 195000,
    fixtures: 145000,
  },
  {
    month: 'Aug 2024',
    revenue: 465000,
    orders: 72,
    tiles: 270000,
    fixtures: 195000,
  },
  {
    month: 'Sep 2024',
    revenue: 510000,
    orders: 79,
    tiles: 295000,
    fixtures: 215000,
  },
  {
    month: 'Oct 2024',
    revenue: 585000,
    orders: 91,
    tiles: 340000,
    fixtures: 245000,
  },
  {
    month: 'Nov 2024',
    revenue: 625000,
    orders: 98,
    tiles: 365000,
    fixtures: 260000,
  },
  {
    month: 'Dec 2024',
    revenue: 450000,
    orders: 70,
    tiles: 260000,
    fixtures: 190000,
  },
];

// Category-wise sales breakdown
export const categorySalesData = [
  {
    name: 'Floor Tiles',
    value: 1250000,
    percentage: 28,
  },
  {
    name: 'Wall Tiles',
    value: 850000,
    percentage: 19,
  },
  {
    name: 'Bathroom Tiles',
    value: 950000,
    percentage: 21,
  },
  {
    name: 'Kitchen Tiles',
    value: 680000,
    percentage: 15,
  },
  {
    name: 'Basins',
    value: 320000,
    percentage: 7,
  },
  {
    name: 'Faucets',
    value: 280000,
    percentage: 6,
  },
  {
    name: 'Shower Systems',
    value: 120000,
    percentage: 3,
  },
  {
    name: 'Accessories',
    value: 45000,
    percentage: 1,
  },
];

// Daily sales for the last 30 days (for more detailed analytics)
export const dailySalesData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 11, i + 1).toISOString().split('T')[0],
  revenue: Math.floor(Math.random() * 30000) + 10000,
  orders: Math.floor(Math.random() * 10) + 2,
}));

// Top selling products
export const topSellingProducts = [
  { id: 4, name: 'Glossy White Subway Tiles', unitsSold: 320, revenue: 144000 },
  { id: 1, name: 'Premium Marble Floor Tiles', unitsSold: 180, revenue: 216000 },
  { id: 10, name: 'Italian Marble Vitrified Tiles', unitsSold: 150, revenue: 217500 },
  { id: 17, name: 'Rain Shower System', unitsSold: 95, revenue: 807500 },
  { id: 14, name: 'Chrome Basin Faucet', unitsSold: 140, revenue: 350000 },
];

// Revenue metrics
export const revenueMetrics = {
  totalRevenue: 5385000,
  averageOrderValue: 58533,
  totalOrders: 848,
  totalCustomers: 456,
  conversionRate: 3.2,
  returningCustomerRate: 28,
};
