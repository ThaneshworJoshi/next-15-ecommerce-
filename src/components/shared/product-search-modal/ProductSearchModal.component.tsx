"use client";

import { ArrowLeftIcon, SearchIcon, XIcon } from "lucide-react";
import { ProductSearchModalProps } from "./ProductSearchModal.type";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const ProductSearchModal = ({ data, events }: ProductSearchModalProps) => {
  const { isOpen } = data;
  const { onClose } = events;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([
    "Referigerator",
    "Washing Machine",
    "Air Conditioner",
    "Microwave Oven",
  ]);

  const modalRef = useRef<HTMLDivElement>(null);

  const onClearHistory = () => {
    setSearchHistory([]);
  };

  const onClearSearchTerm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSearchTerm("");
  };

  const onSearchClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (searchTerm) {
      const updatedHistory = [searchTerm, ...searchHistory];
      setSearchHistory(updatedHistory);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl rounded-3xl p-4 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-2">
          <button>
            <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Product"
            className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500"
          />
          {searchTerm && (
            <button onClick={onClearSearchTerm}>
              <XIcon className="h-5 w-5 text-gray-500" />
            </button>
          )}
          <button onClick={onSearchClick}>
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Search History */}
        <div className="mt-4 text-sm">
          <div className="font-medium text-gray-700 mb-2">Search history</div>
          {searchHistory.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-gray-800 mb-1">
              <Link href="#" className="flex items-center space-x-2">
                <SearchIcon className="h-4 w-4 text-gray-500" />
                <span>{item}</span>
              </Link>
            </div>
          ))}
          <div className="text-right">
            <button
              className="text-sm text-gray-800 font-semibold hover:underline"
              onClick={onClearHistory}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Support Links */}
        <div className="mt-6 bg-[#f5f2eb] rounded-xl p-4 text-sm">
          <div className="mb-2 text-gray-800 font-medium">Can we help?</div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="underline text-gray-700">
                Product support
              </a>
            </li>
            <li>
              <a href="#" className="underline text-gray-700">
                Online chat
              </a>
            </li>
            <li>
              <a href="#" className="underline text-gray-700">
                Email support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchModal;
