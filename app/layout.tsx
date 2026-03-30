import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '杨天成 | 全栈工程师 & 数字创造者',
  description: '极具未来感的个人主页 - 赛博朋克风格的数字世界入口',
  keywords: ['个人主页', '全栈工程师', '赛博朋克', 'Next.js', 'WebGL'],
  authors: [{ name: '杨天成' }],
  openGraph: {
    title: '杨天成 | 全栈工程师 & 数字创造者',
    description: '极具未来感的个人主页',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
