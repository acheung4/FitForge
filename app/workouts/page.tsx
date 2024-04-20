import WorkoutDetails from '@/app/components/workout-card';
import { getWorkouts } from '@/database/queries';


export default async function ListofWorkouts() {
    const workouts = await getWorkouts();

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