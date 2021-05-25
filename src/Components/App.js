import Slide from "./Slide";


function App() {
  // aquí sota del return, importarem un altre component que serà l'slide lateral. Aquest slide lateral tindra els elements del menu burger. Tindra
  // tb una classe oculto i de bones a primeres no es mostrara. Es necessitará un preventdefault. El clic al icono es recollirá i treura la classe
  // oculto, de manera que apareixera el menú. Després d'axió quedará animar la transició d'aparició del menú,
  // finalment s'animará l'icono perque giri
  return (
    <>
      <Slide></Slide>
    </>
  );
}

export default App;
