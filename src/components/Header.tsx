import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Workflow, 
  Zap, 
  Brain, 
  Users, 
  BookOpen, 
  Settings,
  Play,
  Key
} from 'lucide-react';

const navigation = [
  {
    name: 'Products',
    icon: Workflow,
    items: [
      { name: 'Workflow Editor', href: '/flows', icon: Workflow, description: 'Visual workflow automation' },
      { name: 'AI Playground', href: '/playground', icon: Play, description: 'Test AI models instantly' },
      { name: 'API Manager', href: '/api-keys', icon: Key, description: 'Manage your integrations' },
      { name: 'Dashboard', href: '/dashboard', icon: Brain, description: 'Monitor your workflows' },
    ]
  },
  {
    name: 'Solutions',
    icon: Zap,
    items: [
      { name: 'Enterprise', href: '/enterprise', icon: Users, description: 'Large-scale deployments' },
      { name: 'Startups', href: '/startups', icon: Zap, description: 'Rapid automation setup' },
      { name: 'Integrations', href: '/integrations', icon: Workflow, description: 'Connect everything' },
      
    ]
  },
  {
    name: 'Resources',
    icon: BookOpen,
    items: [
      { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Complete guides' },
      { name: 'API Reference', href: '/api', icon: Settings, description: 'Technical docs' },
      { name: 'Tutorials', href: '/tutorials', icon: Play, description: 'Step-by-step learning' },
      { name: 'Community', href: '/community', icon: Users, description: 'Connect with others' },
    ]
  }
];

const DropdownMenu = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 px-4 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <item.icon className="w-4 h-4 mr-1" />
        <span className="font-medium">{item.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-80 bg-card/95 backdrop-blur-xl rounded-xl border border-border shadow-elevation-lg z-50"
          >
            <div className="p-6">
              <div className="grid gap-4">
                {item.items.map((subItem: any) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-200 border border-transparent hover:border-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <subItem.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {subItem.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {subItem.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full glass-effect border-b border-border/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary group-hover:glow-strong transition-all duration-300">
                <Workflow className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-bold text-xl text-gradient-primary">
                NeuroFlow
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <DropdownMenu
                  key={item.name}
                  item={item}
                />
              ))}
              <Link
                to="/pricing"
                className={`px-4 py-2 font-medium transition-colors duration-200 ${
                  isActivePage('/pricing') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 font-medium transition-colors duration-200 ${
                  isActivePage('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="border-primary/50 hover:border-primary">
                  Sign In
                </Button>
              </Link>
              <Link to="/get-started">
                <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/50 glass-effect"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center space-x-2 text-lg font-medium text-foreground">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-7 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-col space-y-3">
                      <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-gradient-primary">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

    </>
  );
}