import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-slate-50">
        <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6  lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                  <img src="/snake-1.png" alt="" className="w-full" />
                </div>

                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                  Your image on a{" "}
                  <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                  Phone case
                </h1>

                <p className="mt-8 text-lg lg:pr-10  max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Capture you favourite memories with your own,{" "}
                  <span className="font-semibold">one-of-one</span> phone case.
                  CaseCanva allows you to protext your memories, not just your
                  phone case.
                </p>

                <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="size-5  shrink-0 text-green-600" />
                      High-quality, durable material
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="size-5  shrink-0 text-green-600" />5
                      year print guarentee
                    </li>

                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="size-5  shrink-0 text-green-600" />5
                      Modern iPhone models supported
                    </li>
                  </div>
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-1.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-2.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-3.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-4.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-5.jpg"
                      alt="user image"
                    />
                  </div>

                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                      <Star className="size-4 text-green-600 fill-green-600" />
                      <Star className="size-4 text-green-600 fill-green-600" />
                      <Star className="size-4 text-green-600 fill-green-600" />
                      <Star className="size-4 text-green-600 fill-green-600" />
                      <Star className="size-4 text-green-600 fill-green-600" />
                      <Star className="size-4 text-green-600 fill-green-600" />
                    </div>

                    <p>
                      <span className="font-semibold">1.250</span> happy
                      customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right image phone  */}
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src="/your-image.png"
                  alt=""
                  className="absolute  w-40 lg:w-52 left-56 -top-20  select-none hidden sm:block lg:hidden xl:block"
                />
                <img
                  src="/line.png"
                  alt=""
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                />
                <Phone imgSrc="/testimonials/1.jpg" className="w-64" />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* value proposition section  */}
        <section className="bg-slate-100 py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:flex-row  items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight  text-5xl font-bold md:text-6xl text-gray-900">
                What our customers say ?
              </h2>
            </div>

            {/* review  */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-4 lg:max-w-none  lg:grid-cols-2 gap-y-16">
              {/* first user review  */}
              <div className="flex flex-col flex-auto lg:pr-8  gap-4 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    "The case feels durable and I even got a compliment on the
                    design. Had the case for 2 and a half months.{" "}
                    <span className="bg-slate-800 p-0.5 text-white">
                      The image is super clear
                    </span>
                    , on the case i had before the image started to fading on
                    couple weeks. love it."
                  </p>
                </div>
                <div className=" flex gap-4 mt-2">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p>Kiran Nepali</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="size-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verfified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* second user rreview  */}
              <div className="flex flex-col flex-auto lg:pr-8  gap-4 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                  <Star className="size-5 text-green fill-green-600 " />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    "The case feels durable and I even got a compliment on the
                    design. Had the case for 2 and a half months.{" "}
                    <span className="bg-slate-800 p-0.5 text-white">
                      The image is super clear
                    </span>
                    , on the case i had before the image started to fading on
                    couple weeks. love it."
                  </p>
                </div>
                <div className=" flex gap-4 mt-2">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p>John Mayer</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="size-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verfified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>

          {/* animation review  */}
          <div className="pt-16 ">
            <Reviews />
          </div>
        </section>

        {/* upload photo section  */}
        <section className="py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16">
            <div className="flex flex-col lg:flex-row  items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight  text-5xl font-bold md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="text-white bg-green-600 px-2 relative">
                  your own case
                </span>{" "}
                now!
              </h2>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative max-w-6xl flex flex-col  items-center md:grid grid-cols-2 gap-40">
                <img
                  src="/arrow.png"
                  alt=""
                  className="absolute top-[25rem] md:top-1/2  -translate-x-1/2 z-10 left-1/2 -translate-y-1/2 rotate-90 md:rotate-0"
                />

                <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5  ring-inset ring-gray-900/10  lg:rounded-2xl">
                  <img
                    src="/horse.jpg"
                    className="rounded-md  object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 w-full h-full"
                    alt=""
                  />
                </div>
                <Phone imgSrc="/horse_phone.jpg" className="w-60" />
              </div>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5  shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5  shrink-0 text-green-600" />5 year
                    print guarentee
                  </li>

                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5  shrink-0 text-green-600" />5
                    Modern iPhone models supported
                  </li>
                </div>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex  items-center   gap-1",
                  })}
                >
                  Create your case now
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </ul>
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
