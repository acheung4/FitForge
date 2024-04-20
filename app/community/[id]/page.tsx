import WorkoutDetails from "@/app/components/workout-card";
import { getWorkoutsInCommunity } from "@/database/queries";

export default async function Community( { params } : {
    params: { id: string }
}) {
    const workouts = await getWorkoutsInCommunity(parseInt(params.id));

    return (
        workouts.map((workout) => {
            return (
                <WorkoutDetails
                    key={workout.id}
                    id={workout.id}
                    title={workout.title}
                    monday={workout.monday}
                    tuesday={workout.tuesday}
                    wednesday={workout.wednesday}
                    thursday={workout.thursday}
                    friday={workout.friday}
                />
            )
        })
    );
}