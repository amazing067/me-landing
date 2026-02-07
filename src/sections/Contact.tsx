import { config } from '../config'

export function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold text-white mb-6">연락처</h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href={`tel:${config.phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-800 border border-gray-600 text-gray-200 hover:border-cyan-glow/50 hover:text-cyan-glow transition-colors"
          >
            📞 {config.phone}
          </a>
          <a
            href={`sms:${config.phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-800 border border-gray-600 text-gray-200 hover:border-cyan-glow/50 hover:text-cyan-glow transition-colors"
          >
            💬 문자 보내기
          </a>
          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-800 border border-gray-600 text-gray-200 hover:border-cyan-glow/50 hover:text-cyan-glow transition-colors break-all"
          >
            ✉️ {config.email}
          </a>
        </div>

        {config.fax && (
          <p className="text-gray-400 text-sm mt-3">
            FAX {config.fax}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {config.links.kakao && (
            <a
              href={config.links.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#FEE500]/20 border border-[#FEE500]/50 text-[#FEE500] hover:bg-[#FEE500]/30 text-sm"
            >
              카카오톡
            </a>
          )}
          {config.links.blog && (
            <a
              href={config.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-glow/50 hover:text-cyan-glow text-sm"
            >
              블로그
            </a>
          )}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-2">
            {(config.logoVertical ?? config.logo) ? (
              <img
                src={config.logoVertical ?? config.logo}
                alt={config.company}
                className="h-20 object-contain opacity-80"
              />
            ) : (
              <>
                <span className="text-[10px] tracking-widest text-cyan-glow/70 uppercase">
                  {config.companyEn.split(' ')[0]}
                </span>
                <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                  {config.companyEn.split(' ')[1]}
                </span>
              </>
            )}
            <span className="text-gray-500 text-sm">{config.company}</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
