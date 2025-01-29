import { Outlet, useOutletContext } from "react-router-dom";
import Alert from "./Alert";
import { useState } from "react";

function User() {
  const [alert, setAlert] = useOutletContext();

  return (
    <div className="relative h-full max-ipadpro:flex max-ipadpro:content-center max-ipadpro:items-center max-ipadpro:justify-center ipadpro:grid ipadpro:grid-cols-2 ipadpro:grid-rows-1">
      {" "}
      {alert && <Alert setAlert={setAlert} />}
      <div className={`bg-[#230B00] ${alert ? "blur-sm" : ""}`}></div>
      <div
        className={`flex h-full w-full items-center justify-center bg-[#EDE6EA] ${alert ? "blur-sm" : ""}`}
      >
        <Outlet context={setAlert} />
      </div>
    </div>
  );
}

export default User;
