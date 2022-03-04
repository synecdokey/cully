import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import Arrow, { BackArrow } from "../Arrow";

const ArrowButton: FC<
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

const NavigationBar: FC = () => {
  return (
    <section className="absolute flex justify-between items-center bottom-9 bg-white h-14 w-[80%] left-[10%] p-3">
      <ArrowButton disabled>
        <BackArrow />
      </ArrowButton>
      <span className="text-sm">filename</span>
      <ArrowButton>
        <Arrow />
      </ArrowButton>
    </section>
  );
};

export default NavigationBar;
