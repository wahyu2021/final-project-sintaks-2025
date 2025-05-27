import React from "react";
import { Link } from "react-router-dom";
import { motion as framerMotion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const MotionDiv = framerMotion.div;
const MotionH1 = framerMotion.h1;
const MotionP = framerMotion.p;

function NotFoundPage() {
  return (
    <MotionDiv
      className="min-h-screen flex flex-col items-center justify-center -mt-16 px-4 text-cente"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        className="-mb-16"
      >
        <Player
          autoplay
          loop
          src="/animations/404.json"
          style={{ height: "350px", width: "350px" }}
        />
      </MotionDiv>

      <MotionH1
        className="text-5xl font-extrabold text-amber-600 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Page Not Found
      </MotionH1>

      <MotionP
        className="text-lg text-amber-800/80 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="btn bg-amber-600 hover:bg-amber-700 border-none text-white font-semibold px-6"
        >
          Back to Home
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
}

export default NotFoundPage;
