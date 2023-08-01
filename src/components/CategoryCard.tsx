import React, { ReactNode } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface CategoryCardProps {
  icons: ReactNode; // ReactNode is a generic type that can represent any valid JSX element
  title: string;
}

const CategoryCard = ({ icons, title }: CategoryCardProps) => {
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10">
          {title}
        </h1>
      </div>

      <div className="group-hover/edit:bg-[#20B486] rounded-lg p-3">
        <BsArrowUpRight
          size={30}
          style={{ color: "#20B486" }}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
