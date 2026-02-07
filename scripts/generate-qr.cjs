const fs = require('fs')
const path = require('path')
const QRCode = require('qrcode')

const projectRoot = path.join(__dirname, '..')
const configPath = path.join(projectRoot, 'src', 'config.ts')
const configText = fs.readFileSync(configPath, 'utf8')
const match = configText.match(/landingUrl:\s*['"]([^'"]+)['"]/)
const url = match ? match[1].trim() : 'https://me.어메이징사업부.com'

const outDir = path.join(projectRoot, 'public', 'qr')
const outFile = path.join(outDir, 'me-landing-qr.png')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

QRCode.toFile(
  outFile,
  url,
  { width: 256, margin: 2, color: { dark: '#0f172a', light: '#ffffff' } },
  (err) => {
    if (err) {
      console.error('QR 생성 실패:', err)
      process.exit(1)
    }
    console.log('QR 저장:', outFile)
  }
)
