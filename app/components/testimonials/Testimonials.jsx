'use client'
import { useState, useEffect } from 'react'
import Quote from './Quote'
import Heading from '../Heading'

const Testimonials = () => {

  const quote =
    "Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.";

  return (
    <div className="px-40 py-16 flex flex-col space-y-14 bg-amber-100/70">
      <Heading
        Main_text={"our happy customers"}
        Description={"What our customers say about us"}
      />
      <Quote
        quote={quote}
        speaker="Jane Doe"
        designation="Product Specialist, Lorem Co."
      />
    </div>
  );
}

export default Testimonials