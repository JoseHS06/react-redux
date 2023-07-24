// eslint-disable-next-line react/prop-types
export const Product = ({ nombre, precio }) => {
  return (
    <div className="col-3 mt-3">
      <div className="card shadow-sm border-1">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h6 className="card-subtitle">{precio}</h6>
        </div>
      </div>
    </div>
  );
};
