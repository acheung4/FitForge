"use client";

import { createCommunity } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
    message: "",
};

export default function CommunityForm() {
    const [state, formAction] = useFormState(createCommunity, initialState);

    function SubmitButton() {
        const { pending } = useFormStatus();

        return <button type="submit" className='border rounded p-2 bg-blue-700 text-white font-bold' aria-disabled={pending}>CREATE COMMUNITY</button>;
    }

    return (
        <form action={formAction} className='w-full max-w-lg mt-32 mx-auto'>
            <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                    <label htmlFor="name" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                        Enter community name: </label>
                    <input type="text" id="name" name="name" required className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                    </input>
                </div>
            </div>

            <SubmitButton />

            <p role="status">
                {state?.message}
            </p>
        </form>
    );
}

