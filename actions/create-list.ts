"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createList(formData: FormData) {
  const title = formData.get("title") as string;
  const boardId = formData.get("boardId") as string;

  if (!title || !boardId) {
    return;
  }

  // 1. Bu panodaki en son listeyi buluyoruz (Sırasını öğrenmek için)
  const lastList = await db.list.findFirst({
    where: { boardId: boardId },
    orderBy: { order: "desc" }, // Sıraya göre tersten diz
    select: { order: true },
  });

  // 2. Yeni sırayı belirliyoruz. Liste varsa sonuncunun 1 fazlası, yoksa 1.
  const newOrder = lastList ? lastList.order + 1 : 1;

  // 3. Veritabanına kaydediyoruz
  await db.list.create({
    data: {
      title,
      boardId,
      order: newOrder,
    },
  });

  // 4. Sayfayı yeniliyoruz ki yeni listeyi görelim
  revalidatePath(`/board/${boardId}`);
}