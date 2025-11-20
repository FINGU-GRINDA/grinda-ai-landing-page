# GRINDA AI Landing Page

GRINDA AI의 공식 랜딩 페이지입니다. React와 Vite를 기반으로 구축된 현대적인 웹 애플리케이션으로, AI 영업 에이전트 솔루션을 소개하고 있습니다.

## 📋 목차

- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [주요 기능](#주요-기능)
- [페이지 구조](#페이지-구조)
- [컴포넌트 설명](#컴포넌트-설명)
- [개발 가이드](#개발-가이드)
- [빌드 및 배포](#빌드-및-배포)

## 🛠 기술 스택

- **프레임워크**: React 19.2.0
- **빌드 도구**: Vite 7.2.2
- **라우팅**: React Router DOM 7.9.6
- **언어**: JavaScript (ES6+)
- **스타일링**: CSS3 (모듈화된 CSS 파일)

## 📁 프로젝트 구조

```
grinda-ai-landing-page/
├── public/                 # 정적 파일
│   ├── team-photo.jpg     # 팀 사진
│   └── vite.svg           # 파비콘
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── AIAgentChat.jsx      # AI 에이전트 채팅 컴포넌트
│   │   ├── BackToTop.jsx        # 상단으로 이동 버튼
│   │   ├── ConsultationModal.jsx # 상담 모달
│   │   ├── Footer.jsx           # 푸터
│   │   ├── Globe.jsx            # 지구 애니메이션
│   │   ├── Layout.jsx           # 레이아웃 래퍼
│   │   ├── Navbar.jsx           # 네비게이션 바
│   │   ├── NewsCard.jsx         # 뉴스 카드
│   │   └── ScrollToTop.jsx      # 라우트 변경 시 스크롤 초기화
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── admin/        # 관리자 페이지
│   │   │   └── AdminDashboard.jsx
│   │   ├── solutions/    # 솔루션 페이지들
│   │   │   ├── Finance.jsx
│   │   │   ├── Rinda.jsx
│   │   │   └── YouTube.jsx
│   │   ├── AIStore.jsx
│   │   ├── Company.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── InsightDetail.jsx
│   │   ├── Insights.jsx
│   │   ├── RindaTech.jsx
│   │   └── Solutions.jsx
│   ├── sections/         # 페이지 섹션 컴포넌트
│   │   ├── Company.jsx
│   │   ├── CompanyHero.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestNews.jsx
│   │   ├── SalesAgentDemo.jsx
│   │   ├── Team.jsx
│   │   ├── TrustedBy.jsx
│   │   ├── Values.jsx
│   │   └── WhyGrinda.jsx
│   ├── hooks/            # 커스텀 훅
│   │   └── useScrollAnimation.js
│   ├── utils/            # 유틸리티 함수
│   │   ├── cmsStorage.js  # LocalStorage 기반 CMS
│   │   └── throttle.js    # 스크롤 성능 최적화
│   ├── data/             # 정적 데이터
│   │   └── newsData.js    # 뉴스 초기 데이터
│   ├── styles/           # 전역 스타일
│   │   ├── animations.css
│   │   ├── cms.css
│   │   └── pages.css
│   ├── App.jsx           # 메인 앱 컴포넌트 (라우팅)
│   ├── App.css           # 앱 전역 스타일
│   ├── main.jsx          # 앱 진입점
│   └── index.css        # 전역 CSS 리셋
├── index.html            # HTML 템플릿
├── vite.config.js        # Vite 설정
├── package.json         # 프로젝트 의존성
└── README.md            # 프로젝트 문서
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/FINGU-GRINDA/grinda-ai-landing-page.git
cd grinda-ai-landing-page
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

## ✨ 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 UI/UX
- 반응형 네비게이션 바 및 모바일 메뉴

### 2. 라우팅 시스템
- React Router를 활용한 SPA (Single Page Application)
- 페이지 간 부드러운 전환 및 스크롤 초기화

### 3. 스크롤 애니메이션
- `useScrollAnimation` 커스텀 훅을 통한 스크롤 기반 애니메이션
- 성능 최적화를 위한 throttle 적용

### 4. CMS 기능 (LocalStorage 기반)
- 관리자 대시보드를 통한 뉴스/인사이트 콘텐츠 관리
- LocalStorage를 활용한 클라이언트 사이드 데이터 저장
- CRUD 기능 지원 (생성, 조회, 수정, 삭제)

### 5. AI 에이전트 채팅 인터페이스
- 실시간 AI 에이전트와의 상호작용 UI
- 상담 모달을 통한 문의 기능

### 6. 성능 최적화
- Vite를 통한 빠른 빌드 및 HMR (Hot Module Replacement)
- 스크롤 이벤트 throttle을 통한 성능 최적화
- 코드 스플리팅 및 레이지 로딩 지원

## 📄 페이지 구조

### 메인 페이지 (`/`)
- **Hero**: 메인 비주얼 및 CTA
- **SalesAgentDemo**: AI 영업 에이전트 데모
- **TrustedBy**: 신뢰받는 파트너/고객사
- **WhyGrinda**: GRINDA AI의 차별점
- **LatestNews**: 최신 뉴스 및 인사이트
- **Company**: 회사 소개 요약

### 회사 소개 (`/company`)
- 회사 비전, 미션, 가치
- 팀 소개
- 회사 연혁

### 솔루션 (`/solutions`)
- `/solutions/youtube`: YouTube 솔루션
- `/solutions/rinda`: RINDA 솔루션
- `/solutions/finance`: Finance 솔루션

### 인사이트 (`/insights`)
- 뉴스 및 인사이트 목록
- `/insights/:id`: 상세 페이지

### 기타 페이지
- `/contact`: 문의하기
- `/ai-store`: AI 스토어
- `/rinda-tech`: RINDA 기술 소개
- `/admin`: 관리자 대시보드 (콘텐츠 관리)

## 🧩 컴포넌트 설명

### Layout 컴포넌트
모든 페이지에 공통으로 적용되는 레이아웃으로, Navbar, Footer, BackToTop을 포함합니다.

### Navbar 컴포넌트
- 스크롤 시 배경색 변경
- 모바일 반응형 메뉴
- 현재 페이지 하이라이트

### Hero 섹션
- 메인 비주얼 영역
- 스크롤 애니메이션 효과
- CTA 버튼

### SalesAgentDemo 섹션
- AI 영업 에이전트 데모 인터페이스
- 실시간 상호작용 UI

### LatestNews 섹션
- LocalStorage에서 뉴스 데이터 로드
- 카드 형태의 뉴스 목록
- 상세 페이지 링크

### AdminDashboard
- LocalStorage 기반 CMS
- 뉴스/인사이트 콘텐츠 CRUD 기능
- 마크다운/HTML 콘텐츠 편집

## 💻 개발 가이드

### 코드 스타일
- ESLint를 사용한 코드 품질 관리
- 컴포넌트별 CSS 파일 분리
- 함수형 컴포넌트 및 React Hooks 사용

### 커스텀 훅

#### `useScrollAnimation`
스크롤 위치에 따른 요소 표시/숨김 애니메이션을 관리합니다.

```javascript
const [ref, isVisible] = useScrollAnimation();
```

### 유틸리티 함수

#### `cmsStorage`
LocalStorage를 활용한 CMS 기능을 제공합니다.

```javascript
import { cmsStorage } from './utils/cmsStorage';

// 모든 포스트 조회
const posts = cmsStorage.getAllPosts();

// 포스트 생성
const newPost = cmsStorage.createPost({ title, content, ... });

// 포스트 수정
cmsStorage.updatePost(id, { title: 'Updated Title' });

// 포스트 삭제
cmsStorage.deletePost(id);
```

#### `rafThrottle`
requestAnimationFrame을 활용한 스크롤 이벤트 최적화입니다.

```javascript
import { rafThrottle } from './utils/throttle';

const handleScroll = rafThrottle(() => {
  // 스크롤 이벤트 처리
});
```

### 새로운 페이지 추가하기

1. `src/pages/` 디렉토리에 새 페이지 컴포넌트 생성
2. `src/App.jsx`에 라우트 추가:

```javascript
import NewPage from './pages/NewPage';

// Routes 내부에 추가
<Route path="new-page" element={<NewPage />} />
```

3. `src/components/Navbar.jsx`에 네비게이션 링크 추가 (필요한 경우)

### 새로운 섹션 추가하기

1. `src/sections/` 디렉토리에 새 섹션 컴포넌트 생성
2. 해당 페이지에서 import하여 사용:

```javascript
import NewSection from '../sections/NewSection';

const Page = () => {
  return (
    <>
      <NewSection />
      {/* 다른 섹션들 */}
    </>
  );
};
```

## 🏗 빌드 및 배포

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

### 배포

빌드된 `dist/` 디렉토리를 정적 호스팅 서비스(Vercel, Netlify, GitHub Pages 등)에 배포할 수 있습니다.

#### Vercel 배포 예시

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

#### Netlify 배포 예시

```bash
# Netlify CLI 설치
npm i -g netlify-cli

# 배포
netlify deploy --prod
```

## 📝 라이선스

이 프로젝트는 FINGU-GRINDA의 소유입니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**GRINDA AI** - AI for Global Growth
