import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-slate-900 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="mailto:dbstj7457@naver.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
          >
            📧 이메일 보내기
          </Link>
          <Link
            href="https://github.com/yuunseo"
            className="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors flex items-center justify-center"
          >
            🔗 GitHub 보기
          </Link>
        </div>
      </div>
    </section>
  );
}