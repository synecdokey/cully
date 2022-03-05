import { FC } from "react";

const FaceContainer: FC = ({ children }) => (
  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1 1">
    {children}
  </svg>
);
export default FaceContainer;
