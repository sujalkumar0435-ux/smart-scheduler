export default function ProjectDetails() {
  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        📌 Smart Classroom & Timetable Scheduler
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Background</h2>
          <p className="text-gray-700 leading-relaxed">
            Higher Education institutions face challenges in efficient scheduling due
            to limited infrastructure, overlapping requirements, and the complexity
            of NEP 2020’s flexible learning. Manual methods cause clashes, uneven workload, and dissatisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform automates timetable generation by considering faculty
            availability, classroom capacity, subject requirements, and student
            preferences. It ensures optimized schedules for both UG & PG programs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Key Parameters</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Number of classrooms & labs</li>
            <li>Faculty availability & workload</li>
            <li>Subjects per semester & batch strength</li>
            <li>Special fixed slots</li>
            <li>Multi-department, multi-shift scheduling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Expected Solution</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Login-based access for institutions & admins</li>
            <li>Multiple optimized timetable options</li>
            <li>Approval & publishing workflow</li>
            <li>Student/teacher dashboards with upcoming classes</li>
            <li>AI-powered rearrangement suggestions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
