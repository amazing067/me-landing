import { useState, useEffect } from 'react'
import { config } from '../config'

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-6 sm:pt-8 pb-10 sm:pb-16 overflow-hidden">
      {/* 회로 느낌 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 border border-cyan-glow/20 rounded-lg rotate-12" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-cyan-accent/15 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-cyan-glow/30 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />
      </div>

      {/* 상단: 로고 (스크롤 시 배경 블러) */}
      <header className={`sticky top-0 left-0 right-0 z-20 flex justify-between items-center px-4 py-4 sm:px-6 sm:py-5 transition-all duration-300 ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="flex items-center gap-3">
          {config.logo ? (
            <img
              src={config.logo}
              alt={config.company}
              className="h-16 sm:h-20 object-contain object-left"
            />
          ) : (
            <div className="flex flex-col">
              <span className="text-[10px] tracking-widest text-cyan-glow/90 uppercase">
                {config.companyEn.split(' ')[0]}
              </span>
              <span className="text-xs font-semibold tracking-wider text-white uppercase">
                {config.companyEn.split(' ')[1]}
              </span>
            </div>
          )}
        </div>
        {config.amazingLogo && (
          <img
            src={config.amazingLogo}
            alt="어메이징사업부"
            className="h-12 sm:h-16 object-contain mix-blend-multiply"
          />
        )}
      </header>

      <div className="relative z-10 text-center max-w-xl mx-auto w-full">
        {/* 명함 한 장 카드 */}
        <div className="namecard-card px-5 py-6 sm:px-8 sm:py-8 rounded-2xl">
          {/* 프로필 사진 (있을 때만) + 테두리 glow */}
          {config.profile && (
            <div className="mt-2 sm:mt-4 mb-4 sm:mb-5 flex justify-center">
              <img
                src={config.profile}
                alt={config.name}
                className="profile-glow w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-cyan-glow/40"
              />
            </div>
          )}
          {/* 이름 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider glow-text">
            {config.name}
          </h1>
          <div className="glow-line w-28 sm:w-40 mx-auto my-2 sm:my-4 rounded-full" />

          {/* 한 줄 소개 */}
          <p className="text-gray-300 text-base sm:text-xl mb-4 sm:mb-5">
            {config.tagline}
          </p>

          {/* QR 전용 안내 */}
          <div className="bg-navy-800/50 border border-cyan-glow/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 mb-5 sm:mb-6 text-left">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              명함을 통해 방문해 주셔서 감사합니다. 보험·보상 상담, 웹/앱·IT 구축, 유튜브 제작, 시뮬레이션·AI 교육 문의는
              아래 버튼으로 편하게 연락 주세요.
            </p>
          </div>

          {/* CTA 버튼 - 모바일 컴팩트 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <a
            href={config.links.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#FEE500] text-[#191919] text-sm font-semibold hover:bg-[#fdd835] transition-colors"
          >
            <KakaoIcon />
            카카오톡 상담
          </a>
          <a
            href={`tel:${config.phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-cyan-glow text-cyan-glow text-sm font-semibold hover:bg-cyan-glow/10 transition-colors"
          >
            <PhoneIcon />
            전화 걸기
          </a>
          <a
            href={`sms:${config.phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-gray-500 text-gray-200 text-sm font-semibold hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            문자 보내기
          </a>
          {config.fax && (
            <span className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-gray-600 text-gray-300 text-sm font-semibold">
              FAX {config.fax}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-xs mb-4">
          채팅 연결 후 <strong className="text-gray-300">명함으로 들어왔습니다</strong> 보내 주시면 출처 확인에 도움이 됩니다.{' '}
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText('명함으로 들어왔습니다')
            }}
            className="text-cyan-glow hover:underline"
          >
            복사
          </button>
        </p>

        <p className="text-gray-500 text-xs mb-1">아래로 스크롤</p>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-1.5 text-cyan-glow/90 hover:text-cyan-glow text-xs sm:text-sm font-medium"
        >
          포트폴리오 보기
          <span className="text-base animate-bounce-subtle inline-block">↓</span>
        </a>
        </div>
        {/* 명함 카드 끝 */}

        {/* 링크 버튼들 */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-5 sm:mt-6">
          {config.links.blog && (
            <a
              href={config.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow text-sm transition-colors"
            >
              <BlogIcon />
              블로그
            </a>
          )}
          {config.links.youtube && (
            <a
              href={config.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow text-sm transition-colors"
            >
              <YouTubeIcon />
              유튜브
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function KakaoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c5.8 0 10.5 3.66 10.5 8.185 0 4.524-4.7 8.185-10.5 8.185a11.4 11.4 0 0 1-2.7-.323l-3.2.969.969-3.128A7.5 7.5 0 0 1 1.5 11.185C1.5 6.66 6.2 3 12 3Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function BlogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h8" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
