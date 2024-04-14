import { retrieveInput } from '@/app/actions';

export default function Form() {
    return (
        <form action={retrieveInput}>
            <div className='mb-4'>
                <label htmlFor="weight">Enter weight in pounds: </label>
                <input type="number" id="weight" name="weight"></input>
            </div>

            <div className='mb-4'>
                <label htmlFor="height">Enter height: </label><br></br>
                <span>Feet: </span>
                <input type="number" id="height-ft" name="height-ft"></input>
                <span>Inches: </span>
                <input type="number" id="height-in" name="height-in"></input>
            </div>

            <div className='mb-4'>
                <label htmlFor="experience-level">Enter experience level: </label>
                <select id='experience-level' name='experience-level' defaultValue=''>
                    <option value='' disabled>
                        Select your experience level
                    </option>
                    <option key='novice' value='novice' className='text-black'>
                        Novice
                    </option>
                    <option key='intermediate' value='intermediate' className='text-black'>
                        Intermediate
                    </option>
                    <option key='expert' value='expert' className='text-black'>
                        Expert
                    </option>
                </select>
            </div>

            <button type="submit">Submit Data</button>
        </form>
    );
}

