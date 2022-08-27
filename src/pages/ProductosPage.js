import '../styles/estilos2.css';
import MultipleItems from '../component/novedades/Carrusel';
import ProductoItem from '../component/novedades/ProductoItem'
import {useState, useEffect} from 'react';
import axios from 'axios';
const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos]=useState([]);

    useEffect(()=>{
        const cargarProductos = async ()=>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();
    },[]);

    return (
        <main>
        <div className="centrado">
            <MultipleItems/>

            <h2 className="abajo">Catalogo</h2>
            <div className="grid">
                {
                    loading ?(
                        <p>Cargando...</p>
                    ) : (
                        productos.map(item=> <ProductoItem key={item.id}
                        nombre={item.nombre} precio={item.precio}
                        imagen={item.imagen} stock={item.stock}/>) 
                    )
                }
            </div>
        </div>
    </main>
    );
}

export default ProductosPage;