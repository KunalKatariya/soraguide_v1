import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home, MapPin, Building, Users, Wallet } from 'lucide-react';
import './PlanningInfo.css';

const PlanningInfo = () => {
    const navigate = useNavigate();

    const handleReadyToMove = () => {
        // Navigate back to personalize with a flag to skip to city selection
        navigate('/personalize?skipStatus=true');
    };

    return (
        <div className="planning-info-page">
            <div className="planning-container">
                <div className="planning-header">
                    <h1>Planning Your Move to Japan</h1>
                    <p>Everything you need to know before making the big move</p>
                </div>

                <div className="planning-content">
                    {/* Introduction */}
                    <section className="info-section">
                        <div className="section-icon">
                            <Home size={32} />
                        </div>
                        <h2>Welcome to Your Japan Journey</h2>
                        <p>
                            Moving to Japan is an exciting adventure! Whether you're coming for work, study, or a fresh start,
                            understanding the basics will help you settle in smoothly. Let's explore what life in Japan looks like
                            and where you might want to call home.
                        </p>
                    </section>

                    {/* Popular Cities */}
                    <section className="info-section">
                        <div className="section-icon">
                            <MapPin size={32} />
                        </div>
                        <h2>Popular Cities to Live In</h2>
                        <div className="cities-grid">
                            <div className="city-card">
                                <h3>🗼 Tokyo</h3>
                                <p>The bustling capital with endless opportunities. High cost of living but unmatched convenience and career prospects.</p>
                                <span className="city-tag">Most Jobs</span>
                                <span className="city-tag">International</span>
                            </div>
                            <div className="city-card">
                                <h3>🐙 Osaka</h3>
                                <p>Friendly atmosphere, amazing food scene, and lower costs than Tokyo. Great for those who want big city vibes without Tokyo prices.</p>
                                <span className="city-tag">Affordable</span>
                                <span className="city-tag">Food Culture</span>
                            </div>
                            <div className="city-card">
                                <h3>⛩️ Kyoto</h3>
                                <p>Rich in history and culture. Perfect for those seeking traditional Japan while still having modern amenities.</p>
                                <span className="city-tag">Traditional</span>
                                <span className="city-tag">Calm</span>
                            </div>
                            <div className="city-card">
                                <h3>🍜 Fukuoka</h3>
                                <p>Compact, affordable, and delicious. Rising tech hub with great quality of life and proximity to nature.</p>
                                <span className="city-tag">Startup Hub</span>
                                <span className="city-tag">Beach Access</span>
                            </div>
                        </div>
                    </section>

                    {/* Housing Resources */}
                    <section className="info-section">
                        <div className="section-icon">
                            <Building size={32} />
                        </div>
                        <h2>Finding Affordable Housing</h2>
                        <p>Housing can be expensive, but there are resources to help you find something that fits your budget:</p>

                        <div className="resource-list">
                            <div className="resource-item">
                                <h3>UR Housing (Public Housing)</h3>
                                <p>Government-subsidized apartments with no key money or guarantor required. Great for newcomers!</p>
                                <a href="https://www.ur-net.go.jp/english/" target="_blank" rel="noopener noreferrer" className="resource-link">
                                    Visit UR Housing <ArrowRight size={16} />
                                </a>
                            </div>
                            <div className="resource-item">
                                <h3>WhiteStone Real Estate</h3>
                                <p>English-speaking real estate agency specializing in helping foreigners find apartments in Japan.</p>
                                <a href="https://www.whitestone-realestate.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                                    Visit WhiteStone <ArrowRight size={16} />
                                </a>
                            </div>
                            <div className="resource-item">
                                <h3>Oakhouse (Share Houses)</h3>
                                <p>Social living with furnished rooms, utilities included, and international communities.</p>
                                <a href="https://www.oakhouse.jp/eng" target="_blank" rel="noopener noreferrer" className="resource-link">
                                    Visit Oakhouse <ArrowRight size={16} />
                                </a>
                            </div>
                            <div className="resource-item">
                                <h3>Borderless House</h3>
                                <p>Share houses designed for cultural exchange, with half Japanese and half international residents.</p>
                                <a href="https://www.borderless-house.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                                    Visit Borderless House <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Cost of Living */}
                    <section className="info-section">
                        <div className="section-icon">
                            <Wallet size={32} />
                        </div>
                        <h2>Cost of Living Estimates</h2>
                        <div className="cost-grid">
                            <div className="cost-item">
                                <h4>Tokyo</h4>
                                <p className="cost-amount">¥150,000 - ¥200,000/month</p>
                                <p className="cost-breakdown">Rent, food, utilities</p>
                            </div>
                            <div className="cost-item">
                                <h4>Osaka</h4>
                                <p className="cost-amount">¥120,000 - ¥160,000/month</p>
                                <p className="cost-breakdown">Rent, food, utilities</p>
                            </div>
                            <div className="cost-item">
                                <h4>Kyoto</h4>
                                <p className="cost-amount">¥130,000 - ¥170,000/month</p>
                                <p className="cost-breakdown">Rent, food, utilities</p>
                            </div>
                            <div className="cost-item">
                                <h4>Fukuoka</h4>
                                <p className="cost-amount">¥100,000 - ¥140,000/month</p>
                                <p className="cost-breakdown">Rent, food, utilities</p>
                            </div>
                        </div>
                    </section>

                    {/* Key Tips */}
                    <section className="info-section highlight-section">
                        <div className="section-icon">
                            <Users size={32} />
                        </div>
                        <h2>Quick Tips for Success</h2>
                        <ul className="tips-list">
                            <li>Learn basic Japanese - even simple phrases go a long way</li>
                            <li>Budget for initial costs: deposit (1-2 months rent), key money, agent fees</li>
                            <li>Consider share houses for your first 3-6 months while you explore</li>
                            <li>Join expat communities online before arriving</li>
                            <li>Research your visa requirements early - they can take time</li>
                        </ul>
                    </section>
                </div>

                {/* CTA Button */}
                <div className="planning-cta">
                    <button className="btn btn-primary btn-large" onClick={handleReadyToMove}>
                        I am ready to move <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </button>
                    <p className="cta-hint">Continue to select your city and ward</p>
                </div>
            </div>
        </div>
    );
};

export default PlanningInfo;
