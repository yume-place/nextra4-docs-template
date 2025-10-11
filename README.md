Nextra 4.6.0 문서 템플릿

## 시작하기

1. 먼저 이 템플릿을 자신의 리포지토리로 복제합니다.
우측 위에 "Use this template"를 클릭 후 "Create a new repository"를 클릭해 복제하세요.

2. 자신이 사용하는 IDE에서 복제한 리포지토리를 로컬로 복제합니다.
3. 복제한 리포지토리 로컬 폴더로 이동해 터미널에서 다음과 같은 명령어를 입력합니다.
```
npm i -g pnpm
```
```
pnpm i
```
4. 그 후 다음 명령어를 실행해보세요.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
이제 [http://localhost:3000](http://localhost:3000) 로 이동하면 브라우저에서 개발 중인 사이트를 미리 볼 수 있습니다.

## 더 많은 정보

이 문서 템플릿은 Nextra를 사용합니다. 더 많은 설정과 기능을 활용하기 위해서는 [Nextra 공식 문서](https://nextra.site/docs/guide)를 보며 사용을 해보셔야 합니다.  
이 템플릿의 구조는 src 폴더 안에서 시작해요. src/app (Next.js 라우팅)과 src/content (문서 파일들)을 확인하려면 IDE에서 src 폴더를 열어보세요.  
마크다운 파일(MDX)은 주로 src/content 폴더에서 관리하며, 여기서 추가/편집하면 사이트 네비게이션이 자동 업데이트됩니다.


## Vercel로 배포하기

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
