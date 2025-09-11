export default function StudentDashboard() {
  const todayClasses = [
    { time: "9:00 - 10:00", subject: "Data Structures", faculty: "Prof. Sharma", room: "Room 101" },
    { time: "10:00 - 11:00", subject: "Operating Systems", faculty: "Dr. Verma", room: "Room 102" },
    { time: "2:00 - 3:00", subject: "DBMS Lab", faculty: "Prof. Singh", room: "Lab 2" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

      {/* Today’s Classes */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
        <ul className="space-y-3">
          {todayClasses.map((cls, i) => (
            <li key={i} className="p-3 border rounded-lg flex justify-between items-center">
              <span className="font-medium">{cls.time}</span>
              <span>{cls.subject} ({cls.room})</span>
              <span className="text-gray-500">{cls.faculty}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notices */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Notices</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Tomorrow’s 10am lecture is shifted to 12pm.</li>
          <li>DBMS Lab will be conducted in Lab 3 next week.</li>
          <li>Submit assignment by Friday.</li>
        </ul>
      </div>
    </div>
  );
}
