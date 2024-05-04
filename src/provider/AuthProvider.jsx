import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {

       return signOut(auth)
    }

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)

            setUser(currentUser)

            setLoading(false)
        })
        
        return ()=> {
            return unSubscribe()
        }

    }, [])


    const AuthInfo = {
        login,
        user,
        setUser,
        loading,
        setLoading,
        createUser, 
        logOut
    
    }

    return (
        <AuthContext.Provider value={AuthInfo}>

            {
                children
            }

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;