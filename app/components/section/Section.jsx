'use client'
import Top from "./Top"
import Bottom from "./Bottom"

const Section = () => {
  return (
    <>
      <div className="p-20 flex flex-col w-screen space-y-12 items-center">
        <Top />
        <Bottom/>
      </div>
    </>
  )
}

export default Section