import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/estilos2.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Proximas entregas </h2>
        <Slider {...settings}>
          <div className="producto oferta">
            <img src="img/proximas/prox 3.jpg" width="230px" alt="prox 3" />
            <p>24-10-2022</p>
            <div className="info">
              <span>$1100</span>
              <span>One punch man 24</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 1.jpg" width="230px" alt="prox 1" />
            <p>24-10-2022</p>
            <div className="info">
              <span>$4999</span>
              <span>El caso de Alaska Sanders</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 2.jpg" width="230px" alt="prox 2" />
            <p>13-12-2022</p>
            <div className="info">
              <span>$5500</span>
              <span>El lobo desnudo</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 4.png" width="230px" alt="prox 4" />
            <p>13-12-2022</p>
            <div className="info">
              <span>$1750</span>
              <span>Cleo</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 5.jpg" width="230px" alt="prox 1" />
            <p>20-12-2022</p>
            <div className="info">
              <span>$2999</span>
              <span>Banderas Reunidas</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 6.jpg" width="230px" alt="prox 6" />
            <p>17-01-2023</p>
            <div className="info">
              <span>$4500</span>
              <span>La sombra del golem</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 7.jpg" width="230px" alt="prox 7" />
            <p>17-01-2023</p>
            <div className="info">
              <span>$3900</span>
              <span>Carmen</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 8.jpg" width="230px" alt="prox 8" />
            <p>02-02-2023</p>
            <div className="info">
              <span>$600</span>
              <span>El hombre comido</span>
            </div>
          </div>
          <div className="producto oferta">
            <img src="img/proximas/prox 9.jpg" width="230px" alt="prox 9" />
            <p>10-02-2023</p>
            <div className="info">
              <span>$600</span>
              <span>Boba Fett</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}