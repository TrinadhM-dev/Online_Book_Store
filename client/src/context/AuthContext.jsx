import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth  } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider
export const AuthProvide = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register a user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };
    //login a user
    const loginUser = async(email,password) => {
    return await signInWithEmailAndPassword(auth,email,password);
    }

    const value = {
        currentUser,
        registerUser,
        loginUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
