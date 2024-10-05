"use client";

import React from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>エラーが発生しました</h1>
      <p className='text-lg mt-4'>{error.message}</p>
      <button
        onClick={reset}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        もう一度試す
      </button>
      <Link href='/' className='text-blue-500 mt-4'>
        ホームに戻る
      </Link>
    </div>
  );
};

export default ErrorPage;
