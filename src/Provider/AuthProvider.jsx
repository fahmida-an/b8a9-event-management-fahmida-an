import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const createUserAccount = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUserAccount
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;