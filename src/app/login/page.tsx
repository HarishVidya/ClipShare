'use client'
import Image from 'next/image'
import Navbar from '@/components/navbar'

import React, { useState } from "react";
import LogIn from '@/components/Auth/login';
import { useRouter } from 'next/navigation';


export default function Home() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const router = useRouter()

    // const handleForm = async (event) => {
    //     event.preventDefault()

    //     const { result, error } = await LogIn(email, password);

    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(result)
    //     return router.push("/")
    // }
    return (
      //   
      <div>
        <LogIn />
      </div>
    )
}
