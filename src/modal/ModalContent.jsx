function ModalContent({onClose}) {
    return (
        <div
            className="flex justify-evenly items-center border rounded-lg absolute top-20 left-12 bottom-20 z-10 bg-black p-2" role="dialog" aria-modal="true">
            <p className="mx-2 text-white">Hey I am Modal</p>
            <button className="bg-white text-black p-1 border rounded-md" onClick={onClose}>Close</button>
        </div>
    );
}

export default ModalContent;
