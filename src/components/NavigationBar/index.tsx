import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

const ArrowButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-sm h-[30px] w-[30px] hover:bg-brand-ui-6 disabled:hover:bg-transparent"
      {...props}
    >
      {children}
    </button>
  );
};

const NavigationBar: FC = () => {
  return (
    <section className="absolute flex justify-between items-center bottom-9 bg-white h-14 w-[80%] left-[10%] p-3">
      <ArrowButton disabled>back</ArrowButton>
      <span className="text-sm">filename</span>
      <ArrowButton>fwd</ArrowButton>
    </section>
  );
};

export default NavigationBar;
