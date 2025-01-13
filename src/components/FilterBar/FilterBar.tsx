type FilterBarProps = {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
}


export const FilterBar = ({ currentFilter, onFilterChange }: FilterBarProps) => {
    return (
        <div className='mb-6'>
            <select
                value={currentFilter}
                onChange={(e) => onFilterChange(e.target.value)}
                className='p-2 border rounded-md'
            >
                <option value="all">All Books</option>
                <option value="unread">Unread</option>
                <option value="reading">Currently Reading</option>
                <option value="finished">Finished</option>
            </select>
        </div>
    )
}