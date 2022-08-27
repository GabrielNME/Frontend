import '../styles/estilos1.css';

const HomePage = (props) => {
    return (
        <main>
        <div className="centrado comparti">
            <div className="columnas">
                <section className="nosotros">
                    <h2>¿Quienes somos?</h2>
                    <p>Somos una de las librerias que esta en auge en el país. Nuestro compromiso, ademas
                        de traerles diversas obras de todos los generos para ustedes los lectores, es darles una
                        oportunidad
                        de hacerse ver, y poder entrar en el mundo de la escritura.
                    </p>
                    <p>
                        Contamos con envios a todo el pais y 23 sedes en todo el país. ¡Esperamos poder establecer más
                        sedes
                        para brindarles la mejor accesibilidad!
                    </p>
                </section>
                <section className="medios">
                    <h3>Aceptamos transferencia/Depósito bancario</h3>
                    <img src="img/mediospago/mercadopago.png" alt="mercadopago"/>
                    <img src="img/mediospago/uala.png" alt="uala"/>
                    <img src="img/mediospago/americanexpress.png" alt="americanexpress"/>
                    <img src="img/mediospago/visa.png" alt="visa"/>
                    <img src="img/mediospago/mastercard.png" alt="mastercard"/>
                </section>
            </div>
            <div className="clientes">
                <h3>Nuestros clientes:</h3>
                <div className="editoriales">
                    <img src="img/editoriales/aique.png" alt="aique"/>
                    <img src="img/editoriales/Alcion editora.jpg" alt="Alcion editora"/>
                    <img src="img/editoriales/años luz.png" alt="años luz"/>
                    <img src="img/editoriales/edelvives.png" alt="edelvives"/>
                    <img src="img/editoriales/edulp.png" alt="edulp"/>
                    <img src="img/editoriales/ivrea.png" alt="ivrea"/>
                    <img src="img/editoriales/paninicomics.png" alt="paninicomis"/>
                    <img src="img/editoriales/uranito logo.jpg" alt="uranito logo"/>

                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;