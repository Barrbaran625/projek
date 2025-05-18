import React from "react";
import Image from "next/image";

const AboutNairaSnack = () => {
  return (
    <div className="bg-amber-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Gambar Produk */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200">
              <Image
                src="/pisang-goreng-naira.jpg"
                alt="Pisang Goreng Naira Snack"
                fill
                className="object-cover"
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
                <span className="font-semibold">Naira Snack</span> adalah usaha kuliner yang berawal dari kecintaan terhadap camilan tradisional Indonesia, khususnya pisang goreng. Kami memulai bisnis ini pada tahun 2020 dengan misi menghadirkan pisang goreng berkualitas dengan cita rasa istimewa.
              </p>
              
              <p className="text-lg">
                Berdiri di Sentul, Bogor, Naira Snack lahir dari ide sederhana untuk menyajikan pisang goreng yang berbeda - lebih renyah, lebih gurih, dan menggunakan bahan-bahan pilihan. Nama "Naira" sendiri diambil dari bahasa Arab yang berarti "yang bersinar", mencerminkan harapan kami untuk menjadi yang terbaik di bidangnya.
              </p>
              
              <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400">
                <p className="font-semibold text-amber-800">
                  ✨ Filosofi Kami: "Dari hati untuk lidah Indonesia". Setiap gigitan pisang goreng Naira Snack dibuat dengan sepenuh hati menggunakan resep turun-temurun yang telah kami sempurnakan.
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
              "Menjadi brand pisang goreng premium yang dikenal secara nasional dengan cita rasa autentik dan kualitas terbaik."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Misi</h3>
            <ul className="list-disc pl-5 text-amber-900 space-y-2">
              <li>Mempertahankan cita rasa tradisional dengan sentuhan inovasi</li>
              <li>Menggunakan bahan baku terbaik dari petani lokal</li>
              <li>Memberikan pengalaman kuliner yang memuaskan</li>
              <li>Menjaga kebersihan dan kehigienisan produk</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNairaSnack;