import {useState} from "react";
import ModalContent from "../modal/ModalContent.jsx";


function TraditionalModal() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="border relative border-black mb-5 p-2 h-20 overflow-hidden">
            <button className="bg-black text-white p-1 border rounded-md"
                    onClick={() => setShowModal(true)}
            >

                Show the Traditional Modal
            </button>
            {
                showModal && (
                    <ModalContent onClose={() => setShowModal(false)}/>
                )
            }

        </div>
    );
}

export default TraditionalModal;
