import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import useCartStore from '../store/cartStore';

export default function Checkout() {
  const { items } = useCartStore();
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePaymentSuccess = () => {
    // In a real application, you would process the order here
    alert('Payment successful! Thank you for your order.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600">
                      Quantity: {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    Rs.{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>Rs.{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
            <PaymentForm total={total} onSubmit={handlePaymentSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}