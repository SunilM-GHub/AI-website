import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Play, 
  Eye, 
  Download, 
  Share, 
  Clock, 
  Users, 
  Workflow,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  Code,
  Database,
  Mail,
  Brain
} from 'lucide-react';

// Sample template data - in real app this would come from API
const templateData = {
  'customer-support': {
    id: 1,
    name: 'Customer Support Automation',
    description: 'Automatically categorize and respond to customer inquiries using AI. This workflow processes incoming support tickets, analyzes their content, determines priority, and routes them to the appropriate team members.',
    category: 'Customer Service',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    nodes: 8,
    tags: ['AI', 'Email', 'Support', 'Automation'],
    image: '/api/placeholder/600/400',
    author: 'FlowAI Team',
    rating: 4.8,
    downloads: 1247,
    lastUpdated: '2024-01-15',
    workflow: {
      trigger: {
        type: 'Email Webhook',
        description: 'Receives new support tickets via email'
      },
      nodes: [
        {
          id: 1,
          type: 'Email Parser',
          icon: Mail,
          description: 'Extract ticket details from email',
          color: 'text-blue-500'
        },
        {
          id: 2,
          type: 'AI Classifier',
          icon: Brain,
          description: 'Categorize ticket type and priority',
          color: 'text-purple-500'
        },
        {
          id: 3,
          type: 'Database Lookup',
          icon: Database,
          description: 'Check customer history',
          color: 'text-green-500'
        },
        {
          id: 4,
          type: 'AI Response Generator',
          icon: Brain,
          description: 'Generate personalized response',
          color: 'text-purple-500'
        },
        {
          id: 5,
          type: 'Team Router',
          icon: Users,
          description: 'Route to appropriate team',
          color: 'text-orange-500'
        },
        {
          id: 6,
          type: 'Email Sender',
          icon: Mail,
          description: 'Send response to customer',
          color: 'text-blue-500'
        }
      ]
    }
  }
};

export default function WorkflowTemplate() {
  const { id } = useParams();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  
  // In real app, fetch template by ID
  const template = templateData['customer-support'];
  
  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Template Not Found</h1>
          <p className="text-muted-foreground mb-4">The workflow template you're looking for doesn't exist.</p>
          <Link to="/flows">
            <Button className="bg-gradient-primary">
              Browse Templates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment process
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsDeploying(false);
    // In real app, redirect to deployed workflow
  };

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
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <Link to="/flows" className="text-muted-foreground hover:text-foreground">
                  Templates
                </Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-foreground">{template.name}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gradient-primary mb-4">
                {template.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                {template.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <Badge className={getDifficultyColor(template.difficulty)}>
                  {template.difficulty}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {template.estimatedTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Workflow className="w-4 h-4 mr-1" />
                  {template.nodes} nodes
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Download className="w-4 h-4 mr-1" />
                  {template.downloads.toLocaleString()} uses
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 ml-8">
              <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="min-w-32">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl glass-effect border-border/50">
                  <DialogHeader>
                    <DialogTitle>Workflow Preview: {template.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-6">
                      <div className="text-center">
                        <Workflow className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-lg font-medium text-foreground mb-2">
                          Interactive Workflow Preview
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Visual representation of the workflow would be shown here
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Trigger</h4>
                        <div className="text-sm text-muted-foreground">
                          {template.workflow.trigger.type}: {template.workflow.trigger.description}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Estimated Processing</h4>
                        <div className="text-sm text-muted-foreground">
                          ~2-5 seconds per execution
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button 
                onClick={handleDeploy}
                disabled={isDeploying}
                className="bg-gradient-primary hover:opacity-90 glow-primary min-w-32"
              >
                {isDeploying ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Deploying...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Use Template
                  </>
                )}
              </Button>

              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Share className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Card className="p-6 glass-effect border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Workflow Structure
                </h2>
                
                <div className="space-y-4">
                  {template.workflow.nodes.map((node, index) => (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <node.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{node.type}</h3>
                        <p className="text-sm text-muted-foreground">{node.description}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Step {index + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Configuration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 glass-effect border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Required Configuration
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <div>
                        <h3 className="font-medium text-foreground">Email Integration</h3>
                        <p className="text-sm text-muted-foreground">Connect your email service</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <div>
                        <h3 className="font-medium text-foreground">AI Model API Key</h3>
                        <p className="text-sm text-muted-foreground">OpenAI or Claude API access</p>
                      </div>
                    </div>
                    <Link to="/api-keys">
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <div>
                        <h3 className="font-medium text-foreground">Database Connection</h3>
                        <p className="text-sm text-muted-foreground">Customer data storage</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Template Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Card className="p-6 glass-effect border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Template Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Author</div>
                    <div className="font-medium text-foreground">{template.author}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div className="font-medium text-foreground">{template.category}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Last Updated</div>
                    <div className="font-medium text-foreground">{template.lastUpdated}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                    <div className="font-medium text-foreground">
                      ⭐ {template.rating}/5.0 ({template.downloads} users)
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Related Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-6 glass-effect border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Related Templates
                </h3>
                
                <div className="space-y-3">
                  <Link to="/template/content-generation" className="block">
                    <div className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-foreground text-sm">Content Generation</h4>
                      <p className="text-xs text-muted-foreground">Marketing automation</p>
                    </div>
                  </Link>
                  
                  <Link to="/template/lead-qualification" className="block">
                    <div className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-foreground text-sm">Lead Qualification</h4>
                      <p className="text-xs text-muted-foreground">Sales automation</p>
                    </div>
                  </Link>
                  
                  <Link to="/template/data-processing" className="block">
                    <div className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-foreground text-sm">Data Processing</h4>
                      <p className="text-xs text-muted-foreground">Analytics pipeline</p>
                    </div>
                  </Link>
                </div>
                
                <Link to="/flows">
                  <Button variant="outline" className="w-full mt-4">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Browse All Templates
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}