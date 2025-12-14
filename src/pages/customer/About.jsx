import { Users, Award, Truck, ThumbsUp } from 'lucide-react';
import Card from '../../components/common/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Shiv Tiles</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner in transforming spaces with premium tiles and bathroom fixtures since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Founded in 2010, Shiv Tiles has been at the forefront of providing premium quality tiles and bathroom fixtures to homes and businesses across India. What started as a small showroom in Bangalore has now grown into one of the most trusted names in the industry.
              </p>
              <p>
                Our mission is simple: to help you transform your spaces with the finest tiles and fixtures available in the market. We believe that every space deserves to be beautiful, functional, and built to last.
              </p>
              <p>
                With over a decade of experience, we've helped thousands of customers find the perfect products for their projects, from small bathroom renovations to large commercial developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">Brands</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">14+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center" hover>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Only the finest materials from trusted manufacturers worldwide
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Professional advice from our experienced team
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick and reliable shipping across India
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Committed to ensuring complete customer satisfaction
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <h3 className="font-semibold text-lg mb-3 text-primary-600">Quality First</h3>
              <p className="text-gray-700 text-sm">
                We never compromise on quality. Every product we sell meets the highest standards of excellence.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg mb-3 text-primary-600">Customer Focus</h3>
              <p className="text-gray-700 text-sm">
                Your satisfaction is our priority. We go the extra mile to ensure you find exactly what you need.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg mb-3 text-primary-600">Innovation</h3>
              <p className="text-gray-700 text-sm">
                We embrace new technologies and trends to provide you with the latest and best products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Showroom</h2>
          <Card className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Experience our products in person at our state-of-the-art showroom in Bangalore
            </p>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Shiv Tiles Showroom</p>
              <p>123 Tile Street, Bangalore, Karnataka 560001</p>
              <p>Phone: +91 9876543210</p>
              <p>Email: info@shivtiles.com</p>
              <p className="mt-4 font-semibold">Opening Hours:</p>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
