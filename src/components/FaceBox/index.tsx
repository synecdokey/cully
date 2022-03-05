import { Root, Trigger } from "@radix-ui/react-context-menu";
import { FC, useRef } from "react";
import ContextMenu from "../ContextMenu";

export interface FaceBoxProps {
  id: string;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
}

const FaceBox: FC<FaceBoxProps> = ({ xmin, ymin, xmax, ymax }) => {
  const ref = useRef<SVGRectElement>(null);

  return (
    <Root>
      <Trigger asChild>
        <rect
          className="cursor-grab"
          ref={ref}
          x={xmin}
          y={ymin}
          width={xmax - xmin}
          height={ymax - ymin}
          stroke="white"
          strokeWidth="0.003"
          fill="transparent"
        />
      </Trigger>
      <ContextMenu />
    </Root>
  );
};

export default FaceBox;
