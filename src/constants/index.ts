export const PRICING_TIERS = [
  {
    id: 'single',
    bottles: 1,
    title: 'BUY 2 GET 1 FREE',
    subtitle: '3 Bottle • 90 Capsules',
    price: 154,
    perBottle: 77,
    shipping: 'Standard Shipping',
    supplyText: '3-month supply',
    savings: null,
    isPopular: false,
    isBestValue: false,
  },
  {
    id: 'triple',
    bottles: 3,
    title: 'BUY 3 GET 2 FREE',
    subtitle: '5 Bottle • 150 Capsules',
    price: 201,
    perBottle: 67,
    shipping: 'Free Shipping',
    supplyText: '5-month supply',
    savings: 'SAVE $30',
    isPopular: true,
    isBestValue: false,
  },
  {
    id: 'six',
    bottles: 6,
    title: 'BUY 6 GET 2 FREE',
    subtitle: '8 Bottle • 240 Capsules',
    price: 282,
    perBottle: 47,
    shipping: 'Free Shipping',
    supplyText: '8-month supply',
    savings: 'SAVE $120',
    isPopular: false,
    isBestValue: true,
  },
];

export const INGREDIENTS = [
  { name: 'Vitamin D3', description: 'Essential for overall health, immune function, and daily energy balance.' },
  { name: 'Niacin (Vitamin B3)', description: 'Known for its potential to support healthy hormone levels and overall male wellness.' },
  { name: 'Zinc (15mg)', description: 'An essential mineral that plays a key role in immune function and cellular metabolism.' },
  { name: 'Vitamin D3 (2000 IU)', description: 'Supports bone health, immune function, and overall well-being, especially when sun exposure is limited.' },
  { name: 'Ashwagandha (250mg)', description: 'An adaptogenic herb traditionally used to help manage stress and support stamina.' },
  { name: 'Maca Root (200mg)', description: 'A Peruvian superfood associated with energy, endurance, and nutritional support.' },
];

export const BENEFITS = [
  { icon: 'zap', title: 'Daily Energy', description: 'Support your natural energy levels throughout the day with essential vitamins and adaptogens.' },
  { icon: 'heart', title: 'Vitality Support', description: 'A blend designed to help maintain overall male vitality and well-being.' },
  { icon: 'shield', title: 'Immune Support', description: 'Zinc and Vitamin D3 contribute to normal immune system function.' },
  { icon: 'brain', title: 'Mental Clarity', description: 'Ashwagandha and other adaptogens may help support focus and cognitive function.' },
  { icon: 'dumbbell', title: 'Physical Stamina', description: 'Maca Root and Fenugreek have been traditionally used to support endurance.' },
  { icon: 'moon', title: 'Recovery & Rest', description: 'Support your body\'s natural recovery processes for better daily performance.' },
];

export const FAQS = [
  { question: 'How should I take Enduraxe Prime?', answer: 'Take one capsule daily with water, preferably with a meal. Consistency is key — we recommend taking it at the same time each day for best results.' },
  { question: 'Are there any side effects?', answer: 'Enduraxe Prime is made with natural ingredients. However, as with any supplement, we recommend consulting your healthcare provider before starting, especially if you have existing conditions or take medication.' },
  { question: 'How long until I notice results?', answer: 'Individual results vary. Many users report noticing changes within the first few weeks of consistent daily use. We recommend at least 60 days for a full evaluation.' },
  { question: 'Is there a money-back guarantee?', answer: 'Yes! We offer a 60-day money-back guarantee. If you\'re not satisfied, contact us for a full refund — no questions asked.' },
  { question: 'Is Enduraxe Prime FDA approved?', answer: 'Dietary supplements are not approved by the FDA. However, Enduraxe Prime is manufactured in a facility that follows Good Manufacturing Practices (GMP).' },
];

export const getIcon = (name: string) => {
  // Icons are rendered in the component directly
  return name;
};
