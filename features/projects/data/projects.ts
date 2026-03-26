export type ProjectItem = {
  title: string;
  description: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Developer Blog Platform",
    description: "Next.js + MDX 기반의 개인 기술 블로그와 포트폴리오 구축",
  },
  {
    title: "Backend Playground",
    description: "NestJS 중심으로 인증, 캐시, 비동기 처리 패턴을 실험하는 공간",
  },
];
