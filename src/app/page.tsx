"use client";

import { useGetCategoriesQuery } from "@/lib/features/categories/categorySlice";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, isLoading, isFetching, error } = useGetCategoriesQuery();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data && !isLoading && !isFetching) {
      setCategories(data.data); // Atualiza o estado com as categorias
    }
  }, [data, isLoading, isFetching]);

  if (error) {
    return <p>Error fetching categories</p>;
  }

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <span>{category.is_active ? "Active" : "Inactive"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
