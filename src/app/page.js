export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white">KIMYUNSEO</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              소개
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
              프로젝트
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
              기술
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              연락
            </a>
          </nav>
          <button className="px-4 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors">
            연락하기
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                슬로건 나올 부분이고,
                <br />
                <span className="text-blue-400">슬로건 슬로건</span>으로 슬로건 설정하기
              </h1>
              <p className="text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
                슬로건 설명 작성할 부분입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center">
                  프로젝트 보기
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl absolute -inset-4"></div>
                {/* <img
                  src=""
                  alt="나를 설명할 수 있는 사진 넣고 싶다!"
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">소개</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-blue-400 text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">빠른 개발</h3>
              <p className="text-slate-300 leading-relaxed">
                최신 기술 스택을 활용하여 효율적이고 빠른 개발을 추구합니다.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-blue-400 text-2xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">창의적 사고</h3>
              <p className="text-slate-300 leading-relaxed">문제를 다각도로 분석하고 혁신적인 솔루션을 제시합니다.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="text-blue-400 text-2xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">사용자 중심</h3>
              <p className="text-slate-300 leading-relaxed">
                사용자 경험을 최우선으로 생각하며 직관적인 인터페이스를 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "JavaScript",
              "Next.js",
              "Tailwind CSS",
              "Python",
              "Git",
              "Figma",
              "Java",
              "Spring Boot"
            ].map((skill) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">주요 프로젝트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden group hover:bg-slate-800/70 transition-colors"
              >
                <img
                  src={`/modern-web-application.png?height=200&width=400&query=modern web application project ${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">프로젝트 {project}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    혁신적인 기술을 활용한 웹 애플리케이션 프로젝트입니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">Node.js</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-400 hover:text-white transition-colors">GitHub</button>
                      <button className="p-2 text-slate-400 hover:text-white transition-colors">Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">함께 일해요</h2>
          <p className="text-xl text-slate-300 mb-8 text-pretty">
            새로운 프로젝트나 협업 기회가 있으시면 언제든 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center">
              📧 이메일 보내기
            </button>
            <button className="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors flex items-center justify-center">
              🔗 GitHub 보기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Yunseo Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
