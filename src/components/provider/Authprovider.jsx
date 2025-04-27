import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const provider = new GoogleAuthProvider();

  function handleGoogle() {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  function handleLogout(){
    setLoading(true);
    return signOut(auth )
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);     
      setLoading(false);         
    });
  
    return () => {
      unsub();   
    };
  }, []);

  const file = {
    handleGoogle,
    user,
    setUser,
    loading,
    setLoading,
    handleLogout
  };

  return (
    <AuthContext.Provider value={file}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
