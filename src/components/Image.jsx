

const Image = (prop) => {
  return (
    <div style={{width: prop.width, height: prop.height, borderColor: prop.bColor}} className=" rounded-full border border-solid p-2">
        <img src="images/man-img.jpg" alt="" className="w-[100%] h-[100%] rounded-full" />
    </div>
  )
}

export default Image