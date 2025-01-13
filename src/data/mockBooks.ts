import { Book } from '@/types/book.types'


export const mockBooks: Book[] = [
    {
        id: '1',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
        status: 'finished'
    },
    {
        id: '2',
        title: 'Dune',
        author: 'Frank Herbert',
        coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/91b6bM961mL.jpg',
        status: 'reading'
    },
    {
        id: '3',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        status: 'unread'
    }
]