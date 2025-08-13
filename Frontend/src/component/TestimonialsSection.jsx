import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    title: "Smooth and secure transaction",
    text: "Bought a cooler via Bid.ai during their summer sale. The listing was genuine, and the seller was super responsive. Quick, easy, and trustworthy experience!",
    username: "@kiranonline",
  },
  {
    stars: 5,
    title: "Best place to sell locally!",
    text: "Listed my old fridge for free on Bid.ai and got inquiries the same day. No hidden charges, and the app is very user-friendly.",
    username: "@sellwithme",
  },
  {
    stars: 5,
    title: "Highly recommended marketplace",
    text: "I’ve used Bid.ai both to sell my old fan and buy a new AC. It’s super simple to list items and even better to browse. I love the BID-CREDITS system!",
    username: "@rahul_trades",
  },
  {
    stars: 5,
    title: "Very convenient and reliable",
    text: "This platform makes it so easy to find what you need. I bought a second-hand ceiling fan at a great deal. Plus, I could verify the seller’s profile!",
    username: "@anjushops",
  },
];

function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Transact with a trusted local community
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex text-blue-500 mb-3">
              {Array.from({ length: t.stars }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h3 className="font-semibold mb-2">{t.title}</h3>
            <p className="text-gray-600 mb-2">{t.text}</p>
            <span className="font-medium">{t.username}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
