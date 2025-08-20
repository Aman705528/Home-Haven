import React, { useState, useEffect } from 'react';

// --- ICONS (Moved outside the main component for better organization) ---
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

// --- REUSABLE SUB-COMPONENTS ---

// User Profile Card Component
const UserProfileCard = ({ user }) => (
  <section className="bg-white p-6 rounded-xl shadow-md text-center">
    <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-blue-100"/>
    <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
    <p className="text-gray-500">{user.email}</p>
    <button className="mt-4 w-full bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center">
      <UserIcon /> <span className="ml-2">Edit Profile</span>
    </button>
  </section>
);

// Stat Card Component
const StatCard = ({ stat }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
      {stat.icon}
    </div>
    <div>
      <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
      <p className="text-gray-500">{stat.label}</p>
    </div>
  </div>
);

// Property Card Component
const PropertyCard = ({ property }) => (
  <div className="flex flex-col sm:flex-row items-center group">
    <img src={property.image} alt={property.name} className="w-full sm:w-40 h-32 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"/>
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{property.name}</h3>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">{property.price}</p>
    </div>
    <button className="mt-4 sm:mt-0 w-full sm:w-auto bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
      View Details
    </button>
  </div>
);


// --- MAIN DASHBOARD COMPONENT ---

const Dashboard = () => {
  // State for holding the fetched data, loading status, and errors
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Simulating an API call
    const fetchDashboardData = () => {
      setTimeout(() => {
        try {
          // Mock data that would normally come from an API
          const mockApiData = {
            user: {
              name: "Ankit Sharma",
              email: "ankit.sharma@example.com",
              avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=faces"
            },
            stats: [
              { number: 12, label: "Properties Saved", icon: <HeartIcon /> },
              { number: 5, label: "Active Inquiries", icon: <MessageSquareIcon /> },
              { number: 2, label: "Scheduled Tours", icon: <HomeIcon /> }
            ],
            savedProperties: [
              { id: 1, name: "Modern Downtown Loft", location: "Sector 150, Noida", price: "₹ 2.5 Cr", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop" },
              { id: 2, name: "Luxury Villa with Pool", location: "Sector 44, Noida", price: "₹ 7.8 Cr", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
              { id: 3, name: "Cozy Suburban Home", location: "Greater Noida West", price: "₹ 1.2 Cr", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop" }
            ]
          };
          setDashboardData(mockApiData);
        } catch (err) {
          setError("Failed to fetch dashboard data. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      }, 1500); // Simulate a 1.5-second network delay
    };

    fetchDashboardData();
  }, []); // Empty dependency array means this runs once on mount

  // --- RENDER LOGIC ---

  // Display a loading message while fetching data
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading your dashboard...</p>
      </div>
    );
  }

  // Display an error message if the fetch fails
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  // Render the dashboard once data is available
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {dashboardData.user.name.split(' ')[0]}!</h1>
          <p className="text-lg text-gray-600">Here's your personalized dashboard. Let's find your next property.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <UserProfileCard user={dashboardData.user} />
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Activity</h2>
              <div className="space-y-4">
                {dashboardData.stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-2">
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Your Saved Properties</h2>
                <button className="text-blue-600 font-semibold hover:underline">View All</button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="space-y-6">
                  {dashboardData.savedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
