'use client'

import { useState } from 'react'
import { Book } from '@/types/book.types'

interface BookFormProps {
    onSubmit: (book: Omit<Book, 'id' | 'status'>) => void
    onCancel: () => void
}


export const BookForm = ({ onSubmit, onCancel }: BookFormProps) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        coverUrl: '',
        description: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            {/* title */}
            <div>
                <label htmlFor='title' className='block text-sm font-medium mb-1'>
                    Title
                </label>
                <input
                    type='text'
                    id='title'
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className='w-full p-2 border rounded-md'
                    required
                />
            </div>
            {/* author */}
            <div>
                <label htmlFor='author' className='block text-sm font-medium mb-1'>
                    Author
                </label>
                <input
                    type='text'
                    id='author'
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className='w-full p-2 border rounded-md'
                    required
                />
            </div>
            {/* coverUrl */}
            <div>
                <label htmlFor='coverUrl' className='block text-sm font-medium mb-1'>
                    Cover Image URL
                </label>
                <input
                    type='text'
                    id='coverUrl'
                    value={formData.coverUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, coverUrl: e.target.value}))}
                    className='w-full p-2 border rounded-md'
                    required
                />
            </div>
            {/* description */}
            <div>
                <label htmlFor='description' className='block text-sm font-medium mb-1'>
                    Description
                </label>
                <textarea
                    id='description'
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value}))}
                    className='w-full p-2 border rounded-md'
                    rows={4}
                    required
                />
            </div>
            {/* buttons */}
            <div className='flex justify-end space-x-2 pt-4'>
                {/* cancel button */}
                <button
                    type='button'
                    onClick={onCancel}
                    className='px-4 py-2 text-gray-600 hover:text-gray-800'
                >
                    Cancel
                </button>
                {/* submit button */}
                <button
                    type='submit'
                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                >
                    Add Book
                </button>
            </div>
        </form>
    )
}