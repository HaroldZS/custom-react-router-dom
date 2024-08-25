import { useContext } from "react";
import { RouterContext } from "../components/HashRouter";

function useSearchParams() {
  const { location } = useContext(RouterContext);

  // Función para obtener una instancia de URLSearchParams
  const getSearchParams = () => {
    return new URLSearchParams(location.search);
  };

  // Función para establecer nuevos parámetros de búsqueda
  const setSearchParams = (newParams) => {
    const searchParams = new URLSearchParams(location.search);

    // Actualizar o agregar nuevos parámetros
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, newParams[key]);
      }
    });

    const newLocation = `${location.pathname}?${searchParams.toString()}`;
    window.history.pushState(null, "", `#${newLocation}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return [getSearchParams(), setSearchParams];
}

export { useSearchParams };
