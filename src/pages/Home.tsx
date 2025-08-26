import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Workflow, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Layers,
  User
} from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop interface to create complex automation workflows without coding.',
    gradient: 'from-primary to-secondary'
  },
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Integrate with 50+ AI models including GPT, Claude, Gemini, and custom models.',
    gradient: 'from-secondary to-accent'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Execution',
    description: 'Process millions of tasks per hour with our distributed execution engine.',
    gradient: 'from-accent to-warning'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2 compliant with end-to-end encryption and advanced access controls.',
    gradient: 'from-warning to-success'
  },
  {
    icon: Globe,
    title: '1000+ Integrations',
    description: 'Connect with every tool in your stack through pre-built connectors.',
    gradient: 'from-success to-primary'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share workflows, collaborate in real-time, and manage permissions seamlessly.',
    gradient: 'from-primary to-accent'
  }
];

const stats = [
  { label: 'Workflows Created', value: '2.5M+', icon: Workflow },
  { label: 'Tasks Automated', value: '1.2B+', icon: Zap },
  { label: 'Active Users', value: '150K+', icon: Users },
  { label: 'Uptime', value: '99.99%', icon: TrendingUp }
];

const useCases = [
  {
    title: 'Data Processing',
    description: 'Automate data extraction, transformation, and loading workflows',
    icon: Layers,
    color: 'text-primary'
  },
  {
    title: 'Content Generation',
    description: 'Create, edit, and publish content using AI models',
    icon: Brain,
    color: 'text-secondary'
  },
  {
    title: 'Customer Support',
    description: 'Intelligent ticket routing and automated responses',
    icon: Users,
    color: 'text-accent'
  },
  {
    title: 'Business Intelligence',
    description: 'Real-time analytics and automated reporting',
    icon: TrendingUp,
    color: 'text-success'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    content: 'NeuroFlow reduced our data processing time by 90%. The AI integrations are incredibly powerful.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Operations',
    content: 'The visual workflow builder is intuitive yet powerful. Our team was productive from day one.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    content: 'Finally, a platform that makes AI automation accessible to our entire research team.',
    rating: 5,
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-none">
                <Zap className="w-4 h-4 mr-2" />
                Next-Generation AI Workflows
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-gradient-cyber">
                Build AI Workflows
                <br />
                <span className="text-gradient-primary">Without Limits</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                The most advanced platform for creating, deploying, and scaling AI-powered automation workflows. 
                Connect any API, integrate any AI model, and automate everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8 py-4 group"
                  >
                    Start Building Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/playground">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/50 hover:border-primary text-lg px-8 py-4 group"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Try Playground
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center group"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-3xl font-bold text-gradient-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Everything You Need to Automate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for teams that want to move fast and build amazing automation workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300 hover:glow-primary">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-secondary">
              Endless Possibilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple automations to complex AI pipelines, see what you can build with NeuroFlow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300 hover:-translate-y-2">
                  <useCase.icon className={`w-12 h-12 mx-auto mb-4 ${useCase.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-accent">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of teams who have revolutionized their workflows with NeuroFlow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl mr-4">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-border/50 glow-primary">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cyber">
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Join thousands of teams already automating their workflows with NeuroFlow. 
                Start building your first AI-powered automation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8 py-4 group"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/50 hover:border-primary text-lg px-8 py-4"
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-success" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-success" />
                  Setup in under 5 minutes
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}