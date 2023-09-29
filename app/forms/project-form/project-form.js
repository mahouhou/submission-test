"use client"

import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter()

    const handleSubmit = (e) => {
      e.preventDefault()
  
      //access form element from the event object
      //construct FormData object with form element
      //store form data in formData object
      const form = e.target
      const formData = new FormData(form)
  
      //reformat data to improve readability
      const formObject = {}
      formData.forEach((value, key) => {
        formObject[key] = value
      })
  
      //log to console (or send to server)
      console.log(formObject)
  
      //redirect to thank you page
      router.push('/thankyou')
    }
  
    return (
      <>
      <h1>Project Submission Form</h1>
      <p>Fill out the form below to submit your project. Fields marked with an asterisk * are required.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name: *</label>
        <input type="text" id="fname" name="fname" required aria-required="true"/>
  
        <label htmlFor="lname">Last name: *</label>
        <input type="text" id="lname" name="lname" required aria-required="true"/>
  
        <label htmlFor="email">Email: *</label>
        <input type="email" id="email" name="email" required aria-required="true"/>
  
        <label htmlFor="project">Link your project: *</label>
        <input type="url" id="project" name="project" placeholder="https://" required aria-required="true"/>
  
        <label htmlFor="description">Describe your project: *</label>
        <textarea id="description" name="description" required aria-required="true"/>
  
        <label htmlFor="permission">Can we share your project on social media?</label>
        <input type="checkbox" id="permission" name="permission" />
  
        <button type="submit" value="Submit" id="submit">Submit</button>
      </form>
      </>
    )
  }