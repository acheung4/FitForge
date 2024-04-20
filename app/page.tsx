import FitForgeLogo from '@/public/FitForge-logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src={FitForgeLogo} alt="Logo" className='mt-20 mx-auto' priority={true} style={{ height: '250px', width: '300px'}} />
      <button className="font-bold flex justify-center items-center mx-auto mt-10" style={{ height: '220px', width: '390px'}}>
        <div className="bg-blue-500 text-white border rounded-full text-center text-6xl h-full w-full flex items-center justify-center">
          GET STARTED
        </div>
      </button>
    </div>
  );
}
