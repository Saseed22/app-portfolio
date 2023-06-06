import Image from "next/image"
import { aboutMeData } from "./data/data"
import React from "react";

export default function AboutMePage() {
  return (
    <div className='flex flex-col items-center'>
      <section className="flex sm:flex-row sm:w-10/12 items-center  flex-col w-full">
        <div className="sm:w-1/3 w-full flex justify-center mt-12">
          <Image
            priority={false}
            width={640} height={960}
            alt={"jurica-koletic-7YVZYZeITc8-unsplash"}
            aria-label={"jurica-koletic-7YVZYZeITc8-unsplash"}
            src={"/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"} 
            className="profileImage"
          />
        </div>
        <div className="sm:ml-20 ml-0 sm:w-2/3 w-full mt-6 sm:mt-0 p-10">
          <h2 >{aboutMeData.title}</h2>
          <p className="text-base">{ aboutMeData.body}</p>
        </div>
      </section>


      <section className="w-full  bg-blue-light p-10 h-full">
        <p>{ aboutMeData.highlightedBody}</p>
      </section>


      <section className="flex sm:w-10/12 p-10 items-center w-full flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-3/5 mb-10 sm:mb-0">
          <p>{ aboutMeData.body2}</p>
        </div>
        <div className=" w-full sm:w-2/5 sm:ml-10 ml-0 ">
        <Image
            priority={false}
            width={700} height={1000}
            alt={"kaitlyn-baker-vZJdYl5JVXY-unsplash"}
            aria-label={"kaitlyn-baker-vZJdYl5JVXY-unsplash"}
            src={"/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg"} 
            className="h-250 object-cover w-500"
          />
        </div>
      </section>
    </div>
  )
}
