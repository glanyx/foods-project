'use client'

import { useFormStatus } from "react-dom"

interface ISubmitButtonProps {
  text: string
}

const FormSubmitButton = ({
  text,
}: ISubmitButtonProps) => {

  const { pending } = useFormStatus()

  return(
    <button
      className="
        border-[0,none] py-3 px-8 bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-xs cursor-pointer font-inherit font-xl shadow-[0_2px_5px_rgba(0_0_0_/_0.3)]
        disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed
        hover:bg-linear-to-r hover:from-[#fd4715] hover:to-[#f9b241]
        focus:bg-linear-to-r focus:from-[#fd4715] focus:to-[#f9b241]
        hover:disabled:bg-[#ccc] hover:disabled:text-[#979797] hover:disabled:cursor-not-allowed
        focus:disabled:bg-[#ccc] focus:disabled:text-[#979797] focus:disabled:cursor-not-allowed
      "
      disabled={pending}
    >
      {pending ? 'Submitting..' : text}
    </button>
  )

}

export default FormSubmitButton