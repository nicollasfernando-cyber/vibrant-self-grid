import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const Contact: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-red hover:underline text-sm font-medium mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-4xl font-black text-foreground mb-8">CONTACT US</h1>
      <div className="text-muted-foreground space-y-8 text-sm leading-relaxed">
        <p>Have a question, concern, or need help with your order? We're here for you.</p>

        <div className="bg-secondary border border-border rounded p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Email Support</h3>
              <a href="mailto:support@enduraxeprime.com" className="text-brand-red hover:underline">support@enduraxeprime.com</a>
            </div>
          </div>
          <p className="text-muted-foreground">We aim to respond to all inquiries within 24-48 business hours.</p>
        </div>

        <div className="bg-secondary border border-border rounded p-8">
          <h3 className="font-bold text-foreground mb-3">Common Inquiries</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Order status and tracking</li>
            <li>Returns and refunds</li>
            <li>Product questions</li>
            <li>Shipping information</li>
            <li>Account issues</li>
          </ul>
        </div>

        <p className="text-xs text-muted-foreground/60">Please include your order number (if applicable) when contacting us for faster assistance.</p>
      </div>
    </div>
  </div>
);

export default Contact;
