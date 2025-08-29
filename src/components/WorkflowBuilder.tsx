import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { workflowTemplates } from '@/lib/templates';
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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import CustomNode from '@/components/CustomNode';
import { 
  Brain, 
  Database, 
  Mail, 
  Webhook,
  Settings,
  Play,
  Save,
  Download,
  Upload,
  Menu
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
    className: 'workflow-node bg-card border-2 border-secondary text-foreground shadow-lg',
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
    className: 'workflow-node bg-card border-2 border-accent text-foreground shadow-lg',
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
    className: 'workflow-node bg-card border-2 border-warning text-foreground shadow-lg',
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
  const location = useLocation();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isExecuting, setIsExecuting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nodeTypes = {
    'webhook': CustomNode,
    'schedule': CustomNode,
    'email': CustomNode,
    'openai': CustomNode,
    'claude': CustomNode,
    'image-gen': CustomNode,
    'database': CustomNode,
    'json': CustomNode,
    'transform': CustomNode,
    'email-send': CustomNode,
    'webhook-send': CustomNode,
    'slack': CustomNode,
  };

  const { id } = useParams();

  useEffect(() => {
    console.log('WorkflowBuilder mounted');
    if (containerRef.current) {
      console.log('Container dimensions:', containerRef.current.getBoundingClientRect());
    }

    let template;
    if (id) {
      console.log(`Fetching template with id: ${id}`);
      template = workflowTemplates.find((t) => t.id === parseInt(id));
      if (!template) {
        setError(`Template with id ${id} not found.`);
      }
    } else if (location.state && location.state.template) {
      console.log('Loading template from location state');
      template = location.state.template;
    }

    if (template && template.workflow) {
      console.log(`Loading template: ${template.name}`);
      const templateNodes = template.workflow.nodes.map((node: any) => ({
        ...node,
        id: node.id.toString(),
      }));
      const templateEdges = template.workflow.edges.map((edge: any) => ({
        ...edge,
        id: `e${edge.source}-${edge.target}`,
      }));
      setNodes(templateNodes);
      setEdges(templateEdges);
      toast.success(`Loaded template: ${template.name}`);
      setError(null);
    } else if (!id) {
      console.log('Loading initial nodes');
      setNodes(initialNodes);
      setEdges(initialEdges);
      setError(null);
    }
  }, [id, location.state, setNodes, setEdges]);

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
    try {
      // Simulate workflow execution with proper steps
      console.log('Starting workflow execution...');
      
      // Step 1: Validate nodes
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Nodes validated');
      
      // Step 2: Execute workflow steps
      for (let i = 0; i < nodes.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log(`Executing node: ${nodes[i].data.label}`);
      }
      
      console.log('Workflow completed successfully!');
    } catch (error) {
      console.error('Workflow execution failed:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <div className="h-screen flex">
          <Sidebar>
            <SidebarHeader>
              <h2 className="text-xl font-semibold text-foreground">
                Workflow Builder
              </h2>
              <p className="text-sm text-muted-foreground">
                Drag nodes to create your workflow
              </p>
            </SidebarHeader>
            <SidebarContent className="p-4">
              <div className="space-y-6">
                <Button
                  variant={selectedCategory === null ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Nodes
                </Button>
                {nodeLibrary.map((category) => (
                  <div key={category.category}>
                    <h3
                      className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider cursor-pointer hover:text-primary"
                      onClick={() => setSelectedCategory(category.category)}
                    >
                      {category.category}
                    </h3>
                    {(selectedCategory === null || selectedCategory === category.category) && (
                      <div className="space-y-2">
                        {category.nodes.map((node) => (
                          <div
                            key={node.type}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-accent cursor-grab active:cursor-grabbing transition-colors duration-200 border border-border/50 hover:border-primary/50"
                            draggable
                            onDragStart={(event) => onDragStart(event, node.type)}
                          >
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    )}
                  </div>
                ))}
              </div>
            </SidebarContent>
          </Sidebar>

          <SidebarInset>
            <div className="flex-1 relative h-full" ref={containerRef}>
              {error ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-destructive mb-4">Error</h2>
                    <p className="text-muted-foreground">{error}</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Toolbar */}
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                 <SidebarTrigger className="md:hidden">
                    <Menu className="w-6 h-6" />
                 </SidebarTrigger>
                <Button
                  onClick={executeWorkflow}
                  disabled={isExecuting}
                  className="bg-gradient-primary hover:opacity-90 cursor-pointer"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isExecuting ? 'Executing...' : 'Run Workflow'}
                </Button>
                <Button variant="outline" onClick={() => toast.info('Save functionality not implemented yet.')}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" onClick={() => toast.info('Export functionality not implemented yet.')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" onClick={() => toast.info('Import functionality not implemented yet.')}>
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
                nodeTypes={nodeTypes}
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
                </>
              )}
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
