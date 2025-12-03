import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <Home />
        {/* <Posts /> */}
      </Main>

      <Footer />
    </div>
  );
}

export default App;