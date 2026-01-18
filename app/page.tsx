import { db } from "@/lib/db";
import { createBoard } from "@/actions/create-board";
import Link from "next/link";

export default async function Home() {
  const boards = await db.board.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    // DEĞİŞİKLİK 1: pt-96 ile içeriği ekranın çok aşağısına ittik.
    <div className="flex flex-col items-center justify-start min-h-screen pt-60 md:pt-96 gap-y-10 px-4 bg-vintage-900 text-vintage-100">
      
      {/* 1. Başlık ve Slogan Alanı */}
      <div className="text-center flex flex-col items-center">
        
        {/* DEĞİŞİKLİK 2: Başlık İNANILMAZ BÜYÜK (text-[13rem]) */}
        <h1 className="text-[10rem] md:text-[18rem] font-serif font-bold text-vintage-100 tracking-tighter drop-shadow-2xl leading-[0.8]">
          Vira Planner
        </h1>
        
        {/* DEĞİŞİKLİK 3: Slogan artık çok daha ufak (text-xl) ve zarif */}
        <p className="text-vintage-400 font-serif italic text-lg md:text-xl tracking-widest opacity-60 mt-6">
          "Dijital fikirler için, analog bir dokunuş."
        </p>
      </div>

      {/* 2. Pano Oluşturma Formu */}
      <div className="w-full max-w-md bg-vintage-800/40 p-6 rounded-2xl border-vintage-500/10 shadow-2xl backdrop-blur-sm mt-12">
        <form action={createBoard} className="flex flex-col gap-4">
          <label className="text-vintage-200 font-serif text-xs ml-1 tracking-[0.2em] opacity-60 uppercase">
            Yeni Çalışma Alanı
          </label>
          <div className="flex gap-2">
            <input
              name="title"
              type="text"
              placeholder="Örn: Roman Projesi..."
              className="flex-1 bg-vintage-100 border-2 border-transparent focus:border-vintage-500 text-vintage-900 p-3 rounded-lg placeholder:text-vintage-900/40 focus:outline-none font-serif transition-all text-base"
              required
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-vintage-500 text-vintage-900 font-bold px-6 py-3 rounded-lg hover:bg-vintage-400 hover:scale-105 active:scale-95 transition-all shadow-lg font-serif"
            >
              Oluştur
            </button>
          </div>
        </form>
      </div>

      {/* 3. Mevcut Panolar Listesi */}
      <div className="w-full max-w-5xl pb-20 mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-vintage-500/20 flex-1"></div>
          <h2 className="text-vintage-500/40 font-serif text-xs tracking-[0.3em] uppercase">Masalar</h2>
          <div className="h-[1px] bg-vintage-500/20 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boards.length === 0 ? (
            <div className="col-span-full text-center py-12 border border-dashed border-vintage-800 rounded-xl bg-vintage-800/10">
              <p className="text-vintage-500/30 italic font-serif text-lg">
                Masalar boş...
              </p>
            </div>
          ) : (
            boards.map((board) => (
              <Link
                key={board.id}
                href={`/board/${board.id}`}
                className="group relative h-40 bg-vintage-200 rounded-lg p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden border-2 border-transparent hover:border-vintage-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-vintage-800/10 group-hover:bg-vintage-500 transition-colors"></div>
                
                <div>
                  <h3 className="font-serif font-bold text-xl text-vintage-900 mb-1 group-hover:text-black transition-colors truncate">
                    {board.title}
                  </h3>
                  <span className="text-[10px] text-vintage-900/40 uppercase tracking-wider font-bold block">
                    {new Date(board.createdAt).toLocaleDateString("tr-TR")}
                  </span>
                </div>

                <div className="flex justify-end items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl text-vintage-900">→</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}