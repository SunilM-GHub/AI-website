import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Plus, 
  Key, 
  Eye, 
  EyeOff, 
  Edit, 
  Trash2, 
  Shield, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Clock,
  ExternalLink,
  Copy,
  Settings
} from 'lucide-react';

const apiKeys = [
  {
    id: 1,
    name: 'OpenAI GPT-4',
    provider: 'OpenAI',
    keyPreview: 'sk-proj-...A7Xm',
    status: 'active',
    lastUsed: '2 minutes ago',
    usageCount: 1247,
    createdAt: '2024-01-15',
    permissions: ['text-generation', 'chat-completion'],
    rateLimit: '10,000 RPM'
  },
  {
    id: 2,
    name: 'Claude 3',
    provider: 'Anthropic',
    keyPreview: 'sk-ant-...B9Qw',
    status: 'active',
    lastUsed: '1 hour ago',
    usageCount: 423,
    createdAt: '2024-01-12',
    permissions: ['text-generation', 'analysis'],
    rateLimit: '5,000 RPM'
  },
  {
    id: 3,
    name: 'DALL-E 3',
    provider: 'OpenAI',
    keyPreview: 'sk-proj-...C3Er',
    status: 'warning',
    lastUsed: '3 hours ago',
    usageCount: 89,
    createdAt: '2024-01-10',
    permissions: ['image-generation'],
    rateLimit: '50 RPM'
  },
  {
    id: 4,
    name: 'Gemini Pro',
    provider: 'Google',
    keyPreview: 'AIza...D4Ft',
    status: 'inactive',
    lastUsed: '2 days ago',
    usageCount: 156,
    createdAt: '2024-01-08',
    permissions: ['text-generation', 'multimodal'],
    rateLimit: '15,000 RPM'
  }
];

const providers = [
  {
    name: 'OpenAI',
    logo: '🤖',
    description: 'GPT models, DALL-E, Whisper',
    models: ['GPT-4', 'GPT-3.5', 'DALL-E 3', 'Whisper'],
    setupUrl: 'https://platform.openai.com/api-keys'
  },
  {
    name: 'Anthropic',
    logo: '🧠',
    description: 'Claude AI models',
    models: ['Claude 3 Opus', 'Claude 3 Sonnet', 'Claude 3 Haiku'],
    setupUrl: 'https://console.anthropic.com/'
  },
  {
    name: 'Google',
    logo: '🌟',
    description: 'Gemini, Vertex AI',
    models: ['Gemini Pro', 'Gemini Vision', 'PaLM 2'],
    setupUrl: 'https://makersuite.google.com/app/apikey'
  },
  {
    name: 'Cohere',
    logo: '⚡',
    description: 'Command, Embed models',
    models: ['Command', 'Command Light', 'Embed'],
    setupUrl: 'https://dashboard.cohere.ai/api-keys'
  },
  {
    name: 'Hugging Face',
    logo: '🤗',
    description: 'Open source models',
    models: ['Llama 2', 'Falcon', 'CodeLlama'],
    setupUrl: 'https://huggingface.co/settings/tokens'
  },
  {
    name: 'Stability AI',
    logo: '🎨',
    description: 'Stable Diffusion models',
    models: ['SD XL', 'SD 2.1', 'SD Inpainting'],
    setupUrl: 'https://platform.stability.ai/account/keys'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-success text-success-foreground';
    case 'warning':
      return 'bg-warning text-warning-foreground';
    case 'inactive':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return CheckCircle;
    case 'warning':
      return AlertTriangle;
    case 'inactive':
      return Clock;
    default:
      return Clock;
  }
};

export default function ApiKeys() {
  const [showKey, setShowKey] = useState<{ [key: number]: boolean }>({});
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const toggleKeyVisibility = (id: number) => {
    setShowKey(prev => ({ ...prev, [id]: !prev[id] }));
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient-primary mb-2">
                API Keys
              </h1>
              <p className="text-muted-foreground">
                Manage your AI model API keys and integrations
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add API Key
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-effect border-border/50">
                <DialogHeader>
                  <DialogTitle>Add New API Key</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Provider
                    </label>
                    <select className="w-full p-2 bg-muted border border-border rounded-lg">
                      <option>Select a provider</option>
                      {providers.map(provider => (
                        <option key={provider.name} value={provider.name}>
                          {provider.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      API Key Name
                    </label>
                    <Input placeholder="e.g., Production OpenAI Key" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      API Key
                    </label>
                    <Input type="password" placeholder="Paste your API key here" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="bg-gradient-primary flex-1">
                      Add Key
                    </Button>
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Security Notice */}
          <Card className="p-4 glass-effect border-border/50 bg-warning/10 border-warning/20">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Security Notice
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your API keys are encrypted and stored securely. They are never exposed in logs or shared with third parties. 
                  Use environment-specific keys and rotate them regularly for maximum security.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* API Keys List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Your API Keys
              </h2>

              <div className="space-y-4">
                {apiKeys.map((apiKey, index) => {
                  const StatusIcon = getStatusIcon(apiKey.status);
                  return (
                    <motion.div
                      key={apiKey.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Key className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {apiKey.name}
                              </h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge variant="secondary">{apiKey.provider}</Badge>
                                <Badge className={getStatusColor(apiKey.status)}>
                                  <StatusIcon className="w-3 h-3 mr-1" />
                                  {apiKey.status}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>Created: {apiKey.createdAt}</span>
                                <span>•</span>
                                <span>Last used: {apiKey.lastUsed}</span>
                                <span>•</span>
                                <span>{apiKey.usageCount.toLocaleString()} requests</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">API Key</span>
                            <div className="flex items-center space-x-2">
                              <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                                {showKey[apiKey.id] ? 'sk-proj-abcd1234...' : apiKey.keyPreview}
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleKeyVisibility(apiKey.id)}
                              >
                                {showKey[apiKey.id] ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">Rate Limit</span>
                            <span className="text-sm text-muted-foreground">{apiKey.rateLimit}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">Permissions</span>
                            <div className="flex space-x-1">
                              {apiKey.permissions.map((permission) => (
                                <Badge key={permission} variant="outline" className="text-xs">
                                  {permission}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4 mr-1" />
                              Configure
                            </Button>
                            <Button variant="outline" size="sm">
                              <Zap className="w-4 h-4 mr-1" />
                              Test
                            </Button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Providers Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Supported Providers
              </h2>

              <div className="space-y-4">
                {providers.map((provider, index) => (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="p-4 glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{provider.logo}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                            {provider.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {provider.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {provider.models.slice(0, 2).map((model) => (
                              <Badge key={model} variant="secondary" className="text-xs">
                                {model}
                              </Badge>
                            ))}
                            {provider.models.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{provider.models.length - 2}
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group-hover:border-primary"
                            asChild
                          >
                            <a href={provider.setupUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-2" />
                              Get API Key
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Usage Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <Card className="p-6 glass-effect border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Usage Overview
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Requests</span>
                      <span className="text-sm font-medium text-foreground">1,915</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">This Month</span>
                      <span className="text-sm font-medium text-foreground">456</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Success Rate</span>
                      <span className="text-sm font-medium text-success">98.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg Response Time</span>
                      <span className="text-sm font-medium text-foreground">1.2s</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}