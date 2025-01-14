interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}


export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50'>
            {/* overlay */}
            <div className='fixed inset-0 bg-black bg-opacity-50'>
                {/* modal */}
                <div className='fixed inset-0 flex items-center justify-center p-4'>
                    {/* header */}
                    <div className='flex justify-between items-center p-4 border-b'>
                        <h2 className='text-xl font-semibold'>
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            className='text-gray-500 hover:text-gray-700'
                        >
                            <span className='text-2xl'>&times;</span>
                        </button>
                    </div>
                    {/* content */}
                    <div className='p-4 max-h-[80vh] overflow-y-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}