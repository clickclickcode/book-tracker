'use client'

import { useState } from 'react'
import { mockBooks } from '@/data/mockBooks'
import { BookCard } from '@/components/BookCard/BookCard'
import { Book } from '@/types/book.types'


export default function Home() {
	// setting up state for the books
	const [books, setBooks] = useState<Book[]>(mockBooks)

	// creating an event handler for the books' status
	const handleStatusChange = (id: string, newStatus: Book['status']) => {
		setBooks(currentBooks =>
			currentBooks.map(book =>
				book.id === id ? { ...book, status: newStatus } : book
			)
		)
	}


	return (
		<main className='container mx-auto p-8'>
			<h1 className='text-3xl font-bold mb-8'>My Reading List</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{books.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						onStatusChange={handleStatusChange}
					/>
				))}
			</div>
		</main>
	);
}
