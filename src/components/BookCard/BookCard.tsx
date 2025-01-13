import { BookCardProps } from './BookCard.types'
import { Book } from '@/types/book.types'

// book is destructured from props
export const BookCard = ({ book, onStatusChange }: BookCardProps) => {
    const statusOptions: Book['status'][] = ['unread', 'reading', 'finished']


    return (
        <div className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
            {/* we're conditionally rendering the book cover if it exists */}
            {book.coverUrl && (
                <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    className='w-full h-48 object-cover rounded-md mb-2'
                />
            )}
            {/* we're creating dynamic classes by using template literals with backticks */}
            <h3 className='font-bold text-lg'>{book.title}</h3>
            <p className='text-gray-600'>{book.author}</p>

            <select
                value={book.status}
                onChange={(e) => onStatusChange?.(book.id, e.target.value as Book['status'])}
                className='mt-2 p-1 rounded border border-gray-300'
            >
                {statusOptions.map(status => (
                    <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    )
}