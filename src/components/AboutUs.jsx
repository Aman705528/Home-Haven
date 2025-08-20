import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: "10,000+", label: "Happy Tenants" },
    { number: "5,000+", label: "Properties Listed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Trust & Security",
      description: "Every property is verified and all transactions are secure, giving you peace of mind."
    },
    {
      icon: "❤️",
      title: "Personal Touch",
      description: "We treat every client like family, providing personalized service tailored to your needs."
    },
    {
      icon: "⏰",
      title: "24/7 Support",
      description: "Our dedicated team is always available to help you with any questions or concerns."
    },
    {
      icon: "⭐",
      title: "Quality First",
      description: "We maintain the highest standards in property selection and customer service."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "15+ years in real estate with a passion for helping families find their perfect home."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in property management with a focus on streamlining rental processes."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Dedicated to ensuring every client has an exceptional rental experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
            <span className="text-lg mr-2">🏠</span>
            <span className="text-sm font-medium">Your Trusted Real Estate Partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Making Home Dreams{' '}
            <span className="block text-yellow-300">Come True</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we&apos;ve been connecting families with their perfect homes. 
            From cozy apartments to luxury estates, we&apos;re here to make your rental journey seamless and memorable.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6">
                <span className="text-sm mr-2">👥</span>
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built on Trust, Driven by Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small family business has grown into one of the most trusted names in real estate. 
                We believe that finding a home should be exciting, not stressful. That&apos;s why we&apos;ve built our entire 
                business around making the rental process as smooth and transparent as possible.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every property in our portfolio is carefully selected and thoroughly vetted. We work with landlords 
                who share our commitment to quality and with tenants who become part of our extended family.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-xl mr-3">🏆</span>
                  <span className="font-semibold text-gray-700">Award Winning Service</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-xl mr-3">📍</span>
                  <span className="font-semibold text-gray-700">Local Expertise</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" 
                  alt="Modern home interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape every interaction we have with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals who make your home dreams a reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied tenants who found their perfect home with us. 
            Let&apos;s start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Browse Properties
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;