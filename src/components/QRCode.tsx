import { QRCodeSVG } from 'qrcode.react'
import { config } from '../config'

type QRCodeProps = {
  /** QR에 넣을 URL. 비우면 config.landingUrl 또는 현재 페이지 URL */
  value?: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  fgColor?: string
  bgColor?: string
  className?: string
}

function getQRValue(url: string | undefined): string {
  if (url && url.trim()) return url.trim()
  if (config.landingUrl && config.landingUrl.trim()) return config.landingUrl.trim()
  if (typeof window !== 'undefined') return window.location.href
  return ''
}

export function QRCode({
  value,
  size = 200,
  level = 'M',
  fgColor = '#000000',
  bgColor = '#FFFFFF',
  className = '',
}: QRCodeProps) {
  const url = getQRValue(value)
  if (!url) return null

  return (
    <QRCodeSVG
      value={url}
      size={size}
      level={level}
      fgColor={fgColor}
      bgColor={bgColor}
      className={className}
    />
  )
}
