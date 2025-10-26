import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser,setCurrentUser] =useState(null);
    const [loading,setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();
    const registerUser = async (email,password) =>{

        return await createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =async(email,password) =>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle =async() =>{
        return await signInWithPopup(auth,googleProvider)
    }
    const logout = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(user) =>{
            setCurrentUser(user);
            setLoading(false);

            if(user){
                const {email,displayname,photoURL} = user;
                const userData = {
                    email,username : displayname,photo:photoURL
                }
            }
        })
        return () => unsubscribe();
    },[] )
    const value ={
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
        
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}