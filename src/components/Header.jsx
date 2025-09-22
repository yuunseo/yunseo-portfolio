import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <Link href="/">KIMYUNSEO</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-slate-300 hover:text-white transition-colors">소개</Link>
          <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">프로젝트</Link>
          <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">기술</Link>
          <Link href="#history" className="text-slate-300 hover:text-white transition-colors">성장과정</Link>
        </nav>
        
        <div className="flex items-center gap-4"> 
          <Link
            href="mailto:dbstj7457@naver.com"
            className="px-3 py-1.5 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors hidden sm:block text-sm"
          >
            📧 이메일 보내기
          </Link>
          <Link
            href="https://github.com/yuunseo"
            className="px-3 py-1.5 border border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors hidden sm:block text-sm"
          >
            🔗 GitHub 보기
          </Link>
        </div>
      </div>
    </header>
  );
}