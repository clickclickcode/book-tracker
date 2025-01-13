'use client'

import { useState } from 'react'
import { mockBooks } from '@/data/mockBooks'
import { BookCard } from '@/components/BookCard/BookCard'
import { Book } from '@/types/book.types'
import { FilterBar } from '@/components/FilterBar/FilterBar'


export default function Home() {
	// setting up state for the books
	const [books, setBooks] = useState<Book[]>(mockBooks)
	// setting up state for the filter bar
	const [filter, setFilter] = useState('all')

	// creating an event handler for the books' status
	const handleStatusChange = (id: string, newStatus: Book['status']) => {
		setBooks(currentBooks =>
			currentBooks.map(book =>
				book.id === id ? { ...book, status: newStatus } : book
			)
		)
	}

	const filteredBooks = filter == 'all'
		? books
		: books.filter(book => book.status === filter)


	return (
		<main className='container mx-auto p-8'>
			<h1 className='text-3xl font-bold mb-8'>My Reading List</h1>

			<FilterBar
				currentFilter={filter}
				onFilterChange={setFilter}
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredBooks.map((book) => (
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
