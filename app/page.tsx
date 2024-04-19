import Form from '@/app/create-workout/page';
import ListofWorkouts from '@/app/workouts/page';
import NavBar from '@/app/components/navbar';

export default function Home() {
  return (
    <div className="">
      <button className="text-lg">
        <div className='bg-blue-500 border rounded-full mx-[590px] text-center my-[350px] h-[220px] w-[390px]'>
          Get Started
        </div>
      </button>
      {/* <NavBar /> */}
    </div>
  );
}
