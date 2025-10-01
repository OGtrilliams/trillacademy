import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";
import SignInBtn from "@/components/SignInBtn";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
      <div className="bg-black text-white font-semibold rounded-2xl py-2 px-4 hover:bg-gray-700 hover:cursor-pointer transition-colors">
        <SignInBtn />
      </div>
    </div>
  );
};
