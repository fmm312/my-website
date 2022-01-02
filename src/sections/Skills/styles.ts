import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;

  @media(max-width: 520px) {
   font-size: 14px;
  }
`;

export const Text = styled.p`
  width: 80%;

.skill-icon-arrow {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
    font-size: 12px;
  }
  
`;
