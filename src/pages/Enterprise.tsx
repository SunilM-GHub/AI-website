import { motion } from 'framer-motion';
import { Users, Shield, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Enterprise() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliance, SAML SSO, role-based access control, and advanced audit logs'
    },
    {
      icon: Zap,
      title: 'Unlimited Scale',
      description: 'Handle millions of workflow executions with auto-scaling infrastructure and dedicated resources'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Advanced team controls, workflow sharing, collaborative editing, and approval workflows'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy in your preferred regions with multi-cloud support and edge computing capabilities'
    }
  ];

  const benefits = [
    'Dedicated customer success manager',
    '24/7 priority support with 1-hour SLA',
    'Custom integrations and connectors',
    'On-premise deployment options',
    'Advanced analytics and reporting',
    'Custom training and onboarding'
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
            <h1 className="text-display text-gradient-primary mb-6">
              Enterprise-Grade AI Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Scale your AI workflows across your entire organization with enterprise security, 
              unlimited executions, and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-gradient-primary glow-primary">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deploy AI automation across your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-hero text-gradient-primary mb-6">
                Enterprise Benefits
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the support and features your enterprise needs to succeed with AI automation.
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
            <div className="lg:text-center">
              <div className="glass-effect p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Scale?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Talk to our enterprise team about your specific needs and get a custom solution.
                </p>
                <Link to="/about">
                  <Button size="lg" className="w-full bg-gradient-primary">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}