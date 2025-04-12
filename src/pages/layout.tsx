import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0121]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
