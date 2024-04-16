export default function Workout( { params } : {
    params: { id: string }
}) {
    return <main>ID: {params.id} </main>
}