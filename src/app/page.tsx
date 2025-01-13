import { mockBooks } from '@/data/mockBooks'
import { BookCard } from '@/components/BookCard/BookCard'

export default function Home() {
  return (
	<main className='container mx-auto p-8'>
		<h1 className='text-3xl font-bold mb-8'>My Reading List</h1>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{mockBooks.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	</main>
  );
}
