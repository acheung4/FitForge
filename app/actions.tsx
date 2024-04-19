'use server';

import { z } from 'zod';
import { db } from '@/database';
import { revalidatePath } from 'next/cache';

export async function createWorkout(prevState: any, formData: FormData) {

    const schema = z.object({
        title: z.string().min(1),
        community: z.string(),
        weight: z.coerce.number(),
        feet: z.coerce.number(),
        inches: z.coerce.number(),
        level: z.string(),
    });

    const data = schema.parse({
        title: formData.get('title'),
        community: formData.get('community'),
        weight: formData.get('weight'),
        feet: formData.get('height-ft'),
        inches: formData.get('height-in'),
        level: formData.get('experience-level'),
    });

    const heightInInches = (data.feet * 12) + data.inches;

    let index = 20 * (data.weight / 150) * (heightInInches / 75);

    switch (data.level) {
        case 'novice':
            index = index * 1;
            break;
        case 'intermediate':
            index = index * 1.25;
            break;
        case 'expert':
            index = index * 1.5;
    }

    const { monday, tuesday, wednesday, thursday, friday } = generateWorkout(index);

    try {
        // const workout = await db.workout.create({
        //     data: {
        //         title: data.title,
        //         content: data.content,
        //     },
        // });
        // console.log(workout);
        revalidatePath('/');
        //return { message: `Added workout ${workout}`};
    }
    catch (e) {
        return { message: 'Failed to add workout'};
    }
}

function generateWorkout(index : number) {
    let monday, tuesday, wednesday, thursday, friday;

    if (index < 5) {
        monday = 'submit text here';
        tuesday = 's';
        wednesday = '';
        thursday = '';
        friday = '';
    }
    else if (index < 10) {
        monday = 'submit text here';
        tuesday = 's';
        wednesday = '';
        thursday = '';
        friday = '';
    }
    else if (index < 15) {
        monday = 'submit text here';
        tuesday = 's';
        wednesday = '';
        thursday = '';
        friday = '';
    }
    else {
        monday = 'submit text here';
        tuesday = 's';
        wednesday = '';
        thursday = '';
        friday = '';
    }

    return { monday, tuesday, wednesday, thursday, friday};
}

export async function retrieveInput(prevState : { message : string}, formData: FormData) {
    
    const schema = z.object({
        title: z.string().min(1),
        content: z.string().min(1),
    });

    try {
        const data = schema.parse({
            title: '',
            content: 'formData.get()',
        });

        const workout = await db.workout.create({
            data: {
                title: '',
                content: 'data.content',
            },
        });
        revalidatePath('/');
        return { message: `Added workout ${workout.title}`};
    }
    catch (e) {
        return { message: 'Failed to add workout'};
    }
}

/*export async function retrieveInput(formData: FormData) {

    const schema = z.object({
        weight: z.coerce.number(),
        feet: z.coerce.number(),
        inches: z.coerce.number(),
        level: z.string(),
    });

    const { weight, feet, inches, level } = schema.parse({
        weight: formData.get('weight'),
        feet: formData.get('height-ft'),
        inches: formData.get('height-in'),
        level: formData.get('experience-level'),
    });

    const heightInInches = (feet * 12) + inches;

    var dataValid = true;
    var result = null

    //checking for valid data
    if (weight > 1000 || weight < 50) {
        console.log('Weight falls outside expected range.');
    }
    if (heightInInches < 36 || heightInInches > 108) {
        console.log('Height falls outside expected range.');
        dataValid = false;
    }
    if (level == '') {
        console.log('Experience level not selected.');
        dataValid = false;
    }

    if (dataValid) {
        //calculate the amount of lbs that person should lift, using weight, height, and experience lvl as multipliers
        let lbs = 20;

        lbs = lbs * (weight / 150) * (heightInInches / 75);

        switch (level) {
            case 'novice':
                lbs = lbs * 1;
                break;
            case 'intermediate':
                lbs = lbs * 1.25;
                break;
            case 'expert':
                lbs = lbs * 1.5;
        }

        result = lbs.toFixed(2);
    }

    return result;
}
*/