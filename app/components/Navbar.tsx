"use client";
export default function Navbar() {
    console.log("Navbar rendered");
    return (

        <nav className="flex justify-between items-center p-5 border-b bg-white dark:bg-gray-900 sticky top-0 z-10">

            <h1 className="font-bold text-xl">Anirudh</h1>

            <div className="flex items-center space-x-6">
                <a href="#projects" className="hover:text-gray-500">Projects</a>
                <a href="#contact" className="hover:text-gray-500">Contact</a>


                <button
                    onClick={() => {
                        document.documentElement.classList.toggle("dark");
                    }}
                >
                    🌙
                </button>
            </div>

        </nav>
    );
}