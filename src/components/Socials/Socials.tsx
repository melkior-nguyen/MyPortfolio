import React from "react";
import InstagramIcon from "../../SVGs/InstagramIcon";
import FacebookIcon from "../../SVGs/FacebookIcon";
import GitIcon from "../../SVGs/GitIcon";
import LinkedinIcon from "../../SVGs/LinkedinIcon";
import { motion } from "framer-motion";
import { themeProps } from "../../App";

interface socialProps {
  icon: React.ReactNode;
  link: string;
}

const Socials = ({ theme }: { theme: themeProps }) => {
  const socialList: socialProps[] = [
    {
      icon: <GitIcon theme={theme} />,
      link: "https://www.w3schools.com",
    },
    {
      icon: <LinkedinIcon theme={theme} />,
      link: "https://www.w3schools.com",
    },
    {
      icon: <InstagramIcon theme={theme} />,
      link: "https://www.w3schools.com",
    },
    {
      icon: <FacebookIcon theme={theme} />,
      link: "https://www.w3schools.com",
    },
  ];
  return (
    <div className="absolute left-[-1px] top-1/2 flex translate-x-[-100%] translate-y-[-50%] cursor-pointer flex-col items-center gap-y-2">
      {socialList.map((item: socialProps, i: number) => {
        return (
          <motion.a
            href="https://www.w3schools.com"
            target="blank"
            className="flex items-center justify-center transition-all rounded-full hover:shadow-md hover:shadow-gray-400"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 - i / 10, duration: 1 }}
            key={i}
          >
            {item.icon}
          </motion.a>
        );
      })}
    </div>
  );
};

export default Socials;
