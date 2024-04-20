import WorkoutDetails from "@/app/components/workout-card";
import { getSpecificWorkout } from "@/database/queries";

export default async function SpecificWorkout(
    { params }: {
        params: { id: string }
    },
) {
    const workout = await getSpecificWorkout(parseInt(params.id));

    return (
        workout ? (
            <section className="h-screen">
                <div className="max-w-screen-xl mx-auto px-6 py-24">
                    
                    <div className="mx-auto text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            {workout.title}
                        </h2>
                        <h2 className="text-2xl font-bold text-gray-700">
                            {workout.createdAt.toLocaleString()}
                        </h2>
                    </div>

                    <div className="flow-root max-w-3xl mx-auto mt-16">
                        <div className="-my-4 divide-y divide-gray-700">
                            
                            <div className="flex py-4 gap-6 items-center">
                                <p className="w-32 text-lg font-normal sm:text-right text-gray-400 shrink-0">
                                    MONDAY
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {workout.monday}
                                </h3>
                            </div>
                            <div className="flex py-4 gap-6 items-center">
                                <p className="w-32 text-lg font-normal sm:text-right text-gray-400 shrink-0">
                                    TUESDAY
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {workout.tuesday}
                                </h3>
                            </div>
                            <div className="flex py-4 gap-6 items-center">
                                <p className="w-32 text-lg font-normal sm:text-right text-gray-400 shrink-0">
                                    WEDNESDAY
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {workout.wednesday}
                                </h3>
                            </div>
                            <div className="flex py-4 gap-6 items-center">
                                <p className="w-32 text-lg font-normal sm:text-right text-gray-400 shrink-0">
                                    THURSDAY
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {workout.thursday}
                                </h3>
                            </div>
                            <div className="flex py-4 gap-6 items-center">
                                <p className="w-32 text-lg font-normal sm:text-right text-gray-400 shrink-0">
                                    FRIDAY
                                </p>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {workout.friday}
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>) : null
    );
}