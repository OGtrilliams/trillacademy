import React from "react";
import { Logo } from "./logo";
import { SIdebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-screen border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>

      <div className="flex flex-col w-full">
        <SIdebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
