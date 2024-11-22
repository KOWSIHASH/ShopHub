import React from 'react';
import { Shield, Truck, RefreshCw, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Your security is our top priority. Shop with confidence using our secure payment system.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly and efficiently to your doorstep.'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: 'Not satisfied? Return your products within 30 days for a full refund.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is always here to help you with any questions.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About ShopHub</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're dedicated to providing the best shopping experience with premium products
            and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At ShopHub, we believe in making quality products accessible to everyone.
              Our mission is to create a seamless shopping experience that brings joy
              and satisfaction to our customers.
            </p>
            <p className="text-gray-600">
              We carefully curate our product selection to ensure that we offer only
              the best items from trusted brands and manufacturers. Our team is
              passionate about providing exceptional service and support throughout
              your shopping journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}