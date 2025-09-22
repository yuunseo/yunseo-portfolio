import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">함께 일해요</h2>
        <p className="text-xl text-slate-300 mb-8 text-pretty">
          새로운 프로젝트나 협업 기회가 있으시면 언제든 연락주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:your-email@example.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
          >
            📧 이메일 보내기
          </Link>
          <Link
            href="https://github.com/your-github-profile"
            className="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors flex items-center justify-center"
          >
            🔗 GitHub 보기
          </Link>
        </div>
      </div>
    </section>
  );
}