import React, { useState } from 'react';
import { PRICING_TIERS, INGREDIENTS, FAQS, BENEFITS } from '@/constants';
import { Check, ChevronDown, ChevronUp, ShieldCheck, Leaf, Award, Zap, Heart, Shield, Brain, Dumbbell, Moon, Package, Globe } from 'lucide-react';
import ProductButton from '@/components/ProductButton';
import productBottle from '@/assets/product-bottle.png';
import productLabel from '@/assets/product-label.png';
import pricing1Bottle from '@/assets/pricing-1-bottle.png';
import pricing3Bottles from '@/assets/pricing-3-bottles.png';
import pricing4Bottles from '@/assets/pricing-4-bottles.png';
import pricing6Bottles from '@/assets/pricing-6-bottles.png';

const pricingImages: Record<string, string> = {
  single: pricing1Bottle,
  triple: pricing3Bottles,
  six: pricing6Bottles,
};

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap size={28} />,
  heart: <Heart size={28} />,
  shield: <Shield size={28} />,
  brain: <Brain size={28} />,
  dumbbell: <Dumbbell size={28} />,
  moon: <Moon size={28} />,
};

const Index: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="hero" className="relative bg-background pt-10 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1 text-center md:text-left">
            <span className="text-brand-red font-bold tracking-widest text-xs uppercase mb-4 block">Premium Daily Wellness</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              SUPPORT YOUR <br />
              <span className="text-brand-red">DAILY VITALITY</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              A science-inspired blend designed to help men 35+ maintain energy, stamina, and overall performance — naturally and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <ProductButton onClick={scrollToPricing} size="lg">Get Enduraxe Prime</ProductButton>
              <ProductButton onClick={() => document.getElementById('ingredients')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg">Learn More</ProductButton>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse-red"></div>
              <span>30 Capsules per Bottle</span>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] glow-red rounded-full pointer-events-none"></div>
            <div className="relative z-10 w-64 md:w-80 transition-transform hover:scale-105 duration-500">
              <img
                src={productBottle}
                alt="Enduraxe Prime Bottle"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-secondary py-16 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="uppercase tracking-widest text-xs font-bold text-muted-foreground mb-2 block">What It Is</span>
          <h2 className="text-3xl font-bold text-foreground mb-12">DESIGNED FOR THE MODERN MAN</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-sm shadow-sm border-t-4 border-brand-red">
              <h3 className="font-bold text-xl mb-3">MEN 35+</h3>
              <p className="text-muted-foreground text-sm">Formulated for men seeking daily wellness support.</p>
            </div>
            <div className="bg-background p-8 rounded-sm shadow-sm border-t-4 border-foreground">
              <h3 className="font-bold text-xl mb-3">DAILY USE</h3>
              <p className="text-muted-foreground text-sm">Simple once-daily routine for consistent support.</p>
            </div>
            <div className="bg-background p-8 rounded-sm shadow-sm border-t-4 border-foreground">
              <h3 className="font-bold text-xl mb-3">NATURAL BLEND</h3>
              <p className="text-muted-foreground text-sm">Vitamins & botanicals working together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-brand-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2 block">Key Benefits</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-primary-foreground">Feel The Difference</h2>
            <p className="text-primary-foreground/50 mt-4 max-w-2xl mx-auto">Experience comprehensive daily wellness support with our carefully formulated blend of vitamins and botanical extracts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 hover:bg-primary-foreground/10 transition-colors group">
                <div className="mb-4 text-brand-red group-hover:scale-110 transition-transform duration-300">
                  {iconMap[benefit.icon]}
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary-foreground">{benefit.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="bg-secondary rounded-full w-[400px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <img src={productBottle} alt="Ingredients Bottle" className="mx-auto max-w-[280px] drop-shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="bg-brand-red text-primary-foreground text-xs font-bold px-3 py-1 uppercase mb-4 inline-block">Premium Formula</span>
            <h2 className="text-4xl font-bold text-foreground mb-8 leading-tight">SCIENCE-INSPIRED <br /> INGREDIENTS</h2>
            <div className="space-y-6">
              {INGREDIENTS.map((ing, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="min-w-2 h-2 mt-2 rounded-full bg-brand-red"></div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm mb-1">{ing.name}</h4>
                    <p className="text-muted-foreground text-sm">{ing.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">SIMPLE DAILY SUPPORT</h2>
          <p className="text-muted-foreground mb-12">Take one capsule daily with water to support your wellness journey.</p>
          <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10"></div>
            {[
              { num: '01', title: 'DAILY NUTRITION', desc: 'Essential vitamins and minerals provide foundation.' },
              { num: '02', title: 'BOTANICAL SUPPORT', desc: 'Traditional herbs work synergistically.' },
              { num: '03', title: 'CONSISTENT RESULTS', desc: 'Experience ongoing support with daily use.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-secondary px-4">
                <div className="w-24 h-24 bg-background rounded-full border-4 border-border flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="font-black text-3xl text-brand-red">{step.num}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-brand-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-primary-foreground">START YOUR JOURNEY TODAY</h2>
            <p className="text-primary-foreground/50">Select the package that fits your wellness goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto items-end">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-background text-foreground p-2 rounded-sm ${tier.isPopular ? 'order-first md:order-none md:-mt-8 z-10' : ''}`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-primary-foreground text-xs font-bold uppercase py-1 px-4 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                {tier.isBestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-primary-foreground text-xs font-bold uppercase py-1 px-4 rounded-full shadow-lg">
                    Best Value
                  </div>
                )}
                <div className={`border-2 ${tier.isPopular ? 'border-brand-red bg-brand-red-light' : 'border-border'} p-6 md:p-8 text-center h-full flex flex-col`}>
                  <h3 className="font-bold text-lg mb-2">{tier.title || `${tier.bottles} BOTTLE${tier.bottles > 1 ? 'S' : ''}`}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{tier.subtitle || `${tier.bottles * 30} Capsules`}</p>
                  <div className="mb-6 flex justify-center">
                    <img src={pricingImages[tier.id]} alt={`Enduraxe Prime - ${tier.bottles} bottle${tier.bottles > 1 ? 's' : ''}`} className="h-20 object-contain drop-shadow-md" />
                  </div>
                  <div className="mb-6">
                    <div className="flex items-start justify-center text-foreground font-black font-heading">
                      <span className="text-2xl mt-2">$</span>
                      <span className="text-6xl">{tier.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">${tier.perBottle} per bottle</p>
                  </div>
                  {tier.savings && (
                    <div className="bg-brand-red-light text-brand-red font-bold text-sm py-1 px-2 mb-6 inline-block mx-auto rounded">
                      {tier.savings}
                    </div>
                  )}
                  <ul className="space-y-3 mb-8 text-left text-sm text-muted-foreground flex-grow">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span>{tier.shipping}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span>{tier.supplyText}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span>Premium Quality</span>
                    </li>
                  </ul>
                  <ProductButton variant="primary" className="w-full">ORDER NOW</ProductButton>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-16 text-sm font-bold text-primary-foreground/50 uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} /> Secure Checkout
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} /> Quality Assured
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} /> 60-Day Money Back Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-2xl mb-12">SHIPPING INFORMATION</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 border border-border rounded bg-secondary">
              <div className="mx-auto bg-background w-12 h-12 flex items-center justify-center rounded-full shadow-sm mb-4">
                <Package className="w-6 h-6 text-brand-red" />
              </div>
              <h4 className="font-bold mb-2">STANDARD SHIPPING</h4>
              <p className="text-muted-foreground text-sm">We offer reliable shipping methods via our standard delivery carriers.</p>
            </div>
            <div className="text-center p-6 border border-border rounded bg-secondary">
              <div className="mx-auto bg-background w-12 h-12 flex items-center justify-center rounded-full shadow-sm mb-4">
                <Globe className="w-6 h-6 text-brand-red" />
              </div>
              <h4 className="font-bold mb-2">UNITED STATES ONLY</h4>
              <p className="text-muted-foreground text-sm">We currently ship exclusively within the United States.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-brand-red font-bold uppercase text-xs tracking-widest">FAQ</span>
            <h2 className="font-black text-4xl mt-2">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-border last:border-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-foreground text-sm md:text-base uppercase tracking-tight">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-brand-red" size={20} /> : <ChevronDown className="text-muted-foreground" size={20} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-4 block">Safety & Quality</span>
          <h2 className="text-3xl font-bold mb-12 text-foreground">YOUR TRUST, OUR PRIORITY</h2>
          <div className="flex justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center">
                <ShieldCheck size={32} className="text-brand-red" />
              </div>
              <span className="font-bold text-sm">Quality Tested</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-2 border-foreground rounded-full flex items-center justify-center">
                <Leaf size={32} className="text-brand-red" />
              </div>
              <span className="font-bold text-sm">Natural Formula</span>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-16 p-6 border border-border bg-background rounded shadow-sm text-left">
            <h4 className="font-bold text-center mb-4">IMPORTANT NOTICE</h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              <strong>Suggested Use:</strong> Take one (1) capsule daily with water. <br /><br />
              <strong>Warning:</strong> Do not exceed recommended dose. Pregnant or nursing mothers, children under 18, and individuals with a known medical condition should consult a physician before using this or any dietary supplement. Keep out of reach of children. Store in a cool, dry place.
              <br /><br />
              *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>

      {/* Money Back */}
      <section className="bg-brand-black py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-black text-4xl md:text-5xl mb-4 text-primary-foreground">60-DAY MONEY-BACK GUARANTEE</h2>
          <p className="text-xl text-primary-foreground/50 mb-8">Money-back guarantee, no questions asked.</p>
          <p className="text-brand-red font-bold text-lg">Try Enduraxe Prime risk-free for <span className="underline">60 days</span>.</p>
        </div>
      </section>

      {/* Label Section */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-black text-4xl mb-2 text-foreground">PRODUCT LABEL</h2>
          <p className="text-muted-foreground mb-12">Full transparency. See exactly what goes into every bottle.</p>
          <div className="max-w-4xl mx-auto">
            <img src={productLabel} alt="Enduraxe Prime Product Label" className="w-full rounded shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
