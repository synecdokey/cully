import { FC } from "react";
import NavigationBar from "./components/NavigationBar";

const App: FC = () => {
  return (
    <main className="w-full bg-off-white h-screen">
      <div className="max-w-[85%] max-h-[100vh] mx-auto py-5 relative">
        <img src="/img.jpg" alt="" />
        <NavigationBar filename="some_picture.jpg" />
      </div>
    </main>
  );
};

export default App;
