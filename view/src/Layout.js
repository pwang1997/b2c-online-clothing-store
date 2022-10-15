import "./App.css";
import Header from "./components/Header/Header";

import { useContext } from "react";

import { FirebaseUserCollectionContext } from "./context/ContextStorage";
import Links from "./components/External/Links";
import { Outlet } from "react-router-dom";

function Layout() {
  const userCollectionRef = useContext(FirebaseUserCollectionContext);
  return (
    <FirebaseUserCollectionContext.Provider value={userCollectionRef}>
      <div className="App">
        <Header />
        <Outlet />
        <Links />
      </div>
    </FirebaseUserCollectionContext.Provider>
  );
}

export default Layout;
