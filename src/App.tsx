import React, { Suspense, useContext, useState } from "react";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { CounterPageLazy } from "./pages/CounterPage/CounterPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export enum Theme{
  LIGHT= 'light',
  DARK = 'dark'
}

export const App = () => {
 
  const {theme,toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/Counter"}>Counter</Link>
      <Suspense>
        <Routes>
          <Route path={"/Counter"} element={<CounterPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
