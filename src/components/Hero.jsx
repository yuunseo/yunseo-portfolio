import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="leading-tight whitespace-nowrap text-3xl lg:text-5xl font-bold text-black mb-6 text-balance">
              안녕하세요,
              <br />
              <span className="text-blue-400">성실하게 배우고, 노력으로 완성</span>하는 개발자
              <br />
            김윤서입니다.
            </h1>
            {/* <p className="whitespace-nowrap text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
              맡은 일을 책임감 있게 수행하며, 꾸준한 노력과 열정을 통해 의미 있는 결과물을 만들어 갑니다.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
                href="#projects"
                className="px-6 py-3 border border-slate-600 text-black-300 hover:bg-slate-700 bg-transparent rounded-md transition-colors"
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
                  alt="김윤서 사진"
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl"
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
