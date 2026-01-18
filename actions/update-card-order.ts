"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface UpdateCardOrderProps {
  items: {
    id: string;
    title: string;
    order: number;
    listId: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
  }[];
  boardId: string;
}

export async function updateCardOrder({ items, boardId }: UpdateCardOrderProps) {
  try {
    const transaction = items.map((card) =>
      db.card.update({
        where: {
          id: card.id,
        },
        data: {
          order: card.order,
          listId: card.listId, // Kart başka listeye geçtiyse id'si de değişir
        },
      })
    );

    await db.$transaction(transaction);
    revalidatePath(`/board/${boardId}`);
    
  } catch (error) {
    console.error("Kart sırası güncellenemedi", error);
  }
}