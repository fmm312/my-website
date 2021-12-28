import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 220px;
  color: ${props=> props.theme.colors.text};
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardProject = styled.div`
  border-radius: 6px;
  border: 2px solid transparent;
  padding: 20px;
  width: 26%;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    filter: brightness(2.8);
    border: 2px solid ${props=> props.theme.colors.primary};
    /* transform: translateY(-10px); */
    transition: 0.5s;
  }
`;

export const TitleProject = styled.h4`
  font-size: 18px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  margin-bottom: -5px;
  margin-top: 0px;

  .arrowIcon {
    font-size: 14px;
    color: ${props=> props.theme.colors.primary};
    margin-right: 15px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  height: 35px;
`;

export const TagsProject = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  border-radius: 54px;
  font-size: 10px;
  border: 1px solid ${props=> props.theme.colors.primary};
  opacity: .8;
  padding: 2px 10px;
  margin-right: 6px;
  margin-bottom: 6px;

  @media (min-width: 1400px) {
    font-size: 12px;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonFilter = styled.button`
  margin: 8px;
  border: 2px solid #00adb5;
  background-color: transparent;
  color: ${props=> props.theme.colors.primary};
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
  transition: all 500ms ease;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 600;
  width: 116px;
  text-align: center;

  &:hover {
    background-color: ${props=> props.theme.colors.primary};
    color: ${props=> props.theme.colors.text};
  }
`;