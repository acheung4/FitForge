import { getSpecificWorkout } from "@/database/queries";

export default async function SpecificWorkout(
    { params }: {
        params: { id: string }
    },
) {
    const workout = await getSpecificWorkout(parseInt(params.id));

    return (
        <div>
            {
                workout ? (
                    <div>
                        <h2>{workout.title}</h2>
                        <h3>{workout.monday}</h3>
                        <h3>{workout.tuesday}</h3>
                        <h3>{workout.wednesday}</h3>
                        <h3>{workout.thursday}</h3>
                        <h3>{workout.friday}</h3>
                    </div>) : null
            }
        </div>
    );
}