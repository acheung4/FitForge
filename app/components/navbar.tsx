import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-5">
            <div className="text-white mr-6">
                <span className="font-bold text-3xl tracking-tight">FitForge</span>
            </div>
            <div className="flex-grow flex w-auto">
                <div className="text-sm flex-grow">
                    <Link href={'/'} className="font-semibold text-white hover:text-black ml-4 mr-8">
                        HOME
                    </Link>
                    <Link href={'/community'} className="font-semibold text-white hover:text-black mr-8">
                        COMMUNITY BOARD
                    </Link>
                    <Link href={'/workouts'} className="font-semibold text-white hover:text-black">
                        WORKOUTS
                    </Link>
                </div>
                <div>
                    <Link href={'/create-workout'} className="text-sm px-4 py-2 border rounded text-white border-white hover:text-black hover:bg-white">
                        CREATE NEW WORKOUT
                    </Link>
                </div>
            </div>
        </nav>
    );
}