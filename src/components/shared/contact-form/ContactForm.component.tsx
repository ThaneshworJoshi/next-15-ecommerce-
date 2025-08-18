"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormProps } from "./ContactForm.type";
import { FC } from "react";
import { contactFormSchema, ContactFormData } from "@/schemas";

const ContactForm: FC<ContactFormProps> = ({ }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form data:", data);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for contacting us. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
          <Input
            {...register("fullName")}
            placeholder="Enter your full name"
            className={`w-full ${errors.fullName ? "border-red-500" : ""}`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className={`w-full ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Subject *</label>
        <Input
          {...register("subject")}
          placeholder="What is this about?"
          className={`w-full ${errors.subject ? "border-red-500" : ""}`}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
        <Textarea
          {...register("message")}
          placeholder="Tell us more about your inquiry..."
          rows={5}
          className={`w-full resize-none ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}

export default ContactForm;
