import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <h2>Cargando...</h2>}

        {/* Destructurando las propiedades de cada imagen */}
        {images?.map((image) => (
          <GifItem
            key={image.id}
            // ! De esta manera exparsimos todas las propiedades que tenemos en 'image', para que las pueda utilizar el componente.
            {...image}
            // title={image.title}
            // url={image.url}
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
