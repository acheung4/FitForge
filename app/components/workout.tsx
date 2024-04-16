export default function Workout({id, title, content} : {
    id: string,
    title: string,
    content: string,
}) {
    return (
        <div>
            <h2>{title}: {content}</h2>
            <h2>{content}</h2>
        </div>
    );
}