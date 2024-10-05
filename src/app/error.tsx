"use client";

import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>509090</h1>
      <p className='text-lg'>Internal Server Error</p>
      <Link href='/' className='text-blue-500'>
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
