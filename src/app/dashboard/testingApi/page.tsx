"use client";

import { useState } from "react";

export default function AuthApp() {
    const [user, setUser] = useState({ username: "", password: "" });
    const [token, setToken] = useState(null);
    const [message, setMessage] = useState("");
    const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

    const handleLogin = async () => {
        const url = "https://flask-api-0dth.onrender.com/login";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) throw new Error("Login failed");

            const result = await response.json();
            setToken(result.token);
            console.log(result.token);
            
            setMessage("Login successful!");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Login failed!");
        }
    };

    const handleSubmit = async () => {
        if (!token) {
            setMessage("Please login first!");
            return;
        }

        const url = "https://flask-api-0dth.onrender.com/post";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    id: Number(newUser.id),
                    name: newUser.name,
                    email: newUser.email,
                }),
            });

            if (!response.ok) throw new Error("Failed to submit");

            const result = await response.json();
            console.log(result);
            setMessage("Successfully submitted!");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Submission failed!");
        }
    };

    return (
        <div className="mt-4">
            {/* Login Section */}
            <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="border p-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="border p-2 ml-2"
            />
            <button onClick={handleLogin} className="bg-green-500 text-white p-2 ml-2">
                Login
            </button>

            {/* Submission Section */}
            {token && (
                <div className="mt-4">
                    <input
                        type="number"
                        placeholder="ID"
                        value={newUser.id}
                        onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
                        className="border p-2"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="border p-2 ml-2"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="border p-2 ml-2"
                    />
                    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 ml-2">
                        Submit
                    </button>
                </div>
            )}
            {message && <p className="mt-2 text-white">{message}</p>}
        </div>
    );
}
