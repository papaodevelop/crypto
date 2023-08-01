import Image from "next/image";

import StarRating from "./StarRating";

// Define the Course interface to represent the structure of the course object
interface Course {
  linkImg: string;
  title: string;
  rating: number;
  price: string;
  category: string;
}

const Card = ({ course }: { course: Course }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4">
      <Image
        src={course.linkImg}
        className="h-40 w-full object-cover"
        alt="Course Image"
      />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{course.title}</h1>
        <StarRating rating={course.rating} />
      </div>
      <h3 className="p-5 text-xl">{course.price}</h3>

      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {course.category}
      </div>
    </div>
  );
};

export default Card;
