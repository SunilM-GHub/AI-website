import { Users, FileText, TrendingUp, Database, Mail, ShoppingCart } from 'lucide-react';

export const workflowTemplates = [
  {
    id: 1,
    name: 'Customer Support Automation',
    description: 'Automatically categorize and respond to customer inquiries using AI',
    nodes: 8,
    category: 'Customer Service',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    tags: ['AI', 'Email', 'Support'],
    icon: Users,
    workflow: {
      nodes: [
        { id: '1', type: 'input', data: { label: 'New Support Ticket' }, position: { x: 250, y: 5 } },
        { id: '2', data: { label: 'Categorize Ticket' }, position: { x: 250, y: 105 } },
        { id: '3', data: { label: 'Route to Agent' }, position: { x: 250, y: 205 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3' },
      ],
    }
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
    icon: FileText,
    workflow: {
      nodes: [
        { id: '1', type: 'input', data: { label: 'New Topic' }, position: { x: 250, y: 5 } },
        { id: '2', data: { label: 'Generate Outline' }, position: { x: 250, y: 105 } },
        { id: '3', data: { label: 'Write Content' }, position: { x: 250, y: 205 } },
        { id: '4', type: 'output', data: { label: 'Publish Content' }, position: { x: 250, y: 305 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
      ],
    }
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
    icon: TrendingUp,
    workflow: {
        nodes: [],
        edges: []
    }
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
    icon: Database,
    workflow: {
        nodes: [],
        edges: []
    }
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
    icon: Mail,
    workflow: {
        nodes: [],
        edges: []
    }
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
    icon: ShoppingCart,
    workflow: {
        nodes: [],
        edges: []
    }
  }
];
