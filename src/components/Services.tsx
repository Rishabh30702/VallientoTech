import React from 'react';
import { Code, Monitor, Cloud, Smartphone, Database, Shield, Cpu, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements and objectives.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'DevOps Services', 'Infrastructure Management']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database design, optimization, and maintenance services for optimal performance.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Protect your business with comprehensive security assessments and implementation strategies.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Training']
    },
    {
      icon: Monitor,
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and proactive system maintenance to keep your operations running smoothly.',
      features: ['Help Desk Support', 'System Monitoring', 'Regular Maintenance', 'Emergency Response']
    },
    {
      icon: Cpu,
      title: 'System Administration',
      description: 'Expert management of your IT infrastructure with proactive monitoring and optimization.',
      features: ['Server Management', 'Network Administration', 'System Updates', 'Performance Monitoring']
    },
    {
      icon: Headphones,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to help you make informed decisions about your IT investments.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Cost Analysis']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and streamline your operations with cutting-edge expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;