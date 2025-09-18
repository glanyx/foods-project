'use client'

import FormSubmitButton from "@/components/utils/FormSubmitButton";
import ImagePicker from "@/components/utils/ImagePicker";
import { shareSubmitHandler } from "@/lib/actions";
import { useActionState } from "react";

export default function ShareMealPage() {

  const [state, formAction] = useActionState(shareSubmitHandler, { message: null })

  return (
    <>
      <header className='gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75%] text-[#ddd6cb] text-2xl'>
        <h1 className="font-montserrat">
          Share your <span className='bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className='w-[90%] max-w-[75rem] my-12 mx-auto text-white'>
        <form className='max-w-[50rem]' action={formAction}>
          <div className='flex gap-4'>
            <p className="w-full mb-4">
              <label className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold" htmlFor="name">Your name</label>
              <input className="block w-full py-2 px-4 rounded-sm border-1 border-solid border-[#454952] bg-[#1c2027] font-xl font-montserrat text-[#ddd6cb] input:bg-[#1f252d] input:outline-[#f99f2a] focus:bg-[#1f252d] focus:outline-[#f99f2a]" type="text" id="name" name="name" required />
            </p>
            <p className="w-full mb-4">
              <label className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold" htmlFor="email">Your email</label>
              <input className="block w-full py-2 px-4 rounded-sm border-1 border-solid border-[#454952] bg-[#1c2027] font-xl font-montserrat text-[#ddd6cb] input:bg-[#1f252d] input:outline-[#f99f2a] focus:bg-[#1f252d] focus:outline-[#f99f2a]" type="email" id="email" name="email" required />
            </p>
          </div>
          <p className="w-full mb-4">
            <label className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold" htmlFor="title">Title</label>
            <input className="block w-full py-2 px-4 rounded-sm border-1 border-solid border-[#454952] bg-[#1c2027] font-xl font-montserrat text-[#ddd6cb] input:bg-[#1f252d] input:outline-[#f99f2a] focus:bg-[#1f252d] focus:outline-[#f99f2a]" type="text" id="title" name="title" required />
          </p>
          <p className="w-full mb-4">
            <label className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold" htmlFor="summary">Short Summary</label>
            <input className="block w-full py-2 px-4 rounded-sm border-1 border-solid border-[#454952] bg-[#1c2027] font-xl font-montserrat text-[#ddd6cb] input:bg-[#1f252d] input:outline-[#f99f2a] focus:bg-[#1f252d] focus:outline-[#f99f2a]" type="text" id="summary" name="summary" required />
          </p>
          <p className="w-full mb-4">
            <label className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold" htmlFor="instructions">Instructions</label>
            <textarea
              className="block w-full py-2 px-4 rounded-sm border-1 border-solid border-[#454952] bg-[#1c2027] font-xl font-montserrat text-[#ddd6cb] input:bg-[#1f252d] input:outline-[#f99f2a] focus:bg-[#1f252d] focus:outline-[#f99f2a]"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker name='image' label="Your image" />
          {state.message && <p>{state.message}</p>}
          <p className='text-right'>
            <FormSubmitButton text="Share Meal" />
          </p>
        </form>
      </main>
    </>
  );
}