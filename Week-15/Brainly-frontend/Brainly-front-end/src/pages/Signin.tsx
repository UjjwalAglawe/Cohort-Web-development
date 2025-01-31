import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
// import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BACKEND_URL2 = import.meta.env.VITE_BACKEND_URL;


export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    console.log("Signin url",`${BACKEND_URL2}/api/v1/signin`);
    

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value; 

        if (!username || !password) {
            toast.error("Both fields are required");
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL2}/api/v1/signin`, {
                username,
                password,
            });
            const jwt = response.data.token;
            console.log(jwt);
            localStorage.setItem("token", jwt);

            //redirect user to dashboard
            toast.success("Signed in succesfully");
            
            navigate("/dashboard");

        } catch (error) {
            console.error("Signup failed:", error);
            alert("Failed to sign up. Please try again.");
        }


    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className=" bg-white rounded-xl border min-w-48 p-8">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />

                <div className="flex justify-center pt-4">
                    <Button onClick={signin} size="md" variant="primary" text="Signin" fullwidth={true} loading={false} />
                </div>

                <div className="flex font-semibold justify-center items-center cursor-pointer" onClick={() => {
                    navigate("/signup");
                    }}>Don't have a account <span className=" text-blue-600">&nbsp; Sign up</span>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}