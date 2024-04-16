import { db } from '@/database/index';

export async function getWorkouts() {
    const workouts = await db.workout.findMany();
    return workouts;
}

//get workouts only in specific community
export async function getWorkoutsInCommunity(community : string) {
    const workouts = await db.workout.findMany(
        //where communityFieldInDB = community
    )
    return workouts;
}