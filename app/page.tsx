import Form from '@/app/create-workout/page';
import ListofWorkouts from '@/app/workouts/page';
import NavBar from '@/app/components/navbar';

export default function Home() {
  return (
    <div className="">
      <img src="/public/FitForge-logo.svg" alt="Logo" className='top-0' style={{ height: '360px', width: '390px', margin: '150px auto' }}/>
      <button className="font-bold flex justify-center items-center" style={{ height: '220px', width: '390px', margin: '190px auto' }}>
        <div className="bg-blue-500 border rounded-full text-center text-6x1 h-full w-full flex items-center justify-center">
          Get Started
        </div>
      </button>

      {/* <NavBar /> */}
    </div>
  );
}
