import React, { createContext, useContext, useState, useEffect } from 'react';

// --- CONFIGURATION ---
// Set this to true to enable Real Firebase Auth (requires API keys)
const USE_REAL_AUTH = false;

// --- FIREBASE SETUP (Uncomment and fill keys to use) ---
/*
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
*/

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // --- MOCK AUTH IMPLEMENTATION ---
    const getOnboardingData = () => {
        const data = localStorage.getItem('onboarding_data');
        return data ? JSON.parse(data) : {};
    };

    const mockLogin = async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const onboardingData = getOnboardingData();
        const user = {
            uid: `user-${email.replace(/[^a-zA-Z0-9]/g, '-')}`, // Unique ID based on email
            email,
            displayName: email.split('@')[0],
            ...onboardingData
        };
        localStorage.setItem('soraguide_user', JSON.stringify(user));
        setCurrentUser(user);
        return user;
    };

    const mockSignup = async (email, password) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const onboardingData = getOnboardingData();
        const user = {
            uid: `user-${email.replace(/[^a-zA-Z0-9]/g, '-')}`, // Unique ID based on email
            email,
            displayName: email.split('@')[0],
            ...onboardingData
        };
        localStorage.setItem('soraguide_user', JSON.stringify(user));
        setCurrentUser(user);
        return user;
    };

    const mockGoogleLogin = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const onboardingData = getOnboardingData();
        const randomNumber = Math.floor(Math.random() * 10000);
        const email = `google-user-${randomNumber}@example.com`;
        const user = {
            uid: `user-google-${randomNumber}`,
            email,
            displayName: `User ${randomNumber}`,
            ...onboardingData
        };
        localStorage.setItem('soraguide_user', JSON.stringify(user));
        setCurrentUser(user);
        return user;
    };

    const mockLogout = async () => {
        localStorage.removeItem('soraguide_user');
        setCurrentUser(null);
    };

    // --- REAL AUTH IMPLEMENTATION (Wrappers) ---
    const realLogin = (email, password) => {
        // return signInWithEmailAndPassword(auth, email, password);
        throw new Error("Firebase not configured");
    };

    const realSignup = (email, password) => {
        // return createUserWithEmailAndPassword(auth, email, password);
        throw new Error("Firebase not configured");
    };

    const realGoogleLogin = () => {
        // const provider = new GoogleAuthProvider();
        // return signInWithPopup(auth, provider);
        throw new Error("Firebase not configured");
    };

    const realLogout = () => {
        // return firebaseSignOut(auth);
        throw new Error("Firebase not configured");
    };

    // --- INITIALIZATION ---
    useEffect(() => {
        if (USE_REAL_AUTH) {
            // const unsubscribe = onAuthStateChanged(auth, (user) => {
            //   setCurrentUser(user);
            //   setLoading(false);
            // });
            // return unsubscribe;
        } else {
            // Check local storage for mock session
            const storedUser = localStorage.getItem('soraguide_user');
            if (storedUser) {
                setCurrentUser(JSON.parse(storedUser));
            }
            setLoading(false);
        }
    }, []);

    const updateWard = (newWard) => {
        if (currentUser) {
            const updatedUser = { ...currentUser, ward: newWard };
            localStorage.setItem('soraguide_user', JSON.stringify(updatedUser));

            // Also update onboarding data to keep it in sync
            const onboardingData = getOnboardingData();
            localStorage.setItem('onboarding_data', JSON.stringify({ ...onboardingData, ward: newWard }));

            setCurrentUser(updatedUser);
        }
    };

    const value = {
        currentUser,
        login: USE_REAL_AUTH ? realLogin : mockLogin,
        signup: USE_REAL_AUTH ? realSignup : mockSignup,
        googleLogin: USE_REAL_AUTH ? realGoogleLogin : mockGoogleLogin,
        logout: USE_REAL_AUTH ? realLogout : mockLogout,
        updateWard,
        isRealAuth: USE_REAL_AUTH
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
