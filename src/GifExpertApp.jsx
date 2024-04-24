// ! Por noramtiva. Primero se importa lo de React.
import { useState } from "react";

// ! Importaciones de terceros.

// ! Y despues nuestras importaciones. Por ultimo funciones o hooks.

// import GifGrid from "./components/GifGrid";
// import AddCategory from "./components/AddCategory";
import { GifGrid, AddCategory } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {
    //   ! De esta manera validamos que no se repitan los strings.
    if (categories.includes(NewCategory)) return;

    //   ! Esta manera es teniendo el estado en el mismo componente.
    //? setCategories([...categories, "Naruto"]);
    // ! De esta manera utilizamos el callback que se le puede mandar a la funcion seteadora, para asi tener el estado, sin tener que moverlo por componentes.
    setCategories((cat) => [NewCategory, ...cat]);

    // ? De esta manera lo añadiriamos al inicio. setCategories((cat) => ["Naruto",...cat ]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
