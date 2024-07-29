import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="pb-20 pt-30">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase pt-10 pb-10 tracking-widest text-sm text-center text-blue-100 max-x-80">
            ॐ नमो भगवते रुद्राय नमः।
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning ideas into seamless Experiences"
          />

          <p
            className={`text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ${dancingScript.className}`}
          >
            Hello there 👋, I&apos;m Sahil Shadwal, a Full-Stack Developer based
            in India.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
