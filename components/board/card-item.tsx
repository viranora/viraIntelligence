"use client";

import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@prisma/client";

interface CardItemProps {
  data: Card;
  index: number;
}

export const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // TASARIM BURADA: bg-vintage-100 (Krem Rengi), Kahve yazılar
          className="truncate py-3 px-3 text-sm bg-vintage-100 text-vintage-900 rounded-lg shadow-sm mb-2 border border-vintage-800/5 hover:border-vintage-500 hover:shadow-md transition-all font-medium font-serif"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};