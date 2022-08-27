import React from 'react';
import '../../styles/estilos2.css'


const ProductoItem = (props) => {
    const { nombre, precio, stock, imagen } = props;

    return (
        <div className="producto">
            <img src={imagen} />
            <div className="info">
                <span>${precio}</span>
                <span>{nombre}</span>
            </div>
        </div>
    )
}
export default ProductoItem;