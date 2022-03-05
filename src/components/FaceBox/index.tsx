import { Root, Trigger } from "@radix-ui/react-context-menu";
import { FC, useRef } from "react";
import ContextMenu from "../ContextMenu";

export interface FaceBoxProps {
  id: string;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
  onDelete: (id: string) => void;
}

const FaceBox: FC<FaceBoxProps> = ({
  onDelete,
  id,
  xmin,
  ymin,
  xmax,
  ymax,
}) => {
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
      <ContextMenu onDelete={() => onDelete(id)} />
    </Root>
  );
};

export default FaceBox;
