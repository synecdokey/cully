import { FC } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import FaceBox, { FaceBoxProps } from "../FaceBox";

interface FaceContainerProps {
  /* Image ID */
  id: string;
}

const FaceContainer: FC<FaceContainerProps> = ({ id }) => {
  const { data, mutate } = useSWR<FaceBoxProps[]>(
    `https://cully-api.herokuapp.com/images/${id}/faces`,
    fetcher
  );

  const onDelete = (idToDelete: string) => {
    mutate(
      data?.filter(({ id }) => id !== idToDelete),
      false
    );
  };

  return data ? (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      {data.map((props) => (
        <FaceBox {...props} key={props.id} onDelete={onDelete} />
      ))}
    </svg>
  ) : null;
};
export default FaceContainer;
