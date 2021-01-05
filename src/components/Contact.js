import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <div className="contact">
      <Container id="contato">
        <h1 className="title  text-center">CONTATO</h1>
        <div className="columns">
          {/* <!-- Start Google Map --> */}
          <div className="column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9394205842805!2d-57.49595568557635!3d-14.602526798657161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9398fb13c496bf39%3A0x78fbe2fb5f885110!2sR.%20Jos%C3%A9%20C%C3%A2ndido%20Melhoran%C3%A7a%2C%20275%20-%20Jardim%20Taruma%2C%20Tangar%C3%A1%20da%20Serra%20-%20MT%2C%2078300-000!5e0!3m2!1spt-BR!2sbr!4v1608398243025!5m2!1spt-BR!2sbr"
              width="100%"
              height="347"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          {/* <!-- End Google Map --> */}

          {/* <!-- Start  contact --> */}
          <div className="column">
            <div className="form contact-form">
              <form
                action=""
                method="post"
                role="form"
                className="contactForm"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" name="name" placeholder="Nome" required />
                  </div>
                </div>
                {/* Email */}
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="mail"
                      name="mail"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="tel"
                      name="phone"
                      placeholder="Telefone"
                      required
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div className="field">
                  <div className="control">
                    <textarea className="textarea" placeholder="Mensagem"></textarea>
                  </div>
                </div>

                {/* Enviar */}
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-medium is-fullwidth">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- End Left contact --> */}
        </div>
      </Container>
      <div className="text-center">
        <p>
          &copy; Rua José Cândito Melhorança 275-N Centro <b>- Tangará da serra/MT {new Date().getFullYear()}.</b>
          
        </p>
        
      </div>
    </div>
  );
};

export default Contact;
