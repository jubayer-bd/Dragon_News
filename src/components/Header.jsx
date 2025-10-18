import { format } from "date-fns";
import React from "react";

const Header = () => {
  const currentDate = format(new Date(), "EEEE, MMMM d, yyyy");
  return (
    <div className="flex flex-col justify-center space-y-2 items-center text-center py-4 border-b border-gray-200">
      <img className="w-[350px]" src="/logo.png" alt="" />
      <p className=" text-sm text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold text-accent">{currentDate}</p>
    </div>
  );
};

export default Header;
