import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  Users,
  Shield,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: 'Free',
    period: '',
    icon: Zap,
    color: 'text-success',
    gradient: 'from-success to-success/60',
    popular: false,
    features: [
      '3 active workflows',
      '1,000 executions/month',
      'Basic AI models (GPT-3.5, Claude Instant)',
      'Email support',
      'Community access',
      'Basic templates',
      '1 team member'
    ],
    limitations: [
      'Limited to 5 nodes per workflow',
      '24-hour execution history',
      'Basic integrations only'
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline' as const
  },
  {
    name: 'Professional',
    description: 'For growing teams and complex workflows',
    price: '$29',
    period: '/month',
    icon: Star,
    color: 'text-primary',
    gradient: 'from-primary to-secondary',
    popular: true,
    features: [
      '25 active workflows',
      '50,000 executions/month',
      'All AI models (GPT-4, Claude 3, Gemini Pro)',
      'Priority email support',
      'Advanced templates',
      'Custom connectors',
      '5 team members',
      'Workflow scheduling',
      'Advanced debugging',
      '30-day execution history'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    ctaVariant: 'default' as const
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    price: '$99',
    period: '/month',
    icon: Crown,
    color: 'text-accent',
    gradient: 'from-accent to-warning',
    popular: false,
    features: [
      'Unlimited workflows',
      '500,000 executions/month',
      'All AI models + custom models',
      '24/7 phone & chat support',
      'White-label options',
      'Custom integrations',
      'Unlimited team members',
      'Advanced security (SSO, SAML)',
      'Dedicated account manager',
      'Custom SLAs',
      'On-premise deployment',
      'Advanced analytics'
    ],
    limitations: [],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const
  }
];

const features = [
  {
    category: 'Workflow Automation',
    items: [
      { name: 'Visual workflow builder', starter: true, pro: true, enterprise: true },
      { name: 'Pre-built templates', starter: 'Basic', pro: 'Advanced', enterprise: 'Premium + Custom' },
      { name: 'Workflow scheduling', starter: false, pro: true, enterprise: true },
      { name: 'Error handling & retries', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
      { name: 'Workflow versioning', starter: false, pro: true, enterprise: true },
      { name: 'A/B testing', starter: false, pro: false, enterprise: true }
    ]
  },
  {
    category: 'AI Models',
    items: [
      { name: 'GPT-3.5 Turbo', starter: true, pro: true, enterprise: true },
      { name: 'GPT-4 & GPT-4 Turbo', starter: false, pro: true, enterprise: true },
      { name: 'Claude 3 (Haiku, Sonnet, Opus)', starter: 'Haiku only', pro: true, enterprise: true },
      { name: 'Gemini Pro & Ultra', starter: false, pro: 'Pro only', enterprise: true },
      { name: 'Custom model integration', starter: false, pro: false, enterprise: true },
      { name: 'Fine-tuned models', starter: false, pro: false, enterprise: true }
    ]
  },
  {
    category: 'Integrations',
    items: [
      { name: 'Basic connectors (50+)', starter: true, pro: true, enterprise: true },
      { name: 'Premium connectors (200+)', starter: false, pro: true, enterprise: true },
      { name: 'Custom API connectors', starter: false, pro: true, enterprise: true },
      { name: 'Enterprise connectors', starter: false, pro: false, enterprise: true },
      { name: 'Webhook endpoints', starter: '1', pro: '10', enterprise: 'Unlimited' },
      { name: 'Real-time data sync', starter: false, pro: true, enterprise: true }
    ]
  },
  {
    category: 'Team & Security',
    items: [
      { name: 'Team members', starter: '1', pro: '5', enterprise: 'Unlimited' },
      { name: 'Role-based permissions', starter: false, pro: true, enterprise: true },
      { name: 'SSO/SAML integration', starter: false, pro: false, enterprise: true },
      { name: 'Audit logs', starter: false, pro: 'Basic', enterprise: 'Advanced' },
      { name: 'SOC2 compliance', starter: false, pro: false, enterprise: true },
      { name: 'Custom security policies', starter: false, pro: false, enterprise: true }
    ]
  }
];

const getValue = (value: any) => {
  if (typeof value === 'boolean') return value;
  return value;
};

const renderFeatureValue = (value: any) => {
  if (value === true) return <Check className="w-4 h-4 text-success" />;
  if (value === false) return <span className="text-muted-foreground">-</span>;
  return <span className="text-sm text-foreground">{value}</span>;
};

export default function Pricing() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-gradient-secondary text-secondary-foreground border-none">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-cyber">
            Choose Your Plan
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core workflow automation features with varying limits and advanced capabilities.
          </p>

          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-success" />
              14-day free trial on all paid plans
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-success" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-success" />
              No setup fees
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-primary text-primary-foreground border-none px-6 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 ${
                plan.popular ? 'glow-primary border-primary/30' : ''
              }`}>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  
                  <Link to={plan.cta === 'Contact Sales' ? '/about' : '/dashboard'}>
                    <Button 
                      variant={plan.ctaVariant}
                      className={`w-full ${plan.ctaVariant === 'default' ? 'bg-gradient-primary hover:opacity-90 glow-primary' : ''}`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 mt-6 border-t border-border/50">
                      <h4 className="font-semibold text-foreground mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start">
                            <span className="w-4 h-4 text-muted-foreground mr-3 mt-0.5 flex-shrink-0">•</span>
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-4">
              Feature Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare all features across our plans to find the perfect fit for your automation needs.
            </p>
          </div>

          <Card className="glass-effect border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-6 font-semibold text-foreground">Features</th>
                    <th className="text-center p-6 font-semibold text-foreground">Starter</th>
                    <th className="text-center p-6 font-semibold text-foreground bg-primary/5">Professional</th>
                    <th className="text-center p-6 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-muted/20">
                        <td colSpan={4} className="p-4 font-semibold text-foreground">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b border-border/30 hover:bg-muted/20 transition-colors duration-200">
                          <td className="p-4 text-foreground">{item.name}</td>
                          <td className="p-4 text-center">{renderFeatureValue(item.starter)}</td>
                          <td className="p-4 text-center bg-primary/5">{renderFeatureValue(item.pro)}</td>
                          <td className="p-4 text-center">{renderFeatureValue(item.enterprise)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 glass-effect border-border/50 glow-primary max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient-cyber mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan and get started with AI workflow automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                  <Headphones className="w-4 h-4 mr-2" />
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-primary/50 hover:border-primary">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-success" />
                Enterprise-grade security
              </div>
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-success" />
                99.9% uptime SLA
              </div>
              <div className="flex items-center">
                <Headphones className="w-4 h-4 mr-2 text-success" />
                24/7 support
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}