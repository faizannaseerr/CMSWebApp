import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link to="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="h-[20rem] w-full bg-neutral-900 text-neutral-500 pt-32 text-center"
      >
        <div className="text-neutral-200 text-4xl font-bold text-center justify-center">
          Made By Faizan.
        </div>
      </motion.div>
    </Link>
  );
};

export default Footer;
