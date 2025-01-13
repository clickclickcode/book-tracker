import { Book } from '@/types/book.types'

export interface BookCardProps {
    book: Book; // each card will receive a Book object
    onStatusChange?: (id: string, status: Book['status']) => void; // optional callback function
}