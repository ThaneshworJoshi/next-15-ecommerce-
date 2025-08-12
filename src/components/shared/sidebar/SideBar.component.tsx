"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarItemProps, SidebarProps, FilterState } from "./SideBar.type";
import { PriceRangeSlider } from "../price-range-slider/PriceRangeSlider.component";
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react";

export const SidebarItem = ({ icon, text, link, count, onClick, isSelected }: SidebarItemProps) => {
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={`flex items-center justify-between w-full text-left hover:text-primary-light mb-5 transition-colors ${
          isSelected ? 'text-primary font-medium' : 'text-gray-700'
        }`}
      >
        {icon}
        <span>{text}</span>
        <span className="text-sm text-gray-500">{count}</span>
      </button>
    );
  }

  return (
    <Link href={link} className="flex items-center justify-between hover:text-primary-light mb-5">
      {icon}
      <span>{text}</span>
      <span>{count}</span>
    </Link>
  );
};

interface SidebarClientProps extends SidebarProps {
  onFiltersChange: (filters: FilterState) => void;
  activeFilters: FilterState;
  showCategories?: boolean;
  showColors?: boolean;
  showPriceRange?: boolean;
  showBrands?: boolean;
  showHotDeals?: boolean;
  defaultExpanded?: string[];
}

const Sidebar = ({ 
  hotDeals, 
  categories, 
  brands, 
  colors, 
  onFiltersChange, 
  activeFilters,
  showCategories = true,
  showColors = true,
  showPriceRange = true,
  showBrands = true,
  showHotDeals = true,
  defaultExpanded = ['categories', 'colors', 'priceRange', 'brands', 'hotDeals']
}: SidebarClientProps) => {
  // Local state for filters
  const [selectedColors, setSelectedColors] = useState<string[]>(activeFilters.colors || []);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(activeFilters.brands || []);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(activeFilters.categories || []);
  const [priceRange, setPriceRange] = useState<[number, number]>(activeFilters.priceRange || [0, 1000]);
  
  // Accordion state
  const [expandedSections, setExpandedSections] = useState<string[]>(defaultExpanded);

  // Update parent component when filters change
  useEffect(() => {
    onFiltersChange({
      colors: selectedColors,
      brands: selectedBrands,
      categories: selectedCategories,
      priceRange: priceRange,
    });
  }, [selectedColors, selectedBrands, selectedCategories, priceRange]); // Removed onFiltersChange from dependencies

  // Toggle accordion section
  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  // Handle color selection
  const handleColorChange = (colorName: string) => {
    setSelectedColors(prev => 
      prev.includes(colorName) 
        ? [] // Deselect if already selected
        : [colorName] // Select only this color
    );
  };
console.log(selectedColors, 'selected colors')
  // Handle brand selection
  const handleBrandChange = (brandName: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandName) 
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    );
  };

  // Handle category selection
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
  };

  // Check if any filters are active
  const hasActiveFilters = selectedColors.length > 0 || 
                          selectedBrands.length > 0 || 
                          selectedCategories.length > 0 || 
                          (priceRange[0] !== 0 || priceRange[1] !== 1000);

  // Accordion Section Component
  const AccordionSection = ({ 
    title, 
    sectionName, 
    children, 
    show = true 
  }: { 
    title: string; 
    sectionName: string; 
    children: React.ReactNode; 
    show?: boolean;
  }) => {
    if (!show) return null;
    
    const isExpanded = expandedSections.includes(sectionName);
    
    return (
      <div className="bg-neutral-background p-5">
        <button
          onClick={() => toggleSection(sectionName)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-lg font-semibold uppercase">{title}</h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded && (
          <div className="transition-all duration-300 ease-in-out">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-full space-y-6 transition-all duration-300">
        
        {/* Filter Header */}
        <div className="bg-neutral-background p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold uppercase flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
          
          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 font-medium mb-2">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {selectedColors.map(color => (
                  <span key={color} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Color: {color}
                  </span>
                ))}
                {selectedBrands.map(brand => (
                  <span key={brand} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Brand: {brand}
                  </span>
                ))}
                {selectedCategories.map(category => (
                  <span key={category} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Category: {category}
                  </span>
                ))}
                {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Price: ${priceRange[0]} - ${priceRange[1]}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Categories Section */}
        <AccordionSection title="Categories" sectionName="categories" show={showCategories}>
          {categories?.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}
              className={`text-sm font-medium cursor-pointer transition-colors mb-3 ${
                selectedCategories.includes(category.name)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {category.name}
            </div>
          ))}
        </AccordionSection>

        {/* Colors Section */}
        <AccordionSection title="Colors" sectionName="colors" show={showColors}>
          <div className="grid grid-cols-5 gap-3">
            {colors?.map((color) => (
              <div
                key={color.id}
                onClick={() => handleColorChange(color.name)}
                className={`w-8 h-8 rounded-full cursor-pointer transition-all border-2 ${
                  selectedColors.includes(color.name) 
                    ? 'border-gray-800 scale-110' 
                    : 'border-gray-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </AccordionSection>

        {/* Price Range Section */}
        <AccordionSection title="Prices" sectionName="priceRange" show={showPriceRange}>
          <PriceRangeSlider
            range={priceRange}
            setRange={setPriceRange}
            min={0}
            max={1000}
            step={10}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </AccordionSection>

        {/* Brands Section */}
        <AccordionSection title="Brands" sectionName="brands" show={showBrands}>
          {brands?.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandChange(brand.name)}
              className={`flex items-center justify-between cursor-pointer transition-colors mb-3 ${
                selectedBrands.includes(brand.name)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span className="text-sm font-medium">{brand.name}</span>
              <span className="text-xs text-gray-500">({brand.dealCounts})</span>
            </div>
          ))}
        </AccordionSection>

        {/* Hot Deals Section */}
        <AccordionSection title="Hot Deals" sectionName="hotDeals" show={showHotDeals}>
          {hotDeals?.map((hotdeal) => (
            <div
              key={hotdeal.id}
              onClick={() => console.log('Hot deal clicked:', hotdeal.name)}
              className="flex items-center justify-between cursor-pointer transition-colors mb-3 text-gray-700 hover:text-gray-900"
            >
              <span className="text-sm font-medium">{hotdeal.name}</span>
              <span className="text-xs text-gray-500">({hotdeal.dealCounts})</span>
            </div>
          ))}
        </AccordionSection>

        {/* Apply Filters Button */}
        {hasActiveFilters && (
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <Button 
              className="w-full hover:bg-primary-light"
              onClick={() => console.log('Filters applied:', { selectedColors, selectedBrands, selectedCategories, priceRange })}
            >
              Apply Filters ({selectedColors.length + selectedBrands.length + selectedCategories.length})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
