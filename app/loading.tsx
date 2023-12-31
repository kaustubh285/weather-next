import { SunIcon } from "@heroicons/react/solid";
import React from "react";

function loading() {
  return (
    <div className='b-gradient-to-br from- [#394F68] to- [#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500'>
      <SunIcon
        className='n-24 w-24 animate-boúnce text-yellow-500'
        color='yellow'
      />
      <h1 className='text-6×l font-bold text-center mb-10 animate-pulse'>
        Loading City Weather Information{" "}
      </h1>
      <h2 className='text-xl font-bold text-center mb-10 animate-pulse'>
        Hold on, we are crunching the numbers & generating an AI summary of the
        Weather!
      </h2>{" "}
    </div>
  );
}

export default loading;
