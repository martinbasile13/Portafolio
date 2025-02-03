export function Modal({ id, title, children, isOpen, onClose }) {
    return (
        <>
            <input 
                type="checkbox" 
                id={id} 
                className="modal-toggle" 
                checked={isOpen}
                onChange={onClose}
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label 
                        htmlFor={id} 
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h2 className="text-3xl">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    );
} 