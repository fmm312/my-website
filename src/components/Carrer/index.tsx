import React from 'react';

import { Container } from './styles';

const Carrer: React.FC = () => {
  return (
    <Container>
      <h1>
        Technology experiences
      </h1>
      <div className="line-bellow-title" />

      <div className="timeline">
        <div className="line">
          <div className="line-content">
            <div className="content">
              <h1>Software Engineer</h1>
              <span>ago. de 2019 – o momento | 1 ano 8 meses</span>
              
              <p>
                Desenvolvimento e manutenção de aplicações web e 
                mobile na área financeira usando React, React Native, 
                JavaScript, Redux, Git, CSS, TypeScript, Material UI, 
                Storybook, HTML, entre outras tecnologias, com foco 
                em escrita de código limpo e componentes reutilizáveis. 
                Desenvolvimento fazendo o uso de metodologias ágeis, 
                sempre trabalhando em conjunto com Products Owners e 
                Designers em busca da melhor experiência possível para 
                os clientes. Outras atividades frequentes são: integrações 
                com APIs, deploy automatizado, escrita de documentações e 
                criação de biblioteca de componentes baseado em design system.
              </p>
            </div>

            <div className="content">
              <h1>Desenvolvedor e Web Designer</h1>
              <span>dez. de 2016 – ago. de 2019 | 2 anos 9 meses</span>
              <p>
                Web Design e desenvolvimento de sites, blogs e landing pages 
                para empresas de pequeno e médio porte, usando JavaScript, 
                JQuery, CSS, HTML, Bootstrap e WordPress. Projetos otimizados 
                para motores de busca (SEO), responsivos e seguindo boas práticas 
                de UX. Além do desenvolvimento, após a conclusão, eu realizava 
                o deploy das aplicações e manutenção caso necessário.
              </p>
            </div>
            
            <div className="content">
              <h1>Desenvolvedor Front end</h1>
              <span>ago. de 2017 – jan. de 2018 |6 meses</span>
              <p>
                Atuei como desenvolvedor front-end e sócio, 
                o pescaprecos.com é uma startup que tem o objetivo 
                de exibir ofertas para ajudar as pessoas a encontrarem
                e compararem os melhores preços/características de produtos 
                e serviços. É uma vitrine virtual para empresas de todos os 
                portes e seguimentos, onde com um baixo investimento é possível 
                ter uma presença virtual e divulgar produtos.
              </p>
            </div>
            
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Carrer;