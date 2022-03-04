import { FC } from "react";

const Arrow: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 8L18 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3214 1.32141L18 7.99998L11.3214 14.6786"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackArrow: FC = () => <Arrow className="rotate-180" />;

export default Arrow;
