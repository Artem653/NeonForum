import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { AppRouter } from "./router";

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
