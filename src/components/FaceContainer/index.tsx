import { FC } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import FaceBox, { FaceBoxProps } from "../FaceBox";

interface FaceContainerProps {
  /* Image ID */
  id: string;
}

const FaceContainer: FC<FaceContainerProps> = ({ children, id }) => {
  const { data } = useSWR<FaceBoxProps[]>(
    `https://cully-api.herokuapp.com/images/${id}/faces`,
    fetcher
  );

  return data ? (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      {data.map((props) => (
        <FaceBox {...props} key={props.id} />
      ))}
    </svg>
  ) : null;
};
export default FaceContainer;
