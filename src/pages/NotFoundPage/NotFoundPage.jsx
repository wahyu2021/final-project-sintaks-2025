import React from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { motion as framerMotion } from "framer-motion";

// Alias untuk tag motion
const MotionDiv = framerMotion.div;
const MotionH1 = framerMotion.h1;
const MotionP = framerMotion.p;

function NotFoundPage() {
  return (
    <MotionDiv
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        <MdErrorOutline className="text-8xl text-amber-600 mb-4" />
      </MotionDiv>

      <MotionH1
        className="text-5xl font-bold text-gray-50 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        404 - Page Not Found
      </MotionH1>

      <MotionP
        className="text-lg text-gray-400 mb-6"
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
          className="btn bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded"
        >
          Back to Home
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
}

export default NotFoundPage;
