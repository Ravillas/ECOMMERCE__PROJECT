import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const BASE = import.meta.env.VITE_DJANGO_BASE_URL;

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const [msg, setMsg] = useState("");
    const nav = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        try {
            const response = await fetch(`${BASE}/api/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                setMsg("Account created. Redirecting to login...");

                setTimeout(() => {
                    nav("/login");
                }, 1200);
            } else {
                setMsg(
                    data.username ||
                    data.email ||
                    data.password ||
                    JSON.stringify(data)
                );
            }
        } catch (err) {
            console.error(err);
            setMsg("Signup failed.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className="w-full p-2 border rounded"
                    />

                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full p-2 border rounded"
                    />

                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full p-2 border rounded"
                    />

                    <input
                        name="password2"
                        type="password"
                        value={form.password2}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                        className="w-full p-2 border rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded"
                    >
                        Create Account
                    </button>
                </form>

                {msg && <p className="mt-3 text-sm">{msg}</p>}

                <div className="mt-4 text-sm">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-600 hover:underline"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signup;