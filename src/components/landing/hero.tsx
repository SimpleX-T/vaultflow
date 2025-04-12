import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-[url('/hero_bg.jpeg')] bg-cover bg-no-repeat">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-[#7214FF50] rounded-full blur-[390px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-96 h-96 bg-[#32CAFD50] rounded-full blur-[390px]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 w-full max-w-4xl mx-auto px-3 md:mt-24 p-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-medium mb-6 text-transparent bg-gradient-to-b from-[#ECECEC] to-[#ECECEC]/10 bg-clip-text"
          >
            Modern analytics <br className="hidden md:block" /> for the modern
            world
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#ECECEC]/65 max-w-2xl mx-auto mb-8 font-normal"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/blog"
              className="text-[#0B081C] hover:bg-[#ECECEC80] duration-300 transition-colors border border-[#ECECEC] bg-[#ECECEC] rounded-full px-5 py-2 text-center block"
            >
              Download the App
            </Link>
            <Link
              to="/"
              className="border border-[#ECECEC] text-white px-4 py-2 rounded-full block font-medium transition-colors text-center"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl w-full mx-auto hidden mt-24 md:block drop-shadow-2xl drop-shadow-[#BB9BFF26]"
        >
          <img src="/images/hero_dashboard.png" alt="Dashboard" />
        </motion.div>
      </div>
    </section>
  );
}
