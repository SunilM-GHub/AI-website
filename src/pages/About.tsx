import { motion } from 'framer-motion';
import { Users, Target, Zap, Heart, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      description: 'Former AI researcher at Google, passionate about democratizing AI automation'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      description: 'Ex-Tesla software architect, expert in scalable distributed systems'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI',
      description: 'PhD in Machine Learning, previously at OpenAI working on GPT models'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description: 'Award-winning UX designer, former design lead at Airbnb'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Democratizing AI automation for businesses of all sizes'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with AI workflows'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Building together with our users and contributors'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology that enhances human capabilities, not replaces them'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Workflows Created' },
    { number: '150+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' }
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
              Building the Future of AI Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're on a mission to make AI automation accessible to everyone, 
              from individual creators to global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-hero text-gradient-cyber mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023 by a team of AI researchers and engineers, NeuroFlow was born 
                  out of the frustration with complex, code-heavy automation tools that required 
                  extensive technical knowledge.
                </p>
                <p>
                  We believed that AI automation should be visual, intuitive, and accessible to 
                  everyone - from business analysts to seasoned developers. Our goal was to create 
                  a platform that could democratize AI capabilities without sacrificing power or flexibility.
                </p>
                <p>
                  Today, NeuroFlow powers thousands of AI workflows across 150+ countries, helping 
                  businesses automate everything from customer support to content generation, 
                  data analysis to creative workflows.
                </p>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="glass-effect p-8 rounded-xl">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Global Impact
                </h3>
                <p className="text-muted-foreground">
                  Empowering businesses worldwide to harness the power of AI automation 
                  and unlock new possibilities for growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero text-gradient-cyber mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals building the future of AI automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-xl"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </motion.div>
            ))}
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
              Join Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for AI and automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}