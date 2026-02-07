import { config } from '../config'

const projects = [
  {
    name: '치매검사 든든이',
    desc: '웹 기반 인지(치매) 선별 검사. 15문항(기억력·지남력·계산력·시공간 등), 영역별 가중치 채점·결과 이메일 발송.',
    tags: ['Next.js', '인지검사', '모바일'],
  },
  {
    name: '어메이징사업부 시스템',
    desc: '실적·리드·본부/팀 관리 백오피스. 리드(DB) 분배·할당, 목표·캘린더·공지, 카카오 알림톡.',
    tags: ['Express', 'React', 'Node'],
  },
  {
    name: '블로그 어메이징사업부',
    desc: '보험 영업 지원 플랫폼. 카페용 Q&A AI 생성(GPT·Gemini), 보험료 비교·판례 참조, 본부·팀별 권한·API 사용량 관리.',
    tags: ['Next.js', 'AI'],
  },
  {
    name: '프라임에셋 어메이징 홈페이지',
    desc: '사업부 공식 홈페이지 + 회원 라운지. 가입·승인, 명함/배지/교육 신청·발송, 이메일 인증.',
    tags: ['Next.js', 'Framer Motion'],
  },
  {
    name: '청구닷컴',
    desc: '보험금 청구 링크 허브. 손해/생명/공제 회사별 전산·청구서 PDF·고객센터·FAX 링크, AcroForm 자동 입력.',
    tags: ['정적 사이트', 'Tailwind', 'PDF'],
  },
  {
    name: '본부 시뮬레이션 & 고객 대화 AI',
    desc: '회사 내 시뮬레이션 방 구축. 실제 롤플레잉 연습 가능, 고객과 대화 연습용 AI 시스템(프롬프트 설계).',
    tags: [],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-2 text-white">
          주요 프로젝트
        </h2>
        <div className="glow-line w-24 mx-auto mb-8 sm:mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {projects.map(({ name, desc, tags }) => (
            <div
              key={name}
              className="p-4 sm:p-5 rounded-xl border border-gray-700 bg-navy-800/30 hover:border-cyan-glow/30 hover:shadow-lg hover:shadow-cyan-glow/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="text-sm sm:text-base font-semibold text-cyan-glow/90 mb-1">{name}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{desc}</p>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-cyan-glow/10 text-cyan-glow/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          더 많은 프로젝트는 상담 시 말씀해 드립니다.{' '}
          <a
            href={config.links.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-glow hover:underline"
          >
            카카오톡
          </a>
          ·{' '}
          <a href={`tel:${config.phone.replace(/-/g, '')}`} className="text-cyan-glow hover:underline">
            전화
          </a>
          로 편하게 문의해 주세요.
        </p>
      </div>
    </section>
  )
}
