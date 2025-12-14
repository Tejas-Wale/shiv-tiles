// Application constants

export const PRODUCT_CATEGORIES = {
  TILES: 'tiles',
  FIXTURES: 'fixtures',
};

export const TILE_TYPES = {
  FLOOR: 'floor-tiles',
  WALL: 'wall-tiles',
  BATHROOM: 'bathroom-tiles',
  KITCHEN: 'kitchen-tiles',
};

export const FIXTURE_TYPES = {
  BASINS: 'basins',
  FAUCETS: 'faucets',
  SHOWERS: 'shower-systems',
  ACCESSORIES: 'accessories',
};

export const TILE_SIZES = ['600x600mm', '800x800mm', '1200x600mm', '300x600mm'];

export const TILE_FINISHES = ['Glossy', 'Matte', 'Rustic', 'Polished'];

export const BASIN_TYPES = ['Counter-top', 'Wall-mounted', 'Pedestal', 'Under-mount'];

export const PRICE_RANGES = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
  { label: '₹2000 - ₹5000', min: 2000, max: 5000 },
  { label: 'Above ₹5000', min: 5000, max: 999999 },
];

export const SORT_OPTIONS = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'newest', label: 'Newest First' },
];

export const PAYMENT_METHODS = {
  RAZORPAY: 'razorpay',
  STRIPE: 'stripe',
  COD: 'cash-on-delivery',
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const INQUIRY_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUOTED: 'quoted',
  CLOSED: 'closed',
};

export const ROOM_TEMPLATES = {
  BATHROOM: 'bathroom',
  KITCHEN: 'kitchen',
  LIVING_ROOM: 'living-room',
};

// Admin credentials for demo purposes only
// In production, these should be stored securely and validated against a backend
export const ADMIN_CREDENTIALS = {
  email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@shivtiles.com',
  password: import.meta.env.VITE_ADMIN_PASSWORD || 'admin123',
};

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '+919876543210';

export const COLORS = [
  'White', 'Beige', 'Gray', 'Black', 'Brown', 
  'Blue', 'Green', 'Red', 'Yellow', 'Multi-color'
];
