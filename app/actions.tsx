'use server';

import { z } from 'zod';

const FormSchema = z.object( {
    weight: z.coerce.number(),
    feet: z.coerce.number(),
    inches: z.coerce.number(),
    level: z.string(),
});

export async function retrieveInput(formData: FormData) {
    
    const { weight, feet, inches, level } = FormSchema.parse({
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
        var lbs = 20;

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
        console.log(result);
    }
    
    return result;
}