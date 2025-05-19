export type Announcement = {
id: number;
title: string;
date: string;
content: string | TrustedHTML;
category: string;
preview: string;
image: string;
};

export const sampleData: Announcement[] = [
    {
        id: 1,
        title: 'New Product Launch: Innovation Series X',
        date: '2023-11-15',
        category: 'Product Launch',
        preview: "We're excited to announce our latest product line that will revolutionize...",
        content: `
                    <p>We are thrilled to announce the launch of our groundbreaking <strong>Innovation Series X</strong>. This new product line is set to redefine industry standards and deliver unparalleled value to our customers.</p>
                    
                    <h2>Key Highlights</h2>
                    <ul>
                        <li><strong>High Performance:</strong> Up to 70% faster than previous models</li>
                        <li><strong>User-Friendly Interface:</strong> Redesigned with feedback from thousands of users</li>
                        <li><strong>Smart Integration:</strong> Easily integrates with all major platforms</li>
                        <li><strong>Eco-Friendly:</strong> Built with sustainability in mind</li>
                    </ul>
                    
                    <h2>Event Details</h2>
                    <p>We will be unveiling the Innovation Series X in a live online event on <strong>November 15, 2023</strong>. Join us to get an exclusive look at the product and participate in a live Q&A session with our development team.</p>
                    
                    <p>Stay tuned for more updates and make sure to follow us on our social media channels.</p>
                    `,
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Annual Company Meeting 2024',
        date: '2023-11-10',
        category: 'Company Event',
        preview: "Join us for our annual company meeting where we'll discuss our achievements...",
        content: `
                    <p>We are thrilled to announce the launch of our groundbreaking <strong>Innovation Series X</strong>. This new product line is set to redefine industry standards and deliver unparalleled value to our customers.</p>
                    
                    <h2>Key Highlights</h2>
                    <ul>
                        <li><strong>High Performance:</strong> Up to 70% faster than previous models</li>
                        <li><strong>User-Friendly Interface:</strong> Redesigned with feedback from thousands of users</li>
                        <li><strong>Smart Integration:</strong> Easily integrates with all major platforms</li>
                        <li><strong>Eco-Friendly:</strong> Built with sustainability in mind</li>
                    </ul>
                    
                    <h2>Event Details</h2>
                    <p>We will be unveiling the Innovation Series X in a live online event on <strong>November 15, 2023</strong>. Join us to get an exclusive look at the product and participate in a live Q&A session with our development team.</p>
                    
                    <p>Stay tuned for more updates and make sure to follow us on our social media channels.</p>
                    `,
        image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80',
    },
];