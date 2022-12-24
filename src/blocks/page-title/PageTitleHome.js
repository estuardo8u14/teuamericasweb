import React, { Component } from "react";

import LanguageSelector from "../../components/button/LanguageSelector";

class PageTitleHome extends Component {
  constructor() {
    super();
    this.state = {
      lang: "En",
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.setState({
      lang: event.target.title,
    });
  }

  render() {
    return (
      <section
        id="page-title"
        className="block"
        style={{
          backgroundImage: `url( ${require("../../assets/img/placeholder/1920x860_1.jpg")} )`,
        }}
      >
        <div className="wrapper h-100">
          <div className="d-flex justify-content-between position-relative h-100">
            <div className="align-self-center">
              <div className="title">
                <h1>
                  TEU AMERICAS <br />
                  Compañía de logísitca
                </h1>
              </div>

              <p className="spacer p-top-lg mb-0">
                Servicios globales de logística y transporte vía marítima,
                terrestre y aérea.
                <br />
                Le protegeremos del riesgo y le garantizamos la responsabilidad.
              </p>
            </div>

            <div className="lang-position">
              <nav className="languages">
                <ul className="nav" onClick={this.onChangeValue}>
                  <LanguageSelector
                    title="Esp"
                    className={this.state.lang === "Esp" ? "current-lang" : ""}
                  />
                  <LanguageSelector
                    title="En"
                    className={this.state.lang === "En" ? "current-lang" : ""}
                  />
                  <LanguageSelector
                    title="zh-CN"
                    className={
                      this.state.lang === "zh-CN" ? "current-lang" : ""
                    }
                  />
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="page-title-bg-color"></div>
      </section>
    );
  }
}

export default PageTitleHome;
