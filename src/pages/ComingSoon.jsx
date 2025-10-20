import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ComingSoon = ({ pageName = "Page" }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNotify = () => {
    toast.success(
      `🎉 You'll be notified when the ${pageName.toLowerCase()} is ready!`
    );
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white animate-bounce drop-shadow-lg">
        🚀 {pageName} is Coming Soon
      </h1>

      <h2 className="font-bold text-white text-3xl my-5">
        {date.toLocaleTimeString()}
      </h2>

      <p className="mt-5 text-lg text-white/90 animate-pulse">
        Stay tuned! We're crafting something amazing for you ✨
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn btn-accent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-none text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-6 text-white text-sm animate-pulse">
        Developed by <span className="font-bold">Rahman Shaon 💎</span>
      </div>
    </div>
  );
};

export default ComingSoon;
