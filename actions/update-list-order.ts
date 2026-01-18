"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface UpdateListOrderProps {
  items: {
    id: string;
    order: number;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    boardId: string;
  }[];
  boardId: string;
}

export async function updateListOrder({ items, boardId }: UpdateListOrderProps) {
  try {
    // Transaction: Ya hepsi güncellenir ya hiçbiri (Güvenlik için)
    const transaction = items.map((list) =>
      db.list.update({
        where: {
          id: list.id,
        },
        data: {
          order: list.order,
        },
      })
    );

    await db.$transaction(transaction);
    revalidatePath(`/board/${boardId}`);
    
  } catch (error) {
    console.error("Liste sırası güncellenemedi", error);
  }
}