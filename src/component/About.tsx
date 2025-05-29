import React from "react";
import Image from "next/image";

const AboutNairaSnack = () => {
  return (
    <div className="bg-amber-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Gambar Produk */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-2xl  shadow-xl border-4 border-amber-200">
              <Image
                src="/rumah.jpeg"
             alt="Pisang Goreng Naira Snack"
                  fill
                  className="object-cover hover:opacity-90 transition duration-300"
                  priority
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900">
              Tentang Naira Snack
            </h1>
            
            <div className="space-y-4 text-amber-900 text-justify">
              <p className="text-lg">
                <span className="font-semibold">Naira Snack</span> merupakan usaha kuliner rumahan yang berdiri sejak tahun 2004 di Sentul. Kami menghadirkan camilan tradisional khas Indonesia dengan menjadikan keripik pisang sebagai produk unggulan.


              </p>
              
              <p className="text-lg">
                Mengusung standar mutu dan kerenyahan sebagai prioritas utama, setiap keripik diproses secara higienis tanpa bahan pengawet, menghasilkan rasa yang gurih, renyah, dan nikmat.

              </p>
              
              <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400">
                <p className="font-semibold text-amber-800">
            ✨ Filosofi : &ldquo;Dari camilan sederhana, lahir rasa yang luar biasa.&rdquo;
                </p>
              </div>
              
              <p className="text-lg">
                Kini Naira Snack telah berkembang menjadi salah satu usaha kuliner favorit di wilayah Sentul dan sekitarnya. Kami tetap mempertahankan kualitas original dengan proses pembuatan yang higienis dan tanpa bahan pengawet.
              </p>
            </div>
          </div>
        </div>
        
        {/* Visi Misi */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Visi</h3>
            <p className="text-amber-900">
              &ldquo;Menjadi pelopor camilan tradisional yaitu keripik pisang yang berkualitas tinggi, higienis, dan digemari secara luas di pasar lokal maupun nasional..&rdquo;
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Misi</h3>
            <ul className="list-disc pl-5 text-amber-900 space-y-2">
              <li>Menyajikan keripik pisang yang renyah, gurih, dan tanpa bahan pengawet</li>
              <li>Menjaga kualitas produksi yang higienis dan konsisten</li>
              <li>Mendukung produk lokal dan pemberdayaan masyarakat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNairaSnack;