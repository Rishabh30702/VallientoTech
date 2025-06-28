import React from 'react';
import { Target, Users, Lightbulb, Trophy, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision & Quality',
      description: 'We deliver exceptional solutions with meticulous attention to detail and unwavering commitment to quality.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Expertise',
      description: 'Staying ahead with cutting-edge technologies and innovative solutions tailored to your needs.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients across various industries and scales.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Satisfied Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Valliento</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Valliento is a forward-thinking technology company specializing in custom software development 
              and comprehensive IT support services. We empower businesses to thrive in the digital age 
              through innovative solutions and expert technical guidance.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers and IT professionals is dedicated to delivering 
              solutions that not only meet your current needs but also scale with your future growth. 
              We combine technical expertise with business acumen to create value-driven outcomes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Custom software development tailored to your business',
                'Comprehensive IT support and maintenance services',
                'Cloud solutions and digital transformation expertise',
                'Proactive approach to technology challenges'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;