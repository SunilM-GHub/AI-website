import { motion } from 'framer-motion';
import { Users, MessageCircle, Github, Youtube, Twitter, ExternalLink, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Community() {
  const platforms = [
    {
      name: 'Discord',
      description: 'Join our active Discord community for real-time discussions',
      members: '12,000+',
      icon: MessageCircle,
      color: 'bg-gradient-primary',
      link: '#'
    },
    {
      name: 'GitHub',
      description: 'Contribute to our open-source projects and share your workflows',
      members: '5,000+',
      icon: Github,
      color: 'bg-gradient-secondary',
      link: '#'
    },
    {
      name: 'YouTube',
      description: 'Watch tutorials, demos, and community-created content',
      members: '25,000+',
      icon: Youtube,
      color: 'bg-gradient-accent',
      link: '#'
    },
    {
      name: 'Twitter',
      description: 'Follow us for updates, tips, and community highlights',
      members: '8,000+',
      icon: Twitter,
      color: 'bg-gradient-cyber',
      link: '#'
    }
  ];

  const contributors = [
    {
      name: 'Alex Rodriguez',
      role: 'Top Contributor',
      contributions: '150 workflows shared',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Kim',
      role: 'Documentation Hero',
      contributions: '50 guides written',
      avatar: '👩‍📝'
    },
    {
      name: 'Marcus Chen',
      role: 'Integration Expert',
      contributions: '25 custom connectors',
      avatar: '🔧'
    },
    {
      name: 'Emily Watson',
      role: 'Community Moderator',
      contributions: '1000+ members helped',
      avatar: '🌟'
    }
  ];

  const events = [
    {
      title: 'Monthly Community Call',
      date: 'Every 3rd Thursday',
      description: 'Join our monthly community call to share workflows and get updates',
      type: 'Recurring'
    },
    {
      title: 'Workflow Contest',
      date: 'March 15-30',
      description: 'Submit your most creative AI workflow for a chance to win prizes',
      type: 'Contest'
    },
    {
      title: 'AI Automation Summit',
      date: 'May 20-21',
      description: 'Virtual conference featuring the latest in AI automation',
      type: 'Conference'
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
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-display text-gradient-primary mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with thousands of AI automation enthusiasts, share workflows, 
              and learn from the best in the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary glow-primary" onClick={() => window.open('https://discord.gg/neuroflow', '_blank')}>
                Join Discord
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/flows'}>
                Browse Workflows
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Shared Workflows</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">2K+</div>
              <div className="text-muted-foreground">Daily Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">100+</div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Community Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with the community across multiple platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                  <platform.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {platform.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {platform.members} members
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-primary mb-4">
              Top Contributors
            </h2>
            <p className="text-lg text-muted-foreground">
              Celebrating our amazing community members
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-xl"
              >
                <div className="text-4xl mb-4">{contributor.avatar}</div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">
                  {contributor.name}
                </h3>
                <Badge className="mb-3 bg-gradient-primary text-primary-foreground">
                  {contributor.role}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {contributor.contributions}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Community Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              How to be part of our growing community
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 glass-effect rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Be Respectful
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Respectful Communication
              </h3>
              <p className="text-muted-foreground mb-4">
                Treat all community members with respect and kindness
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 glass-effect rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Share Knowledge
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Knowledge Sharing
              </h3>
              <p className="text-muted-foreground mb-4">
                Share your workflows, tips, and help others learn
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 glass-effect rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Stay Helpful
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Be Helpful
              </h3>
              <p className="text-muted-foreground mb-4">
                Answer questions and provide constructive feedback
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-hero text-gradient-primary mb-6">
              Ready to Connect?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of AI automation enthusiasts and start building amazing workflows together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                Join Community
                <Heart className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Share Your Workflow
                <Star className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}