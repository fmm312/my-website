import React from 'react';

import Title from '../../components/Title';

import { 
  Container,
  CompanyName,
  Timeline,
  TimelineTitle,
  Line,
  TimelineDescription,
} from './styles';

const Carrer: React.FC = () => {
  return (
    <Container>
      <div>
        <Title 
          title="Professional experience"
          step="02."
        />

        <Timeline>
          <Line>
            <div className="content">
              <TimelineTitle>
                Software Engineer
                <CompanyName>
                  @Somapay
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>ago. de 2019 – o momento | 1 ano 8 meses</TimelineDescription>
            </div>

            <div className="content">
              <TimelineTitle>
                Desenvolvedor e Web Designer
                <CompanyName>
                  @Freelancer
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>dez. de 2016 – ago. de 2019 | 2 anos 9 meses</TimelineDescription>
            </div>
              
            <div className="content">
              <TimelineTitle>
                Desenvolvedor Front end
                <CompanyName>
                  @pescapreços.com
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>ago. de 2017 – jan. de 2018 | 6 meses</TimelineDescription>
            </div>
          </Line>
        </Timeline>
      </div>
    </Container>
  );
}

export default Carrer;