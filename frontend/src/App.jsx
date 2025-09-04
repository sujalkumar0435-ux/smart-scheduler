import { Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import Signup from "./pages/signup";
// import Dashboard from "./pages/Dashboard";
import InstitutionDashboard from "./pages/institution-dashboard";
import StudentDashboard from "./pages/student-dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600">Smart Scheduler</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/project" className="text-gray-700 hover:text-blue-600 font-medium">
            Project Details
          </Link>
          <Link to="/Login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600 font-medium">
            Signup
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center mt-16">
                <h1 className="text-4xl font-bold text-gray-800">
                  🎓 Welcome to Smart Classroom & Timetable Scheduler
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Optimize your institution’s scheduling with AI-driven automation,
                  smart dashboards, and seamless student–faculty integration.
                </p>
                <div className="mt-8 space-x-4">
                  <Link
                    to="/project"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View Project Detailsa
                  </Link>
                  <Link
                    to="/Login"
                    className="px-6 py-3 bg-gray-200 rounded-lg shadow hover:bg-gray-300"
                  >
                    Login
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/project" element={<ProjectDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         <Route path="/student-dashboard" element={<StudentDashboard />} />
         <Route path="/institution-dashboard" element={<InstitutionDashboard />} />
   
        </Routes>
      </main>
    </div>
  );
}
