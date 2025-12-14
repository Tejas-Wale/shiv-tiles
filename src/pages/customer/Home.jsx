import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Truck, CreditCard, HeadphonesIcon } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/customer/ProductCard';
import Button from '../../components/common/Button';

const Home = () => {
  const { getFeaturedProducts } = useContext(ProductContext);
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Space with Premium Tiles
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Discover our extensive collection of high-quality tiles and bathroom fixtures for your dream home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" variant="secondary">
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/visualizer">
                <Button size="lg" variant="outline" className="bg-white text-primary-600 border-white hover:bg-primary-50">
                  Try 3D Visualizer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Only the best materials for lasting beauty
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick and reliable shipping across India
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Safe and secure online transactions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Professional guidance and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products?category=tiles&type=floor-tiles" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-center group-hover:text-primary-600 transition-colors">
                    Floor Tiles
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=tiles&type=wall-tiles" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-center group-hover:text-primary-600 transition-colors">
                    Wall Tiles
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=tiles&type=bathroom-tiles" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-4xl">🛁</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-center group-hover:text-primary-600 transition-colors">
                    Bathroom Tiles
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/products?category=fixtures" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-4xl">🚰</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-center group-hover:text-primary-600 transition-colors">
                    Bathroom Fixtures
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                text: 'Excellent quality tiles! Transformed our home beautifully. The team was very helpful throughout.',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                text: 'Great collection and amazing service. The 3D visualizer helped us make the right choice!',
                rating: 5,
              },
              {
                name: 'Amit Patel',
                text: 'Top-notch products and delivery was on time. Highly recommend Shiv Tiles for your renovation needs.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get in touch with us for bulk orders and custom solutions
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
