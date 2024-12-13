"use client"

//images
import whatsapp from '../../../public/icons8-whatsapp-96.png';
import mail from '../../../public/icons8-mail-96.png';
import linkedin from '../../../public/icons8-linkedin-other.png';
import Image from 'next/image';

//framer motion
import {motion} from 'framer-motion'

const Contact = () => {
    return(
        <>
            <section id='Contatos' className="w-full min-h-screen bg-[#2e2b2b] flex flex-col justify-center items-center">
                <h1 className="text-4xl mb-8 font-bold text-white">Entre em Contato</h1>
                <div className="w-full flex-col sm:flex-row justify-center items-center flex gap-6 px-4">
                    {/* botao 1 */}
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3}}
                    href='mailto:leandroAS27@gmail.com'
                    target='_blank'
                    className="border-2 py-4 px-14 flex items-center justify-center gap-4 hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)] w-full sm:w-auto">
                        <Image 
                        src={mail} 
                        alt="icone de um email" 
                        className='object-contain hover:invert transition durantion-300' 
                        width={32} height={32}/>
                        <div className='flex flex-col items-center'>
                            <h2 className='font-bold text-xl text-white font-montserrat'>Email</h2>
                            <p className='font-lato'>Escrever um Email</p>
                        </div>
                    </motion.a>
                    {/* botao 2 */}
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3}}
                    href='https://wa.me/11985964520'
                    target='_blank'
                    className="border-2 py-4 px-14 flex items-center justify-center gap-4 hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)] w-full sm:w-auto">
                        <Image 
                        src={whatsapp} 
                        alt="icone da logo do whatsapp" 
                        className='object-contain hover:invert transition durantion-300' 
                        width={32} height={32}/>
                        <div className='flex flex-col items-center'>
                            <h2 className='font-bold text-xl text-white font-montserrat'>Whatsapp</h2>
                            <p className='font-lato'>Mandar uma mensagem</p>
                        </div>
                    </motion.a>
                    {/* botao 3 */}
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3}}
                    href='https://www.linkedin.com/in/leandroas27/'
                    target='_blank'
                    className="border-2 py-4 px-14 flex items-center justify-center gap-4 hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)] w-full sm:w-auto">
                        <Image src={linkedin} alt="icone da logo do linkedin" className='object-contain hover:invert transition durantion-300' width={32} height={32}/>
                        <div className='flex flex-col items-center'>
                            <h2 className='font-bold text-xl text-white font-montserrat'>Linkedin</h2>
                            <p className='font-lato'>Ver meu perfil</p>
                        </div>
                    </motion.a>
                </div>
            </section>
        </>
    )
}
export default Contact;