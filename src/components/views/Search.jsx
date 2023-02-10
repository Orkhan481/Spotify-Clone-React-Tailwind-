import React from "react";
import categories from "data/categories";
import Title from "components/Section/Title";

function Category({ category }) {
  return (
    <div
      className="w-[12.938.rem] before:pt-[100%] before:block relative rounded-md overflow-hidden cursor-pointer"
      style={{ background: category.color }}
    >
      <div className="absolute inset-0">
        <h3 className="text-[1.4rem] font-bold p-4 tracking-tighter">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="w-20 h-20 absolute bottom-0 right-0 translate-x-[18%] translate-y-[10%] rotate-[25deg]"
        />
      </div>
    </div>
  );
}

const Search = () => {
  return (
    <>
      <Title title="Hepsine göz at" />
      <div className="grid grid-cols-6 gap-6 px-8 py-4">
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </>
  );
};

export default Search;
