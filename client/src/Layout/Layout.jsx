import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
const Layout = () => {
  return (
    <>
    <Navbar/>
      <main>
        <Suspense fallback={<h1>Loading..</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
