import '../styles/estilos4.css';
import { useState } from 'react';
import axios from 'axios';

const CompartiPage = (props) => {

    const initialform = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialform);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/comparti', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialform)
        }
    }

    return (
        <main>
            <div className="centrado">
                <div className="contenedor">
                    <h2>¿Que es "Tu obra"?</h2>
                    <p>Es un espacio donde te permitimos pasarnos tu manuscrito, y darte la oportunidad de darte a conocer
                        en el
                        mundo de la literatura. ¡Compartí tu manuscrito y nosotros se lo enviamos a las editoriales que se
                        adapten a
                        tu estilo y le echen una mirada! </p>
                    <h2 className="espacio">
                        Llena tus datos y envianos tu manuscrito:
                    </h2>
                    <form action="/comparti" method="post" onSubmit={handleSubmit} className="formulario">
                        <p><label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p><label for="email">E-mail</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p><label for="telefono">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p><label for="">PDF o .docx</label>
                            <input type="file" name="" />
                        </p>
                        <p><label for="mensaje">Dejanos un comentario para tener en cuenta: </label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                    {sending? <p>Enviando...</p>:null}
                    {msg? <p>{msg}</p>:null}
                </div>
            </div>
        </main>
    );
}

export default CompartiPage;