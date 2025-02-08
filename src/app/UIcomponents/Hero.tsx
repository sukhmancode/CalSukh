import {ArrowBigRightIcon } from 'lucide-react';
import { AuthButtons } from '../components/AuthButtons';
import { Calendar } from '../components/Calender';

export const Hero = () => {
  return (
    <div className="bg-secondary p-5 md:p-10 rounded-md shadow-xl flex flex-col md:flex-row gap-5 mt-10 items-center ">
      <div className="flex flex-col gap-5 w-full md:w-1/2  p-5">
        <div className="bg-primary rounded-md w-fit px-5 py-1 flex items-center gap-2">
            CalSukh.com launches v4.9 <ArrowBigRightIcon size={16}/>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-7xl font-bold">
            The better way to schedule your meetings
          </h1>
          <p>
            A fully customizable scheduling experience for individuals,
            businesses taking calls and developers building scheduling platforms
            where users meet users.
          </p>
        </div>
        <div className=" w-full md:w-1/2">
          <AuthButtons />
        </div>
      </div>
      <div className=" w-full flex md:w-1/2 justify-end border rounded-md border-primary ">
        <Calendar />
      </div>
    </div>
  );
};
