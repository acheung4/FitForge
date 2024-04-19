export default function SpecificWorkout(
    { params }: {
        params: { id: number }
    },
) {
    return (
        <div>
            <main>ID: {params.id} </main>
            <div>
            </div>
        </div>
    );
}