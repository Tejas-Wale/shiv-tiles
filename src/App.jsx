import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// Customer Pages
import Home from './pages/customer/Home'
import Products from './pages/customer/Products'
import ProductDetail from './pages/customer/ProductDetail'
import Cart from './pages/customer/Cart'
import Checkout from './pages/customer/Checkout'
import Contact from './pages/customer/Contact'
import About from './pages/customer/About'
import Visualizer from './pages/customer/Visualizer'

// Admin Pages
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import Analytics from './pages/admin/Analytics'
import ProductManagement from './pages/admin/ProductManagement'
import OrderManagement from './pages/admin/OrderManagement'
import InquiryManagement from './pages/admin/InquiryManagement'

// Protected Route Component
import ProtectedRoute from './components/admin/ProtectedRoute'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}
      <main className={`flex-grow ${!isAdminRoute ? '' : 'bg-gray-100'}`}>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/visualizer" element={<Visualizer />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <ProductManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute>
                <OrderManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/inquiries"
            element={
              <ProtectedRoute>
                <InquiryManagement />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  )
}

// 404 Not Found Component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-8 text-center">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
    >
      Go Back Home
    </a>
  </div>
)

export default App
