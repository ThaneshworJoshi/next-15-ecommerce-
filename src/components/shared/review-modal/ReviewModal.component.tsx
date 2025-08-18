"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReviewModalProps } from "./ReviewModal.type";

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, isSubmitting, onClose, onSubmit, className, error }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const modalRef = useRef<HTMLDivElement>(null);
  
  const handleSubmit = () => {
    onSubmit({ rating: reviewRating, text: reviewText });
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
        className={`bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl rounded-3xl p-4 shadow-lg ${className || ""}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="pt-2">
          <h2 className="text-lg font-bold mb-4">Submit a Review</h2>
          <label className="block mb-2">
            Rating:
            <select
              value={reviewRating}
              onChange={e => setReviewRating(Number(e.target.value))}
              className="ml-2 border rounded"
            >
              {[5, 4, 3, 2, 1].map(r => (
                <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
              ))}
            </select>
          </label>
          <textarea
            className="w-full border rounded p-2 mb-4"
            rows={4}
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            placeholder="Write your review here..."
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <div className="flex gap-2">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !reviewText}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal; 