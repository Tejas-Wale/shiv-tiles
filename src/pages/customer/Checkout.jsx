import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CreditCard } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import { PAYMENT_METHODS } from '../../utils/constants';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { toast } from 'react-toastify';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.RAZORPAY);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const order = {
      ...data,
      paymentMethod,
      items: cart,
      total: getCartTotal() * 1.18,
      orderDate: new Date().toISOString(),
    };
    
    console.log('Order placed:', order);
    
    clearCart();
    setLoading(false);
    toast.success('Order placed successfully!');
    navigate('/');
  };

  const total = getCartTotal();
  const tax = total * 0.18;
  const grandTotal = total + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping & Payment Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card>
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Invalid phone number',
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
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
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      {...register('address', { required: 'Address is required' })}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      {...register('state', { required: 'State is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PIN Code *
                    </label>
                    <input
                      {...register('pincode', {
                        required: 'PIN code is required',
                        pattern: {
                          value: /^\d{6}$/,
                          message: 'Invalid PIN code',
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                    {errors.pincode && (
                      <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <Card>
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500">
                    <input
                      type="radio"
                      value={PAYMENT_METHODS.RAZORPAY}
                      checked={paymentMethod === PAYMENT_METHODS.RAZORPAY}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="font-medium">Razorpay (Cards, UPI, Net Banking)</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500">
                    <input
                      type="radio"
                      value={PAYMENT_METHODS.STRIPE}
                      checked={paymentMethod === PAYMENT_METHODS.STRIPE}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="font-medium">Stripe (International Cards)</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500">
                    <input
                      type="radio"
                      value={PAYMENT_METHODS.COD}
                      checked={paymentMethod === PAYMENT_METHODS.COD}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                  
                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax (18% GST)</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary-600">
                          {formatPrice(grandTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" fullWidth size="lg" loading={loading}>
                  Place Order
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
