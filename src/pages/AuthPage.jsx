import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  const [name, setName] = useState("");

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider);
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="auth">
        <h3>{name}</h3>
        <h1>Chat Room</h1>
        <p className="text-p">Devam etmek için giriş yapınız</p>
        <div className="butons">
          <button onClick={signInWithGoogle} className="btn">
            <img src="./public/google.png" alt="Google" />
            <span>Google ile giriş yap</span>
          </button>
          <button onClick={signInWithFacebook} className="btn">
            <img src="./public/face.jpg" alt="Facebook" />
            <span>Facebook ile giriş yap</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
