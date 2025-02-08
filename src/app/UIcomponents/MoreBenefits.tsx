"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: number;
};

export function MoreBenefits() {
  const benefits: Benefit[] = [
    {
      title: "Accept payments",
      id: 1,
      description: "You can monetize your bookings through our Stripe integration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.33325 9.33337C1.33325 7.12423 3.12411 5.33337 5.33325 5.33337H26.6666C28.8757 5.33337 30.6666 7.12423 30.6666 9.33337V22.6667C30.6666 24.8758 28.8757 26.6667 26.6666 26.6667H5.33325C3.12411 26.6667 1.33325 24.8758 1.33325 22.6667V9.33337ZM5.33325 8.00004C4.59687 8.00004 3.99992 8.59699 3.99992 9.33337C3.99992 10.0698 4.59687 10.6667 5.33325 10.6667H6.66658C7.40296 10.6667 7.99992 10.0698 7.99992 9.33337C7.99992 8.59699 7.40296 8.00004 6.66658 8.00004H5.33325ZM15.9999 12.6667C14.159 12.6667 12.6666 14.1591 12.6666 16C12.6666 17.841 14.159 19.3334 15.9999 19.3334C17.8409 19.3334 19.3333 17.841 19.3333 16C19.3333 14.1591 17.8409 12.6667 15.9999 12.6667ZM25.3333 21.3334C24.5969 21.3334 23.9999 21.9303 23.9999 22.6667C23.9999 23.4031 24.5969 24 25.3333 24H26.6666C27.403 24 27.9999 23.4031 27.9999 22.6667C27.9999 21.9303 27.403 21.3334 26.6666 21.3334H25.3333Z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      title: "Fast integration",
      id: 2,
      description: "Easily integrate with multiple platforms with a few clicks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3L29 12v8l-13 9-13-9V12L16 3zm0 2.75L5 11.25V19l11 7.25L27 19v-7.75L16 5.75z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
        title: "Fast integration",
        id: 4,
        description: "Easily integrate with multiple platforms with a few clicks.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3L29 12v8l-13 9-13-9V12L16 3zm0 2.75L5 11.25V19l11 7.25L27 19v-7.75L16 5.75z"
              fill="#fff"
            />
          </svg>
        ),
      },
      {
        title: "Fast integration",
        id: 3,
        description: "Easily integrate with multiple platforms with a few clicks.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 3L29 12v8l-13 9-13-9V12L16 3zm0 2.75L5 11.25V19l11 7.25L27 19v-7.75L16 5.75z"
              fill="#fff"
            />
          </svg>
        ),
      },
  ];

  return (
    <section className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl py-6 md:py-20 bg-transparent px-1 md:px-1">
      <h1 className="font-cal !leading-xs md:!leading-h1 font-semibold lg:text-5xl pb-5 text-center">
        ...and so much more!
      </h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <motion.div
              key={benefit.id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary p-6 rounded-lg flex flex-col items-center gap-2 transition-all hover:shadow-lg"
            >
              <div className="bg-secondary/50 p-4 rounded-lg">
                {!isHovered && (
                  <motion.p
                    initial={{ opacity: 1, y: 10 }}
                    animate={isHovered ? { opacity: 0, y: -10 } : { opacity: 1, y: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {benefit.icon}
                  </motion.p>
                )}
              </div>
              <h2 className="text-2xl font-semibold">{benefit.title}</h2>
              {isHovered && (
                <motion.p
                  className="text-center text-sm font-medium text-inherit mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.description}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default MoreBenefits;
