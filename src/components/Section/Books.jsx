import React from "react";
import BookItem from "./BookItem";
import Title from "./Title";

const Books = ({collection }) => {
  return (
    <div>
      <Title title="Gunooooooo"/>
      <section className="grid grid-cols-3 grid-rows-2 gap-4 px-8 w-full">
        {collection.map((collect) => (
          <BookItem collect={collect} key={collect.id} />
        ))}
      </section>
    </div>
  );
};

export default Books;
