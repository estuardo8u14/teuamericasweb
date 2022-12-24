import React from "react";

import WhyUsPdf from "./WhyUsPdf";

const WhyUsContent = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="clearfix">
          <div className="row gutter-width-lg with-pb-lg style-default">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="text-secondary">01</h4>
              <p className="text-primary p-large bold">Experiencia</p>
              <p>
                Basado en la excelencia y enfocados en el servicio al cliente,
                para nosotros son lo más importante y nuestra razón de ser,
                permítanos ser parte de su operación y crecer juntos.
              </p>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="text-secondary">02</h4>
              <p className="text-primary p-large bold">Transparencia</p>
              <p>
                Brindamos la capacidad a nuestros clientes de rastrear y contar
                con toda la información necesaria sobre nuestros procesos.
              </p>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="text-secondary">03</h4>
              <p className="text-primary p-large bold">
                Responsabilidad y Compromiso
              </p>
              <p>
                {" "}
                Manteniendo relaciones de confianza y compromiso con nuestros
                clientes, proveedores y colaboradores.
              </p>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="text-secondary">04</h4>
              <p className="text-primary p-large bold">Lealtad y Pasión,</p>
              <p>
                Buscamos y encontramos los mejores precios y ofrecemos tarifas
                preferenciales de acuerdo al volumen y frecuencia
              </p>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="text-secondary">05</h4>
              <p className="text-primary p-large bold">Empatía</p>
              <p>
                Ofreciendo las mejores opciones de proveedores de logística y
                asi hacer más rentable la operación logística de cadena de
                suministros de nuestros clientes a travez de la experiencia,
                eficiencia, calidad, tiempo y dinero.
              </p>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <WhyUsPdf />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsContent;
