'use server';

export async function retrieveInput(formData: FormData) {
    
    const rawFormData = {
        weight: formData.get('weight'),
        feet: formData.get('height-ft'),
        inches: formData.get('height-in'),
        level: formData.get('experience-level'),
    };

    if (rawFormData.level == 'intermediate') {
        console.log('intermediate was chosen');
    }

    console.log(rawFormData);
}