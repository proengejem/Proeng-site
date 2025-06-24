"use client";

import Image from "next/image";
import React from "react";
import Carossel from "~/components/carossel";
import StyledBarCongresso from "~/components/homePage/divisorCongresso";

export default function Sobrenoscompo2() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Green header */}
      <div className="h-12 w-full bg-[#0B4D2C]" />

      {/* Main content */}
      <div className="relative flex flex-grow flex-col md:flex-row mb-0">
        {/* Content container */}
        <div className="relative flex w-full flex-col md:flex-row items-center gap-12 px-6 py-12 md:p-16">
          {/* Text content */}
          <div className="flex-1 text-black">
            <p className="text-xl">
              A Proeng Geotecnia é uma empresa de engenharia especializada na
              execução de obras de contenções, fundações, drenagem e tratamento
              de solos. Ingressou no mercado em maio de 2006 e já realizou mais
              de 1.500 obras até o presente momento.
            </p>
            <p className="text-xl mt-2">
              A empresa se preocupa em manter-se atualizada, desenvolvendo novas
              metodologias e aprimorando as técnicas atualmente aplicadas nos
              serviços prestados, além de apoiar pesquisas incentivando
              trabalhos acadêmicos e científicos em nível de graduação,
              dissertações de mestrado e teses de doutorado, permitindo sua
              participação em trabalhos importantes.
            </p>
            <a
              href="/contato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-lg font-semibold hover:underline"
              style={{ color: "#027A48" }}
            >
              Contato →
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-md w-full">
            <Image
              src="/Estaca Helice.jpeg"
              alt="Engineering equipment"
              width={900}
              height={700}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <StyledBarCongresso />

      <div className="w-full p-4">
        <Carossel />
      </div>
    </div>
  );
}
