import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import DownIcon from "../../SVGs/DownIcon";
import CheckIcon from "../../SVGs/CheckIcon";

interface DropdownProps {
  style?: React.CSSProperties;
  size?: "small" | "medium";
  type?: "outline" | "variant";
  options?: string[];
  handleSelect?: (option: string) => void;
  current: string
}

export type AppDropdownRef = {
  getOption: () => string;
};

const AppDropdown = forwardRef((props: DropdownProps, ref) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const {
    style,
    size = "small",
    type = "variant",
    options = ["item 1", " item 2dasdasdasd"],
    handleSelect,
    current
  }: DropdownProps = props;
  const [selectedOption, setSelectedOption] = useState<string>(current);

  const sizes = {
    small: "h-8 px-3 text-sm rounded-lg",
    medium: "h-10 px-3 rounded-lg",
  };

  const types = {
    outline: `border border-gray-500 bg-white hover:bg-gray-500 hover:text-white transition-all shadow`,
    variant: `bg-midnightBlue text-white transition-all shadow`,
  };

  const toggleDropdown = useCallback(() => {
    setOpenOptions(!openOptions);
  }, [openOptions]);

  const handleOptionClick = (item: string) => {
    setOpenOptions(false);
    setSelectedOption(item);
    if (handleSelect) {
      handleSelect(item);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      getOption: () => {
        return selectedOption;
      },
    }),
    [selectedOption],
  );

  return (
    <div
      className={`flex items-center justify-between gap-2 ${sizes[size]} ${types[type]} relative w-36 cursor-pointer`}
      style={style}
      onClick={toggleDropdown}
    >
      <p className="overflow-hidden text-ellipsis whitespace-nowrap">
        {selectedOption}
      </p>
      <div className="flex h-5 w-5 items-center">
        <DownIcon />
      </div>
      {openOptions && (
        <div
          className={`absolute left-0 z-[9999] ${size === "small" ? "top-[34px]" : "top-[42px]"} flex w-full flex-col rounded-lg ${types[type]} py-3`}
        >
          {options.map((item: string, i: number) => (
            <div
              key={i}
              onClick={() => {
                handleOptionClick(item);
              }}
              className=" flex items-center justify-between px-3 py-1 transition-colors hover:bg-[rgba(255,255,255,0.5)]"
            >
              <p className=" max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
                {item}
              </p>
              {item === selectedOption ? (
                <div className="flex h-3 w-3 items-center">
                  <CheckIcon />
                </div>
              ) : (
                <div className="flex h-3 w-3"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default AppDropdown;
