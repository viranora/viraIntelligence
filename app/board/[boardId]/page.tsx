import { db } from "@/lib/db";
import { createList } from "@/actions/create-list";
import { ListContainer } from "@/components/board/list-container";
import { redirect } from "next/navigation";
import Link from "next/link";

interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

export default async function BoardIdPage({
  params,
}: BoardIdPageProps) {
  const { boardId } = await params;

  const board = await db.board.findUnique({
    where: { id: boardId },
    include: {
      lists: {
        orderBy: { order: "asc" },
        include: {
          cards: { orderBy: { order: "asc" } },
        },
      },
    },
  });

  if (!board) redirect("/");

  return (
    // TASARIM BURADA: bg-vintage-900 (Koyu Kahve Arka Plan)
    <div className="p-4 h-full overflow-x-auto bg-vintage-900 min-h-screen text-vintage-100">
      
      {/* Geri Dön Butonu */}
      <Link 
        href="/" 
        className="inline-block mb-4 px-4 py-2 bg-vintage-500 text-vintage-900 font-serif font-bold rounded hover:bg-vintage-400 transition"
      >
        ← Masalar
      </Link>

      {/* Başlık */}
      <div className="font-serif font-bold text-3xl mb-6 text-vintage-100 p-2 tracking-wide border-b border-vintage-500/30 pb-4">
        {board.title}
      </div>

      <div className="flex gap-x-4 h-full items-start">
        <ListContainer boardId={board.id} data={board.lists} />

        {/* Yeni Liste Ekleme Formu */}
        <div className="w-[272px] shrink-0">
          <form
            action={createList}
            className="bg-vintage-200/10 hover:bg-vintage-200/20 transition p-3 rounded-xl flex flex-col gap-2 border-2 border-dashed border-vintage-500/30"
          >
            <input hidden name="boardId" value={board.id} readOnly />
            <input
              name="title"
              className="w-full border-none rounded-md px-3 py-2 text-sm text-vintage-900 bg-vintage-100 placeholder:text-vintage-800/50 focus:outline-none focus:ring-2 focus:ring-vintage-500 font-serif"
              placeholder="Yeni liste başlığı..."
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full bg-vintage-500 text-vintage-900 font-bold py-2 rounded-md hover:bg-vintage-400 transition text-sm shadow-sm font-serif"
            >
              + Liste Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}