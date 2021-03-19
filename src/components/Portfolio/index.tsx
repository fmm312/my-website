import { Container } from './styles';

import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiRightArrow }from 'react-icons/bi';

const projects = [
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  },
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  },
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  },
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  },
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  },
  {
    'id': '01',
    'github': '#',
    'link': '#',
    'title': 'Pomodoro Timer',
    'tecnologies': 'Next.js | TypeScript',
    'description': 'Relógio que marca as horas com tecnica de pomororo'
  }
]

const Portfolio: React.FC = () => {
  return (
    <Container>
      <h1 name="portfolio">
        Some interesting projects<br /> that I developed
      </h1>
      <div className="line-bellow-title" />

      <div className="projects-container">
        {projects.map((item) => (
          <div>
            <div className="project-card-header">
              <span>{item.id}</span>
              <div>
                <a href="" target="_blank">
                  <AiFillGithub className="icon"/>
                </a>
                <a href="" target="_blank">
                  <BsBoxArrowUpRight className="icon" />
                </a>
              </div>
            </div>

            <div className="project-card-body">
              <div>
                <BiRightArrow  className="icon-arrow"/>
                <span className="title">{item.title}</span>
              </div>
              
              <span className="tecnologies">{item.tecnologies}</span>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </Container>
  );
}

export default Portfolio;