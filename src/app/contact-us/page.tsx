"use client";

import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/shared/contact-form/ContactForm.component";

export default function ContactUsPage() {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Call us for immediate assistance"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: ["support@ecomstore.com", "sales@ecomstore.com"],
            description: "Send us an email anytime"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Address",
            details: ["123 Commerce Street", "New York, NY 10001", "United States"],
            description: "Visit our office"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
            description: "We're here to help"
        }
    ];

    const faqs = [
        {
            question: "How can I track my order?",
            answer: "You can track your order by logging into your account and visiting the 'Orders' section, or by using the tracking number sent to your email."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some items may have different return conditions."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping options during checkout."
        },
        {
            question: "How can I change or cancel my order?",
            answer: "Orders can be modified or cancelled within 1 hour of placement. Please contact our customer service team immediately for assistance."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/contact-us">Contact Us</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Wed love to hear from you. Send us a message and well respond as soon as possible.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <MessageSquare className="w-6 h-6" />
                        <span className="text-lg">24/7 Customer Support</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions? Were here to help! Reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                                        <div className="space-y-1">
                                            {info.details.map((detail, detailIndex) => (
                                                <p key={detailIndex} className="text-gray-600">{detail}</p>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                                        <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-gray-600">
                                Fill out the form below and well get back to you as soon as possible.
                            </p>
                        </div>
                        <ContactForm data={{
                            media: {
                                img: "",
                                alt: ""
                            },
                            firstname: ""
                        }} event={{
                            onSubmit: undefined
                        }} />
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <div className="bg-white p-8 rounded-lg shadow-sm border">
                        <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <MapPin className="w-12 h-12 mx-auto mb-4" />
                                <p className="text-lg font-semibold">Interactive Map</p>
                                <p className="text-sm">Map integration would go here</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
                    <p className="text-xl mb-6">
                        Our customer support team is available 24/7 to assist you with any questions or concerns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            variant="secondary" 
                            size="lg"
                            className="bg-white text-primary hover:bg-gray-100"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-primary"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Send Email
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
