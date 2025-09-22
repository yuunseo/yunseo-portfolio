import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-slate-400/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-black">
          <Link href="/">KIMYUNSEO</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-black-300 hover:text-slate transition-colors">소개</Link>
          <Link href="#projects" className="text-black-300 hover:text-black transition-colors">프로젝트</Link>
          <Link href="#skills" className="text-black-300 hover:text-black transition-colors">기술</Link>
          <Link href="#history" className="text-black-300 hover:text-black transition-colors">성장과정</Link>
        </nav>
        
        <div className="flex items-center gap-4"> 
        <Link
          href="mailto:dbstj7457@naver.com"
          className="px-3 py-1.5 border border-black-600 text-black-300 bg-transparent rounded-md transition-colors hidden sm:block text-sm hover:bg-slate-500 hover:text-white"
        >
          📧 이메일 보내기
        </Link>
          <Link
            href="https://github.com/yuunseo"
            className="px-3 py-1.5 border border-black-600 text-black-300 bg-transparent rounded-md transition-colors hidden sm:block text-sm hover:bg-slate-500 hover:text-white"
          >
            🔗 GitHub 보기
          </Link>
        </div>
      </div>
    </header>
  );
}