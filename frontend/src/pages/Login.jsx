import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("role");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://smart-scheduler-srsu.onrender.com/api/auth/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok) {
      //  if (data.role !== role) {
      //     // Agar selected role aur backend role same nahi hai → error
      //     setError("⚠️ Role does not match with account details");
      //     return;
      //   }
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", data.email);

       if (data.role === "student") {
        navigate("/StudentDashboard"); // student dashboard
       } else if (data.role === "institution") {
       navigate("/InstitutionDashboard"); // institution dashboard
       }
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("⚠️ Backend not running on port 5000");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full border rounded-lg p-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            
            <option value="student">🎓 Student</option>
            <option value="institution">🏫 Institution</option>
            
           </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
