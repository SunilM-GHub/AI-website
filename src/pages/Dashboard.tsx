import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Play, 
  Pause, 
  Settings, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Workflow,
  Brain,
  Zap,
  Users,
  Activity,
  Calendar,
  MoreHorizontal,
  Filter,
  Search
} from 'lucide-react';

const workflows = [
  {
    id: 1,
    name: 'Customer Support Automation',
    description: 'Automatically categorize and route support tickets using AI',
    status: 'running',
    lastRun: '2 minutes ago',
    executions: 1247,
    success: 98.5,
    trigger: 'Webhook',
    nodes: 8
  },
  {
    id: 2,
    name: 'Content Generation Pipeline',
    description: 'Generate blog posts and social media content from topics',
    status: 'paused',
    lastRun: '1 hour ago',
    executions: 423,
    success: 95.2,
    trigger: 'Schedule',
    nodes: 12
  },
  {
    id: 3,
    name: 'Data Processing Flow',
    description: 'Clean, transform and analyze incoming data streams',
    status: 'running',
    lastRun: '5 minutes ago',
    executions: 3891,
    success: 99.1,
    trigger: 'API',
    nodes: 15
  },
  {
    id: 4,
    name: 'Lead Qualification Bot',
    description: 'Score and qualify leads using multiple data sources',
    status: 'error',
    lastRun: '30 minutes ago',
    executions: 156,
    success: 87.3,
    trigger: 'Form Submit',
    nodes: 6
  }
];

const stats = [
  {
    label: 'Total Workflows',
    value: '24',
    change: '+3',
    icon: Workflow,
    color: 'text-primary'
  },
  {
    label: 'Monthly Executions',
    value: '45.2K',
    change: '+12%',
    icon: Play,
    color: 'text-success'
  },
  {
    label: 'Success Rate',
    value: '97.8%',
    change: '+2.1%',
    icon: CheckCircle,
    color: 'text-success'
  },
  {
    label: 'Active Users',
    value: '8',
    change: '+1',
    icon: Users,
    color: 'text-primary'
  }
];

const recentActivity = [
  {
    type: 'workflow_created',
    title: 'New workflow created',
    description: 'AI Email Responder workflow was created',
    time: '2 minutes ago',
    icon: Plus,
    color: 'text-success'
  },
  {
    type: 'execution_completed',
    title: 'Workflow execution completed',
    description: 'Customer Support Automation processed 45 tickets',
    time: '5 minutes ago',
    icon: CheckCircle,
    color: 'text-success'
  },
  {
    type: 'execution_failed',
    title: 'Workflow execution failed',
    description: 'Lead Qualification Bot encountered an API error',
    time: '30 minutes ago',
    icon: AlertCircle,
    color: 'text-destructive'
  },
  {
    type: 'user_invited',
    title: 'New team member invited',
    description: 'sarah@company.com was invited to the workspace',
    time: '1 hour ago',
    icon: Users,
    color: 'text-primary'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'running':
      return 'bg-success text-success-foreground';
    case 'paused':
      return 'bg-warning text-warning-foreground';
    case 'error':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'running':
      return Play;
    case 'paused':
      return Pause;
    case 'error':
      return AlertCircle;
    default:
      return Clock;
  }
};

export default function Dashboard() {
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
                Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor and manage your AI workflows
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/flows">
                <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Workflow
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Workflows Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Your Workflows
                </h2>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      // Filter functionality
                      console.log('Open filter dialog');
                    }}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      // Search functionality
                      const searchTerm = prompt('Search workflows:');
                      if (searchTerm) {
                        console.log('Search for:', searchTerm);
                      }
                    }}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {workflows.map((workflow, index) => {
                  const StatusIcon = getStatusIcon(workflow.status);
                  return (
                    <motion.div
                      key={workflow.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="p-6 glass-effect border-border/50 hover:border-primary/50 group transition-all duration-300 hover:glow-primary">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Workflow className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {workflow.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {workflow.description}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>Last run: {workflow.lastRun}</span>
                                <span>•</span>
                                <span>{workflow.nodes} nodes</span>
                                <span>•</span>
                                <span>Trigger: {workflow.trigger}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Badge className={getStatusColor(workflow.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {workflow.status}
                            </Badge>
                            <div className="text-sm text-muted-foreground">
                              {workflow.executions.toLocaleString()} executions
                            </div>
                            <div className="text-sm text-success">
                              {workflow.success}% success
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Activity className="w-4 h-4 mr-1" />
                              Logs
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

          {/* Activity Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Recent Activity
              </h2>

              <Card className="p-6 glass-effect border-border/50">
                <div className="space-y-6">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground">
                          {activity.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {activity.description}
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          {activity.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                
                <div className="space-y-3">
                  <Link to="/flows">
                    <Button variant="outline" className="w-full justify-start group">
                      <Plus className="w-4 h-4 mr-3" />
                      Create New Workflow
                    </Button>
                  </Link>
                  <Link to="/playground">
                    <Button variant="outline" className="w-full justify-start group">
                      <Brain className="w-4 h-4 mr-3" />
                      AI Playground
                    </Button>
                  </Link>
                  <Link to="/api-keys">
                    <Button variant="outline" className="w-full justify-start group">
                      <Settings className="w-4 h-4 mr-3" />
                      Manage API Keys
                    </Button>
                  </Link>
                  <Link to="/docs">
                    <Button variant="outline" className="w-full justify-start group">
                      <Calendar className="w-4 h-4 mr-3" />
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}