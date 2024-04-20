export default function WorkoutDetails(
    {id, title, monday, tuesday, wednesday, thursday, friday} : {
        id: number,
        title: string,
        monday: string,
        tuesday: string,
        wednesday: string,
        thursday: string,
        friday: string,},
) {
    return (
        <div>
            <h2>{title}: {id}</h2>
            <h3>{monday}</h3>
            <h3>{tuesday}</h3>
            <h3>{wednesday}</h3>
            <h3>{thursday}</h3>
            <h3>{friday}</h3>
        </div>
    );
}