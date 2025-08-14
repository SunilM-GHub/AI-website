import { motion } from 'framer-motion';
import { Play, Clock, User, ChevronRight, BookOpen, Video, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Tutorials() {
  const tutorials = [
    {
      title: 'Building Your First AI Workflow',
      description: 'Learn the basics of creating workflows with our visual editor',
      duration: '15 min',
      level: 'Beginner',
      type: 'Video',
      thumbnail: 'bg-gradient-primary'
    },
    {
      title: 'Connecting OpenAI GPT Models',
      description: 'Step-by-step guide to integrate GPT models into your workflows',
      duration: '8 min',
      level: 'Beginner',
      type: 'Video',
      thumbnail: 'bg-gradient-secondary'
    },
    {
      title: 'Advanced Node Configurations',
      description: 'Master complex node setups and conditional logic',
      duration: '25 min',
      level: 'Advanced',
      type: 'Video',
      thumbnail: 'bg-gradient-accent'
    },
    {
      title: 'Error Handling & Debugging',
      description: 'Learn to handle errors gracefully and debug your workflows',
      duration: '12 min',
      level: 'Intermediate',
      type: 'Article',
      thumbnail: 'bg-gradient-cyber'
    },
    {
      title: 'Webhook Integrations',
      description: 'Connect external services using webhooks and API calls',
      duration: '18 min',
      level: 'Intermediate',
      type: 'Video',
      thumbnail: 'bg-gradient-primary'
    },
    {
      title: 'Deploying to Production',
      description: 'Best practices for deploying and monitoring workflows',
      duration: '20 min',
      level: 'Advanced',
      type: 'Article',
      thumbnail: 'bg-gradient-secondary'
    }
  ];

  const categories = [
    { name: 'Getting Started', count: 8, icon: BookOpen },
    { name: 'AI Integrations', count: 12, icon: Code },
    { name: 'Advanced Workflows', count: 6, icon: Play },
    { name: 'Best Practices', count: 4, icon: User }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-success/20 text-success';
      case 'Intermediate': return 'bg-warning/20 text-warning';
      case 'Advanced': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

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
            <Play className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              Learn & Master
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Step-by-step tutorials to help you become an AI automation expert
            </p>
            <Button size="lg" className="bg-gradient-primary glow-primary">
              Start Learning
              <Play className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your learning journey based on your experience level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.count} tutorials
                </p>
                <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-hero text-gradient-primary mb-4">
              Popular Tutorials
            </h2>
            <p className="text-lg text-muted-foreground">
              Most watched tutorials by our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`h-48 ${tutorial.thumbnail} relative flex items-center justify-center`}>
                  {tutorial.type === 'Video' ? (
                    <Video className="w-12 h-12 text-white" />
                  ) : (
                    <BookOpen className="w-12 h-12 text-white" />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {tutorial.duration}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getLevelColor(tutorial.level)}>
                      {tutorial.level}
                    </Badge>
                    <Badge variant="outline">
                      {tutorial.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-hero text-gradient-cyber mb-6">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Put your knowledge to practice and start building amazing AI workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/flows">
                <Button size="lg" className="bg-gradient-primary">
                  Start Building
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/playground">
                <Button size="lg" variant="outline">
                  Try Playground
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}