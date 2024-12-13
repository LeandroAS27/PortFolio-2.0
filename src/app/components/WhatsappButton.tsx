import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return(
        <a
            href="https://wa.me/5511985964520"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full hover:scale-125 hover:border-2 transition duration-300 ease shadow-[0_0_12px_5px_rgba(65,105,225,0.5)]"
            aria-label="Contact us on whatsapp"
        >
            <FaWhatsapp size={24}/>
        </a>
    )
}

export default WhatsappButton;