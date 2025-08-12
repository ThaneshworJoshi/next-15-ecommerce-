"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onContinueShopping: () => void;
}

export const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  product,
  onContinueShopping,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">Added to Cart!</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            {/* Product Image */}
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={product.media.imageUrl}
                alt={product.media.altText}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">
                {product.category}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <span className="text-green-600 text-sm font-medium">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/checkout/cart" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart & Checkout
              </Button>
            </Link>
            <Button
              onClick={onContinueShopping}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal; 