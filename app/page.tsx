import Form from '@/app/create-workout/page';
import ListofWorkouts from '@/app/workouts/page';
import NavBar from '@/app/components/navbar';

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <h1></h1>
      <button className="curson-pointer items-center rounded px-[0px] py-[12px] h-[50px] w-[120px] text-lg">
        <div className='bg-blue-500 border rounded-full mx-[190px] relative font-medium font-poppins items-center justify-center text-center text-black my-[350px] h-[220px] w-[390px] text-lg'>
          Get Started
        </div>
      </button>
      <NavBar />
    </div>
  );
}
