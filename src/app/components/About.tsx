"use client"

//framer motion
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About:React.FC = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return(
        <motion.section 
        id="Sobre" 
        ref={ref}
        className="bg-[#1f1d1d] min-h-screen w-full flex justify-center px-6 pt-32">
            <motion.div 
            initial={{ opacity: 0, y:50 }}
            animate={inView ? { opacity: 1, y:0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center items-center w-3/4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">Sobre mim</h1>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-white">
                    Olá, meu nome é <span className="font-bold">Leandro</span>, tenho 22 anos e sou <span className="font-bold">Desenvolvedor Front-End</span>. 
                    Com uma base sólida em <span className="font-bold">JavaScript</span>, <span className="font-bold">React</span> e <span className="font-bold">TypeScript</span>, 
                    estou sempre em busca de transformar ideias em sites que não só funcionam, mas encantam os usuários.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-white">
                    Minha formação em <span className="font-semibold">Defesa Cibernética</span> e minha trajetória como <span className="italic">Atleta Profissional de E-sports </span> 
                    me ensinaram a importância do <span className="font-semibold">trabalho em equipe</span>, <span className="font-semibold">estratégia</span> e <span className="font-semibold">precisão</span> — 
                    habilidades que aplico diretamente no meu processo de desenvolvimento. Além disso, ao longo da minha carreira, me especializei em <span className="font-semibold">Empreendedorismo </span> e 
                     <span className="font-semibold"> Marketing Digital</span>, o que me permite entender o mercado e as necessidades do cliente de forma mais estratégica.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-white">
                    Embora o mundo da programação tenha sido um caminho inesperado para mim, ele sempre foi uma paixão. Foi através de cursos de <span className="font-bold">Python</span>,  
                    <span className="font-bold"> JavaScript</span>, e <span className="font-bold">Front-End</span> que encontrei meu verdadeiro propósito. Acredito que a criação de sites e a experiência do usuário 
                    são a chave para o sucesso de qualquer negócio.
                </p>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-white">
                    Se você procura alguém que tenha não apenas conhecimento técnico, mas também visão de negócio e um olhar criativo, estou pronto para transformar suas ideias em resultados concretos.
                </p>
            </motion.div>
        </motion.section>
    )
}

export default About;