import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-red hover:underline text-sm font-medium mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-4xl font-black text-foreground mb-8">PRIVACY POLICY</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-lg font-bold text-foreground mt-8">1. Information We Collect</h2>
        <p>We collect personal information you provide when placing an order, including your name, email address, shipping address, and payment information. We also collect usage data such as IP address, browser type, and pages visited.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">2. How We Use Your Information</h2>
        <p>We use your information to process orders, communicate with you about your purchases, improve our website and products, and send promotional communications (with your consent).</p>

        <h2 className="text-lg font-bold text-foreground mt-8">3. Information Sharing</h2>
        <p>We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">5. Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided on our Contact Us page.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">7. Changes to This Policy</h2>
        <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
