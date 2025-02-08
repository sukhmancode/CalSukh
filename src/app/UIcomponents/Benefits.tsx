"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const InputWithBounce = ({ placeholder }:{placeholder:any}) => {
  return (
    <motion.div
      className="overflow-clip"
      key={placeholder}
      initial={{ y: -10, opacity: 0.1 }}
      animate={{ y: [0, 9, 0], opacity: 0.9 }}
      transition={{ y: { duration: 1, ease: "easeOut" }, opacity: { duration: 0.2 } }}
    >
      <Input placeholder={placeholder} disabled />
    </motion.div>
  );
};

export const Benefits = () => {
  const [placeholders, setPlaceholders] = useState({
    minNotice: "",
    bufferBefore: "",
    bufferAfter: "",
  });

  useEffect(() => {
    const minNoticeValues = ["30 mins", "20 mins", "10 mins"];
    const bufferBeforeValues = ["30 mins", "15 mins", "5 mins"];
    const bufferAfterValues = ["30 mins", "20 mins", "10 mins"];
    let minNoticeIndex = 0;
    let bufferBeforeIndex = 0;
    let bufferAfterIndex = 0;

    const timer = setInterval(() => {
      setPlaceholders({
        minNotice: minNoticeValues[minNoticeIndex],
        bufferBefore: bufferBeforeValues[bufferBeforeIndex],
        bufferAfter: bufferAfterValues[bufferAfterIndex],
      });

      minNoticeIndex = (minNoticeIndex + 1) % minNoticeValues.length;
      bufferBeforeIndex = (bufferBeforeIndex + 1) % bufferBeforeValues.length;
      bufferAfterIndex = (bufferAfterIndex + 1) % bufferAfterValues.length;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefitsData = [
    "Avoid meeting overload",
    "Stay organized",
    "Maximize productivity",
    "Reduce scheduling conflicts"
  ];

  return (
    <section>
      <div className="">
        <div className="flex flex-col pb-3.5 items-center text-center">
          <div>
            <span className="my-3 flex items-center justify-center mb-4">
              <span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-secondary">
                <span className="flex h-4 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0">
                  <Flame />
                </span>
                <p className="text-xs">Benefits</p>
              </span>
            </span>
          </div>
        </div>
        <h1 className="font-cal !leading-xs md:!leading-h1 font-semibold lg:text-5xl pb-3 text-center">
          Your all-purpose scheduling app
        </h1>
        <p className="text-inherit text-center">
          Discover a variety of our advanced features. Unlimited and free for individuals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {benefitsData.map((benefit, index) => (
            <Card key={index}>
              <CardHeader className="text-[20px] font-semibold">
                {benefit}
                <CardDescription className="text-[14px]">
                  Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break.
                </CardDescription>
                <div className="border rounded-md rounded-br-none p-4">
                  <h4>Notice and Buffers</h4>
                  <Label>Minimum Notice</Label>
                  <AnimatePresence mode="wait">
                    <InputWithBounce placeholder={placeholders.minNotice} />
                  </AnimatePresence>

                  <div className="flex gap-4 mt-2">
                    <div>
                      <Label>Buffer before event</Label>
                      <AnimatePresence mode="popLayout">
                        <InputWithBounce placeholder={placeholders.bufferBefore} />
                      </AnimatePresence>
                    </div>
                    <div>
                      <Label>Buffer after event</Label>
                      <AnimatePresence mode="wait">
                        <InputWithBounce placeholder={placeholders.bufferAfter} />
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
