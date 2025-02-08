import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { auth } from './lib/auth';
import { redirect } from 'next/navigation';
import { Hero } from './UIcomponents/Hero';
import { CompanyShow } from './UIcomponents/CompanyShow';
import { Scheduler } from './UIcomponents/Scheduler';
import { Benefits } from './UIcomponents/Benefits';
import { MoreBenefits } from './UIcomponents/MoreBenefits';
import { Footer } from './UIcomponents/Footer';

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return redirect('/dashboard');
  }

  return (
    <>

      {/* Navbar and Hero Section */}
      <div className=" mx-auto px-4 flex flex-col justify-center items-center sm:px-6 lg:px-1" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(229 231 235 / 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(229 231 235 / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}>
            <div className='max-w-7xl'>
            <Navbar />
            <Hero />
            <CompanyShow />
            <Scheduler />
            <Benefits/>
            <MoreBenefits/>
            <Footer/>
            </div>
       
      </div>
    </>
  );
}
