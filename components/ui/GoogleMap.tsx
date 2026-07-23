'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
    center?: { lat: number; lng: number };
    zoom?: number;
    height?: string;
    marker?: { lat: number; lng: number; title?: string };
}

const defaultCenter = {
    lat: 25.276987, // Approximate coordinates for Al-Khabeesi area, Dubai
    lng: 55.296249,
};

const defaultMarker = {
    lat: 25.276987,
    lng: 55.296249,
    title: 'Qlaat Al Madeena Transport',
};

const defaultZoom = 15;

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
    center = defaultCenter,
    zoom = defaultZoom,
    height = '400px',
    marker = defaultMarker,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Create Google Maps URL to open in new tab
    const address = '203 Alphamed Building, Abu Hail, Dubai, UAE';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;

    // Use Google Maps embed (works without API key for basic embeds)
    // Format: https://www.google.com/maps?q=lat,lng&output=embed
    const embedUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}&hl=en&z=${zoom}&output=embed`;

    if (!isMounted) {
        return (
            <div
                className="bg-gray-200 rounded-lg flex items-center justify-center"
                style={{ height }}
            >
                <div className="text-center text-gray-500 p-4">
                    <div className="text-sm font-semibold">Loading Map...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative group" style={{ height }}>
            {/* Embedded Google Maps (no API key required) */}
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
            ></iframe>

            {/* Overlay with button to open in Google Maps */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg flex items-center justify-center pointer-events-none">
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                            className="pointer-events-auto bg-white hover:bg-secondary text-primary hover:text-white px-6 py-3 rounded-lg shadow-md font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    <MapPin size={20} />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={18} />
                </a>
            </div>

            {/* Always visible button at bottom */}
            <div className="absolute bottom-4 right-4">
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                            className="bg-white hover:bg-secondary text-primary hover:text-white px-4 py-2 rounded-lg shadow-md font-medium flex items-center gap-2 transition-all duration-300 text-sm"
                >
                    <MapPin size={16} />
                    <span>View on Maps</span>
                    <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

export default GoogleMapComponent;
