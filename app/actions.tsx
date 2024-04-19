'use server';

import { z } from 'zod';
import { db } from '@/database';
import { revalidatePath } from 'next/cache';

export async function createWorkout(prevState: any, formData: FormData) {

    const schema = z.object({
        title: z.string().min(1),
        weight: z.coerce.number(),
        feet: z.coerce.number(),
        inches: z.coerce.number(),
        level: z.string(),
        community: z.coerce.number(),
    });

    const data = schema.parse({
        title: formData.get('title'),
        weight: formData.get('weight'),
        feet: formData.get('height-ft'),
        inches: formData.get('height-in'),
        level: formData.get('experience-level'),
        community: formData.get('community'),
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
        const workout = await db.workout.create({
            data: {
                title: data.title,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
            },
        });
        
        if (data.community != 0) {
            const linkCommunity = await db.community.update({
                where: {
                    id: data.community
                },
                data: {
                    workouts: {
                        connect: {
                            id: workout.id
                        },
                    },
                },
            });
            console.log(linkCommunity);
        }

        console.log(workout);
        revalidatePath('/');
        return { message: 'Added workout successfully' };
    }
    catch (e) {
        return { message: 'Failed to add workout' };
    }
}

function generateWorkout(index: number) {
    let monday, tuesday, wednesday, thursday, friday;

    if (index < 5) {
        monday = 'Bodyweight Squats, 3 sets of 12 reps';
        tuesday = 'Push-ups, 3 sets of 15 reps';
        wednesday = 'Bodyweight Pull-ups, 3 sets of 10 reps';
        thursday = 'Plank, 3 sets of 30 seconds';
        friday = 'Jogging, 20 minutes';
    }
    else if (index < 10) {
        monday = 'Deadlift, 4 sets of 10 reps';
        tuesday = 'Bench Press, 4 sets of 8 reps';
        wednesday = 'Bent Over Row, 4 sets of 10 reps';
        thursday = 'Leg Press, 4 sets of 12 reps';
        friday = 'HIIT Cardio, 15 minutes';
    }
    else if (index < 15) {
        monday = 'Clean and Jerk, 5 sets of 5 reps';
        tuesday = 'Snatch, 5 sets of 5 reps';
        wednesday = 'Front Squat, 5 sets of 5 reps';
        thursday = 'Muscle Ups, 5 sets of 5 reps';
        friday = 'Long Distance Running, 30 minutes';
    }
    else {
        monday = 'Squat, Heavy, 5 sets of 3 reps';
        tuesday = 'Bench Press, Heavy, 5 sets of 3 reps';
        wednesday = 'Deadlift, Heavy, 5 sets of 3 reps';
        thursday = 'Overhead Press, Heavy, 5 sets of 3 reps';
        friday = 'Sprint Intervals, 20 minutes';
    }

    return { monday, tuesday, wednesday, thursday, friday };
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