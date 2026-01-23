import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

