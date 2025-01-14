import { z } from 'zod'

// JavaScript schema
export const bookFormSchema = z.object({
    title: z.string()
        .min(1, { message: 'Title is required' })
        .trim(),
    author: z.string()
        .min(1, { message: 'Author is required' })
        .trim(),
})

// Zod infers the TypeScript types from our JavaScript schema above
export type BookFormData = z.infer<typeof bookFormSchema>