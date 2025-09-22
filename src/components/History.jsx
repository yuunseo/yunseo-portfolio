"use client";

const historyData = [
  {
    year: '2025',
    events: [
      { month: '02월', description: '숭실대학교 산업정보시스템공학과/컴퓨터학부 학사 졸업' },  
      { month: '02월', description: 'TOEIC Speaking IH 취득' },
      { month: '05월', description: '미래내일일경험 이스타항공 온라인 홈페이지 프로모션 기획 프로젝트 (PM/UI)' },
      { month: '07월', description: '우리FIS Academy 풀스택 개발 부트캠프 수강 (6개월)' },
      { month: '07월', description: 'React 렌더링 과정 메모리 관리 세미나' },
      { month: '08월', description: '메타버스 학습 공간 웹 서비스 개발' },
      { month: '09월', description: '토큰 기반의 인증/인가 방법 세미나' },
    ],
  },
  {
    year: '2024',
    events: [
      { month: '01월', description: 'AI 엔지니어 기초 다지기 부스트 클래스' },
      { month: '04월', description: '이상지질혈증 예측 모델 구현' },
      { month: '06월', description: '정보처리기사 자격증 취득' },
      { month: '07월', description: 'Project Assistant 인턴 (6개월)' },
    ],
  },
  {
    year: '2023',
    events: [
      { month: '04월', description: '한이음 ICT 멘토링 - AI 기반 영어회화 앱 개발' },
      { month: '06월', description: '퇴사 예측 모델 구현 및 분석' },
      { month: '07월', description: 'HCI 앱 사용성 리뷰 분석 논문' },
      { month: '10월', description: 'SQL Developer 자격증 취득' },
      { month: '11월', description: 'JSP로 “헬스장 플랫폼” 웹 개발' },
    ],
  },
  {
    year: '2022',
    events: [
      { month: '03월', description: '컴퓨터학부 복수전공' },
      { month: '10월', description: '“오늘의 집” 웹 분석 및 DB 설계' },
      { month: '10월', description: '“파파고” UI 분석 및 재설계' },
      { month: '11월', description: '“알람+투두 모바일 앱” 개발' },
    ],
  },
];

export default function History() {
  return (
    <section id="history" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 text-pretty">
            맡은 일을 책임감 있게 수행하며, 꾸준한 노력과 열정을 통해 
            <br/> 
            의미 있는 결과물을 만들어온 저의 여정을 소개합니다.
          </p>
        </div>

        <div>
          {historyData.map((data, index) => (
            <div key={data.year}>
              <div className="relative border-b border-gray-200 py-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pl-4 md:pl-0">{data.year}</h3>
                <ul className="space-y-6">
                  {data.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start md:items-center">
                      <div className="text-base text-gray-600 font-medium w-16 flex-shrink-0">
                        {event.month}
                      </div>
                      <p className="text-gray-900 text-lg flex-1">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}