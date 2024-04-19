"use client";

import { createWorkout } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
    message: "",
};

export default function Form({
    children
}: {
    children: React.ReactNode
}) {
    const [state, formAction] = useFormState(createWorkout, initialState);

    function SubmitButton() {
        const { pending } = useFormStatus();

        return <button type="submit" aria-disabled={pending}>Generate workout plan</button>;
    }

    return (
        <form action={formAction}>
            <div className='mb-4'>
                <label htmlFor="title">Enter workout title: </label>
                <input type="text" id="title" name="title" required></input>
            </div>

            <div className='mb-4'>
                <label htmlFor="weight">Enter weight in pounds: </label>
                <input type="number" id="weight" name="weight" required></input>
            </div>

            <div className='mb-4'>
                <label htmlFor="height">Enter height: </label><br></br>
                <span>Feet: </span>
                <input type="number" id="height-ft" name="height-ft" required></input>
                <span>Inches: </span>
                <input type="number" id="height-in" name="height-in" required></input>
            </div>

            <div className='mb-4'>
                <label htmlFor="experience-level">Enter experience level: </label>
                <select id='experience-level' name='experience-level' defaultValue='' required>
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

            {/* community drop down */}
            {children}

            <SubmitButton />

            <p role="status">
                {state?.message}
            </p>
        </form>
    );
}

