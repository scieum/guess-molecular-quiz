import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guess the Molecule",
  description: "단계별 힌트를 통해 분자를 추론하는 화학 퀴즈 게임",
  icons: { icon: "/favicon.svg" },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
