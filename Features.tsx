import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Smartphone,
  Globe,
  Cog
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Our AI agents process requests in milliseconds, ensuring your business operations never slow down.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security protocols protect your sensitive data and communications.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Easy integration with your existing tools and workflows. No disruption to your current processes.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting to track performance and optimize your AI agent usage.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI agents work around the clock, providing consistent service without breaks or downtime.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access and manage your AI agents from anywhere with our responsive mobile interface.",
      color: "from-teal-400 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global Scaling",
      description: "Deploy your AI agents worldwide with our global infrastructure and multi-language support.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Cog,
      title: "Custom Configuration",
      description: "Tailor each AI agent to your specific needs with extensive customization options.",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AgentFlow?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge AI technology and comprehensive feature set
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already using AgentFlow to automate and optimize their operations.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;