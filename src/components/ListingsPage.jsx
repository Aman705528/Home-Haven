import React, { useState, useEffect, useMemo } from 'react';

// --- ICONS (You can use a library like lucide-react or SVGs) ---
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const BedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16h20V4Z"/><path d="M2 10h20"/><path d="M12 4v6"/></svg>;
const BathIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6 9l-3 3v6h6l3-3 3-3"/><path d="m18 15-3-3 3.4-3.4a2.1 2.1 0 1 1 3 3L18 15Z"/><path d="M2 22H1l-1-1"/><path d="m20 6 2-2"/><path d="M20 10h2"/><path d="M7 15v2"/><path d="M7 20h2"/></svg>;
const AreaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v18h18V3Z"/><path d="M15 3v18"/><path d="M9 3v18"/><path d="M3 15h18"/><path d="M3 9h18"/></svg>;

// --- MOCK DATA (Replace with your actual API call) ---
const allProperties = [
    { id: 1, name: "Modern Downtown Loft", location: "Sector 150, Noida", price: 25000000, beds: 3, baths: 2, area: 1800, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop" },
    { id: 2, name: "Luxury Villa with Pool", location: "Sector 44, Noida", price: 78000000, beds: 5, baths: 5, area: 5000, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
    { id: 3, name: "Cozy Suburban Home", location: "Greater Noida West", price: 12000000, beds: 4, baths: 3, area: 2200, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop" },
    { id: 4, name: "High-Rise Apartment", location: "Sector 78, Noida", price: 9500000, beds: 2, baths: 2, area: 1250, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
    { id: 5, name: "Independent Builder Floor", location: "Sector 50, Noida", price: 18000000, beds: 3, baths: 3, area: 2000, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop" },
    { id: 6, name: "Penthouse with Terrace", location: "Sector 137, Noida", price: 35000000, beds: 4, baths: 4, area: 3500, image: "https://images.unsplash.com/photo-1594484208280-efa0a7c42534?w=600&h=400&fit=crop" },
    { id: 7, name: "Studio Apartment", location: "Sector 18, Noida", price: 6500000, beds: 1, baths: 1, area: 800, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop" },
    { id: 8, name: "Spacious Duplex", location: "Sector 100, Noida", price: 22000000, beds: 4, baths: 3, area: 2500, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop" },
];

// Reusable Property Card Component
const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img src={property.image} alt={property.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">For Sale</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">
                ₹ {property.price.toLocaleString('en-IN')}
            </p>
            <div className="flex justify-between text-gray-600 border-t pt-4">
                <span className="flex items-center gap-2"><BedIcon /> {property.beds} Beds</span>
                <span className="flex items-center gap-2"><BathIcon /> {property.baths} Baths</span>
                <span className="flex items-center gap-2"><AreaIcon /> sqft</span>
            </div>
        </div>
    </div>
);

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <nav className="flex justify-center items-center space-x-2 mt-12">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white text-gray-700 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-md shadow-sm ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white text-gray-700 rounded-md shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </nav>
    );
};

// Main Listings Page Component
const ListingsPage = () => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        location: '',
        price: 'any',
        beds: 'any'
    });
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    // Memoize the filtered properties to avoid re-calculation on every render
    const propertiesToDisplay = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredProperties.slice(startIndex, endIndex);
    }, [currentPage, filteredProperties]);

    // Effect for filtering data when filters change
    useEffect(() => {
        setIsLoading(true);
        const fetchProperties = () => {
            setTimeout(() => {
                let filtered = allProperties;

                if (filters.location) {
                    filtered = filtered.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
                }
                if (filters.price !== 'any') {
                    filtered = filtered.filter(p => p.price <= parseInt(filters.price));
                }
                if (filters.beds !== 'any') {
                    filtered = filtered.filter(p => p.beds >= parseInt(filters.beds));
                }

                setFilteredProperties(filtered);
                setCurrentPage(1); // Reset to first page on new filter
                setIsLoading(false);
            }, 1000);
        };

        fetchProperties();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Property</h1>
                    <div className="bg-white p-4 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-2">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><SearchIcon /></div>
                                <input type="text" name="location" id="location" value={filters.location} onChange={handleFilterChange} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md" placeholder="Search by city or sector..." />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Max Price</label>
                            <select id="price" name="price" value={filters.price} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md">
                                <option value="any">Any Price</option>
                                <option value="10000000">Up to ₹1 Cr</option>
                                <option value="20000000">Up to ₹2 Cr</option>
                                <option value="50000000">Up to ₹5 Cr</option>
                                <option value="100000000">Up to ₹10 Cr</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="beds" className="block text-sm font-medium text-gray-700">Min Bedrooms</label>
                            <select id="beds" name="beds" value={filters.beds} onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md">
                                <option value="any">Any</option>
                                <option value="1">1+ Beds</option>
                                <option value="2">2+ Beds</option>
                                <option value="3">3+ Beds</option>
                                <option value="4">4+ Beds</option>
                                <option value="5">5+ Beds</option>
                            </select>
                        </div>
                    </div>
                </header>

                <main>
                    {isLoading ? (
                        <div className="text-center py-12"><p className="text-lg text-gray-600">Searching for properties...</p></div>
                    ) : propertiesToDisplay.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {propertiesToDisplay.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">No Properties Found</h3>
                            <p className="text-gray-600 mt-2">Try adjusting your search filters to find what you're looking for.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ListingsPage;