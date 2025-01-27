import { useState ,useContext} from 'react';
import React from 'react';
import { X } from 'lucide-react';
import DataContext from './context/dataContext'
import WatchesByBrand from './WatchesByBrand';
const FilterSlide = () => { 
    const [selectedBrand, setSelectedBrand] = useState("All");
    // const [selectedCategory, setSelectedCategory] = useState("All");
    const {selectedCategory,setSelectedCategory,isFilterOpen,setIsFilterOpen}=useContext(DataContext)
    const [filters, setFilters] = useState({
      minPrice: 0,
      maxPrice: 15000,
      caseMaterial: [],
      strapMaterial: [],
      strapColor: [],
      caseShape: [],
      waterResistantDepth: 0,
    });
    const [favorites, setFavorites] = useState([]);
    const [compare, setCompare] = useState([]);
    const [sortOption, setSortOption] = useState("Price: Low to High");
    const [currentPage, setCurrentPage] = useState(1);
    const watchesPerPage = 8;
    const [showDetails, setShowDetails] = useState(null);
    const {dataset,setAddtocard,addtocard}=useContext(DataContext)
    const [isOpen, setIsOpen] = useState(isFilterOpen);
      const [currentTime, setCurrentTime] = useState('');
    const categories = [
      "Wedding Collection",
      "Smart Watches",
      "Sports Watches",
      "Kids Collection",
      "More...",
    ];
    const brands = ["All", "Rolex", "Omega", "TAG Heuer", "Casio"];
    const materials = ["Steel", "Gold", "Leather", "Rubber"];
    const caseShapes = ["Round", "Square", "Oval"];
    const strapColors = ["Black", "Brown", "Blue", "Red"];
    // const watches = [
    //   { id: 1, brand: "Rolex", name: "Daytona", price: 12000, rating: 5, img: "rolex.jpg", case: "Gold", strap: "Leather", strapColor: "Black", caseShape: "Round", waterResistant: true, waterDepth: 100, category: "Wedding Collection" },
    //   { id: 2, brand: "Omega", name: "Seamaster", price: 8000, rating: 4, img: "omega.jpg", case: "Steel", strap: "Rubber", strapColor: "Blue", caseShape: "Round", waterResistant: true, waterDepth: 200, category: "Smart Watches" },
    //   { id: 3, brand: "TAG Heuer", name: "Carrera", price: 4500, rating: 4.5, img: "tagheuer.jpg", case: "Steel", strap: "Leather", strapColor: "Brown", caseShape: "Round", waterResistant: false, waterDepth: 0, category: "Sports Watches" },
    //   { id: 4, brand: "Casio", name: "G-Shock", price: 200, rating: 4, img: "casio.jpg", case: "Plastic", strap: "Rubber", strapColor: "Black", caseShape: "Square", waterResistant: true, waterDepth: 500, category: "Kids Collection" },
    // ];
  console.log("test",dataset);
  
    const filteredWatches = dataset
      .filter((watch) => {
        const inCategories = selectedCategory === "All" || watch.category === selectedCategory;
        const inBrand = selectedBrand === "All" || watch.brand === selectedBrand;
        const inPriceRange = watch.price >= filters.minPrice && watch.price <= filters.maxPrice;
        const inCaseMaterial = filters.caseMaterial.length === 0 || filters.caseMaterial.includes(watch.case);
        const inStrapMaterial = filters.strapMaterial.length === 0 || filters.strapMaterial.includes(watch.strap);
        const inStrapColor = filters.strapColor.length === 0 || filters.strapColor.includes(watch.strapColor);
        const inCaseShape = filters.caseShape.length === 0 || filters.caseShape.includes(watch.caseShape);
        const isWaterResistantDepth = watch.waterDepth >= filters.waterResistantDepth;
        return (
          inCategories &&
          inBrand &&
          inPriceRange &&
          inCaseMaterial &&
          inStrapMaterial &&
          inStrapColor &&
          inCaseShape &&
          isWaterResistantDepth
        );
      })
      .sort((a, b) => {
        if (sortOption === "Price: Low to High") return a.price - b.price;
        if (sortOption === "Price: High to Low") return b.price - a.price;
        if (sortOption === "Rating: High to Low") return b.rating - a.rating;
        return 0;
      });
  
    const paginatedWatches = filteredWatches.slice(
      (currentPage - 1) * watchesPerPage,
      currentPage * watchesPerPage
    );
  
    const toggleFavorite = (id) => {
      setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
    };
  
    const toggleCompare = (id) => {
      setCompare((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        } else {
          return [...prev, id];
        }
      });
    };
  
    const resetFilters = () => {
      setFilters({
        minPrice: 0,
        maxPrice: 15000,
        caseMaterial: [],
        strapMaterial: [],
        strapColor: [],
        caseShape: [],
        waterResistantDepth: 0,
      });
      setSelectedBrand("All");
      setSelectedCategory("All");
    };
  
    const openDetails = (id) => {
      const watch = dataset.find((watch) => watch.id === id);
      setShowDetails(watch);
    };
  
    const closeDetails = () => {
      setShowDetails(null);
    };
  
    const handleScroll = (e) => {
      if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight) {
        setCurrentPage((prev) => prev + 1);
      }
    };
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Reset to the first page when a category is selected
    };
  
    const { addtocart, setAddtocart } = useContext(DataContext);
  
    const handleAddToCart = () => {
      setAddtocart(addtocart + 1); // Add one more to cart
    };
  
    const handleRemoveFromCart = () => {
      setAddtocart(0); // Remove all from cart
    };
  
    const handleDecrement = () => {
      if (addtocart > 1) {
        setAddtocart(addtocart - 1); // Decrement by 1
      }
    };
  

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}

      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6 bg-[#D6CFB4]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8D0B41] to-[#8D0B61] text-transparent bg-clip-text">
                Filters
              </h2>
              <button
                className="btn-icon text-gray-500 hover:text-gray-700"
                onClick={()=>setIsFilterOpen(false)}
              >
                <X size={24}
             />
              </button>
            </div>
                <WatchesByBrand/>
              </div>
              
          </div>
        </div>
     
    </>
  );
};
export default FilterSlide
