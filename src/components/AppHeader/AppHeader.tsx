import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoIcon from "../../SVGs/LogoIcon";
import { themeProps } from "../../App";
import MoonIcon from "../../SVGs/MoonIcon";
import SunIcon from "../../SVGs/SunIcon";
import { Global } from "../../Utils/Global/Global";
import { useCallback, useEffect, useRef, useState } from "react";
import AppButton from "../AppButton/AppButton";

const AppHeader = ({
  themeHandle,
  theme,
}: {
  themeHandle: () => void;
  theme: themeProps;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navList: string[] = ["Home", "Projects", "Bio", "Contact"];
  const [choicedLanguage, setChoicedLanguage] = useState<string>("English");
  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setChoicedLanguage(String(localStorage.getItem("language")));
    } 
  }, []);

  const handleOpencurrentLanguageModal = useCallback(() => {
    const languageModal = Global.appDialog.get();
    languageModal?.openDialog({
      title: "Change language",
      description: "Select the currentLanguage you want to translate.",
      content: (
        <div className="flex flex-col items-end">
          <div className="flex w-full justify-between">
            <p>Languages:</p>
            <select
              ref={selectRef}
              name="language"
              id=""
              className="cursor-pointer"
              defaultValue={choicedLanguage}
            >
              <option value="English">EN</option>
              <option value="Vietnam">VN</option>
            </select>
          </div>
          <AppButton
            label="Apply"
            size="small"
            handleClick={() => {
              if (selectRef.current?.value) {
                localStorage.setItem("language", selectRef.current?.value);
                languageModal.closeDialog();
                window.location.reload();
              }
            }}
            style={{ marginTop: "24px" }}
          />
        </div>
      ),
    });
  }, [choicedLanguage]);

  const handleToggle = () => {
    themeHandle();
  };
  return (
    <div className="flex items-center justify-between py-3">
      {/* Logo */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        onClick={() => navigate("/")}
        className="cursor-pointer"
      >
        <LogoIcon />
      </motion.div>

      {/* Navbar */}
      <div className="flex items-center gap-3">
        {navList.map((item: string, i: number) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 - i / 10, duration: 1, ease: "easeIn" }}
              className={`h-9 rounded-3xl border backdrop-blur-lg  transition-all dark:text-gray-400 ${pathname === "/" + (item === "Home" ? "" : item.toLowerCase()) ? "border-white bg-[#fafafa] shadow-md dark:border-black dark:bg-[#0f0f0f] dark:shadow-gray-500" : "border-transparent text-gray-500"} `}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="flex h-full w-full items-center justify-center px-4 text-sm font-light"
              >
                {item}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* DarkMode Toggle */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 1, ease: "easeIn" }}
        className="flex items-center gap-2"
      >
        <div
          className="flex cursor-pointer items-center text-sm"
          onClick={handleOpencurrentLanguageModal}
        >
          {choicedLanguage}
        </div>
        <div className="relative flex h-8 w-8 cursor-pointer items-center overflow-hidden rounded-full border  border-transparent transition-all hover:shadow hover:shadow-gray-300 dark:hover:shadow-white">
          <motion.div
            className="absolute flex w-8 flex-col items-center gap-4 p-1"
            animate={{
              y: theme === "dark" ? 20 : -16,
            }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            onClick={handleToggle}
          >
            <MoonIcon />
            <SunIcon />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppHeader;
