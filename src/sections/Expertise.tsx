const items = [
  {
    icon: ShieldIcon,
    title: '보험·보상 전문 컨설턴트',
    desc: '보험 설계·보상 컨설팅',
  },
  {
    icon: CodeIcon,
    title: '웹/앱 및 IT 시스템 구축',
    desc: '기업용 웹·앱·시스템 개발',
  },
  {
    icon: FilmIcon,
    title: '유튜브 기획·촬영·편집',
    desc: '채널 기획부터 편집까지',
  },
  {
    icon: SimulationIcon,
    title: '본부 시뮬레이션 & 고객 대화 AI',
    desc: '실공간 롤플레잉 시뮬레이션 방 구축, 고객 대화 연습용 AI(프롬프트 설계)',
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="relative py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-2 text-white">
          전문 분야
        </h2>
        <div className="glow-line w-24 mx-auto mb-8 sm:mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative p-4 sm:p-6 rounded-xl border border-cyan-glow/20 bg-navy-800/40 hover:border-cyan-glow/40 hover:shadow-lg hover:shadow-cyan-glow/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-glow/10 flex items-center justify-center text-cyan-glow mb-3 sm:mb-4">
                <Icon />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function FilmIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  )
}

function SimulationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
