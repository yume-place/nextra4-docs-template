import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from 'next/link'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  icons: { // 파비콘
    icon: "/icons/favicon/favicon-bg-none.png" // public 경로에 icons 폴더가 존재합니다. favicon 폴더 안에 있는 이미지를 교체하세요.
  }
}
 
const banner = <Banner storageKey="some-key">🎉 <Link href="https://the-guild.dev/blog/nextra-4">Nextra 4.0</Link>이(가) 릴리즈 되었어요!</Banner> // 배너는 지워도 무방함.
// 배너에서 Link 컴포넌트를 사용하는데, Link를 지울 경우 코드 5번 줄에 있는 "import Link from 'next/link'"도 꼭 제거해야함!!! 제거 안 하면 빌드 시 오류 날 가능성 엄청 높음.

const navbar = (
  <Navbar
    logo={
      <>
        <b>Nextra Docs 템플릿</b>
      </>
    }
    projectLink="https://github.com/baboribo/nextra4-docs-template"
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © baboribo.</Footer> // 푸터임
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="auto" // 사이트에서 글과 UI의 시작 방향(좌/우)를 의미함. auto는 브라우저가 자동으로 사용자가 사용하는 언어를 인식해 시작 방향을 설정해줌.
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/baboribo/nextra4-docs-template/tree/main"
          footer={footer}
          // ... Your additional layout options
          editLink="이 페이지 편집"
          navigation={{
            prev: true,
            next: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
