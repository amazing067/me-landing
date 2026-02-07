# me-landing 프로젝트 GitHub 업로드 방법

## 1. GitHub에서 저장소 만들기

1. [GitHub](https://github.com) 로그인 후 **New repository** 클릭
2. **Repository name**: `me-landing` (또는 원하는 이름)
3. **Public** 선택, **Add a README file** 체크 해제 (이미 로컬에 있음)
4. **Create repository** 클릭

## 2. 로컬에서 Git 초기화 후 푸시

프로젝트 폴더(`me-landing`)에서 터미널을 열고 아래 순서대로 실행하세요.

```powershell
# 1) Git 저장소 초기화
git init

# 2) 모든 파일 스테이징 (node_modules, dist 등은 .gitignore에 의해 제외됨)
git add .

# 3) 첫 커밋
git commit -m "Initial commit: 전자명함 랜딩 페이지"

# 4) 기본 브랜치 이름 설정 (GitHub 기본값에 맞춤)
git branch -M main

# 5) GitHub 저장소 연결 (본인 아이디/저장소이름으로 수정)
git remote add origin https://github.com/본인아이디/me-landing.git

# 6) 푸시
git push -u origin main
```

**주의**: `git remote add origin` 뒤의 URL은 GitHub에서 만든 저장소 주소로 바꿔야 합니다.  
저장소 페이지에서 **Code** → **HTTPS** 주소를 복사해서 넣으면 됩니다.

## 3. 이미 GitHub 저장소가 있다면

이미 `git init`과 `git remote`를 해 둔 상태라면, 수정 후 올릴 때는:

```powershell
git add .
git commit -m "변경 내용 요약"
git push
```

## 4. 인증 (HTTPS)

- 최초 `git push` 시 GitHub 로그인 창이 뜨거나,  
  **Settings → Developer settings → Personal access tokens** 에서 만든 토큰을 비밀번호 자리에 입력하면 됩니다.
- Windows에서는 **Git Credential Manager** 가 뜨면서 한 번 로그인해 두면 이후에는 자동으로 인증됩니다.

## 5. 올라가지 말아야 할 것 (이미 .gitignore에 있음)

- `node_modules/` — 패키지 설치로 다시 만들 수 있음
- `dist/` — `npm run build`로 다시 생성
- `.env` — API 키 등 비밀 정보 (필요하면 `.env.example`만 올리고 값은 비움)

이대로 진행하면 me-landing 프로젝트를 GitHub에 올릴 수 있습니다.
