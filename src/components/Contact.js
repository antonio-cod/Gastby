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
              src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=pt-br&amp;coord=-14.618935, -57.491420&amp;q=Escrit%C3%B3rio%20de%20Advocacia%20SLS%20Advogados%20Associados+(SLS%20Advogados)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
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
