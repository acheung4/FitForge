import { getWorkouts } from '@/database/queries';
import Link from 'next/link';


export default async function AllWorkouts() {
    const workouts = await getWorkouts();

    return (
        workouts ?
            <div className="flex flex-col items-center">
                <p className="text-4xl font-bold mb-8 mt-8">
                    All Workouts
                </p>
                {
                    (workouts.map((workout) => {
                        return (
                            <Link key={workout.id} href={`/workouts/${workout.id}`} className="w-1/2 border border-gray-400 hover:bg-blue-500 bg-white rounded p-4 leading-normal">
                                <p className="text-gray-900 font-bold text-xl mb-2">{workout.title}</p>
                                <p className="text-gray-700">{workout.createdAt.toLocaleString()}</p>
                            </Link>
                        );
                    }))
                }
            </div>
            : <p>No workouts found</p>
    );
}