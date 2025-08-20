import React, { useState, useEffect, useMemo } from 'react';

// --- ICONS (You can use a library like lucide-react or SVGs) ---
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const BedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16h20V4Z"/><path d="M2 10h20"/><path d="M12 4v6"/></svg>;
const BathIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6 9l-3 3v6h6l3-3 3-3"/><path d="m18 15-3-3 3.4-3.4a2.1 2.1 0 1 1 3 3L18 15Z"/><path d="M2 22H1l-1-1"/><path d="m20 6 2-2"/><path d="M20 10h2"/><path d="M7 15v2"/><path d="M7 20h2"/></svg>;
const AreaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v18h18V3Z"/><path d="M15 3v18"/><path d="M9 3v18"/><path d="M3 15h18"/><path d="M3 9h18"/></svg>;


// --- MOCK DATA (Replace with your actual API call) ---
const allProperties = [
    { id: 1, name: "Modern Downtown Loft", type: "Apartment", location: "Sector 150, Noida", price: 25000000, beds: 3, baths: 2, area: 1800, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop", amenities: ["Pool", "Gym"] },
    { id: 2, name: "Luxury Villa with Pool", type: "Villa", location: "Sector 44, Noida", price: 78000000, beds: 5, baths: 5, area: 5000, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", amenities: ["Pool", "Gym", "Garden"] },
    { id: 3, name: "Cozy Suburban Home", type: "Independent House", location: "Greater Noida West", price: 12000000, beds: 4, baths: 3, area: 2200, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop", amenities: ["Garden"] },
    { id: 4, name: "High-Rise Apartment", type: "Apartment", location: "Sector 78, Noida", price: 9500000, beds: 2, baths: 2, area: 1250, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop", amenities: ["Gym"] },
    { id: 5, name: "Builder Floor", type: "Independent Floor", location: "Sector 50, Noida", price: 18000000, beds: 3, baths: 3, area: 2000, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop", amenities: [] },
    { id: 6, name: "Penthouse with Terrace", type: "Penthouse", location: "Sector 137, Noida", price: 35000000, beds: 4, baths: 4, area: 3500, image: "https://images.unsplash.com/photo-1594484208280-efa0a7c42534?w=600&h=400&fit=crop", amenities: ["Pool", "Gym", "Garden"] },
];

// Reusable Property Card Component
const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img src={property.image} alt={property.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{property.type}</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">₹ {property.price.toLocaleString('en-IN')}</p>
            <div className="flex justify-between text-gray-600 border-t pt-4">
                <span className="flex items-center gap-2"><BedIcon /> {property.beds} Beds</span>
                <span className="flex items-center gap-2"><BathIcon /> {property.baths} Baths</span>
                <span className="flex items-center gap-2"><AreaIcon /> {property.area} sqft</span>
            </div>
        </div>
    </div>
);

// Main Search Page Component
const SearchPropertiesPage = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        keyword: '',
        type: 'any',
        priceRange: 100000000,
        amenities: [],
    });

    useEffect(() => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            let filtered = allProperties;

            if (filters.keyword) {
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(filters.keyword.toLowerCase()) || 
                    p.location.toLowerCase().includes(filters.keyword.toLowerCase())
                );
            }
            if (filters.type !== 'any') {
                filtered = filtered.filter(p => p.type === filters.type);
            }
            filtered = filtered.filter(p => p.price <= filters.priceRange);
            if (filters.amenities.length > 0) {
                filtered = filtered.filter(p => filters.amenities.every(amenity => p.amenities.includes(amenity)));
            }

            setProperties(filtered);
            setIsLoading(false);
        }, 500);
    }, [filters]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleAmenityChange = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => {
            const amenities = checked 
                ? [...prev.amenities, value] 
                : prev.amenities.filter(a => a !== value);
            return { ...prev, amenities };
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* --- FILTERS SIDEBAR --- */}
                    <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md h-fit">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><FilterIcon /><span className="ml-2">Filters</span></h2>
                        
                        {/* Property Type */}
                        <div className="mb-6">
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                            <select id="type" name="type" value={filters.type} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="any">Any Type</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Villa">Villa</option>
                                <option value="Independent House">Independent House</option>
                                <option value="Independent Floor">Independent Floor</option>
                                <option value="Penthouse">Penthouse</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="mb-6">
                            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">Price Range (Up to ₹{Number(filters.priceRange).toLocaleString('en-IN')})</label>
                            <input type="range" id="priceRange" name="priceRange" min="5000000" max="100000000" step="5000000" value={filters.priceRange} onChange={handleInputChange} className="w-full" />
                        </div>

                        {/* Amenities */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                            <div className="space-y-2">
                                {["Pool", "Gym", "Garden"].map(amenity => (
                                    <div key={amenity} className="flex items-center">
                                        <input id={amenity} name="amenities" type="checkbox" value={amenity} onChange={handleAmenityChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                                        <label htmlFor={amenity} className="ml-2 block text-sm text-gray-900">{amenity}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* --- SEARCH RESULTS --- */}
                    <main className="lg:col-span-3">
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <input
                                type="text"
                                name="keyword"
                                value={filters.keyword}
                                onChange={handleInputChange}
                                placeholder="Search by property name, location, or keyword..."
                                className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <SearchIcon />
                            </div>
                        </div>

                        {/* Results Grid */}
                        {isLoading ? (
                            <div className="text-center py-12"><p>Loading...</p></div>
                        ) : properties.length > 0 ? (
                            <>
                                <p className="text-gray-600 mb-4">Showing {properties.length} results</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {properties.map(property => (
                                        <PropertyCard key={property.id} property={property} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold">No Properties Found</h3>
                                <p className="mt-2 text-gray-600">Try adjusting your search filters.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SearchPropertiesPage;
