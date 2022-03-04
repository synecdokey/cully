import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

const NavigationButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-sm h-[30px] grid place-items-center w-[30px] text-black-ui hover:bg-brand-ui-6 disabled:hover:bg-transparent disabled:text-light-grey-ui"
      {...props}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
