"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createCard(formData: FormData) {
  const title = formData.get("title") as string;
  const listId = formData.get("listId") as string;
  const boardId = formData.get("boardId") as string;

  if (!title || !listId || !boardId) {
    return;
  }

  // 1. Bu listedeki en son kartı bul (Sırasını öğrenmek için)
  const lastCard = await db.card.findFirst({
    where: { listId: listId },
    orderBy: { order: "desc" }, // Tersten sırala
    select: { order: true },
  });

  // 2. Yeni sıra numarasını belirle
  const newOrder = lastCard ? lastCard.order + 1 : 1;

  // 3. Kartı oluştur
  await db.card.create({
    data: {
      title,
      listId,
      order: newOrder,
    },
  });

  // 4. Sayfayı yenile
  revalidatePath(`/board/${boardId}`);
}