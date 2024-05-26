import React from "react";
import "./AppLoaderStyle.css";

const AppLoader = () => {
  return (
    <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] gap-2">
      <span className={`bubble bg-richBlack`}></span>
      <span className={`bubble bubble2 bg-richBlack`}></span>
      <span className={`bubble bubble2 bg-richBlack`}></span>
    </div>
  );
};

export default AppLoader;
