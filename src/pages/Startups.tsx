import { motion } from 'framer-motion';
import { Zap, Rocket, DollarSign, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Startups() {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Setup',
      description: 'Get your AI workflows running in minutes, not weeks. Perfect for fast-moving startups.'
    },
    {
      icon: DollarSign,
      title: 'Startup Pricing',
      description: 'Special pricing for early-stage companies with flexible scaling as you grow.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a thriving community of startup founders leveraging AI automation.'
    },
    {
      icon: Rocket,
      title: 'Scale Ready',
      description: 'Built to scale from MVP to millions of users without breaking a sweat.'
    }
  ];

  const benefits = [
    'Free tier with generous limits',
    '50% discount for YC companies',
    'Dedicated startup success manager',
    'Free migration from competitors',
    'Startup community access',
    'Technical mentorship program'
  ];

  const testimonials = [
    {
      quote: "NeuroFlow helped us automate our customer onboarding, saving 10 hours per week.",
      author: "Sarah Chen",
      company: "TechStart",
      role: "Co-Founder"
    },
    {
      quote: "We scaled from 100 to 10,000 users without adding a single ops person thanks to NeuroFlow.",
      author: "Marcus Johnson",
      company: "GrowthLab", 
      role: "CTO"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-primary text-primary-foreground">
              <Star className="w-4 h-4 mr-1" />
              Startup Program
            </Badge>
            <h1 className="text-display text-gradient-primary mb-6">
              AI Automation for Startups
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Move fast and automate everything. Join hundreds of startups using NeuroFlow 
              to scale operations without scaling headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary glow-primary">
                Apply for Startup Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Built for Speed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything a startup needs to implement AI automation quickly and efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-hero text-gradient-primary mb-6">
                Startup Benefits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Special perks designed specifically for early-stage companies.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-6 glass-effect rounded-xl"
                >
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-hero text-gradient-cyber mb-6">
              Ready to Scale?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the startup program and get the tools you need to automate your way to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Apply Now
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/playground">
                <Button size="lg" variant="outline">
                  Try Free Playground
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}