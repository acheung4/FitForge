import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex justify-end w-full mt-px">
            <div className="flex space-x-4">
                <Link href={'/'}>Home</Link>
                <Link href={'/community'}>Community Board</Link>
                <Link href={'/workouts'}>List of Workouts</Link>
                <Link href={'/create-workout'}>
                    Create new workout plan
                </Link>
            </div>
        </div>
    );
}