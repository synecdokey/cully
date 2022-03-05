import { FC } from "react";
import FaceBox from "./components/FaceBox";
import FaceContainer from "./components/FaceContainer";
import NavigationBar from "./components/NavigationBar";

const App: FC = () => {
  const onNext = () => {};
  const onPrev = () => {};

  return (
    <main className="w-full bg-off-white h-screen">
      <div className="py-5">
        <div className="max-w-[85%] max-h-[100vh] mx-auto relative">
          <img src="/img.jpg" alt />
          <NavigationBar
            filename="some_picture.jpg"
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
  );
};

export default App;
