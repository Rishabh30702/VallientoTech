import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Valliento</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Expert software development and comprehensive IT support solutions 
            that drive growth, efficiency, and innovation for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Users className="w-8 h-8 text-orange-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Award className="w-8 h-8 text-orange-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <TrendingUp className="w-8 h-8 text-orange-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;