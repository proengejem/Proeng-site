"use client";

import React from "react";
import BlurFade from "~/components/ui/blur-fade";


export default function Sobrenoscompo() {
    return (
        <div
          className="relative flex flex-1 items-center justify-end text-right"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url('/FundoSobreNós.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="ml-auto max-w-2xl">
              {/* <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"> */}
              <BlurFade delay={0.4}><h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">

                Desde{" "}
                <span className="text-5xl text-green-500 md:text-6xl">
                  2006
                </span>
              </h1></BlurFade>
              {/* <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"> */}
              <BlurFade delay={0.4}><h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">

                Construindo Qualidade e confiança
                <br />
                No mercado da engenharia
              </h1></BlurFade>
            </div>
          </div>
        </div>
  );
}