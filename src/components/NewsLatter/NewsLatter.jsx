import React from 'react';

function NewsLatter() {
  return (
    <div className="w-full text-center py-10 px-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        SUBSCRIBE TO CLOTH MANIA
      </h3>
      <p className="text-gray-600 mb-6">Get 10% off now</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <input
          type="email"
          placeholder="E-MAIL*"
          className="border px-4 py-3 w-full sm:w-[300px] md:w-[350px] outline-none"
        />
        <button className="bg-black text-white px-6 py-3 w-full sm:w-auto">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default NewsLatter;
