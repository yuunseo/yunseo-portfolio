const aboutItems = [
  {
    icon: '🚀',
    title: '끊임없는 학습',
    description: '새로운 기술과 프로젝트에 호기심을 가지고, 실제 구현을 통해 지속적으로 성장합니다.',
  },
  {
    icon: '🤝🏻',
    title: '협업과 소통',
    description: '팀 프로젝트에서 요구사항을 정리하고, 다양한 사람들과 원활히 소통하며 프로젝트를 완성합니다.',
  },
  {
    icon: '🎯',
    title: '사용자 중심',
    description: '사용자 경험을 최우선으로 생각하며 직관적인 인터페이스를 구현합니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">소개</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
            >
              <div className="text-blue-400 text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}