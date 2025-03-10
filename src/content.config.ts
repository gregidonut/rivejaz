import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    wallCardCont: defineCollection({
        loader: glob({
            pattern: "src/components/homepage/content/*.md",
        }),
        schema: z.object({
            date: z.coerce.date(),
        }),
    }),
};
