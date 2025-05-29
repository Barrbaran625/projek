import React from "react";
import Image from "next/image";
import Head from "next/head";

const Menu = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="bg-amber-50">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200 transform hover:scale-105 transition duration-500">
                <Image
                  src={"/.jpg"}
                  alt="Pisang Goreng Naira Snack"
                  fill
                  className="object-cover hover:opacity-90 transition duration-300"
                  priority
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="border-b-2 border-amber-200 pb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2"
                    style={{fontFamily: "'DM Serif Display', serif"}}>
                  KERIPIK PISANG 
                </h1>
                <h2 className="text-3xl text-amber-700 tracking-wide"
                    style={{fontFamily: "'Playfair Display', serif"}}>
                  Naira Snacks
                </h2>
              </div>
              
              <h3 className="text-xl text-amber-600 italic mt-4"
                  style={{fontFamily: "'Playfair Display', serif"}}>
                Camilan nikmat penuh manfaat dari buah pilihan nusantara
              </h3>
              
              <div className="space-y-4 text-amber-900" style={{fontFamily: "'Montserrat', sans-serif"}}>
                <p className="text-lg leading-relaxed">
                 Rasakan kelezatan camilan khas Indonesia yang sudah melegenda—Keripik Pisang Naira Snacks! Dibuat dari pisang berkualitas yang dipilih secara selektif, diiris tipis, dan digoreng hingga renyah keemasan, menghasilkan perpaduan rasa gurih dan manis yang pas di lidah.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Cocok dinikmati kapan saja: saat santai bersama keluarga, menemani waktu bekerja, hingga jadi oleh-oleh penuh makna. Tak hanya lezat, keripik pisang ini juga menyimpan segudang manfaat dari kandungan serat, vitamin C, dan kalium yang baik untuk pencernaan, jantung, dan tekanan darah.
                </p>
                
                <div className="font-semibold text-lg bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400 italic">
                  <span className="text-amber-600 block mb-1">✦ Keunggulan Produk ✦</span>
                  Tanpa bahan pengawet, dibuat dengan teknik tradisional dan kehigienisan modern—menjadikan setiap gigitan bukan sekadar camilan, tapi juga bagian dari warisan rasa yang sehat dan alami.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;