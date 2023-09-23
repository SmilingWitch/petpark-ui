//parallax efect


const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateX(${scrollPosition * 5}px)`,
  };

  <div  style={parallaxStyle}>
  
  </div>



  /*-----Mause mover animations----- */

  const [mousePositionP, setMousePositionP] = useState({ x: 0, y: 0 });
  
  
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePositionP({ x: event.clientX, y: event.clientY });
      
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);}
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePositionP.x * 0}px, ${mousePositionP.y * 0.1}px, 0)`,
  };
  const parallaxStyle1 = {
    transform: `translate3d(${mousePositionP.x * 0}px, ${mousePositionP.y * -0.1}px, 0)`,
  };