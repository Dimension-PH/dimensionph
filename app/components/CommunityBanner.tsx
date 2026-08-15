'use client'
import { useState } from "react";
import { COMPANY_EMAIL } from "@/app/siteConfig";

export default function CommunityBanner() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        const value = email.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            alert("Please enter a valid email address.");
            return;
        }
        const subject = encodeURIComponent("Newsletter Signup - Dimension-PH");
        const body = encodeURIComponent(`Please add this email to the Dimension-PH community list: ${value}`);
        window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="relative z-10 bg-gradient-to-r from-green-600 to-lime-500 py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                        <p className="text-lg max-w-2xl">Connect with other professionals, access exclusive resources, and accelerate your English learning journey with our supportive community.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                            placeholder="Enter your email"
                            className="bg-white px-4 py-3 rounded-md text-gray-800 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button
                            type="button"
                            onClick={handleSubscribe}
                            className="bg-green-700 text-white hover:bg-green-800 px-6 py-3 rounded-md font-medium"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
