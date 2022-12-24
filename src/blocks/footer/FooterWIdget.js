import React from "react";

import FooterMenu from "../footer/FooterMenu";

const FooterWidget = () => {
  return (
    <div className="footer-widgets">
      <div className="footer-widget-area d-flex flex-wrap">
        <div className="widget">
          <h5 className="widget-title">About us</h5>

          <p>
            Ser el principal operador logístico de servicios de carga en mediano
            tiempo, basado en la excelencia y enfocados en el servicio al
            cliente manteniendo relaciones de confianza y compromiso con
            nuestros clientes, proveedores, colaboradores, formar una cultura
            organizacional que sea social y ambientalmente responsable.
          </p>
        </div>

        <div className="widget">
          <h5 className="widget-title">Menu</h5>

          <FooterMenu />
        </div>

        <div className="widget">
          <h5 className="widget-title">Contacto</h5>

          <p>Ciudad de Guatemala, Guatemala, Oficinas Miraflores </p>

          <p>
            <a href="mailto:info@teuamericas.com">info@teuamericas.com</a>
          </p>

          <p>+(502) 59456972</p>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
