import React, { useState } from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    const handleLogin = async (e) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container flex column">
                            <input
                                type="email"
                                placeholder='Email Address'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button onClick={handleLogin}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
    gap: 2rem;
    height: 85vh;
    .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
        gap: 2rem;
        input {
            padding: 0.5rem 1rem;
            width: 15rem;
            color: black;
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
        }
        }
    }
    }
}
`;