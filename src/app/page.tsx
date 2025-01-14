'use client'

import { useState } from 'react'
import { mockBooks } from '@/data/mockBooks'
import { BookCard } from '@/components/BookCard/BookCard'
import { Book } from '@/types/book.types'
import { FilterBar } from '@/components/FilterBar/FilterBar'
import { BookForm } from '@/components/BookForm/BookForm'
import { Modal } from '@/components/Modal/Modal'


export default function Home() {
	// setting up state for the books
	const [books, setBooks] = useState<Book[]>(mockBooks)
	// setting up state for the filter bar
	const [filter, setFilter] = useState('all')
	// setting up state for the modal
	const [isModalOpen, setIsModalOpen] = useState(false)


	// creating an event handler for the books' status
	const handleStatusChange = (id: string, newStatus: Book['status']) => {
		setBooks(currentBooks =>
			currentBooks.map(book =>
				book.id === id ? { ...book, status: newStatus } : book
			)
		)
	}

	const handleAddBook = (newBook: Omit<Book, 'id' | 'status'>) => {
		const book: Book = {
			...newBook,
			id: (books.length + 1).toString(),
			status: 'unread'
		}
		setBooks([...books, book])
		setIsModalOpen(false)
	}

	const filteredBooks = filter == 'all'
		? books
		: books.filter(book => book.status === filter)


	return (
		<main className='container mx-auto p-8'>
			<h1 className='text-3xl font-bold mb-8'>My Reading List</h1>
			<div className='flex justify-between items-center mb-8'>
				<button
					onClick={() => setIsModalOpen(true)}
					className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
				>
					Add Book
				</button>
				<FilterBar
					currentFilter={filter}
					onFilterChange={setFilter}
				/>
			</div>

			
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredBooks.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						onStatusChange={handleStatusChange}
					/>
				))}
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Add New Book'
			>
				<BookForm
					onSubmit={handleAddBook}
					onCancel={() => setIsModalOpen(false)}
				/>
			</Modal>
		</main>
	);
}
