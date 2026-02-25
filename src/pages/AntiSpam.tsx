import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AntiSpam: React.FC = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-red hover:underline text-sm font-medium mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="text-4xl font-black text-foreground mb-8">ANTI-SPAM POLICY</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-lg font-bold text-foreground mt-8">Our Commitment</h2>
        <p>Enduraxe Prime is committed to responsible email marketing practices. We do not send unsolicited commercial emails (spam) and fully comply with the CAN-SPAM Act.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">Consent</h2>
        <p>We only send marketing emails to individuals who have explicitly opted in to receive communications from us. Your email address will never be shared with or sold to third parties for marketing purposes.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">Unsubscribe</h2>
        <p>Every marketing email we send includes a clear and easy-to-use unsubscribe link. Upon receiving your unsubscribe request, we will remove your email address from our marketing list within 10 business days.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">Transactional Emails</h2>
        <p>Please note that order confirmations, shipping notifications, and other transactional emails related to your purchases are not considered marketing communications and will still be sent as needed.</p>

        <h2 className="text-lg font-bold text-foreground mt-8">Report Abuse</h2>
        <p>If you believe you have received an unsolicited email from us, please contact us immediately so we can investigate and resolve the issue.</p>
      </div>
    </div>
  </div>
);

export default AntiSpam;
