import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 220px;
  color: ${props=> props.theme.colors.text};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Timeline = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 18px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const TimelineTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 15px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
`; 

export const CompanyName = styled.span`
  font-size: 16px;
  margin-left: 10px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  color: ${props=> props.theme.colors.primary};
`; 

export const TimelineDescription = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Line = styled.div`
  padding: 10px 20px;
  position: relative;

  ::before {
    position: absolute;
    width: 2px;
    height: 95%;
    left: 20px;
    background-color: ${props=> props.theme.colors.primary};
    content: "";
  }

  .content {
    position: relative;
    padding-left: 30px;
  }

  .content + .content {
    margin-top: 40px;
  }

  .content p {
    font-size: 16px;
  }

  .content::before {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${props=> props.theme.colors.primary};
    content: "";
    left: -9px;
    border-radius: 50%;
    top: 3px;
  }
`;