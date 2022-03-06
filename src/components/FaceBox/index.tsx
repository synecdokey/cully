import { Root, Trigger } from "@radix-ui/react-context-menu";
import { FC, MouseEvent, MouseEventHandler, useRef, useState } from "react";
import ContextMenu from "../ContextMenu";

export interface FaceBoxCoordinates {
  id: string;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
}

interface FaceBoxProps extends FaceBoxCoordinates {
  onDelete: (id: string) => void;
  updateCoordinates(coords: FaceBoxCoordinates): void;
}

const getComputedCoordinates = (e: MouseEvent, ctm: DOMMatrix) => {
  return {
    xc: (e.clientX - ctm.e) / ctm.a,
    yc: (e.clientY - ctm.f) / ctm.d,
  };
};

const FaceBox: FC<FaceBoxProps> = ({
  onDelete,
  updateCoordinates,
  id,
  xmin,
  ymin,
  xmax,
  ymax,
}) => {
  const ref = useRef<SVGRectElement>(null);
  const [clientOffsetX, setClientOffsetX] = useState(0);
  const [clientOffsetY, setClientOffsetY] = useState(0);
  const [x, setX] = useState(xmin);
  const [y, setY] = useState(ymin);
  const [isDragged, setIsDragged] = useState(false);

  const onMouseDown: MouseEventHandler = (e) => {
    const ctm = ref.current?.getScreenCTM();
    if (ctm) {
      setIsDragged(true);
      const { xc, yc } = getComputedCoordinates(e, ctm);
      setClientOffsetX(xc - x);
      setClientOffsetY(yc - y);
    }
  };

  const onMouseMove: MouseEventHandler = (e) => {
    if (isDragged) {
      const ctm = ref.current?.getScreenCTM();

      if (ctm) {
        const { xc, yc } = getComputedCoordinates(e, ctm);
        setX(xc - clientOffsetX);
        setY(yc - clientOffsetY);
      }
    }
  };

  const onMouseUp: MouseEventHandler = () => {
    setIsDragged(false);
    ref.current &&
      updateCoordinates({
        id,
        xmin: x,
        xmax: x + ref.current.width.baseVal.value,
        ymin: y,
        ymax: x + ref.current.height.baseVal.value,
      });
  };

  return (
    <Root>
      <Trigger asChild>
        <rect
          className={isDragged ? "cursor-grabbing" : "cursor-grab"}
          ref={ref}
          x={x}
          y={y}
          width={xmax - xmin}
          height={ymax - ymin}
          stroke="white"
          strokeWidth="0.003"
          fill="transparent"
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
        />
      </Trigger>
      <ContextMenu onDelete={() => onDelete(id)} />
    </Root>
  );
};

export default FaceBox;
