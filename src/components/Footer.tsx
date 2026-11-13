"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    ArrowUp,
    Heart,
} from "lucide-react";
import { getAllCategories, type SanityCategory } from "@/sanity/queries";

export default function Footer() {
    const [categories, setCategories] = useState<SanityCategory[]>([]);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        getAllCategories()
            .then(setCategories)
            .catch((err) => console.error("Failed to load categories:", err));
    }, []);

    // Only show the back-to-top button once the visitor has scrolled a bit.
    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 400);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 relative">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: About */}
                    <div>
                        <Link href="/" className="inline-flex mb-4" aria-label="Active Agro Science — Home">
                            <Image
                                src="/logo.png"
                                alt="Active Agro Science — Farmers Always Active"
                                width={720}
                                height={293}
                                unoptimized
                                className="h-14 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Leading the way in sustainable agricultural solutions since 2011.
                            We empower farmers with innovative crop protection products.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-5">
                            {[
                                { icon: Facebook, href: "https://facebook.com/activeagroscience" },
                                { icon: Twitter, href: "https://twitter.com/activeagroscience" },
                                { icon: Linkedin, href: "https://linkedin.com/company/activeagroscience" },
                                { icon: Instagram, href: "https://instagram.com/activeagroscience" },
                                { icon: Youtube, href: "https://youtube.com/@activeagroscience" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors group"
                                >
                                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "All Products", href: "/products" },
                                { name: "Bio-Pesticides", href: "/bio-pesticides" },
                                { name: "Export", href: "/export" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "Privacy Policy", href: "#" },
                                { name: "Terms & Conditions", href: "#" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-lighter transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Product Categories
                        </h4>
                        <ul className="space-y-2.5">
                            {categories.map((cat) => (
                                <li key={cat.slug}>
                                    <Link
                                        href={`/products?category=${cat.slug}`}
                                        className="text-sm text-gray-400 hover:text-primary-lighter transition-colors"
                                    >
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Contact Info
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-primary-lighter flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-400">
                                    68B, E.M. Bypass Road, Kolkata - 700100,
                                    West Bengal, India
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-primary-lighter flex-shrink-0" />
                                <a
                                    href="tel:+917063034128"
                                    className="text-sm text-gray-400 hover:text-primary-lighter transition-colors"
                                >
                                    +91-7063034128
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-primary-lighter flex-shrink-0" />
                                <a
                                    href="mailto:activeagroscience462@gmail.com"
                                    className="text-sm text-gray-400 hover:text-primary-lighter transition-colors"
                                >
                                    activeagroscience462@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Active Agro Science. All Rights Reserved. | GST: 19ACEPF0931H1ZX
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        Made with{" "}
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for
                        Farmers
                    </p>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 w-11 h-11 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl z-40 flex items-center justify-center ${showBackToTop
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                aria-label="Back to top"
                aria-hidden={!showBackToTop}
                tabIndex={showBackToTop ? 0 : -1}
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
