import { exquisiteElegance } from "@/constants"
import Image from "next/image"

 

const ExquisiteElegance = () => {
  return (
    <div className="w-full mb-16 md:mb-28">
            <h1 className="floral-reg text-3xl md:text-6xl mb-8">Peak Luxury <br /> Exquisite Elegance </h1>

          


          {/* slide */}
      <div className="perks-slide-wrapper w-full flex flex-col gap-10">
        <div className="relative w-full flex items-center gap-5 sm:gap-10 overflow-x-auto overflow-y-hidden no-scrollbar lg:grid lg:grid-cols-2 ">
          {exquisiteElegance.map((img, idx) => (
            <div key={idx} className="perks-items-container">
              <div className="relative min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  xl:min-w-[400px] cursor-grab  flex flex-col justify-between">
                <Image src={img.img} alt="review images" className="w-full h-[400px] rounded-2xl" width={500} height={100} />
                {/* <Image src='/images/peak-luxe1.jpg' alt="review images" className="w-full h-[400px] rounded-2xl" width={1000} height={100} /> */}
                 


                {/* play button */}
                <Image src={'/icons/play.svg'} alt="" width={50} height={50}  className="absolute top-[40%] left-[45%]  md:w-24 md:h-24"/>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}

export default ExquisiteElegance