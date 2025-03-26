import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Header classname="hidden" /> */}
      <Header classname="" />
      <LandingPage />
      <Footer />
    </div>
  );
}
