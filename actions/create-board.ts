"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createBoard(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title) {
    return;
  }

  // Veritabanına kayıt at
  await db.board.create({
    data: {
      title: title,
    },
  });

  // Sayfayı yenile (yeni veriyi göstermek için)
  revalidatePath("/");
}