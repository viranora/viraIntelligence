"use client";

import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { ListItem } from "./list-item";
import { List, Card } from "@prisma/client";

import { updateListOrder } from "@/actions/update-list-order";
import { updateCardOrder } from "@/actions/update-card-order";

interface ListWithCards extends List {
  cards: Card[];
}

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);
  
  // EKLENEN KISIM 1: Yüklenme Kontrolü
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Sayfa tarayıcıda tamamen yüklendiğinde burası true olur
    setIsMounted(true);
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Liste Taşıma
    if (type === "list") {
      const items = Array.from(orderedData);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      const updatedItems = items.map((item, index) => ({
        ...item,
        order: index,
      }));

      setOrderedData(updatedItems);
      updateListOrder({ items: updatedItems, boardId });
    }

    // Kart Taşıma
    if (type === "card") {
      let newOrderedData = [...orderedData];

      const sourceList = newOrderedData.find(list => list.id === source.droppableId);
      const destList = newOrderedData.find(list => list.id === destination.droppableId);

      if (!sourceList || !destList) return;

      if (source.droppableId === destination.droppableId) {
        const reorderedCards = [...sourceList.cards];
        const [movedCard] = reorderedCards.splice(source.index, 1);
        reorderedCards.splice(destination.index, 0, movedCard);

        reorderedCards.forEach((card, idx) => { card.order = idx; });

        sourceList.cards = reorderedCards;
        setOrderedData(newOrderedData);
        updateCardOrder({ items: reorderedCards, boardId });
      } else {
        const [movedCard] = sourceList.cards.splice(source.index, 1);
        movedCard.listId = destination.droppableId;
        destList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card, idx) => { card.order = idx; });
        destList.cards.forEach((card, idx) => { card.order = idx; });

        setOrderedData(newOrderedData);
        updateCardOrder({ items: destList.cards, boardId });
      }
    }
  };

  // EKLENEN KISIM 2: Eğer sunucudaysak (mount olmadıysa) hiçbir şey gösterme
  if (!isMounted) {
    return (
      <div className="flex gap-x-3 h-full">
         {/* Yüklenirken boş bir iskelet göster ki sayfa zıplamasın */}
         {orderedData.map((list) => (
           <div key={list.id} className="w-[272px] bg-vintage-200 rounded-md h-20 opacity-50" />
         ))}
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};