import React, { useState } from "react";
import Helmet from "react-helmet";
import classnames from "classnames";
import Layout from "@components/Layout";
import Container from "@components/Container";
import francismarThumb from "@assets/images/advogados/1.png";
import lucianoThumb from "@assets/images/advogados/2.png";
import ayrtonThumb from "@assets/images/advogados/3.png";
import clesioThumb from "@assets/images/advogados/4.png";
import fernandoThumb from "@assets/images/advogados/5.png";
import elisaThumb from "@assets/images/advogados/6.png";
import patriciaThumb from "@assets/images/advogados/7.png";
import topTeam from "@assets/images/bg_top_team.png";
import TeamModal from "@assets/images/team_modal-clean.svg";

const Photo = ({ img, title, subtitle, description, formation, className }) => {
  const [show, isShow] = useState(false);
  return (
    <>
      <div
        className={"column " + className || ""}
        onClick={() => {
          isShow(true);
        }}
      >
        <img src={img} alt={title} />
        <div className="text-center">
          <h4>{title}</h4>
          <h5>{subtitle || "Advogado Associado"}</h5>
        </div>
      </div>
      <Modal
        img={img}
        title={title}
        subtitle={subtitle}
        description={description}
        formation={formation}
        show={show}
        onClose={() => {
          isShow(false);
        }}
      />
    </>
  );
};

const Modal = ({ img, title, subtitle, description, formation, show, onClose }) => {
  return (
    <div className={classnames("team-modal_group", { show })}>
      <img src={img} alt={title} />
      <div className="team-modal_text">
        <h1>{title}</h1>
        <h2>{subtitle || "Advogado Associado"}</h2>
        {description.split("\n").map(item => (
          <p>{item}</p>
        ))}
        <ul>
          {formation.map(item => (
            <li>
              {item.split("\n").map(line => {
                return (
                  <>
                    {line} <br />
                  </>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        className="team-modal_close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      >
        Fechar
      </a>
      <div className="team-modal-mobile" />
      <TeamModal />
    </div>
  );
};

export default () => {
  return (
    <Layout pageName="team">
      <Helmet>
        <title>SLS Advogados - Equipe</title>
      </Helmet>
      <div className="team">
        <Container>
          <img src={topTeam} className="team-top" />
          {/* first */}
          <div className="columns">
            <Photo
              img={francismarThumb}
              title="Dr. Francismar Sanches Lopes"
              subtitle="Diretor Jurídico"
              description={`Inscrito na OAB/MT nº 1.708-B. \n
              Coordenador e revisor geral das ações. Atuação
              com ênfase em Direito Imobiliário, Agrário,
              Contratual, Bancária, Cooperativismo.`}
              formation={[
                "Formado em 1972 no curso de Direito pela \nUniversidade Mackenzie – SP;",
                "Especializado em Direito Societário;",
                "Graduado e economia;",
              ]}
            />

            <Photo
              img={lucianoThumb}
              title="Dr. Luciano de Sales"
              subtitle="Diretor Jurídico / Adm."
              description={`Inscrito na OAB/MT nº 5.911-B. Coordenador e Revisor
              geral das ações. Atuação com ênfase em: Empresarial
              Trabalhista, Cooperativismo, Associativismo.`}
              formation={[
                "Pós-graduado em Direito Processual Civil e Direito Civil;",
                "Pós-graduado em Liderança e Gestão Organizacional\n pela Franklin Covey Business School;",
                "Curso de Negociação e Mediação pela \nUniversidade de Havard – Boston, EUA;",
                "Pós-Graduado em Gestão de Cooperativas.",
                "Pós-Graduando MBA em Gestão de \nAgronegócio ESALQ/USP",
              ]}
            />
          </div>
          {/* end-first */}

          {/* second */}
          <div className="columns">
            <Photo
              img={ayrtonThumb}
              title="Dr. Ayrton Freitas Rego"
              description={`Inscrito na OAB/MT nº 21817/0. Atuante com ênfase
              no Direito Tributário, Ambiental e Agronegócio.`}
              formation={[
                "Pós-Graduação Lato Sensu em Direito Tributário;",
                "Pós-Graduando MBA em Gestão de Agronegócio ESALQ/USP.",
              ]}
            />
            <Photo
              img={clesioThumb}
              title="Dr. Clésio Plates de Oliveira"
              description={`Inscrito na OAB/MT nº 23592/0. Atuante com ênfase
              no Direito Cível, Agronegócio e Direito de Saúde.`}
              formation={[
                "Pós-graduado em Direito Processual Civil;",
                "MBA em Gestão de Cooperativas;",
                "MBA em Agronegócio, Técnico em Segurança do Trabalho;",
                "Membro da Comissão da Jovem Advocacia.",
              ]}
            />
            <Photo
              img={fernandoThumb}
              title="Dr. Fernando Cézar Reis"
              description={`Inscrito na OAB/MT nº 22096/0. Atuante com ênfase
              em Direito Empresarial, Bancário e administrativo`}
              formation={["Pós-Graduação em Direito Empresarial."]}
            />
          </div>
          {/* end-second */}

          {/* third */}
          <div className="columns">
            <Photo
              img={elisaThumb}
              title="Dra. Elisa Flumian Pires de Sales"
              description={`Inscrita na OAB/MT nº 7.354. Atuação com ênfase em
              Direito Cível Geral, Ações Indenizatórias, Consumidor
              e Inventário.`}
              formation={[
                `Pós-Graduada em Direito Processual Civil e Direito Civil pela
              Instituição Toledo de Ensino de Presidente Prudente - SP`,
              ]}
            />

            <Photo
              img={patriciaThumb}
              title="Dr. Patrícia Elisa Vieira de Brito"
              description={`Inscrita na OAB/MT nº 10.304. \n
                Atuação com ênfase em Direito Trabalhista Patronal,
                Cível e Direito de Família.`}
              formation={["Pós-Graduada em Direito Trabalhista."]}
            />

          </div>
          {/* end-third */}
        </Container>
      </div>
    </Layout>
  );
};
