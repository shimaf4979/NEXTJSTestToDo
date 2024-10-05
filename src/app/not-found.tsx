import React from "react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>4040</h1>
      <p className='text-lg'>Page not found</p>
      <Link href='/' className='text-blue-500'>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
