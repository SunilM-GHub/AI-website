import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Eye, 
  Edit, 
  Trash2,
  Play,
  Share,
  Copy,
  Clock,
  Users,
  Workflow,
  Brain,
  Zap,
  Database,
  Mail,
  Calendar,
  Settings,
  Bot,
  FileText,
  Image
} from 'lucide-react';

const nodeTypes = [
  {
    category: 'AI & ML',
    nodes: [
      { name: 'OpenAI GPT', icon: Brain, color: 'text-primary', description: 'Text generation and completion' },
      { name: 'Claude', icon: Bot, color: 'text-secondary', description: 'Anthropic\'s AI assistant' },
      { name: 'Image Generator', icon: Image, color: 'text-accent', description: 'Generate images from text' },
      { name: 'Text Classifier', icon: FileText, color: 'text-warning', description: 'Classify and analyze text' }
    ]
  },
  {
    category: 'Data',
    nodes: [
      { name: 'Database Query', icon: Database, color: 'text-success', description: 'Query databases' },
      { name: 'CSV Reader', icon: FileText, color: 'text-primary', description: 'Read CSV files' },
      { name: 'JSON Parser', icon: Settings, color: 'text-secondary', description: 'Parse JSON data' },
      { name: 'Data Transform', icon: Zap, color: 'text-accent', description: 'Transform data' }
    ]
  },
  {
    category: 'Communication',
    nodes: [
      { name: 'Email Send', icon: Mail, color: 'text-warning', description: 'Send emails' },
      { name: 'Slack Message', icon: Users, color: 'text-success', description: 'Send Slack messages' },
      { name: 'Webhook', icon: Zap, color: 'text-primary', description: 'HTTP webhooks' },
      { name: 'SMS Send', icon: Mail, color: 'text-secondary', description: 'Send SMS messages' }
    ]
  }
];

const workflowTemplates = [
  {
    id: 1,
    name: 'Customer Support Automation',
    description: 'Automatically categorize and respond to customer inquiries using AI',
    nodes: 8,
    category: 'Customer Service',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    tags: ['AI', 'Email', 'Support'],
    preview: '/api/placeholder/300/200'
  },
  {
    id: 2,
    name: 'Content Generation Pipeline',
    description: 'Generate blog posts, social media content, and newsletters from topics',
    nodes: 12,
    category: 'Content',
    difficulty: 'Intermediate',
    estimatedTime: '25 min',
    tags: ['AI', 'Content', 'Social Media'],
    preview: '/api/placeholder/300/200'
  },
  {
    id: 3,
    name: 'Lead Scoring & Qualification',
    description: 'Score and qualify leads using multiple data sources and AI analysis',
    nodes: 10,
    category: 'Sales',
    difficulty: 'Advanced',
    estimatedTime: '35 min',
    tags: ['CRM', 'AI', 'Sales'],
    preview: '/api/placeholder/300/200'
  },
  {
    id: 4,
    name: 'Data Processing & Analytics',
    description: 'Clean, transform, and analyze large datasets with automated reporting',
    nodes: 15,
    category: 'Analytics',
    difficulty: 'Advanced',
    estimatedTime: '45 min',
    tags: ['Data', 'Analytics', 'Reports'],
    preview: '/api/placeholder/300/200'
  },
  {
    id: 5,
    name: 'Social Media Automation',
    description: 'Schedule and publish content across multiple social media platforms',
    nodes: 6,
    category: 'Marketing',
    difficulty: 'Beginner',
    estimatedTime: '20 min',
    tags: ['Social Media', 'Scheduling', 'Marketing'],
    preview: '/api/placeholder/300/200'
  },
  {
    id: 6,
    name: 'E-commerce Order Processing',
    description: 'Automate order fulfillment, inventory updates, and customer notifications',
    nodes: 14,
    category: 'E-commerce',
    difficulty: 'Intermediate',
    estimatedTime: '30 min',
    tags: ['E-commerce', 'Orders', 'Inventory'],
    preview: '/api/placeholder/300/200'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-success text-success-foreground';
    case 'Intermediate':
      return 'bg-warning text-warning-foreground';
    case 'Advanced':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export default function Flows() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTemplates = workflowTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient-primary mb-2">
                Workflow Editor
              </h1>
              <p className="text-muted-foreground">
                Create powerful automation workflows with our visual editor
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Create from Scratch
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search workflows and templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
              >
                {view === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Node Library Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 glass-effect border-border/50 sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Node Library
              </h3>
              
              <div className="space-y-6">
                {nodeTypes.map((category, categoryIndex) => (
                  <div key={category.category}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.nodes.map((node, nodeIndex) => (
                        <motion.div
                          key={node.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + nodeIndex * 0.05 }}
                          className="group cursor-pointer"
                        >
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <node.icon className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground">
                                {node.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {node.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Templates Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Workflow Templates
                </h2>
                <div className="text-sm text-muted-foreground">
                  {filteredTemplates.length} templates found
                </div>
              </div>

              <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="group glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary overflow-hidden">
                      {view === 'grid' && (
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                          <div className="absolute inset-0 cyber-grid opacity-20" />
                          <div className="absolute top-4 left-4">
                            <Badge className={getDifficultyColor(template.difficulty)}>
                              {template.difficulty}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4 flex space-x-2">
                            <Link to={`/template/${template.id}`}>
                              <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Link to="/builder">
                              <Button size="sm" className="bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Play className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                              {template.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                              {template.description}
                            </p>
                          </div>
                          {view === 'list' && (
                            <Badge className={getDifficultyColor(template.difficulty)}>
                              {template.difficulty}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Workflow className="w-3 h-3 mr-1" />
                              {template.nodes} nodes
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {template.estimatedTime}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {template.category}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {template.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Link to={`/template/${template.id}`}>
                            <Button variant="outline" size="sm" className="group">
                              <Eye className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          </Link>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share className="w-4 h-4" />
                            </Button>
                            <Link to="/builder">
                              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                                Use Template
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}