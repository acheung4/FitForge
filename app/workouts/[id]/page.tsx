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
            <WorkoutDetails
                key={workout.id}
                id={workout.id}
                title={workout.title}
                monday={workout.monday}
                tuesday={workout.tuesday}
                wednesday={workout.wednesday}
                thursday={workout.thursday}
                friday={workout.friday}
            />) : null
    );
}