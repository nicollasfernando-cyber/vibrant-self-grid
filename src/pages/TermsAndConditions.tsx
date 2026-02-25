import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-red hover:underline text-sm font-medium mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-4xl font-black text-foreground mb-8">TERMS & CONDITIONS</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-lg font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">2. Products</h2>
        <p>Enduraxe Prime is a dietary supplement. Results may vary from person to person. Our products are not intended to diagnose, treat, cure, or prevent any disease.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">3. Orders & Payment</h2>
        <p>All orders are subject to availability. We reserve the right to refuse or cancel any order. Prices are subject to change without notice. Payment must be received before order processing.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">4. Shipping & Delivery</h2>
        <p>We currently ship within the United States only. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">5. Refund Policy</h2>
        <p>We offer a 60-day money-back guarantee. If you are not satisfied, contact us within 60 days of purchase for a full refund. Return shipping costs are the responsibility of the customer.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Enduraxe Prime shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">7. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of the United States.</p>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
