import { Results } from "@/types/category";
import { apiSlice } from "../api/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Results, void>({ // Tipar os resultados da query
            query: () => "/categories",
            providesTags: ["Categories"],
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
