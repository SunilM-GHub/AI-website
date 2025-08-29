import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import OpenAI from 'openai';
import { Link } from 'react-router-dom';
import { 
  Plus,
  Play, 
  Zap, 
  Brain, 
  Settings, 
  Copy, 
  Download, 
  Share,
  Sparkles,
  Image,
  FileText,
  Music,
  Video,
  Code,
  Languages,
  Lightbulb,
  Wand2
} from 'lucide-react';

const aiModels = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI', type: 'text', description: 'Most capable GPT model' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI', type: 'text', description: 'Fast and efficient' },
  { id: 'claude-3', name: 'Claude 3', provider: 'Anthropic', type: 'text', description: 'Constitutional AI' },
  { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google', type: 'text', description: 'Google\'s latest model' },
  { id: 'dall-e-3', name: 'DALL-E 3', provider: 'OpenAI', type: 'image', description: 'Advanced image generation' },
  { id: 'midjourney', name: 'Midjourney', provider: 'Midjourney', type: 'image', description: 'Artistic image creation' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', provider: 'Stability AI', type: 'image', description: 'Open source image model' },
  { id: 'whisper', name: 'Whisper', provider: 'OpenAI', type: 'audio', description: 'Speech recognition' },
];

const promptTemplates = [
  {
    category: 'Writing',
    icon: FileText,
    color: 'text-primary',
    templates: [
      { name: 'Blog Post', prompt: 'Write a comprehensive blog post about [topic]. Include an engaging introduction, 3-4 main sections with subheadings, and a compelling conclusion.' },
      { name: 'Email Campaign', prompt: 'Create a professional email campaign for [product/service]. Include subject line, greeting, value proposition, call-to-action, and closing.' },
      { name: 'Social Media Post', prompt: 'Write an engaging social media post about [topic] that will drive engagement. Include relevant hashtags and a clear call-to-action.' },
      { name: 'Product Description', prompt: 'Write a compelling product description for [product] that highlights key features, benefits, and addresses potential customer concerns.' }
    ]
  },
  {
    category: 'Analysis',
    icon: Brain,
    color: 'text-secondary',
    templates: [
      { name: 'Data Analysis', prompt: 'Analyze the following data and provide insights, trends, and recommendations: [data]' },
      { name: 'Competitor Research', prompt: 'Conduct a competitive analysis of [company/product] compared to [competitors]. Include strengths, weaknesses, and market positioning.' },
      { name: 'SWOT Analysis', prompt: 'Perform a SWOT analysis for [company/product]. Identify strengths, weaknesses, opportunities, and threats.' },
      { name: 'Market Research', prompt: 'Research the market for [product/service]. Include target audience, market size, trends, and key players.' }
    ]
  },
  {
    category: 'Creative',
    icon: Sparkles,
    color: 'text-accent',
    templates: [
      { name: 'Story Writing', prompt: 'Write a creative story about [theme/character]. Include vivid descriptions, engaging dialogue, and a compelling plot.' },
      { name: 'Brainstorming', prompt: 'Generate 10 creative ideas for [topic/problem]. Think outside the box and provide unique, innovative solutions.' },
      { name: 'Campaign Ideas', prompt: 'Create 5 creative marketing campaign ideas for [product/service]. Include theme, target audience, and execution strategy.' },
      { name: 'Image Prompts', prompt: 'Create detailed image generation prompts for [concept]. Include style, lighting, composition, and artistic elements.' }
    ]
  },
  {
    category: 'Technical',
    icon: Code,
    color: 'text-warning',
    templates: [
      { name: 'Code Review', prompt: 'Review the following code and provide feedback on best practices, potential issues, and optimization suggestions: [code]' },
      { name: 'API Documentation', prompt: 'Create comprehensive API documentation for [endpoint]. Include description, parameters, request/response examples, and error codes.' },
      { name: 'Technical Explanation', prompt: 'Explain [technical concept] in simple terms that a non-technical person can understand. Use analogies and examples.' },
      { name: 'Debugging Help', prompt: 'Help debug this issue: [problem description]. Provide step-by-step troubleshooting and potential solutions.' }
    ]
  }
];

export default function Playground() {
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([1000]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [apiKey, setApiKey] = useState('');

  const currentModel = aiModels.find(model => model.id === selectedModel);

  const handleRunPrompt = async () => {
    if (!prompt.trim()) return;

    if (selectedModel === 'gpt-4' && !apiKey.trim()) {
      toast.error('Please enter your OpenAI API key.');
      return;
    }
    
    setIsLoading(true);
    setResponse('');
    
    try {
      if (selectedModel === 'gpt-4') {
        const openai = new OpenAI({
          apiKey: apiKey,
          dangerouslyAllowBrowser: true,
        });

        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          model: 'gpt-4',
          temperature: temperature[0],
          max_tokens: maxTokens[0],
        });

        setResponse(chatCompletion.choices[0].message.content || '');
      } else {
        // Simulate real API call with more realistic response
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate different types of responses based on the model type
        let simulatedResponse = '';

        if (currentModel?.type === 'image') {
          simulatedResponse = `🎨 Image Generation Result:

Prompt: "${prompt}"
Model: ${currentModel?.name}
Parameters: Temperature: ${temperature[0]}, Max Tokens: ${maxTokens[0]}

✅ Image successfully generated! 
📸 Resolution: 1024x1024px
🎯 Style: High quality, detailed
⚡ Processing time: 8.2 seconds

In a real implementation, the generated image would appear here with download and edit options.`;
        } else {
          simulatedResponse = `🤖 AI Response from ${currentModel?.name}:

Based on your prompt: "${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}"

This is a comprehensive AI-generated response that demonstrates the model's capabilities. The response quality and style vary based on:

📊 Model Parameters:
• Temperature: ${temperature[0]} (${temperature[0] < 0.3 ? 'Focused' : temperature[0] > 1.5 ? 'Creative' : 'Balanced'})
• Max Tokens: ${maxTokens[0]}
• Model: ${currentModel?.name} (${currentModel?.provider})

🔧 Response Characteristics:
• Coherent and contextually relevant
• Follows the specified tone and style
• Incorporates domain-specific knowledge
• Maintains consistency throughout

💡 Real Implementation Features:
✅ Streaming responses for real-time feedback
✅ Token usage tracking and cost estimation
✅ Response caching for efficiency
✅ Multi-turn conversation support
✅ Custom fine-tuning options

This playground environment allows you to test and optimize your prompts before deploying them in production workflows.`;
        }

        setResponse(simulatedResponse);
      }
    } catch (error: any) {
      if (error.response) {
        setResponse(`❌ Error: ${error.response.data.error.message}`);
      } else {
        setResponse(`❌ Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const useTemplate = (template: any) => {
    setPrompt(template.prompt);
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
                AI Playground
              </h1>
              <p className="text-muted-foreground">
                Test and experiment with different AI models and prompts
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-secondary text-secondary-foreground border-none">
                <Sparkles className="w-4 h-4 mr-2" />
                Interactive Testing
              </Badge>
              <Button asChild className="bg-gradient-primary hover:opacity-90 glow-primary">
                <Link to="/builder">
                  <Plus className="w-4 h-4 mr-2" />
                  Create from Scratch
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Template Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 glass-effect border-border/50 sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Prompt Templates
              </h3>
              
              <div className="space-y-1 mb-6">
                {promptTemplates.map((category, index) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(index)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                      selectedCategory === index 
                        ? 'bg-primary/20 text-primary' 
                        : 'hover:bg-muted/50 text-muted-foreground'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="font-medium">{category.category}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {promptTemplates[selectedCategory]?.templates.map((template, index) => (
                  <motion.div
                    key={template.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => useTemplate(template)}
                      className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                        {template.name}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {template.prompt.substring(0, 80)}...
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Main Playground */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Card className="p-6 glass-effect border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      Input
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* TODO: Implement tips functionality */}
                      <Button variant="outline" size="sm" disabled>
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Tips
                      </Button>
                      {/* TODO: Implement enhance functionality */}
                      <Button variant="outline" size="sm" disabled>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Enhance
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        AI Model
                      </label>
                      <Select value={selectedModel} onValueChange={setSelectedModel}>
                        <SelectTrigger className="bg-muted/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {aiModels.map((model) => (
                            <SelectItem key={model.id} value={model.id}>
                              <div className="flex items-center space-x-2">
                                <Badge variant="secondary" className="text-xs">
                                  {model.provider}
                                </Badge>
                                <span>{model.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {currentModel && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {currentModel.description}
                        </p>
                      )}
                    </div>

                    {selectedModel === 'gpt-4' && (
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          OpenAI API Key
                        </label>
                        <Input
                          type="password"
                          placeholder="Enter your OpenAI API key"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="bg-muted/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Prompt
                      </label>
                      <Textarea
                        placeholder="Enter your prompt here... Be specific and clear about what you want the AI to do."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-32 bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <Button 
                      onClick={handleRunPrompt}
                      disabled={!prompt.trim() || isLoading}
                      className="w-full bg-gradient-primary hover:opacity-90 glow-primary"
                    >
                      {isLoading ? (
                        <>
                          <Zap className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Run Prompt
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Settings Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6 glass-effect border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Model Settings
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Temperature: {temperature[0]}
                      </label>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={2}
                        min={0}
                        step={0.1}
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Controls randomness. Lower = more focused, Higher = more creative
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Max Tokens: {maxTokens[0]}
                      </label>
                      <Slider
                        value={maxTokens}
                        onValueChange={setMaxTokens}
                        max={4000}
                        min={50}
                        step={50}
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Maximum length of the response
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        Quick Actions
                      </h4>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            navigator.clipboard.writeText(prompt);
                            toast('Prompt copied to clipboard');
                          }}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Prompt
                        </Button>
                        {/* TODO: Implement share setup functionality */}
                        <Button variant="outline" size="sm" className="w-full justify-start" disabled>
                          <Share className="w-4 h-4 mr-2" />
                          Share Setup
                        </Button>
                        {/* TODO: Implement save preset functionality */}
                        <Button variant="outline" size="sm" className="w-full justify-start" disabled>
                          <Settings className="w-4 h-4 mr-2" />
                          Save Preset
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Card className="p-6 glass-effect border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Output
                  </h2>
                  {response && (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(response);
                          toast('Response copied to clipboard');
                        }}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      {/* TODO: Implement export functionality */}
                      <Button variant="outline" size="sm" disabled>
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <Zap className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
                      <p className="text-muted-foreground">
                        Processing your request...
                      </p>
                    </div>
                  </div>
                ) : response ? (
                  <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                    <pre className="whitespace-pre-wrap text-foreground font-mono text-sm leading-relaxed">
                      {response}
                    </pre>
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-12 text-center">
                    <div>
                      <Brain className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Enter a prompt and click "Run Prompt" to see the AI response
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}