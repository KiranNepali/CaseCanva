"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Phone from "./Phone";

const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-arae-buying.png"
        alt=""
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

const ReviewGrid = () => {
  return (
    <div className="grid grid-cols-3  gap-5">
      {PHONES.map((src, index) => (
        <div
          key={index}
          className="rounded-3xl bg-white p-5 flex justify-center items-center overflow-hidden"
        >
          <Phone imgSrc={src} className="w-64" />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
