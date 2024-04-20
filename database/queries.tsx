import { db } from '@/database/index';

export async function getWorkouts() {
    const workouts = await db.workout.findMany();
    return workouts;
}

export async function getSpecificWorkout(workoutID: number) {
    const workout = await db.workout.findUnique({
        where: {
            id: workoutID,
        },
    });
    return workout;
}

export async function getWorkoutsInCommunity(communityID: number) {
    const workoutsInCommunity = await db.workout.findMany({
        where: {
            communityId: communityID,
        },
    });
    return workoutsInCommunity;
}

export async function getCommunities() {
    const communities = await db.community.findMany();
    return communities;
}

export async function getSpecificCommunity(communityID: number) {
    const workout = await db.community.findUnique({
        where: {
            id: communityID,
        },
    });
    return workout;
}