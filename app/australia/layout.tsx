import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
