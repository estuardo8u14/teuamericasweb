import React from "react";

const LinkTitle = () => {
  return (
    <a
      title="About us"
      className="transform-scale-h"
      href={`${process.env.PUBLIC_URL + "/about-us"}`}
    >
      Sobre nosotros
      <i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
    </a>
  );
};

const TextTitle = () => {
  return <div title="About us">Sobre nosotros</div>;
};

const AboutUsTitle = (props) => {
  const isHomepage = props.isHomepage;

  if (isHomepage) {
    return <LinkTitle />;
  }
  return <TextTitle />;
};

const AboutUsPrimary = (props) => {
  return (
    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
      <div className="title">
        <h2>
          <AboutUsTitle isHomepage={props.isHomepage} />
        </h2>
      </div>

      <div className="text">
        <p>
          Ofrecemos todos los servicios logísticos para su importación y/o
          Exportación a través de nuestro portafolio de proveedores y aliados
          comerciales que están comprometidos a brindar un excelente servicio de
          calidad y precios competitivos, nos dedicamos a ser la mejor
          alternativa para la rentabilidad de su negocio evitando costes
          adicionales y optimizar el tiempo de sus importaciones de una manera
          programada y organizada.
        </p>
      </div>

      <div className="list-group list-group-horizontal spacer m-top-lg m-bottom-lg-media-xl style-default">
        <div className="list-group-item">
          <h4 className="text-secondary">18</h4>
          <p>Clientes</p>
        </div>

        <div className="list-group-item">
          <h4 className="text-secondary">1</h4>
          <p>Oficinas</p>
        </div>

        <div className="list-group-item">
          <h4 className="text-secondary">5</h4>
          <p>Empleados</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPrimary;
