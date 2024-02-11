import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import CardWrapper from "../../components/Wrappers/CardWrapper";
import GradientWrapper from "../../components/Wrappers/GradientWrapper";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

export default function RootLayout() {
  return (
    <div className="grid grid-cols-[350px_1fr] grid-rows-1 h-screen overflow-hidden gap-x-2 p-4 bg-black">
      <Sidebar />
      <CardWrapper className="flex flex-col h-full">
        <Navbar />
        <GradientWrapper className="flex-1 overflow-y-scroll">
          <Outlet />
        </GradientWrapper>
      </CardWrapper>
      <PreviewCard />
    </div>
  );
}
