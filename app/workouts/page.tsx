import Workout from '@/app/components/workout';
import { getWorkouts } from '@/database/queries';


export default async function ListofWorkouts() {
    const workouts = await getWorkouts();
    console.log(workouts);

    return (
        workouts.map((workout) => {
            return (
                <Workout
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