import {useState} from 'react';
import ModalContent from "../modal/ModalContent.jsx";
import Portal from "../Portal.jsx";


function PortalModal() {
    const [showModal, setShowModal] = useState(false)
    return (

        <div className="border relative border-black mb-5 p-2 h-20 overflow-hidden">
            <button className="bg-black text-white p-1 border rounded-md"
                    onClick={() => setShowModal(true)}>Modal Using React Portal
            </button>

            {
                showModal && (
                    <Portal>
                        <ModalContent onClose={() => setShowModal(false)}/>
                    </Portal>
                )
            }

        </div>

    );
}

export default PortalModal;
