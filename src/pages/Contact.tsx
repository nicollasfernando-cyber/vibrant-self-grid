import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-red hover:underline text-sm font-medium mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-4xl font-black text-foreground mb-8">CONTACT US</h1>
      <div className="text-muted-foreground space-y-8 text-sm leading-relaxed">
        <p>If you have any questions, concerns, or need assistance, you can reach us through the contact information below:</p>

        <div className="bg-secondary border border-border rounded p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Phone</h3>
              <a href="tel:+18443841020" className="text-brand-red hover:underline">(844) 384-1020</a>
              <p className="text-muted-foreground text-xs mt-1">Available every day</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shrink-0">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Email</h3>
              <a href="mailto:support@shippingcaps.com" className="text-brand-red hover:underline">support@shippingcaps.com</a>
              <p className="text-muted-foreground text-xs mt-1">Available Monday through Friday</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/60">Please include your order number (if applicable) when contacting us for faster assistance.</p>
      </div>
    </div>
  </div>
);

export default Contact;
