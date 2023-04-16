import AdoptCard from "../adoptCard/AdoptCard";
import styled from "styled-components";
import {useRef, useEffect} from 'react';



function Slide({duration, delay}) {



    const slideshow = useRef(0);
    const intervaloSlideshow = useRef(0);


    const siguiente = () =>{
        if(slideshow.current.children.length > 0){
            
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `${duration}ms ease-out all`;

            slideshow.current.style.transform = `translateY(-270px)`;

            const transicion = () => {
                //Reiniciamos la posicion del Slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateY(0)';

                //Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);
            }

            slideshow.current.addEventListener('transitionend',transicion);
        }
     }

     useEffect(() => {
        intervaloSlideshow.current  = setInterval(() => {
            siguiente();
        },{delay});

        //Eliminar los intervalos
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        //Volver  a poner el intervalo 
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current  = setInterval(() => {
                siguiente();
            },{delay});
        });

     },[]);


    return <>
        <ContenedorPrincipal>
            <ContenedorSlideshow ref = {slideshow}>
                <Slides>
                    <AdoptCard/>
                </Slides>
                <Slides>
                    <AdoptCard/>
                </Slides>
                <Slides>
                    <AdoptCard/>
                </Slides>
                <Slides>
                    <AdoptCard/>
                </Slides>
                <Slides>
                    <AdoptCard/>
                </Slides>
            </ContenedorSlideshow>
        </ContenedorPrincipal>
    </>
}

const ContenedorPrincipal = styled.div`
width: 250px;
height: 590px;
overflow: hidden;

`;

const ContenedorSlideshow = styled.div`
position:relative;

top: -40px;
`;

const Slides = styled.div`
position: relative;
margin: 20px;
transition: 0.9s ease all;
z-index: 10;
`;

export default Slide ;