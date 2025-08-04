
"use client"

import TextEditor from '@/components/reuseable/text-editor'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const AboutPage = () => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Blog content:", content);
    // save to API or database here
  };

  return (
    <div>
      <TextEditor value={content} onChange={setContent} />
      <div className='mt-12 flex justify-end'>
        <Button  className={"rounded-full px-20"}>Save</Button>
      </div>
    </div>
  )
}

export default AboutPage




