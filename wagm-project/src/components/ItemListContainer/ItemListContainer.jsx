import "./ItemListContainer.scss";

const ItemListContainer = ({ productos }) => {
  return (
    <div className="catalogue__container">
      <h2>Bienvenidos a NBA4ALL</h2>
      <hr />

      <p>{productos}</p>
    </div>
  );
};

export default ItemListContainer;
