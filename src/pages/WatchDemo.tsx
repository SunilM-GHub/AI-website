import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Download, ExternalLink, Clock, Users } from 'lucide-react';

export default function WatchDemo() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Play className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              NeuroFlow Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how to build powerful AI workflows in just minutes
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-card/50 rounded-xl overflow-hidden glass-effect border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:scale-110 transition-transform duration-300 glow-primary">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground">
                    Click to watch the full demo
                  </p>
                </div>
              </div>
              
              {/* Video overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-30" />
              
              {/* Video stats */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-sm text-white">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>12:45</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>25K views</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 glass-effect rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Setup Your First Workflow
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learn how to create your first AI automation workflow from scratch
                </p>
              </div>
              
              <div className="p-6 glass-effect rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Connect AI Models
                </h3>
                <p className="text-muted-foreground text-sm">
                  Integrate OpenAI, Claude, and other AI models into your workflows
                </p>
              </div>
              
              <div className="p-6 glass-effect rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Deploy & Monitor
                </h3>
                <p className="text-muted-foreground text-sm">
                  Deploy your workflows and monitor their performance in real-time
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                <Download className="mr-2 w-5 h-5" />
                Download Resources
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="mr-2 w-5 h-5" />
                View on YouTube
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}