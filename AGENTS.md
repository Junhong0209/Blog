## Agent Workflow Rules (에이전트 작업 규칙)

You are a coding agent working on this repository.  
(이 저장소에서 작업하는 코드 에이전트입니다.)

### Execution Flow (작업 흐름)

- Do not start coding immediately. (바로 코드 수정/작성하지 마세요.)
- Fisrt provide:
  1. Summary (요약) - 문제를 어떻게 이해 헀는지 설명
  2. Plan (계획) - 어떤 방식으로 해결할지 단계별 설명
  3. Test Plan (테스트 계획) - 어떤 기준으로 검증할지 설명
- Wait for user approval before making changes. (사용자 승인 후 작업 진행)

---

### Requirement Handling (요구사항 처리)

- If the request is unclear, ask 3~7 clarifying questions.  
(요구사항이 모호하면 3~7개의 질문으로 명확히 할 것)
- If no questions are needed, stated up to 3 assumptions.  
(질문이 필요 없다면 최대 3개의 가정을 명시할 것)

---

### Change Policy (변경 정책)

- Follow the minimal change principle  
(최소 변경 원칙을 지킬 것 - 필요한 부분만 수정)
- Do not perform unnecessary refactoring or formatting  
(불필요한 리팩토링이나 포맷팅 금지)
- Do not modify unrelated parts of the codebase  
(요구사항과 관련 없는 파일/코드 수정 금지)

---

### Verification (검증 규칙)

- Do not guess versions; check from the repository.  
(버전을 추측하지 말고 실제 코드/설정에서 확인)
- Execute commands and file access only when necessary.  
(명령 실행 및 파일 접근은 필요한 최소한으로)
- If the task goes beyond scope, ask before proceeding.  
(범위를 벗어나면 먼저 사용자에게 확인)

---

### Testing (테스트 규칙)

- After making changes, run tests.  
(코드 수정 후 반드시 테스트 실행)
- Provide actual test results.  
(실제 실행 결과를 반드시 함께 제시)
- If tests do not exist, suggest how to validate manually.  
(테스트가 없다면 수동 검증 방법 제시)

---

### Safety & Stability (안정성 규칙)

- Prefer safe and predictable changes over clever solutions.   
(복잡한 해결책보다 안정적인 방법 우선)
- Avoid breaking existing functionality.  
(기존 기능이 깨지지 않도록 주의)
- Preserve existing code style and patterns.  
(기존 코드 스타일과 패턴 유지)

## Project Overview

This project is a personal developer blog.  
(개인 개발 블로그 프로젝트입니다)

Goals:  
•	Write and manage technical blog posts (기술 블로그 글 작성 및 관리)  
•	Build a portfolio for job applications (취업용 포트폴리오 구축)  
•	Focus on performance and SEO (성능 및 SEO 최적화)  
•	Maintain scalable and clean architecture (확장 가능하고 깔끔한 구조 유지)

---

### Tech Stack
•	Framework: Next.js (App Router)  
•	Language: TypeScript (strict mode)  
•	Styling: Vanilla Extract  
•	Package Manager: npm

---

### Commands
•	install: npm install  
•	dev: npm dev  
•	build: npm build  
•	start: npm start  

---

### Code Style Rules (코드 스타일 규칙)
•	Use functional components only (함수형 컴포넌트만 사용)  
•	Do not use any (any 타입 금지)  
•	Prefer explicit types when necessary (필요 시 명시적 타입 사용)  
•	Use async/await instead of then/catch  
•	Keep components small and reusable (컴포넌트는 작고 재사용 가능하게)  
•	Use meaningful variable and function names (의미 있는 이름 사용)

---

### Styling Rules (스타일 규칙)
•	Use Vanilla Extract only (Vanilla Extract만 사용)  
•	Do not use CSS Modules, styled-components, or inline styles  
•	Use semantic and readable class names

---

### Styling Structure (스타일 구조)
•	Co-locate styles with components (스타일은 컴포넌트와 함께 위치)  
•	One .css.ts file per component (컴포넌트당 하나의 스타일 파일)  
•	Use /styles only for global styles and design tokens (전역 스타일 및 디자인 토큰만 styles 폴더 사용)

---

### Folder Structure (폴더 구조)
•	/app: Next.js App Router pages  
•	/components: reusable UI components  
•	/features: feature-based modules (기능 단위 구조)  
•	/shared: shared utilities, hooks, constants  
•	/styles: global styles and design tokens

---

### Component Pattern (컴포넌트 패턴)
•	Separate container and presentational components (로직과 UI를 분리)  
•	Container handles data fetching and logic  
•	Presentational components receive props only  
•	Keep single responsibility per component (단일 책임 원칙)

---

### Data & API Rules (데이터 및 API 규칙)
•	Use server components when possible  
•	Use client components only when necessary  
•	Keep data fetching close to where it’s used  
•	Validate all external data (외부 데이터 검증 필수)

---

### Architecture Rules (아키텍처 규칙)
•	Follow feature-based structure (feature 기반 구조 유지)  
•	Keep related logic inside the same feature folder  
•	Avoid cross-feature dependencies (feature 간 의존 최소화)  

---

### Naming Convention (네이밍 규칙)
•	Components: PascalCase (PostItem.tsx)  
•	Hooks: camelCase with “use” prefix (usePosts.ts)  
•	Types: *.type.ts  
•	API: verb-based (getPosts.ts, createPost.ts)  

---

### SEO & Performance
•	Use semantic HTML (시맨틱 HTML 사용)  
•	Optimize images and fonts  
•	Avoid unnecessary client-side rendering  
•	Prefer server-side rendering when possible  

---

### Do (권장 사항)
•	Follow existing patterns in the repository (기존 코드 스타일 유지)  
•	Keep code simple and readable (단순하고 읽기 쉽게)  
•	Reuse existing components first (기존 컴포넌트 우선 재사용)  

---

### Don’t (금지 사항)
•	Do not introduce new libraries without clear reason (명확한 이유 없이 라이브러리 추가 금지)  
•	Do not refactor unrelated code (관련 없는 코드 수정 금지)  
•	Do not ignore project structure (폴더 구조 무시 금지)  
•	Do not use any type

---

### Notes
•	Consistency is more important than personal preference (일관성이 개인 취향보다 중요함)  
•	Prioritize readability and maintainability over quick hacks (빠른 구현보다 유지보수성과 가독성 우선)