import { FC, useState } from "react";
import useSWR from "swr";
import FaceContainer from "./components/FaceContainer";
import NavigationBar from "./components/NavigationBar";
import fetcher from "./utils/fetcher";

interface ImageAPI {
  id: string;
  filename: string;
  url: string;
}

const App: FC = () => {
  const { data } = useSWR<ImageAPI[]>(
    "https://cully-api.herokuapp.com/images",
    fetcher
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const onNext = () => {
    if (data && currentIndex < data.length - 1) {
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
            hasNext={currentIndex < data.length - 1}
            hasPrev={currentIndex > 0}
            onNext={onNext}
            onPrev={onPrev}
          />
          <FaceContainer id={data[currentIndex].id} />
        </div>
      </div>
    </main>
  ) : null;
};

export default App;
