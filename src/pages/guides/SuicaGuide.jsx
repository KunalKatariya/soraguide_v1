import React from 'react';
import GuideLayout from './GuideLayout';

const SuicaGuide = () => {
    return (
        <GuideLayout
            title="Getting a Suica Card"
            subtitle="Your key to trains, buses, and convenience stores."
        >
            <div className="guide-section">
                <h2>Which type should you get?</h2>
                <p>
                    Due to semiconductor shortages, physical cards are sometimes hard to find.
                    However, mobile options are readily available and convenient.
                </p>
            </div>

            <div className="guide-section">
                <h2>Option A: Mobile Suica (Recommended)</h2>
                <p>If you have an iPhone (iPhone 8 or later) or compatible Android:</p>
                <ul className="guide-list">
                    <li>Open <strong>Apple Wallet</strong> or Google Pay.</li>
                    <li>Tap the "+" icon to add a card.</li>
                    <li>Select "Transit Card" and search for "Suica".</li>
                    <li>Add funds using your credit card (Apple Pay).</li>
                    <li><strong>Usage:</strong> Just tap your phone on the gate reader. No need to unlock it!</li>
                </ul>
            </div>

            <div className="guide-section">
                <h2>Option B: Welcome Suica (Physical)</h2>
                <p>For tourists or those who prefer a physical card. Valid for 28 days.</p>
                <ul className="guide-list">
                    <li><strong>Where to buy:</strong> Haneda Airport (Terminal 3) and major stations like Tokyo, Shinjuku, Shibuya (JR East Travel Service Centers).</li>
                    <li><strong>Cost:</strong> No deposit required. Load 1,000 - 10,000 yen.</li>
                    <li><strong>Note:</strong> Non-refundable balance, so use it all up before leaving!</li>
                </ul>
            </div>

            <div className="info-box">
                <h4>💡 Charging</h4>
                <p>
                    You can charge your physical card at any ticket machine or convenience store (7-Eleven, Lawson).
                    Mobile Suica can be charged instantly via the app.
                </p>
            </div>
        </GuideLayout>
    );
};

export default SuicaGuide;
