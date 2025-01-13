import { BookCardProps } from './BookCard.types'

// book is destructured from props
export const BookCard = ({ book }: BookCardProps) => {
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
            <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2
                ${book.status === 'reading' ? 'bg-blue-100 text-blue-800' : ''}    
                ${book.status === 'finished' ? 'bg-green-100 text-green-800' : ''}    
                ${book.status === 'unread' ? 'bg-gray-100 text-gray-800' : ''}    
            `}>
                {book.status}
            </span>
        </div>
    )
}