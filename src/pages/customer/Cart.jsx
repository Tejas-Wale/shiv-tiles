import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import CartItem from '../../components/customer/CartItem';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Start adding some products!</p>
          <Link to="/products">
            <Button size="lg">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <Button variant="outline" onClick={clearCart} className="mt-4">
              Clear Cart
            </Button>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (18% GST)</span>
                  <span>{formatPrice(getCartTotal() * 0.18)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">
                      {formatPrice(getCartTotal() * 1.18)}
                    </span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/products">
                <Button variant="outline" fullWidth className="mt-3">
                  Continue Shopping
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Free shipping on all orders
                </p>
                <p className="text-sm text-green-800">
                  ✓ Secure payment options
                </p>
                <p className="text-sm text-green-800">
                  ✓ 30-day return policy
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
