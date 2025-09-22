import Link from 'next/link';

export default function Hero() {
  return (
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
              <Link
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
              >
                프로젝트 보기
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl absolute -inset-4"></div>
              {/* <img
                  src="/profile-photo.jpg"
                  alt="나를 설명할 수 있는 사진"
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl"
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}