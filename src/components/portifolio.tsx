"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import HeadBar from "~/components/homePage/headerPortifolio";
import BlurFade from "~/components/ui/blur-fade";
import { useRef } from "react";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Referência para o BlurFade
  const blurFadeRef = useRef(null);
  const isInView = useInView(blurFadeRef, { once: false, margin: "0px 0px -50px 0px" });

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[250px] w-full overflow-hidden"
      >
        <HeadBar />
      </motion.div>

      <motion.div
        className="mx-auto max-w-7xl px-4 pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-md-7xl">
          <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
            {/* Right Column - Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div variants={itemVariants} ref={blurFadeRef}>
                {isInView ? (
                  <BlurFade delay={0.14}>
                    <h1 className="mb-4 text-3xl font-bold">Solo Grampeado</h1>
                  </BlurFade>
                ) : (
                  <h1 className="mb-4 text-3xl font-bold opacity-0">Solo Grampeado</h1>
                )}
                <p className="text-gray-600 text-justify">
                  O solo grampeado é uma técnica de reforço do solo que consiste na inserção de barras de aço em taludes, geralmente acompanhada de revestimento e drenagem. É amplamente usada no Brasil por ser prática, rápida, versátil e econômica em relação a outras soluções de estabilização.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid gap-6 md:grid-cols-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg bg-gray-50 p-6 text-left transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 font-bold text-center">Qualidade Garantida</h3>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg bg-gray-50 p-6 text-left transition-shadow hover:shadow-lg"
                >
                  <h3 className="mb-2 font-bold text-center">Soluções Personalizadas</h3>
                </motion.button>
              </motion.div>

              <motion.div className="flex space-x-4" variants={itemVariants}>
                <Link href={`/portifolio/${encodeURIComponent("solo-grampeado")}`}>
                  <button className="px-6 py-3 bg-[#027A48] text-white rounded-lg font-semibold hover:bg-green-500 transition">
                    Fotos
                  </button>
                </Link>
                <Link href="https://www.youtube.com/playlist?list=PLnLPCcEY60IAok3QEttHV3Mkxj87koWqk">
                  <button
                    className="rounded border px-6 py-3 bg-white text-green-500 rounded-lg font-semibold hover:bg-gray-200 transition"
                    style={{ color: "#027A48" }}
                  >
                    Vídeos
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Left Column - Image Section */}
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Solo Grampeado.jpeg"
                  alt="Solo Grampeado Project Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
