import { motion } from 'framer-motion';
import { Workflow, Zap, Database, Cloud, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function Integrations() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'AI Models', count: 25, icon: Zap, color: 'bg-gradient-primary' },
    { name: 'Databases', count: 18, icon: Database, color: 'bg-gradient-secondary' },
    { name: 'Cloud Services', count: 32, icon: Cloud, color: 'bg-gradient-accent' },
    { name: 'APIs', count: 150, icon: Workflow, color: 'bg-gradient-cyber' }
  ];

  const integrations = [
    {
      name: 'OpenAI GPT',
      description: 'Access GPT-3.5, GPT-4, and other OpenAI models',
      category: 'AI Models',
      popular: true,
      logo: '🤖'
    },
    {
      name: 'Anthropic Claude',
      description: 'Integrate Claude for advanced reasoning tasks',
      category: 'AI Models',
      popular: true,
      logo: '🧠'
    },
    {
      name: 'PostgreSQL',
      description: 'Connect to PostgreSQL databases',
      category: 'Databases',
      popular: true,
      logo: '🐘'
    },
    {
      name: 'AWS S3',
      description: 'Store and retrieve files from Amazon S3',
      category: 'Cloud Services',
      popular: true,
      logo: '☁️'
    },
    {
      name: 'Google Sheets',
      description: 'Read and write data to Google Sheets',
      category: 'APIs',
      popular: true,
      logo: '📊'
    },
    {
      name: 'Slack',
      description: 'Send messages and notifications to Slack',
      category: 'APIs',
      popular: true,
      logo: '💬'
    },
    {
      name: 'Stripe',
      description: 'Process payments and manage subscriptions',
      category: 'APIs',
      popular: false,
      logo: '💳'
    },
    {
      name: 'MongoDB',
      description: 'Work with MongoDB document databases',
      category: 'Databases',
      popular: false,
      logo: '🍃'
    }
  ];

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Workflow className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              Integrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect your favorite tools and services to create powerful AI-driven workflows
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/50 border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Integration Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse integrations by category
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group text-center"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.count} integrations
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-primary mb-4">
              Popular Integrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Most used integrations by our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{integration.logo}</div>
                  {integration.popular && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {integration.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {integration.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Integration */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-hero text-gradient-cyber mb-6">
              Don't See Your Tool?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Request a new integration or build your own custom connector
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Request Integration
              </Button>
              <Button size="lg" variant="outline">
                Build Custom Connector
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}