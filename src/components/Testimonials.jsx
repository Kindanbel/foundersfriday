import Image from "./Image"


const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <Image width={200} height={200} bColor="#9524FF"/>
        <div className="name text-[20px] font-[500]">
            Belba Jody
        </div>
        <div className="comment text-center">
            Always a remarkable experience <br></br> for my team and myself 
        </div>
    </div>
  )
}

export default Testimonials