import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Workflow, 
  Brain, 
  ArrowRight, 
  CheckCircle,
  Play,
  Users,
  Shield,
  Sparkles,
  Clock,
  TrendingUp
} from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Sign Up & Connect APIs',
    description: 'Create your account and securely connect your AI model API keys',
    icon: Shield,
    time: '2 min',
    color: 'text-primary'
  },
  {
    step: 2,
    title: 'Choose a Template',
    description: 'Start with one of our pre-built workflows or create from scratch',
    icon: Workflow,
    time: '1 min',
    color: 'text-secondary'
  },
  {
    step: 3,
    title: 'Customize & Test',
    description: 'Drag, drop, and configure nodes to match your specific needs',
    icon: Brain,
    time: '5 min',
    color: 'text-accent'
  },
  {
    step: 4,
    title: 'Deploy & Automate',
    description: 'Launch your workflow and let AI handle your tasks automatically',
    icon: Zap,
    time: '1 min',
    color: 'text-warning'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    description: 'Automate repetitive tasks and focus on what matters most'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Reduce manual work by up to 90% with intelligent automation'
  },
  {
    icon: Users,
    title: 'Scale Your Team',
    description: 'Handle more work without hiring additional team members'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with industry standards'
  }
];

const templates = [
  {
    name: 'Customer Support Bot',
    description: 'Automatically categorize and respond to customer inquiries',
    category: 'Customer Service',
    popularity: 'Most Popular',
    estimatedTime: '10 min'
  },
  {
    name: 'Content Generator',
    description: 'Create blog posts, social media content, and newsletters',
    category: 'Marketing',
    popularity: 'Trending',
    estimatedTime: '15 min'
  },
  {
    name: 'Lead Qualification',
    description: 'Score and qualify leads using AI analysis',
    category: 'Sales',
    popularity: 'New',
    estimatedTime: '20 min'
  }
];

export default function GetStarted() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-primary">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold text-gradient-primary mb-6">
            Get Started in Minutes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From setup to automation in just 4 simple steps. No coding required, 
            enterprise-grade security included.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-primary px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/playground">
              <Button size="lg" variant="outline" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-primary font-medium mb-1">
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span>Easy to complete</span>
                  </div>
                </Card>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Our Platform
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Template Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Popular Templates
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Start with these proven workflows that thousands of users love
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group hover:glow-primary">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={template.popularity === 'Most Popular' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {template.popularity}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {template.estimatedTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                    <Link to="/flows">
                      <Button size="sm" variant="ghost" className="group-hover:text-primary">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-12 glass-effect border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl font-bold text-gradient-primary mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI automation to save time, 
              reduce costs, and scale their operations.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-primary px-8">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}