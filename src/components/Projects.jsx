import Image from 'next/image';
import Link from 'next/link';

const projectsData = [
  {
    id: 1,
    title: '프로젝트 1',
    description: '혁신적인 기술을 활용한 웹 애플리케이션 프로젝트입니다.',
    techStack: ['React', 'Node.js'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-1.png',
  },
  {
    id: 2,
    title: '프로젝트 2',
    description: '사용자 경험을 최적화한 모바일 앱 개발 프로젝트입니다.',
    techStack: ['Next.js', 'Tailwind CSS'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-2.png',
  },
  {
    id: 3,
    title: '프로젝트 3',
    description: 'AI 기술을 접목한 데이터 분석 솔루션입니다.',
    techStack: ['Python', 'Django'],
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: '/images/project-3.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">주요 프로젝트</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden group hover:bg-slate-800/70 transition-colors"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={project.githubUrl} className="p-2 text-slate-400 hover:text-white transition-colors">
                      GitHub
                    </Link>
                    <Link href={project.demoUrl} className="p-2 text-slate-400 hover:text-white transition-colors">
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}