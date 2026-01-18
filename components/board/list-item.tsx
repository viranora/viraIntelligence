"use client";

import { ElementRef, useRef } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { createCard } from "@/actions/create-card";
import { CardItem } from "./card-item";
import { List, Card } from "@prisma/client";

interface ListWithCards extends List {
  cards: Card[];
}

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export const ListItem = ({ data, index }: ListItemProps) => {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            // TASARIM BURADA: bg-vintage-200 (Parşömen Rengi)
            className="w-full rounded-xl bg-vintage-200 shadow-xl pb-2 border-2 border-vintage-800/10"
          >
            {/* Liste Başlığı */}
            <div className="pt-3 px-3 pb-1 text-sm font-bold flex justify-between items-start gap-x-2">
              <div className="w-full text-md font-serif text-vintage-900 tracking-tight pl-1">
                {data.title}
              </div>
            </div>

            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="mx-1 px-1 py-0.5 flex flex-col gap-y-2"
                >
                  {data.cards.map((card, index) => (
                    <CardItem index={index} key={card.id} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>

            {/* Kart Ekleme */}
            <div className="px-2 mt-2">
                <form
                  ref={formRef}
                  action={async (formData) => {
                    await createCard(formData);
                    formRef.current?.reset();
                  }}
                  className="m-1 py-0.5 px-1 space-y-4"
                >
                  <input hidden name="listId" value={data.id} readOnly />
                  <input hidden name="boardId" value={data.boardId} readOnly />
                  
                  <div className="flex items-center gap-x-2">
                    <input
                      ref={inputRef}
                      name="title"
                      placeholder="Bir not düş..."
                      className="w-full px-2 py-1.5 h-9 text-sm border-b-2 border-vintage-500/30 bg-transparent text-vintage-900 placeholder:text-vintage-800/40 focus:border-vintage-500 focus:outline-none font-serif"
                      required
                    />
                    <button type="submit" className="bg-vintage-800 text-vintage-100 p-1 rounded hover:bg-vintage-900 text-lg h-8 w-8 flex items-center justify-center font-bold pb-1">
                        +
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};