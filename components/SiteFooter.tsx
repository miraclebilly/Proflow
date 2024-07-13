export function SiteFooter() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">© 2024 Proflow. All rights reserved.</p> 
                <nav className="space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
                    <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact Us</a>    
                </nav>
            </div>
        </footer>
    );
}