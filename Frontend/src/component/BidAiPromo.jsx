import React from "react";
import hourImage from "../assets/image_396.png";
import Click from "../assets/Click.png";
import CatIcon from "../assets/categories.png";
import SellIcon from "../assets/sell.png";
import ReferralIcon from "../assets/referral.png";

export default function BidAiPromo() {
    const features = [
        {
            icon: CatIcon,
            title: "More than 13+ Categories are in Bid.ai",
        },
        {
            icon: SellIcon,
            title: "Sell your unused items in 30 seconds With One click sell",
        },
        {
            icon: ReferralIcon,
            title: "Earn upto ₹1000000000 in BID.ai credits by referral!",
        },
    ];

    return (
        <div className="w-full px-4 py-8">
            {/* Top Features */}
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-8">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center max-w-xs"
                    >
                        <img src={item.icon} alt="" className="w-25 h-25 mb-3" />
                        <p className="text-gray-800 font-bold text-xl">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Expiry Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold">Your Plan is About to Expire!</h2>
                    <p className="text-white/90 mt-2 text-lg">
                        Renew now to keep listing and boosting your products without
                        interruption
                    </p>
                    <button className="mt-4 border-2 border-white/75 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-md font-semibold flex items-center gap-4 shadow-lg hover:bg-white/30 transition">
                        Renew Plan
                        <img src={Click} alt="click button" className="w-8 h-8" />
                    </button>

                </div>

                {/* Hourglass */}
                <img
                    src={hourImage}
                    alt="Hourglass"
                    className="w-20 h-20 md:w-28 md:h-28"
                />
            </div>
        </div>
    );
}
