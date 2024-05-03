import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    // setCategories((cat) => [inputValue, ...cat]);
    // onAddCategory(inputValue);
    //   ! Aca borramos lo que quede en el input.
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
export default AddCategory;

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
