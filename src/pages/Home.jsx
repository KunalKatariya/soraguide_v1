
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { Home as HomeIcon, FileText, MapPin, Coffee, Heart } from 'lucide-react';

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/dashboard');
        }
    }, [currentUser, navigate]);

    const features = [
        {
            icon: <HomeIcon size={24} />,
            title: "Essential Daily Tasks",
            description: "Step-by-step guides for renting, internet setup, trash rules, and bills."
        },
        {
            icon: <FileText size={24} />,
            title: "Paperwork Made Simple",
            description: "Clear instructions for residency, bank accounts, and insurance procedures."
        },
        {
            icon: <MapPin size={24} />,
            title: "Local Tips",
            description: "Cost-saving tricks, useful phrases, and emergency help guides."
        },
        {
            icon: <Coffee size={24} />,
            title: "Lifestyle Recommendations",
            description: "Curated gyms, coworking spaces, and convenience hacks."
        },
        {
            icon: <Heart size={24} />,
            title: "Personalized Journey",
            description: "Tailored recommendations based on your goals and location."
        }
    ];

    return (
        <>
            <Navbar />
            <Hero />

            <section id="features" className="section-padding container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Everything You Need to Thrive
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        SoraGuide breaks down the complexities of Japanese life into manageable, easy-to-understand pieces.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
