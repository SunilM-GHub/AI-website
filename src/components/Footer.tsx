import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Workflow, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Heart,
  Zap
} from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Workflow Editor', href: '/flows' },
    { name: 'AI Playground', href: '/playground' },
    { name: 'API Manager', href: '/api-keys' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Integrations', href: '/integrations' },
  ],
  solutions: [
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Startups', href: '/startups' },
    { name: 'Partners', href: '/partners' },
    { name: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
    { name: 'Support', href: '/support' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
  ]
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@neuroflow.ai' },
];

export default function Footer() {
  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-b border-border/30"
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gradient-primary">
                Stay in the Loop
              </h3>
            </div>
            <p className="text-muted-foreground mb-8">
              Get the latest updates on AI workflows, new integrations, and platform improvements.
              Join thousands of automation enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted/50 border-border/50 focus:border-primary"
              />
              <Button className="bg-gradient-primary hover:opacity-90 glow-primary group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary group-hover:glow-strong transition-all duration-300">
                  <Workflow className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="font-bold text-xl text-gradient-primary">
                  NeuroFlow
                </div>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The most advanced AI-powered workflow automation platform. 
                Connect, automate, and scale your business processes with ease.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-muted/50 hover:bg-gradient-primary rounded-lg flex items-center justify-center group transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 NeuroFlow. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <span key={link.name} className="flex items-center space-x-4">
                    <Link
                      to={link.href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                    {index < footerLinks.legal.length - 1 && (
                      <span className="text-border">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent animate-pulse" />
              <span>for automation enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}