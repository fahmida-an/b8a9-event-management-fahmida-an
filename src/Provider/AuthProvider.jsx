import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config"
import PropTypes from 'prop-types'

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserAccount = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createAccountwithGoogle =() =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
  
    }

    const handleUpdateProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      })
  }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Current value of the current user", currentUser);
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo = {
        createUserAccount,
        logInUser,
        user,
        logOut,
        loading,
        createAccountwithGoogle,
        handleUpdateProfile
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children:PropTypes.node
}