"use client";

import { useEffect, useState } from "react";

const useIsHomeVisible = ():boolean => {
    const [isHomeVisible, setIsHomeVisible] = useState<boolean>(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHomeVisible(entry.isIntersecting)
            },
            { threshold: 0.5}
        );

        const homeSection = document.getElementById('home');
        if(homeSection){
            observer.observe(homeSection);
        }

        return() => {
            if(homeSection){
                observer.unobserve(homeSection);
            }
        };
    }, []);
    return isHomeVisible;
}

export default useIsHomeVisible;