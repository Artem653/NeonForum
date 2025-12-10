import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import Home from "./components/homepage/Home";
import Posts from "./components/posts/Posts";

import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Main>
        {/* Змінюй на <Posts /> */}
        <Posts />
      </Main>

      <Footer />
    </div>
  );
}