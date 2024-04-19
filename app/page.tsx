import Form from '@/app/create-workout/page';
import ListofWorkouts from '@/app/workouts/page';
import NavBar from '@/app/components/navbar';

export default function Home() {
  return (
    <div className="self-stretch px-[130px] flex justify-between items-center pb-[50px]">
      <h1></h1>
      <button className="curson-pointer rounded-lg px-[10px] py-[8px] h-[40px] w-[93px]">
        <div className='bg-blue-500 border relative font-medium font-poppins text-black my-[300px]'>
          Get Started
        </div>
      </button>
      <NavBar />
    </div>
  );
}
