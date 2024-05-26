import { themeProps } from "../App";

const SettingIcon = ({ theme }: { theme: themeProps }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
    >
      <path
        d="m22.2 14.4-1.2-.7c-1.3-.8-1.3-2.7 0-3.5l1.2-.7c1-.6 1.3-1.8.7-2.7l-1-1.7c-.6-1-1.8-1.3-2.7-.7l-1.2.7c-1.3.8-3-.2-3-1.7V2c0-1.1-.9-2-2-2h-2C9.9 0 9 .9 9 2v1.3C9 4.8 7.3 5.8 6 5l-1.2-.6c-1-.6-2.2-.2-2.7.7l-1 1.7c-.5 1-.2 2.2.7 2.8l1.2.7c1.3.7 1.3 2.7 0 3.4l-1.2.7c-1 .6-1.3 1.8-.7 2.7l1 1.7c.6 1 1.8 1.3 2.7.7l1.2-.6c1.3-.8 3 .2 3 1.7V22c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-1.3c0-1.5 1.7-2.5 3-1.7l1.2.7c1 .6 2.2.2 2.7-.7l1-1.7c.5-1.1.2-2.3-.7-2.9zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
        fill={theme === "light" ? "#6b7280" : "#ffffff"}
        className="fill-000000"
      ></path>
    </svg>
  );
};

export default SettingIcon;
