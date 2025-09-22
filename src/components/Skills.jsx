const skills = [
  "React",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git",
  "Figma",
  "Java",
  "Spring Boot"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">기술 스택</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors"
            >
              <div className="text-white font-medium">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}