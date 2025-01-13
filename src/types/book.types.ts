export interface Book {
    id: string;
    title: string;
    author: string;
    coverUrl?: string; // we're using the ? to make this an optional type
    status: 'unread' | 'reading' | 'finished';
}