import React from 'react';

const AboutUs = () => {
  // Updated stats to reflect a consulting firm's metrics
  const stats = [
    { number: "500+", label: "Successful Transactions" },
    { number: "1,200+", label: "Properties Analyzed" },
    { number: "4+", label: "Years of Market Expertise" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  // Core values tailored to Brickland Consulting
  const values = [
    {
      icon: "🛡️",
      title: "Integrity & Trust",
      description: "Our advice is built on a foundation of honesty and transparency, ensuring your best interests are always prioritized."
    },
    {
      icon: "🎯",
      title: "Strategic Guidance",
      description: "We provide data-driven insights and expert advisory to help you navigate the complexities of the real estate market."
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "We believe in building long-term relationships, acting as your dedicated partner throughout your investment journey."
    },
    {
      icon: "⭐",
      title: "Commitment to Excellence",
      description: "We uphold the highest standards in every consultation, transaction, and client interaction."
    }
  ];

  // Team members updated to reflect actual leadership
  const team = [
    {
      name: "Jaydev Pandey",
      role: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",
      description: "A visionary leader with deep expertise in real estate investment and market strategy."
    },
    {
      name: "Mamta Pandey",
      role: "Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
      description: "Drives operational excellence and ensures a seamless, client-focused experience."
    },
    {
      name: "Ankush Talwar",
      role: "Lead Consultant",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=faces",
      description: "Specializes in commercial properties and corporate real estate solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
            <span className="text-lg mr-2">🏢</span>
            <span className="text-sm font-medium">Your Partner in Property Investment</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Strategic Real Estate 
            <span className="block text-yellow-300">Advisory</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            At Brickland Consulting, we empower individuals, investors, and corporates to make confident and rewarding property decisions through expert guidance and market intelligence.
          </p>
        </div>
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
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Redefining Real Estate Consulting
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2021, Brickland Consulting was established to bring a new level of clarity and professionalism to the Noida real estate market. We saw a need for an advisory firm that prioritizes data-driven strategies over simple transactions.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our approach is simple: we partner with our clients, providing the expertise and insights needed to navigate the complexities of property investment. We are committed to building lasting relationships based on trust and mutual success.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-xl mr-3">📈</span>
                  <span className="font-semibold text-gray-700">Data-Driven Strategy</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-xl mr-3">📍</span>
                  <span className="font-semibold text-gray-700">Noida Market Experts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522889938128-a8fb3591ac66?w=600&h=600&fit=crop" 
                  alt="Modern architectural building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-gray-600">Years of Market Leadership</div>
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
              These principles guide every consultation and shape every client relationship we build.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced professionals guiding your investment decisions.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Make Your Next Move?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you are buying, selling, or investing, our team is ready to provide the expert guidance you need. Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Explore Properties
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
