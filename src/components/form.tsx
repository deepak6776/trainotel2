"use client"
import React, {useState} from 'react'

import { validationSchema } from '@/utils/validation'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { toast } from "react-toastify";
import Link from 'next/link'

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: FormValues, {
    setSubmitting,
    resetForm
  }: {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
  }
  ) =>{
    try {
      //Send email nodemailer
      const res = await fetch("api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();

      console.log("Email sent successfully!");
      const { message, error } = (await res.json()) as {
        message: string;
        error: string;
      };
      if (res.ok) {
        toast.success(message);
        
      }

      if (!res.ok && error) {
        toast.error(error);
      }
      
    } catch (error) {
      toast.error("error");
    } finally {
      setSubmitting(false);
    }
  }

  // const handleSubmit = (values: FormValues) =>{
  //   console.log(values);
  // };

  return (
    <Formik 
      initialValues={{ name:"", email:"", message:""}} 
      validationSchema={toFormikValidationSchema(validationSchema)} 
      onSubmit={handleSubmit}
    >
      <Form>
    <div className="bg-white p-8 border-2 rounded-md" >
        <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <Field type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <ErrorMessage 
            name="name"
            component="div"
            className="text-red-500"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <Field type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <ErrorMessage 
            name="email"
            component="div"
            className="text-red-500"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <Field id="message" name="message" as="textarea" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
            <ErrorMessage 
            name="message"
            component="div"
            className="text-red-500"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
        </div>
        <div className='flex items-center justify-center w-full'>
          <p>By submitting  a message you agree with our <Link href='/privacy' className='underline'>Privacy Policy</Link></p> 
        </div>
      </div>
        
    </div>
    </Form>
    </Formik>
  )
}
