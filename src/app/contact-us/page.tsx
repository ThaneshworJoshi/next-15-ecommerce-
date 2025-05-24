/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { use, useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { MdOutlineShoppingCart, MdStar } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import ContactForm from "@/components/shared/contact-form/ContactForm.component";

interface PageProps {
    params: Promise<{ category: string; productName: string }>;
}

export default function ContactUsPage({ params }: PageProps) {

    return (
        <div className="mx-auto container">
            <ContactForm  />
        </div>
    );
}
