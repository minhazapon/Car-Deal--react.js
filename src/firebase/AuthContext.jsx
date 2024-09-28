import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const fireContext = createContext(null)

       const google = new GoogleAuthProvider(null)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const Gpop = () =>{
        setLoading(true)
        return signInWithPopup(auth, google )


    }


    const logOut = () =>{
        setLoading(true)
      return signOut(auth)

    }



    useEffect( () =>{
        const Unsubcribe = onAuthStateChanged(auth, currentUser =>{
          console.log(currentUser)
          setUser(currentUser)
          setLoading(false)
        })
        return() =>{
            Unsubcribe();
        }
    } , [])
     

    const authInfo = { user, createUser, signIn, Gpop, logOut, loading }

    return (
        <div>

            <fireContext.Provider value={authInfo}>

                {children}
            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;