import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Brain, Users, Shield, Star } from 'lucide-react';

export default function StartFreeTrial() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const features = [
    'Access to all AI models',
    '1000 workflow executions/month',
    'Pre-built templates',
    'Community support',
    'Real-time monitoring',
    'API integrations'
  ];

  const benefits = [
    { icon: Zap, title: 'Instant Setup', description: 'Get started in under 2 minutes' },
    { icon: Brain, title: 'AI-Powered', description: 'Connect to GPT-4, Claude, and more' },
    { icon: Users, title: 'Team Collaboration', description: 'Share workflows with your team' },
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant infrastructure' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Star className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the power of AI automation with our 14-day free trial. No credit card required.
            </p>
            <Badge className="bg-gradient-primary text-primary-foreground text-lg px-4 py-2">
              $0 for 14 days, then $29/month
            </Badge>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 glass-effect border-border/50">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Create Your Account
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  
                  <Button className="w-full h-12 bg-gradient-primary hover:opacity-90 glow-primary">
                    Start Free Trial
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    By signing up, you agree to our{' '}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Features & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* What's Included */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Included in Your Trial
                </h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why Choose NeuroFlow
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}