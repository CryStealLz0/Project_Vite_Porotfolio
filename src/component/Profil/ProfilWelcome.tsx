import '../../style/Navbar/profilWelcome.scss';

function ProfilWelcome() {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center ">
        <div className="w-full h-5/6 pl-24">
          <div className="container-pw">
            <div className="container-profil-left h-5/6 w-5/6 absolute left-0 top-0 bg-slate-100 z-10 flex rounded-xl bg-p-l">
              <div className="deskripsi-p-l w-1/2 pl-14 pt-12">
                <h1 className="font-bold text-2xl text-sky-400 leading-7 mb-4">
                  I believe that every line of code is a step towards my dream
                  of becoming a skilled front-end developer
                </h1>
                <p className="text-sm text-gray-200 mb-10">
                  Hallo saya Dimas, seorang mahasiswa jurusan Teknik Informatika
                  di Universitas Pamulang. saya tertarik oleh dunia front-end
                  development, di mana saya belajar dan mengasah keterampilan
                  untuk menciptakan tampilan web yang menarik. saya berkomitmen
                  untuk tumbuh menjadi seorang profesional developer yang
                  sukses.
                </p>
                <div className="flex flex-col">
                  <button className="bg-green-500 mb-4 font-bold text-slate-700 rounded-xl">
                    Lihat apa yg saya pelajari
                  </button>
                  <button className="bg-green-500 mb-4 font-bold text-slate-700 rounded-xl">
                    Lihat apa yg saya kerjakan
                  </button>
                  <button className="bg-green-500 mb-4 font-bold text-slate-700 rounded-xl">
                    Lihat Kontak saya
                  </button>
                </div>
              </div>
              <div className="image-p-l w-1/2 flex justify-center items-center">
                <img
                  src="./src/assets/img/indra.jpg"
                  alt="Dimas Indra Jaya"
                  className=" h-72 rounded-xl"
                />
              </div>
            </div>
            <div className="container-profil-right h-5/6 w-5/6 absolute right-0 bottom-0 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilWelcome;
