import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children } : RootLayoutProps ) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
        
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )

}