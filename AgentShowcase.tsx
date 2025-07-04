import React, { useState } from 'react';
import { 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Headphones, 
  TrendingUp, 
  FileText,
  ArrowRight,
  Star
} from 'lucide-react';

const AgentShowcase = () => {
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    {
      id: 1,
      name: "Customer Service Pro",
      category: "Support",
      description: "24/7 intelligent customer support that learns from every interaction",
      features: ["Multi-language support", "Sentiment analysis", "Escalation handling", "Knowledge base integration"],
      price: "$299/month",
      rating: 4.9,
      reviews: 1250,
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Analytics Genius",
      category: "Data",
      description: "Advanced data analysis and insights generation for business intelligence",
      features: ["Real-time analytics", "Predictive modeling", "Custom reports", "Data visualization"],
      price: "$499/month",
      rating: 4.8,
      reviews: 892,
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Security Guardian",
      category: "Security",
      description: "Comprehensive cybersecurity monitoring and threat detection",
      features: ["Threat detection", "Vulnerability scanning", "Incident response", "Compliance monitoring"],
      price: "$699/month",
      rating: 4.9,
      reviews: 643,
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Sales Accelerator",
      category: "Sales",
      description: "Intelligent lead qualification and sales process automation",
      features: ["Lead scoring", "Pipeline management", "Follow-up automation", "Sales forecasting"],
      price: "$399/month",
      rating: 4.7,
      reviews: 1150,
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Content Creator",
      category: "Marketing",
      description: "AI-powered content generation and marketing automation",
      features: ["Content writing", "SEO optimization", "Social media scheduling", "Campaign management"],
      price: "$349/month",
      rating: 4.8,
      reviews: 975,
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Voice Assistant Pro",
      category: "Communication",
      description: "Advanced voice-enabled AI for hands-free business operations",
      features: ["Voice recognition", "Natural language processing", "Task automation", "Integration APIs"],
      price: "$449/month",
      rating: 4.6,
      reviews: 743,
      icon: Headphones,
      color: "from-teal-500 to-blue-500",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect AI Agent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover specialized AI agents designed to tackle your specific business challenges
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
                onMouseEnter={() => setActiveAgent(index)}
              >
                {/* Agent Image/Icon */}
                <div className={`h-48 bg-gradient-to-br ${agent.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <IconComponent className="h-16 w-16 text-white/90 z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                </div>

                {/* Agent Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {agent.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{agent.rating}</span>
                      <span className="text-sm text-gray-400">({agent.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                  <p className="text-gray-600 mb-4">{agent.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {agent.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{agent.price}</div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 group">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
            View All Agents
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;