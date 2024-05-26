import React, { useEffect, useState } from "react";
import { themeProps } from "../../App";
// import Background from "../../assets/Background.jpg";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import AppClock from "../AppSetting/AppClock";

const lightModeBg =
  "linear-gradient(112.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(157.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(135deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(90deg, rgb(195, 195, 195),rgb(228, 228, 228))";
const darkModeBg =
  "linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))";

const AppLayout = ({
  theme,
  children,
}: {
  theme: themeProps;
  children: React.ReactNode;
}) => {
  const [viewChange, setViewChange] = useState<boolean>(false);

  useEffect(() => {
    setViewChange(true);
    const timeOut = setTimeout(() => {
      setViewChange(false);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [theme]);

  return (
    <div
      className="relative flex h-screen flex-col items-center overflow-hidden px-12 transition-all duration-1000 "
      style={{
        backgroundImage: theme === "dark" ? darkModeBg : lightModeBg,
        backgroundBlendMode:
          theme === "dark" ? "" : "overlay,overlay,overlay,normal",
      }}
    >
      <div className="relative flex h-full  w-full max-w-[1440px] flex-col">
        <Socials theme={theme} />
        <AppClock />
        {children}
      </div>
      {viewChange && (
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute h-full w-full bg-gray-700 opacity-50"
        ></motion.div>
      )}
    </div>
  );
};

export default AppLayout;
