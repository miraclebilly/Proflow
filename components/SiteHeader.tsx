import Link from 'next/link'

export function SiteHeader() {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/"></Link>
                    <Link href="/"><h1 className='text-white text-lg font-bold'>Proflow</h1></Link>
                </div>
                <nav className='space-x-4'>
                    <Link href="/" className='text-white hover:text-gray-300'>Home</Link>
                </nav>
            </div>
        </header>
    )
}