import React from 'react';
import Fade from 'react-reveal/Fade';

import Title from '../../components/Title';

import {
  Container,
  CompanyName,
  Timeline,
  TimelineTitle,
  Line,
  TimelineDescription,
} from './styles';

const Carrer: React.FC = () => (
  <Fade left duration={2000}>
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
                  @SuperSim
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>jan/2022 – moment</TimelineDescription>
            </div>

            <div className="content">
              <TimelineTitle>
                Software Engineer
                <CompanyName>
                  @Somapay
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>ago/2019 – jan/2022</TimelineDescription>
            </div>

            <div className="content">
              <TimelineTitle>
                Software Web developer
                <CompanyName>
                  @Freelancer
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>
                dez/2016 – ago/2019
              </TimelineDescription>
            </div>

            <div className="content">
              <TimelineTitle>
                Software Web developer
                <CompanyName>
                  @pescapreços.com
                </CompanyName>
              </TimelineTitle>
              <TimelineDescription>ago/2017 – jan/2018</TimelineDescription>
            </div>
          </Line>
        </Timeline>
      </div>
    </Container>
  </Fade>
);

export default Carrer;
