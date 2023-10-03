"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import NameInput from "../components/NameInput";
import EmailInput from "../components/EmailInput";
import URLInput from "../components/URLInput";
import Textarea from "../components/Textarea";
import Checkbox from "../components/Checkbox";

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    //access form element from the event object
    //construct FormData object with form element
    //store form data in formData object
    const form = e.target;
    const formData = new FormData(form);

    //reformat data to improve readability
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    //log to console (or send to server)
    console.log(formObject);

    //redirect to thank you page
    // router.push("/thankyou");
  };

  return (
    <>
      <h1>Project Submission Form</h1>
      <p>
        Fill out the form below to submit your project. Fields marked with an
        asterisk * are required.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NameInput errors={errors} register={register} />
        <EmailInput errors={errors} register={register} />
        <URLInput
          errors={errors}
          register={register}
          label="Link your project"
        />
        <Textarea
          errors={errors}
          register={register}
          label="Describe your project"
        />
        <Checkbox register={register} label="Can we share your project on social media?" />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
}
