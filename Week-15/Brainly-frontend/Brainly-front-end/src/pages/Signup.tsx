import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
// import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
const BACKEND_URL2 = import.meta.env.VITE_BACKEND_URL;

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate=useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value; // Corrected spelling

        if (!username || !password) {
            alert("Both fields are required.");
            return;
        }

        try {
            await axios.post(`${BACKEND_URL2}/api/v1/signup`, {
                username,
                password,
            });
            alert("You have signed up successfully!");
            navigate("/signin")
            
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
                    <Button onClick={signup} size="md" variant="primary" text="Signup" fullwidth={true} loading={false} />
                </div>

            <div className="flex font-semibold justify-center items-center cursor-pointer" onClick={()=>{
                navigate("/signin");
            }}>Have a account <span className=" text-blue-600">&nbsp; Sign in</span> </div>
            </div>
        </div>
    )
}