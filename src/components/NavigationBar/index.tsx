import { FC, useEffect } from "react";
import Arrow, { BackArrow } from "../Arrow";
import NavigationButton from "../NavigationButton";

interface NavigationBarProps {
  filename: string;
  onPrev(): void;
  onNext(): void;
}

const NavigationBar: FC<NavigationBarProps> = ({
  filename,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") {
        onPrev();
      }
      if (e.code === "ArrowRight") {
        onNext();
      }
    };
    document.addEventListener("keyup", listener);

    return () => document.removeEventListener("keyup", listener);
  }, [onPrev, onNext]);

  return (
    <section className="absolute flex justify-between items-center bottom-9 bg-white h-14 w-[80%] left-[10%] p-3">
      <NavigationButton disabled onClick={onPrev}>
        <BackArrow />
      </NavigationButton>
      <span className="text-sm">{filename}</span>
      <NavigationButton onClick={onNext}>
        <Arrow />
      </NavigationButton>
    </section>
  );
};

export default NavigationBar;
