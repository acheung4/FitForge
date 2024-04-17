export default function SpecificWorkout(
    { params } : {
        params: { id: string }},
    {id, title, content} : {
        id: string,
        title: string,
        content: string,},
) {
    return (
        <div>
            <main>ID: {params.id} </main>
            <h2>{title}: {content}</h2>
            <h2>{content}</h2>
        </div>
    );
}