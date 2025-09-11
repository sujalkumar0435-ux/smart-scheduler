import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);

useEffect(() => {
    fetch("/data.json") // ye automatically public/ se serve hoga
      .then((res) => res.json())
      .then((data) => setStudent(data.student1))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  if (!student) return <p className="p-6 text-gray-500">Loading...</p>;

  // 📥 Schedule Collect (Download JSON)
  const downloadSchedule = () => {
    const blob = new Blob([JSON.stringify(student.timetable, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${student.name}_timetable.json`;
    link.click();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Welcome, {student.name}</h1>
          <p className="text-gray-600">
            Roll No: {student.rollNo} | {student.course} | {student.semester}
          </p>
        </div>
        <button
          onClick={downloadSchedule}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          📥 Collect Schedule
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Timetable */}
        <div className="col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">📅 Weekly Timetable</h2>
          <div className="space-y-3">
            {student.timetable.map((cls, i) => (
              <div key={i} className="flex justify-between items-center border rounded-lg p-3 hover:shadow">
                <div>
                  <p className="font-medium text-gray-700">{cls.day} | {cls.time}</p>
                  <p className="text-sm text-gray-500">{cls.subject}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-600">{cls.faculty}</p>
                  <p className="text-xs text-gray-400">{cls.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">🔔 Notifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {student.notifications.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">⏭️ Upcoming Classes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {student.upcomingClasses.map((cls, i) => (
            <div key={i} className="border rounded-lg p-4 hover:shadow">
              <p className="font-medium text-gray-700">{cls.date} | {cls.time}</p>
              <p className="text-blue-600">{cls.subject}</p>
              <p className="text-sm text-gray-500">{cls.faculty} ({cls.room})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
