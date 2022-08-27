const Footer = (props) => {
    return (
        <footer>
        <div>
            <img src="img/pag/logo.png" width="70px" alt="logo"/>
            <div className="redes">
                <h5>
                    Seguinos en redes:
                </h5>
                <a href="https://www.youtube.com/"><ion-icon name="logo-youtube"></ion-icon></a><span> youtube </span>
                <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a><span> instagram </span>
                <a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a><span >facebook </span>
                <a href="https://www.twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a><span> twitter </span>
            </div>
        </div>
    </footer>
    );
}

export default Footer;