import React from "react";
import { Outlet } from "react-router-dom";
import NewNavbar from "../NewNavbar/newNavbar";

export default function Layout() {
  return (
    <>
      <NewNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
