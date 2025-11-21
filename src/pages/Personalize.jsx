import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import ProgressBar from '../components/Onboarding/ProgressBar';
import SelectionCard from '../components/Onboarding/SelectionCard';
import './Personalize.css';

const Personalize = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        stage: '',
        location: '',
        ward: ''
    });

    // Check if we should skip status selection (coming from Planning Info page)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('skipStatus') === 'true') {
            setStep(2); // Skip to city selection
            // Load the stage from local storage if it exists
            const savedData = localStorage.getItem('onboarding_data');
            if (savedData) {
                const data = JSON.parse(savedData);
                setSelections(prev => ({ ...prev, stage: data.stage || 'planning' }));
            }
        }
    }, [location]);

    const totalSteps = 3;

    // City-specific wards mapping
    const cityWards = {
        tokyo: [
            { name: 'adachi', icon: '🌾', title: 'Adachi', description: 'Residential, north Tokyo.' },
            { name: 'arakawa', icon: '🏭', title: 'Arakawa', description: 'Traditional downtown atmosphere.' },
            { name: 'bunkyo', icon: '📚', title: 'Bunkyo', description: 'Universities, gardens, cultural.' },
            { name: 'chiyoda', icon: '🏯', title: 'Chiyoda', description: 'Imperial Palace, government center.' },
            { name: 'chuo', icon: '🏬', title: 'Chuo', description: 'Ginza shopping, business district.' },
            { name: 'edogawa', icon: '🌊', title: 'Edogawa', description: 'Riverside, family-friendly.' },
            { name: 'itabashi', icon: '🏘️', title: 'Itabashi', description: 'Quiet residential, northwest.' },
            { name: 'katsushika', icon: '🎭', title: 'Katsushika', description: 'Traditional, Shibamata temple town.' },
            { name: 'kita', icon: '🌸', title: 'Kita', description: 'Cherry blossoms, residential.' },
            { name: 'koto', icon: '🏗️', title: 'Koto', description: 'Waterfront, modern development.' },
            { name: 'meguro', icon: '🌳', title: 'Meguro', description: 'Trendy, cafes, residential.' },
            { name: 'minato', icon: '🗼', title: 'Minato', description: 'International, upscale, Tokyo Tower.' },
            { name: 'nakano', icon: '🎌', title: 'Nakano', description: 'Anime culture, Broadway shopping.' },
            { name: 'nerima', icon: '🌲', title: 'Nerima', description: 'Parks, quiet, residential.' },
            { name: 'ota', icon: '✈️', title: 'Ota', description: 'Haneda Airport, industrial.' },
            { name: 'setagaya', icon: '🏡', title: 'Setagaya', description: 'Largest ward, family-friendly.' },
            { name: 'shibuya', icon: '🐕', title: 'Shibuya', description: 'Youth culture, fashion, nightlife.' },
            { name: 'shinagawa', icon: '🚄', title: 'Shinagawa', description: 'Business hub, Shinkansen.' },
            { name: 'shinjuku', icon: '🏙️', title: 'Shinjuku', description: 'Central hub, busy, convenient.' },
            { name: 'suginami', icon: '🎨', title: 'Suginami', description: 'Anime studios, residential.' },
            { name: 'sumida', icon: '🗼', title: 'Sumida', description: 'Tokyo Skytree, traditional.' },
            { name: 'taito', icon: '⛩️', title: 'Taito', description: 'Asakusa, Ueno, temples.' },
            { name: 'toshima', icon: '🎭', title: 'Toshima', description: 'Ikebukuro, entertainment, shopping.' }
        ],
        osaka: [
            { name: 'kita', icon: '🏢', title: 'Kita', description: 'Business district, Umeda area.' },
            { name: 'chuo', icon: '🎡', title: 'Chuo', description: 'Dotonbori, Namba, vibrant nightlife.' },
            { name: 'tennoji', icon: '🗼', title: 'Tennoji', description: 'Zoo, Abeno Harukas, shopping.' },
            { name: 'nishi', icon: '🌊', title: 'Nishi', description: 'Coastal area, Universal Studios nearby.' }
        ],
        kyoto: [
            { name: 'nakagyo', icon: '⛩️', title: 'Nakagyo', description: 'City center, historic sites.' },
            { name: 'higashiyama', icon: '🏯', title: 'Higashiyama', description: 'Temples, traditional streets.' },
            { name: 'shimogyo', icon: '🚉', title: 'Shimogyo', description: 'Kyoto Station area, central access.' },
            { name: 'sakyo', icon: '🌸', title: 'Sakyo', description: 'University area, nature, quiet.' }
        ],
        fukuoka: [
            { name: 'hakata', icon: '🍜', title: 'Hakata', description: 'Main station, ramen, business hub.' },
            { name: 'chuo', icon: '🏖️', title: 'Chuo', description: 'Tenjin shopping, beaches.' },
            { name: 'higashi', icon: '🏝️', title: 'Higashi', description: 'Island area, relaxed vibe.' },
            { name: 'sawara', icon: '🌾', title: 'Sawara', description: 'Residential, local culture.' }
        ]
    };

    // Get wards for the selected city
    const getWardsForCity = () => {
        return cityWards[selections.location] || cityWards.tokyo;
    };

    const handleSelection = (category, value) => {
        setSelections(prev => ({ ...prev, [category]: value }));
    };

    const nextStep = () => {
        if (step < totalSteps) {
            // If step 1 (status) and user selected "Planning", redirect to info page
            if (step === 1 && selections.stage === 'planning') {
                // Save to localStorage so Planning Info page can access it
                localStorage.setItem('onboarding_data', JSON.stringify(selections));
                navigate('/planning-info');
                return;
            }
            setStep(step + 1);
        } else {
            // Finish onboarding
            console.log('Onboarding complete:', selections);
            // Save to localStorage for the mock auth to pick up later
            localStorage.setItem('onboarding_data', JSON.stringify(selections));
            navigate('/signup');
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate('/');
        }
    };

    const isStepValid = () => {
        switch (step) {
            case 1: return !!selections.stage;
            case 2: return !!selections.location;
            case 3: return !!selections.ward;
            default: return false;
        }
    };

    return (
        <div className="personalize-page">
            <div className="personalize-container">
                <button className="back-btn" onClick={prevStep}>
                    <ArrowLeft size={20} /> Back
                </button>

                <ProgressBar currentStep={step} totalSteps={totalSteps} />

                <div className="step-content">
                    {step === 1 && (
                        <div className="step-animate">
                            <h1 className="step-title">Current Status?</h1>
                            <p className="step-subtitle">Help us guide you through the right paperwork.</p>
                            <div className="selection-grid">
                                <SelectionCard
                                    icon="✈️"
                                    title="Planning"
                                    description="I haven't moved to Japan yet."
                                    selected={selections.stage === 'planning'}
                                    onClick={() => handleSelection('stage', 'planning')}
                                />
                                <SelectionCard
                                    icon="🛬"
                                    title="Just Arrived"
                                    description="I'm setting up my life right now."
                                    selected={selections.stage === 'arrived'}
                                    onClick={() => handleSelection('stage', 'arrived')}
                                />
                                <SelectionCard
                                    icon="🏠"
                                    title="Settled"
                                    description="I've been living here for a while."
                                    selected={selections.stage === 'settled'}
                                    onClick={() => handleSelection('stage', 'settled')}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-animate">
                            <h1 className="step-title">Where are you based?</h1>
                            <p className="step-subtitle">Get local recommendations for your area.</p>
                            <div className="selection-grid">
                                <SelectionCard
                                    icon="🗼"
                                    title="Tokyo"
                                    description="The bustling capital."
                                    selected={selections.location === 'tokyo'}
                                    onClick={() => handleSelection('location', 'tokyo')}
                                />
                                <SelectionCard
                                    icon="🐙"
                                    title="Osaka"
                                    description="Food, fun, and friendly locals."
                                    selected={selections.location === 'osaka'}
                                    onClick={() => handleSelection('location', 'osaka')}
                                />
                                <SelectionCard
                                    icon="⛩️"
                                    title="Kyoto"
                                    description="History, tradition, and nature."
                                    selected={selections.location === 'kyoto'}
                                    onClick={() => handleSelection('location', 'kyoto')}
                                />
                                <SelectionCard
                                    icon="🍜"
                                    title="Fukuoka"
                                    description="Compact city with great food."
                                    selected={selections.location === 'fukuoka'}
                                    onClick={() => handleSelection('location', 'fukuoka')}
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-animate">
                            <h1 className="step-title">Which Ward?</h1>
                            <p className="step-subtitle">We'll find your specific trash rules and city hall.</p>
                            <div className="selection-grid">
                                {getWardsForCity().map(ward => (
                                    <SelectionCard
                                        key={ward.name}
                                        icon={ward.icon}
                                        title={ward.title}
                                        description={ward.description}
                                        selected={selections.ward === ward.name}
                                        onClick={() => handleSelection('ward', ward.name)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="step-actions">
                    <button
                        className={`btn btn-primary ${!isStepValid() ? 'disabled' : ''}`}
                        onClick={nextStep}
                        disabled={!isStepValid()}
                    >
                        {step === totalSteps ? 'Finish' : 'Continue'} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Personalize;
