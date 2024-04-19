import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex justify-between pb-[10px] ">
            <Link href={'/'}>Home</Link>
            <Link href={'/community'}>Community Board</Link>
            <Link href={'/workouts'}>List of Workouts</Link>
            <Link href={'/create-workout'}>
               Create new workout plan
            </Link>
        </div>
    );
}