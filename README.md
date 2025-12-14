# Shiv Tiles - E-commerce Website

A modern, full-featured e-commerce platform for Shiv Tiles, specializing in premium tiles and bathroom fixtures. Built with React, Vite, Tailwind CSS, and featuring a 3D room visualizer and comprehensive admin dashboard with sales analytics.

## 🌟 Features

### Customer-Facing Features
- **Home Page**: Hero section, featured products, categories, and testimonials
- **Product Catalog**: Browse 40+ products with advanced filtering and sorting
  - Filter by category, type, price range, color, size, and finish
  - Search with real-time results
  - Product ratings and reviews
- **Product Details**: Comprehensive product information with specifications
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Wishlist**: Save favorite products for later
- **Checkout**: Multi-step checkout with form validation
  - Shipping information
  - Payment method selection (Razorpay, Stripe, COD)
  - Order summary
- **3D Room Visualizer**: Preview tiles in different room settings (simplified version)
- **Contact/Inquiry**: Form for customer inquiries and bulk orders
- **WhatsApp Integration**: Quick contact for urgent inquiries
- **Responsive Design**: Mobile-friendly navigation and layouts

### Admin Dashboard Features
- **Dashboard Home**: Overview of key metrics
  - Total revenue, orders, customers
  - Average order value
  - Recent orders list
  - Conversion and retention rates
- **Sales Analytics**: Comprehensive visualizations
  - Monthly revenue trends (line chart)
  - Category-wise sales (bar chart and pie chart)
  - Tiles vs Fixtures comparison
  - Top selling products
  - Revenue highs and lows
- **Product Management**: CRUD operations for products
  - View all products
  - Search and filter
  - Edit/Delete products (mock implementation)
- **Order Management**: View and manage customer orders
  - Filter by status
  - Order details
  - Status tracking
- **Inquiry Management**: Handle customer inquiries
  - View all inquiries
  - Filter by status
  - Respond to inquiries
  - Status updates
- **Authentication**: Secure admin login

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - UI library
- **React Router DOM 6.26.1** - Routing and navigation
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 3.4.10** - Utility-first CSS framework

### Data Visualization
- **Recharts 2.12.7** - Charts for analytics dashboard

### 3D Visualization (Ready for Implementation)
- **Three.js 0.168.0** - 3D graphics library
- **@react-three/fiber 8.17.7** - React renderer for Three.js
- **@react-three/drei 9.112.0** - Useful helpers for React Three Fiber

### Form Handling & Validation
- **React Hook Form 7.53.0** - Form management
- **React Toastify 10.0.5** - Toast notifications

### Utilities
- **Axios 1.12.0** - HTTP client (for future API integration)
- **Date-fns 3.6.0** - Date formatting
- **Lucide React 0.439.0** - Icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Tejas-Wale/shiv-tiles.git
cd shiv-tiles
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment file (optional):
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open your browser and navigate to \`http://localhost:5173\`

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build locally
- \`npm run lint\` - Run ESLint

## 👤 Admin Access

The admin dashboard can be accessed at \`/admin/login\`

### Demo Credentials
- **Email**: admin@shivtiles.com
- **Password**: admin123

## 📊 Mock Data

The application comes with comprehensive mock data:

- **40 Products**: Including floor tiles, wall tiles, bathroom tiles, kitchen tiles, basins, faucets, showers, and accessories
- **12 Months Sales Data**: Monthly revenue, orders, and category breakdowns
- **15 Customer Reviews**: Sample reviews with ratings
- **10 Orders**: Sample orders with different statuses
- **6 Inquiries**: Customer inquiry examples

## 🎨 Design & Styling

- **Color Scheme**: Professional blues, grays, and whites
- **Typography**: Modern, clean, and readable
- **Components**: Card-based layouts with consistent spacing
- **Responsive**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions and hover effects

## 🌐 Future Backend Integration

The application is structured for easy backend integration:

1. **API Service**: Centralized API calls in \`src/services/api.js\`
2. **Environment Variables**: Configured in \`.env.example\`
3. **Authentication**: JWT token structure ready
4. **Data Models**: Mock data follows RESTful structure

### API Endpoints (Placeholder)
- \`/api/products\` - Product CRUD operations
- \`/api/orders\` - Order management
- \`/api/inquiries\` - Customer inquiries
- \`/api/analytics\` - Sales data
- \`/api/auth\` - Authentication
- \`/api/payment\` - Payment processing

## 📱 Features to Implement

### 3D Room Visualizer Enhancement
The current visualizer is a simplified 2D version. For full 3D implementation:
- Interactive Three.js scene with room models
- Real-time tile application to surfaces
- Camera controls (rotate, zoom, pan)
- Multiple viewing angles
- Save and share designs

### Payment Integration
- Razorpay SDK integration
- Stripe Elements integration
- Payment verification
- Order confirmation emails

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

### Deploy to Netlify

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Deploy the \`dist\` folder to Netlify

### Environment Variables

When deploying, set these environment variables:
- \`VITE_API_URL\` - Backend API URL
- \`VITE_RAZORPAY_KEY_ID\` - Razorpay public key
- \`VITE_STRIPE_PUBLIC_KEY\` - Stripe public key
- \`VITE_WHATSAPP_NUMBER\` - WhatsApp number for inquiries

## 📞 Contact

For questions or support, please contact:
- Email: info@shivtiles.com
- Phone: +91 9876543210

---

**Built with ❤️ for Shiv Tiles**
