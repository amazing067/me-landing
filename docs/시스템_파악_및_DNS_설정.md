# me-landing 시스템 전체 파악 + DNS 설정

## 1. 프로젝트 전체 구조 (내 컴퓨터 기준)

```
c:\Users\ok\me-landing\
├── index.html              # 진입 HTML, 메타·타이틀·Pretendard 폰트
├── package.json            # 의존성·스크립트 (react, vite, tailwind 등)
├── vite.config.ts          # Vite 설정 (포트 5174)
├── tsconfig.json            # TypeScript 설정
├── tailwind.config.js       # Tailwind 색상(navy/cyan)·폰트 확장
├── postcss.config.js       # PostCSS (Tailwind 연동)
├── README.md
├── public/
│   └── favicon.svg         # 탭 아이콘
├── src/
│   ├── main.tsx             # React 앱 마운트
│   ├── index.css            # Tailwind + 전역 스타일(회로 배경 등)
│   ├── App.tsx              # 4개 섹션 조립
│   ├── config.ts            # ★ 연락처·링크 수정은 여기
│   ├── vite-env.d.ts
│   └── sections/
│       ├── Hero.tsx         # 1페이지: 이름, 소개, QR안내, CTA
│       ├── Expertise.tsx    # 세 가지 전문 분야
│       ├── Portfolio.tsx    # 만든 것들(치매검사 등)
│       └── Contact.tsx      # 연락처 + 푸터(프라임에셋)
├── dist/                    # npm run build 결과 (배포용)
└── node_modules/            # 패키지
```

---

## 2. 역할별 정리

| 구분 | 내용 |
|------|------|
| **기술 스택** | Vite + React 18 + TypeScript, Tailwind CSS |
| **개발** | `npm run dev` → http://localhost:5174 |
| **빌드** | `npm run build` → `dist/`에 HTML·CSS·JS 생성 (정적 파일) |
| **수정 포인트** | `src/config.ts` (전화번호, 카카오/블로그/GitHub/유튜브 URL) |
| **디자인** | 명함 톤: 남색 배경 + 청록 포인트, 회로 느낌 라인 |

- **데이터/백엔드 없음** → 전부 정적 랜딩. 배포는 `dist/`만 올리면 됨.
- **도메인** | 예: me.어메이징사업부.com → DNS에서 서브도메인만 연결하면 됨.

---

## 3. 배포 흐름 (요약)

1. **내 PC**: `npm run build` → `dist/` 생성  
2. **호스팅 선택**: Vercel 또는 Netlify (둘 다 무료·정적 배포 적합)  
3. **배포 방법 (택 1)**  
   - **Git 연동**: GitHub에 올린 뒤 Vercel/Netlify에서 저장소 연결 → push 시 자동 배포  
   - **수동**: Vercel/Netlify 대시보드에서 `dist` 폴더 드래그 앤 드롭  
4. **도메인 연결**: 호스팅에서 "커스텀 도메인" 추가 후, **DNS 설정**만 하면 됨 (아래 참고).

---

## 4. DNS 설정 (me.어메이징사업부.com 같은 서브도메인)

도메인(예: 어메이징사업부.com)을 구매한 **도메인 등록처(가비아, 카페24, Cloudflare, Namecheap 등)**에서 DNS를 수정합니다.  
**me**는 서브도메인이라 "호스트/이름"에 `me`만 넣으면 됩니다.

### A. Vercel에 배포한 경우

1. **Vercel 대시보드**  
   - 프로젝트 → Settings → Domains → "Add"  
   - `me.어메이징사업부.com` 입력 후 추가  
   - Vercel이 "설정 안내"를 보여줌 (CNAME 또는 A 레코드)

2. **도메인 등록처 DNS 설정**  
   - **방법 1 (권장)**  
     - 타입: **CNAME**  
     - 호스트/이름: **me** (또는 me.어메이징사업부.com 일부 업체는 전체 입력)  
     - 값/대상: **cname.vercel-dns.com**  
   - **방법 2**  
     - 타입: **A**  
     - 호스트: **me**  
     - 값: **76.76.21.21** (Vercel IP, 변경될 수 있으므로 대시보드 안내 확인)

3. **프로파간이션**  
   - 반영까지 보통 5분~48시간.  
   - Vercel에서 "Valid Configuration" 나오면 완료.

### B. Netlify에 배포한 경우

1. **Netlify 대시보드**  
   - Site → Domain settings → Add custom domain  
   - `me.어메이징사업부.com` 입력

2. **도메인 등록처 DNS 설정**  
   - 타입: **CNAME**  
   - 호스트/이름: **me**  
   - 값/대상: **[당신사이트이름].netlify.app** (Netlify가 알려줌)

3. **Netlify DNS 쓰는 경우**  
   - 도메인 등록처에서 네임서버를 Netlify로 바꾸면, Netlify 대시보드에서 A/CNAME을 직접 관리. (선택 사항)

---

## 5. 정리

- **시스템**: PC에 있는 건 위 트리 구조 하나고, 배포 시에는 **빌드 결과물(`dist/`)** 만 Vercel/Netlify에 올리면 됨.  
- **DNS**:  
  - **어디서 하냐** → 도메인 산 곳(가비아, 카페24, Cloudflare 등)의 "DNS 관리"  
  - **뭘 하냐** → 서브도메인 **me**에 대해 CNAME → `cname.vercel-dns.com`(Vercel) 또는 `xxx.netlify.app`(Netlify)  
  - **실제 도메인이** 어메이징사업부.com이 아니라 **다른 주소**(예: amaizing.co.kr)여도, "me"만 서브도메인으로 추가하면 **me.실제도메인**으로 접속 가능합니다.

도메인 등록처 이름(가비아/카페24/Cloudflare 등)을 알려주시면, 그 업체 화면 기준으로 "어디 클릭해서 뭘 넣는지"까지 더 구체적으로 적어드릴 수 있습니다.
