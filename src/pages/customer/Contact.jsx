import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/helpers';
import { WHATSAPP_NUMBER } from '../../utils/constants';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { toast } from 'react-toastify';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Inquiry submitted:', data);
    toast.success('Thank you! We will get back to you soon.');
    reset();
  };

  const handleWhatsApp = () => {
    window.open(getWhatsAppLink(WHATSAPP_NUMBER, 'Hi, I would like to inquire about your products.'), '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="text-center" hover>
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+91 9876543210</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10AM-7PM</p>
          </Card>

          <Card className="text-center" hover>
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">info@shivtiles.com</p>
            <p className="text-sm text-gray-500 mt-1">We'll reply within 24 hours</p>
          </Card>

          <Card className="text-center" hover>
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Visit Showroom</h3>
            <p className="text-gray-600 text-sm">123 Tile Street, Bangalore</p>
            <p className="text-gray-600 text-sm">Karnataka 560001, India</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" fullWidth size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Map and WhatsApp */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
              <Button
                onClick={handleWhatsApp}
                fullWidth
                size="lg"
                variant="secondary"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Chat on WhatsApp
              </Button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Get instant response on WhatsApp for bulk orders and urgent inquiries
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map Placeholder</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
