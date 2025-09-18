'use client'

import Image from "next/image"
import { ChangeEvent, MouseEvent, useRef, useState } from "react"

interface IImagePickerProps {
  label: string
  name: string
}

const ImagePicker = ({
  label,
  name,
}: IImagePickerProps) => {

  const [selectedImage, setSelectedImage] = useState<string | null>()
  const imageElement = useRef<HTMLInputElement>(null)

  const pickClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    imageElement.current?.click()
  }

  const imageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null

    if (!file) return setSelectedImage(null)

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setSelectedImage(fileReader.result as string)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-solid border-[#a4abb9] flex justify-center items-center text-center color-[#a4abb9] relative">
          {!selectedImage
            ? <p className="m-0 p-4">No image selected yet.</p>
            : <Image className='object-cover' src={selectedImage} alt='Image selected by user' fill />
          }
        </div>
        <input
          className="hidden"
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageElement}
          onChange={imageChangeHandler}
          required
        />
        <button className="border-0 py-2 px-6 bg-[#a4abb9] rounded-xs cursor-pointer font-inherit hover:bg-[#b3b9c6] focus:bg-[#b3b9c6] text-black" type='button' onClick={pickClickHandler}>
          Select an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker