import { FC } from "react";

interface FaceBoxProps {
  id: string;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
}

const FaceBox: FC<FaceBoxProps> = ({ xmin, ymin, xmax, ymax }) => {
  return (
    <rect
      className="border-black border-5 border-solid"
      x={xmin}
      y={ymin}
      width={xmax - xmin}
      height={ymax - ymin}
      stroke="white"
      strokeWidth="0.003"
      fill="transparent"
    />
  );
};

export default FaceBox;
