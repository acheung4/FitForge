export default function Community( { params } : {
    params: { id: string }
}) {
    return <main>ID: {params.id} </main>
}

//This is page that lists workouts associated with a specific community.