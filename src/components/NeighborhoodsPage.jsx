import React from 'react';

// --- ICONS (You can use a library like lucide-react or SVGs) ---
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>;
const TreeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10.766 12 4l2 6.766"/><path d="M12 22V8.889"/><path d="M4 12h16"/></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;

// --- MOCK DATA (Replace with your actual data) ---
const neighborhoods = [
    {
        id: 1,
        name: "Sector 150, Noida",
        tagline: "The Greenest Sector of Noida",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
        highlights: [
            { icon: <TreeIcon />, text: "80% Green Area" },
            { icon: <BuildingIcon />, text: "Premium High-Rises" },
            { icon: <ShoppingCartIcon />, text: "Upcoming Retail Hubs" }
        ],
        description: "Known for its vast green landscapes and luxurious residential projects, Sector 150 offers a serene and upscale living experience with excellent connectivity."
    },
    {
        id: 2,
        name: "Sector 44, Noida",
        tagline: "Posh & Centrally Located",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        highlights: [
            { icon: <BuildingIcon />, text: "Luxury Villas & Apartments" },
            { icon: <ShoppingCartIcon />, text: "Close to Malls" },
            { icon: <TreeIcon />, text: "Well-Maintained Parks" }
        ],
        description: "A prime residential area offering a mix of luxury villas and high-end apartments. Its central location provides easy access to top schools, hospitals, and entertainment."
    },
    {
        id: 3,
        name: "Greater Noida West",
        tagline: "Affordable & Well-Connected",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
        highlights: [
            { icon: <BuildingIcon />, text: "Modern Apartments" },
            { icon: <ShoppingCartIcon />, text: "Developing Infrastructure" },
            { icon: <TreeIcon />, text: "Numerous Parks" }
        ],
        description: "A rapidly developing region offering a wide range of affordable housing options. It boasts excellent connectivity to Noida, Delhi, and Ghaziabad."
    },
    {
        id: 4,
        name: "Sector 78, Noida",
        tagline: "Vibrant & Family-Friendly",
        image: "https://images.unsplash.com/photo-1600585152225-3579fe9d7ae9?w=800&h=600&fit=crop",
        highlights: [
            { icon: <BuildingIcon />, text: "High-Rise Societies" },
            { icon: <ShoppingCartIcon />, text: "Local Markets" },
            { icon: <TreeIcon />, text: "Community Parks" }
        ],
        description: "A bustling residential sector with a plethora of high-rise apartments. It's a self-sufficient area with schools, markets, and recreational facilities."
    }
];

// Reusable Neighborhood Card Component
const NeighborhoodCard = ({ neighborhood }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
            <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{neighborhood.name}</h3>
                <p className="text-yellow-300 font-semibold">{neighborhood.tagline}</p>
            </div>
        </div>
        <div className="p-6">
            <p className="text-gray-600 mb-4">{neighborhood.description}</p>
            <div className="space-y-2 mb-6">
                {neighborhood.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                        <span className="text-blue-500 mr-3">{highlight.icon}</span>
                        <span>{highlight.text}</span>
                    </div>
                ))}
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Properties
            </button>
        </div>
    </div>
);

// Main Neighborhoods Page Component
const NeighborhoodsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-700 to-blue-500 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 mb-6">
                        <span className="text-lg mr-2"><MapPinIcon /></span>
                        <span className="text-sm font-medium">Explore the Best Localities</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Discover Your Neighborhood
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        From serene green sectors to vibrant urban hubs, find the perfect neighborhood in Noida that fits your lifestyle and aspirations.
                    </p>
                </div>
            </section>

            {/* Neighborhoods Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {neighborhoods.map(neighborhood => (
                        <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default NeighborhoodsPage;
