import Image from 'next/image';
import Link from 'next/link';

export default function Sections() {
  return (
    <>
      <section id="projects" className="min-h-screen bg-purple-50 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <Image
                        src="/first.png"
                        alt="first project"
                        width={400}
                        height={600}
                        className="w-full object-cover"
                    />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="whitespace-nowrap text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                알람과 투두 리스트를 결합시킨
                <br />
                앱 개발 프로젝트
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-pretty leading-relaxed">
                대학생들에게 필수적인 두 가지 기능으로
                <br />
                간편하고 직관적으로 사용할 수 있는 기능을 제공합니다.
              </p>
              
              {/* 기술 스택 섹션 추가 */}
              <div className="flex gap-2 mb-8">
                <span className="px-3 py-1 bg-purple-200 text-gray-800 text-sm rounded-full font-medium">Java</span>
                <span className="px-3 py-1 bg-purple-200 text-gray-800 text-sm rounded-full font-medium">XML</span>
              </div>

              <Link href="https://github.com/ssu-alram/alram-app?tab=readme-ov-file" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                      깃허브 보기 →
                </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                AI 튜터를 제공하는
                <br />
                영어회화 앱 개발 프로젝트
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-pretty leading-relaxed">
                AI와 실시간으로 대화하고
                <br/>
                대화 내용을 복습하며 학습 기회를 제공합니다.
              </p>

              {/* 기술 스택 섹션 추가 */}
              <div className="flex gap-2 mb-8">
                <span className="px-3 py-1 bg-blue-300 text-gray-800 text-sm rounded-full font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-300 text-gray-800 text-sm rounded-full font-medium">Django</span>
              </div>

            <Link href="https://github.com/yuunseo/AnyLearn" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      깃허브 보기 →
                </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <Image
                        src="/second.png"
                        alt="second project"
                        width={600}
                        height={600}
                        className="w-full object-cover"
                    />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-yellow-50 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

             <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <Image
                        src="/third.png"
                        alt="third project"
                        width={600}
                        height={600}
                        className="w-full object-cover"
                    />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                메타버스 학습공간
                <br />
                웹 개발 프로젝트
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-pretty leading-relaxed">
                실시간으로 서로 소통하며
                <br />
                혼자일 때보다 함께할 때의 동기부여를 제공합니다.
              </p>

              {/* 기술 스택 섹션 추가 */}
              <div className="flex gap-2 mb-8">
                <span className="px-3 py-1 bg-yellow-300 text-gray-800 text-sm rounded-full font-medium">React</span>
                <span className="px-3 py-1 bg-yellow-300 text-gray-800 text-sm rounded-full font-medium">Next.js</span>
              </div>
              
              <Link href="https://github.com/KimZo2/ON-FE" className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                      깃허브 보기 →
                </Link>
            </div>
          </div>
        </div>
      </section>
      </>
  )
};