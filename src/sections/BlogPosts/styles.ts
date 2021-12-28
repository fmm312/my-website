import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 220px;
  color: ${props=> props.theme.colors.text};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Post = styled.div`
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 20px;
  width: 45%;
  cursor: pointer;

  &:hover {
    filter: brightness(2.8);
    border: 2px solid ${props=> props.theme.colors.primary};
    /* transform: translateX(-10px); */
    transition: 0.5s;
  }
`;

export const PostTitle = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const PostDescription = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
`;

export const PostLabel = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  margin-bottom: 12px;
  opacity: .8;

  > span {
    color: ${props=> props.theme.colors.primary};
    font-weight: 700;
  }
`;