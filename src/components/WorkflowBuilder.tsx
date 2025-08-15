import { useState, useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Database, 
  Mail, 
  Webhook,
  Settings,
  Play,
  Save,
  Download,
  Upload
} from 'lucide-react';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: 'Webhook Trigger',
      description: 'Receives incoming data',
      icon: Webhook,
      category: 'trigger'
    },
    position: { x: 250, y: 25 },
    className: 'workflow-node',
  },
  {
    id: '2',
    data: { 
      label: 'AI Processor',
      description: 'Process with GPT-4',
      icon: Brain,
      category: 'ai'
    },
    position: { x: 100, y: 125 },
    className: 'workflow-node',
  },
  {
    id: '3',
    data: { 
      label: 'Database Save',
      description: 'Store results',
      icon: Database,
      category: 'data'
    },
    position: { x: 400, y: 125 },
    className: 'workflow-node',
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: 'Email Notification',
      description: 'Send completion email',
      icon: Mail,
      category: 'output'
    },
    position: { x: 250, y: 250 },
    className: 'workflow-node',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];

const nodeLibrary = [
  {
    category: 'Triggers',
    nodes: [
      { type: 'webhook', label: 'Webhook', icon: Webhook, description: 'HTTP webhook trigger' },
      { type: 'schedule', label: 'Schedule', icon: Settings, description: 'Time-based trigger' },
      { type: 'email', label: 'Email', icon: Mail, description: 'Email trigger' },
    ]
  },
  {
    category: 'AI & Processing',
    nodes: [
      { type: 'openai', label: 'OpenAI GPT', icon: Brain, description: 'GPT text processing' },
      { type: 'claude', label: 'Claude', icon: Brain, description: 'Anthropic Claude AI' },
      { type: 'image-gen', label: 'Image Gen', icon: Brain, description: 'AI image generation' },
    ]
  },
  {
    category: 'Data',
    nodes: [
      { type: 'database', label: 'Database', icon: Database, description: 'Database operations' },
      { type: 'json', label: 'JSON Parser', icon: Settings, description: 'Parse JSON data' },
      { type: 'transform', label: 'Transform', icon: Settings, description: 'Data transformation' },
    ]
  },
  {
    category: 'Output',
    nodes: [
      { type: 'email-send', label: 'Send Email', icon: Mail, description: 'Send email notification' },
      { type: 'webhook-send', label: 'Webhook', icon: Webhook, description: 'HTTP request' },
      { type: 'slack', label: 'Slack', icon: Mail, description: 'Slack notification' },
    ]
  }
];

export default function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isExecuting, setIsExecuting] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = (event.target as Element).getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode: Node = {
        id: `${nodes.length + 1}`,
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes],
  );

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const executeWorkflow = async () => {
    setIsExecuting(true);
    // Simulate workflow execution
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsExecuting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="h-screen flex">
        {/* Node Library Sidebar */}
        <div className="w-80 border-r border-border/50 bg-muted/20 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Workflow Builder
            </h2>
            <p className="text-sm text-muted-foreground">
              Drag nodes to create your workflow
            </p>
          </div>

          <div className="space-y-6">
            {nodeLibrary.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.nodes.map((node) => (
                    <div
                      key={node.type}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-accent cursor-grab active:cursor-grabbing transition-colors duration-200 border border-border/50"
                      draggable
                      onDragStart={(event) => onDragStart(event, node.type)}
                    >
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <node.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground">
                          {node.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {node.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Canvas */}
        <div className="flex-1 relative">
          {/* Toolbar */}
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
            <Button
              onClick={executeWorkflow}
              disabled={isExecuting}
              className="bg-gradient-primary hover:opacity-90"
            >
              <Play className="w-4 h-4 mr-2" />
              {isExecuting ? 'Executing...' : 'Run Workflow'}
            </Button>
            <Button variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            className="bg-background"
          >
            <MiniMap 
              nodeColor={(node) => {
                switch (node.data?.category) {
                  case 'trigger': return '#10b981';
                  case 'ai': return '#8b5cf6';
                  case 'data': return '#3b82f6';
                  case 'output': return '#f59e0b';
                  default: return '#6b7280';
                }
              }}
              className="bg-muted/50"
            />
            <Controls className="bg-card border border-border" />
            <Background 
              color="#374151" 
              gap={20} 
              size={1}
              className="opacity-20"
            />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}