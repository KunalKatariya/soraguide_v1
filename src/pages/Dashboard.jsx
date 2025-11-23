import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TaskItem from '../components/Dashboard/TaskItem';
import ProfileMenu from '../components/ProfileMenu';
import WardChangeModal from '../components/Dashboard/WardChangeModal';
import Chatbot from '../components/Chatbot/Chatbot';
import { tips } from '../data/tips';
import { MOVING_TASKS, SETTLED_TASKS } from '../data/tasks';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
    const { currentUser, updateWard } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('savings');
    const [tasks, setTasks] = useState([]);

    // Ward Change Modal State
    const [showWardModal, setShowWardModal] = useState(false);
    const [pendingWard, setPendingWard] = useState(null);

    // Pokémon State
    const [pokemonFamily, setPokemonFamily] = useState(null);

    const pokemonFamilies = {
        grass: [
            { id: 1, name: 'Bulbasaur', size: 'small' },
            { id: 2, name: 'Ivysaur', size: 'medium' },
            { id: 3, name: 'Venusaur', size: 'large' }
        ],
        fire: [
            { id: 4, name: 'Charmander', size: 'small' },
            { id: 5, name: 'Charmeleon', size: 'medium' },
            { id: 6, name: 'Charizard', size: 'large' }
        ],
        water: [
            { id: 7, name: 'Squirtle', size: 'small' },
            { id: 8, name: 'Wartortle', size: 'medium' },
            { id: 9, name: 'Blastoise', size: 'large' }
        ],
        electric: [
            { id: 25, name: 'Pikachu', size: 'small' },
            { id: 26, name: 'Raichu', size: 'medium' },
            { id: 26, name: 'Raichu', size: 'large' } // Pikachu family only has 2 stages
        ],
        psychic: [
            { id: 63, name: 'Abra', size: 'small' },
            { id: 64, name: 'Kadabra', size: 'medium' },
            { id: 65, name: 'Alakazam', size: 'large' }
        ],
        fighting: [
            { id: 66, name: 'Machop', size: 'small' },
            { id: 67, name: 'Machoke', size: 'medium' },
            { id: 68, name: 'Machamp', size: 'large' }
        ],
        ghost: [
            { id: 92, name: 'Gastly', size: 'small' },
            { id: 93, name: 'Haunter', size: 'medium' },
            { id: 94, name: 'Gengar', size: 'large' }
        ],
        dragon: [
            { id: 147, name: 'Dratini', size: 'small' },
            { id: 148, name: 'Dragonair', size: 'medium' },
            { id: 149, name: 'Dragonite', size: 'large' }
        ],
        rock: [
            { id: 74, name: 'Geodude', size: 'small' },
            { id: 75, name: 'Graveler', size: 'medium' },
            { id: 76, name: 'Golem', size: 'large' }
        ],
        flying: [
            { id: 16, name: 'Pidgey', size: 'small' },
            { id: 17, name: 'Pidgeotto', size: 'medium' },
            { id: 18, name: 'Pidgeot', size: 'large' }
        ],
        bug: [
            { id: 10, name: 'Caterpie', size: 'small' },
            { id: 11, name: 'Metapod', size: 'medium' },
            { id: 12, name: 'Butterfree', size: 'large' }
        ],
        poison: [
            { id: 43, name: 'Oddish', size: 'small' },
            { id: 44, name: 'Gloom', size: 'medium' },
            { id: 45, name: 'Vileplume', size: 'large' }
        ],
        waterFighting: [
            { id: 60, name: 'Poliwag', size: 'small' },
            { id: 61, name: 'Poliwhirl', size: 'medium' },
            { id: 62, name: 'Poliwrath', size: 'large' }
        ],
        grassPoison: [
            { id: 69, name: 'Bellsprout', size: 'small' },
            { id: 70, name: 'Weepinbell', size: 'medium' },
            { id: 71, name: 'Victreebel', size: 'large' }
        ]
    };

    useEffect(() => {
        // Randomly select a family on mount
        const families = Object.keys(pokemonFamilies);
        const randomFamily = families[Math.floor(Math.random() * families.length)];
        setPokemonFamily(pokemonFamilies[randomFamily]);
    }, []);

    // Initialize tasks on mount
    useEffect(() => {
        if (!currentUser) return;

        // Check if we have stored tasks for this specific user
        const userTasksKey = `user_tasks_${currentUser.uid}`;
        let storedTasks = JSON.parse(localStorage.getItem(userTasksKey));
        const onboardingData = JSON.parse(localStorage.getItem('onboarding_data'));

        // Intelligent sync: Check if stored tasks match the current onboarding stage
        // Use currentUser.stage (from Auth) as primary source, fallback to onboardingData (from LS)
        const currentStage = currentUser?.stage || onboardingData?.stage;

        if (storedTasks && currentStage) {
            const hasMovingTasks = storedTasks.some(t => t.id === 1); // ID 1 is "Register Address" (Moving)
            const hasSettledTasks = storedTasks.some(t => t.id === 101); // ID 101 is "Check Disaster Kit" (Settled)
            const shouldBeSettled = currentStage === 'settled';

            // If mismatch, force reset to load the correct set
            if (shouldBeSettled && hasMovingTasks) {
                console.log('Mismatch detected: User is settled but has moving tasks. Resetting.');
                storedTasks = null;
            } else if (!shouldBeSettled && hasSettledTasks) {
                console.log('Mismatch detected: User is moving but has settled tasks. Resetting.');
                storedTasks = null;
            }
        }

        if (storedTasks) {
            setTasks(storedTasks);
        } else {
            // If no stored tasks (or we reset them), determine which default set to use
            const isSettled = currentStage === 'settled';
            const newTasks = isSettled ? SETTLED_TASKS : MOVING_TASKS;
            setTasks(newTasks);

            // Save the new default tasks immediately so they persist
            localStorage.setItem(userTasksKey, JSON.stringify(newTasks));
        }

    }, [currentUser]); // Only run on mount/user load, NOT on ward change anymore (handled manually)

    const handleWardSelect = (newWard) => {
        if (currentUser && newWard === currentUser.ward) return;
        setPendingWard(newWard);
        setShowWardModal(true);
    };

    const handleMoveConfirm = (isMoving) => {
        const oldWard = currentUser.ward;
        const newWard = pendingWard;

        // 1. If Moving, Add Tasks & Save to LocalStorage FIRST
        if (isMoving) {
            const moveOutId = `move-out-${oldWard}-${Date.now()}`; // Unique ID
            const moveInId = `move-in-${newWard}-${Date.now()}`;

            const newTasks = [
                {
                    id: moveInId,
                    title: `Move In Procedures: ${newWard.charAt(0).toUpperCase() + newWard.slice(1)}`,
                    description: 'Register address and health insurance.',
                    category: 'Moving',
                    completed: false,
                    guideLink: `/guide/moving/in?ward=${newWard}`
                },
                {
                    id: moveOutId,
                    title: `Move Out Procedures: ${oldWard.charAt(0).toUpperCase() + oldWard.slice(1)}`,
                    description: 'Notify old ward office and cancel utilities.',
                    category: 'Moving',
                    completed: false,
                    guideLink: `/guide/moving/out?ward=${oldWard}`
                }
            ];

            const updatedTasks = [...newTasks, ...tasks];
            setTasks(updatedTasks);
            localStorage.setItem(`user_tasks_${currentUser.uid}`, JSON.stringify(updatedTasks));
        }

        // 2. Update Ward in Context (Triggers useEffect which reads LocalStorage)
        // Since we updated LocalStorage above, useEffect will read the CORRECT new tasks.
        updateWard(newWard);

        setShowWardModal(false);
        setPendingWard(null);
    };

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem(`user_tasks_${currentUser.uid}`, JSON.stringify(updatedTasks));
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem(`user_tasks_${currentUser.uid}`, JSON.stringify(updatedTasks));
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;
    const userWard = currentUser?.ward ? currentUser.ward.charAt(0).toUpperCase() + currentUser.ward.slice(1) : 'Tokyo';

    const getPokemonForProgress = () => {
        if (!pokemonFamily) return null;
        if (progress >= 100) return pokemonFamily[2];
        if (progress >= 50) return pokemonFamily[1];
        return pokemonFamily[0];
    };

    const currentPokemon = getPokemonForProgress();

    const getTipOfTheDay = (category) => {
        const categoryTips = tips[category];
        if (!categoryTips) return "No tip available.";

        // Use the day of the year to select a tip
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);

        return categoryTips[day % categoryTips.length];
    };

    const tabs = [
        { id: 'savings', label: '💰 Saving Money', content: getTipOfTheDay('savings') },
        { id: 'convenience', label: '⚡ Convenience', content: getTipOfTheDay('convenience') },
        { id: 'language', label: '🗣️ Language', content: getTipOfTheDay('language') },
        { id: 'exploring', label: '🌏 Exploring', content: getTipOfTheDay('exploring') }
    ];

    return (
        <>
            <Navbar customAction={<ProfileMenu onWardSelect={handleWardSelect} />} />

            <WardChangeModal
                isOpen={showWardModal}
                oldWard={currentUser?.ward ? currentUser.ward.charAt(0).toUpperCase() + currentUser.ward.slice(1) : ''}
                newWard={pendingWard ? pendingWard.charAt(0).toUpperCase() + pendingWard.slice(1) : ''}
                onConfirm={handleMoveConfirm}
                onCancel={() => setShowWardModal(false)}
            />

            <div className="dashboard-page">
                <div className="container">
                    <div className="dashboard-header">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h1>Welcome, {currentUser?.displayName || 'Traveler'}</h1>
                                <p>Settling in <strong>{userWard}</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-grid">
                        <div className="main-content">
                            <div className="section-header">
                                <h2>Your Tasks <span className="task-count-inline">({completedCount}/{tasks.length})</span></h2>
                            </div>

                            <div className="progress-bar-container">
                                {currentPokemon && (
                                    <div
                                        className="pokemon-marker"
                                        style={{ left: `calc(${progress}% - 24px)` }}
                                    >
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${currentPokemon.id}.gif`}
                                            alt={currentPokemon.name}
                                            className={`pokemon-sprite ${currentPokemon.size}`}
                                        />
                                    </div>
                                )}
                                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                            </div>

                            <div className="task-list">
                                {tasks.map(task => (
                                    <TaskItem
                                        key={task.id}
                                        task={task}
                                        onToggle={toggleTask}
                                        onDelete={handleDeleteTask}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="sidebar">
                            <div className="sidebar-card">
                                <h3>Local Tips</h3>
                                <div className="tabs-container">
                                    <div className="tabs-header">
                                        {tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                {tab.label.split(' ')[1]}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-content">
                                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Tip of the Day</h4>
                                        <p>{tabs.find(t => t.id === activeTab)?.content}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-card">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>🗑️ <strong>Trash:</strong> <span className="link-text" onClick={() => navigate('/guide/trash')}>Trash Guide</span></li>
                                    <li>🏢 <strong>Ward Office:</strong> Search "{userWard} City Office"</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </>
    );
};

export default Dashboard;
