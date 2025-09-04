import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (!savedRole) navigate("/login");
    setRole(savedRole);
  }, []);

  if (!role) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h1>

        {role === "student" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">📅 Upcoming Classes</h2>
            <p className="text-gray-600">Your next classes will appear here.</p>
          </div>
        )}

        {role === "institution" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">🛠 Manage Timetable</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Create Timetable
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
