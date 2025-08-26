import { motion } from 'framer-motion';
import { BookOpen, Search, Play, Code, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickStart = [
    { title: 'Getting Started', description: 'Set up your first workflow in 5 minutes', time: '5 min' },
    { title: 'Connect AI Models', description: 'Integrate OpenAI, Anthropic, and more', time: '3 min' },
    { title: 'Build Your First Flow', description: 'Create a complete automation workflow', time: '10 min' },
    { title: 'Deploy & Monitor', description: 'Push to production and track performance', time: '5 min' }
  ];

  const categories = [
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      items: ['REST API', 'GraphQL', 'Webhooks', 'SDKs']
    },
    {
      title: 'Workflows',
      description: 'Learn to build powerful AI automations',
      icon: Play,
      items: ['Node Types', 'Connectors', 'Triggers', 'Actions']
    },
    {
      title: 'Integrations',
      description: 'Connect with your favorite tools',
      icon: ExternalLink,
      items: ['AI Models', 'Databases', 'APIs', 'Services']
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
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything you need to build, deploy, and scale AI workflows
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              {/* TODO: Implement search functionality */}
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/50 border-border"
                disabled
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in under 30 minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((step, index) => (
              <Link to="#" key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 glass-effect rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  <span className="text-sm text-muted-foreground">{step.time}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {step.description}
                </p>
                <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-primary mb-4">
              Documentation Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive guides and references
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      to="#"
                      className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-hero text-gradient-cyber mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team and community are here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-gradient-primary">
                  Contact Support
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline">
                  Join Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}