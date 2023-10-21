'use client'
import Top from "./Top"
import Bottom from "./Bottom"

const Section = () => {
  return (
    <>
      <div className="p-6 flex flex-col items-center h-[25rem]">
        <Top />
        <Bottom/>
      </div>
    </>
  )
}

export default Section