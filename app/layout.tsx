import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children } : RootLayoutProps ) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <SiteHeader  />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )

}