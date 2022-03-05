import { FC, useState } from "react";
import useSWR from "swr";
import FaceBox from "./components/FaceBox";
import FaceContainer from "./components/FaceContainer";
import NavigationBar from "./components/NavigationBar";

interface ImageAPI {
  id: string;
  filename: string;
  url: string;
}

const App: FC = () => {
  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((json) => json.data);
  const { data } = useSWR<ImageAPI[]>(
    "https://cully-api.herokuapp.com/images",
    fetcher
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const onNext = () => {
    if (data && currentIndex < data.length) {
      setCurrentIndex((i) => i + 1);
      if (currentIndex > maxIndex) {
        setMaxIndex((i) => i + 1);
      }
    }
  };

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return data ? (
    <main className="w-full bg-off-white h-screen">
      <div className="py-5">
        <div className="max-w-[85%] max-h-[100vh] mx-auto relative">
          <img src={data[currentIndex].url} alt="" />
          <NavigationBar
            filename={data[currentIndex].filename}
            hasNext={currentIndex < data.length}
            onNext={onNext}
            onPrev={onPrev}
          />
          <FaceContainer>
            <FaceBox
              {...{
                id: "392614b3e2f146c9a0c9d643d8b8450f",
                xmin: 0.2488081455230713,
                ymin: 0.28436192870140076,
                ymax: 0.5191940665245056,
                xmax: 0.35970163345336914,
              }}
            />
          </FaceContainer>
        </div>
      </div>
    </main>
  ) : null;
};

export default App;
