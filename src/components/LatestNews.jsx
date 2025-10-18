import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 p-3 bg-base-200 rounded-sm">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-l-sm">
        Latest
      </p>{" "}
      <Marquee className="flex gap-5 " pauseOnHover={true} speed={60}>
        <p className="font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, saepe
          doloremque qui numquam fugiat amet nobis nihil perferendis cumque
          maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Animi, saepe doloremque qui numquam fugiat amet nobis nihil
          perferendis cumque maiores.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
