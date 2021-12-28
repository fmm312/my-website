import { 
  Container,
  CardProject,
  TitleProject,
  ProjectDescription,
  Projects,
  TagsProject,
  Tag,
  Filters,
  ButtonFilter
} from './styles';

import Title from '../../components/Title';

import { BiRightArrow } from 'react-icons/bi';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <Title 
        title="Open source"
        step="03."
      />

      <Filters>
        <ButtonFilter>
          Web
        </ButtonFilter>

        <ButtonFilter>
          Mobile
        </ButtonFilter>

        <ButtonFilter>
          Back-end
        </ButtonFilter>
      </Filters>

      <Projects>
        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Github user profile
          </TitleProject>

          <ProjectDescription>
            A personalized view of github users.
          </ProjectDescription>

          <TagsProject>
            <Tag>react</Tag>
            <Tag>styled-components</Tag>
            <Tag>chartjs-2</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Personal Blog
          </TitleProject>

          <ProjectDescription>
            Front-end developed with Next.js and 
            integrated with CMS Strapi
          </ProjectDescription>

          <TagsProject>
            <Tag>nextjs</Tag>
            <Tag>styled-components</Tag>
            <Tag>strapi</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Finances dashboard
          </TitleProject>

          <ProjectDescription>
            A React.js dashboard for financial control
          </ProjectDescription>

          <TagsProject>
            <Tag>typescript</Tag>
            <Tag>react</Tag>
            <Tag>styled-components</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Purple Haze
          </TitleProject>

          <ProjectDescription>
            Purple Haze is a beautiful dark theme for Visual Studio Code
          </ProjectDescription>

          <TagsProject>
            <Tag>vscode</Tag>
            <Tag>theme</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Mirana
          </TitleProject>

          <ProjectDescription>
            A framework for creating UI with react.js
          </ProjectDescription>

          <TagsProject>
            <Tag>react</Tag>
            <Tag>storybook</Tag>
            <Tag>design-system</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Pomodoro
          </TitleProject>

          <ProjectDescription>
            A framework for creating UI with react.js
          </ProjectDescription>

          <TagsProject>
            <Tag>react</Tag>
            <Tag>typescript</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Calculator
          </TitleProject>

          <ProjectDescription>
            A cool calculator made with React
          </ProjectDescription>

          <TagsProject>
            <Tag>reactjs</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Tic tac toe
          </TitleProject>

          <ProjectDescription>
            A tic-tac-toe game built with React
          </ProjectDescription>

          <TagsProject>
            <Tag>reactjs</Tag>
            <Tag>game</Tag>
          </TagsProject>
        </CardProject>

        <CardProject>
          <TitleProject>
            <BiRightArrow className="arrowIcon" />
            Rgb to hex
          </TitleProject>

          <ProjectDescription>
            A tool to convert RGB colors to hexadecimal
          </ProjectDescription>

          <TagsProject>
            <Tag>javascript</Tag>
            <Tag>css</Tag>
          </TagsProject>
        </CardProject>
      </Projects>
    </Container>
  );
}

export default Portfolio;