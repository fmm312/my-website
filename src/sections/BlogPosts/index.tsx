import React from 'react';

import Title from '../../components/Title';

import {
  Container, 
  Post,
  PostTitle,
  PostDescription,
  PostLabel
} from './styles';

const Articles: React.FC = () => {
  return (
    <Container>
      <Title 
        title="Blog posts"
        step="04."
      />

      <Post>
        <PostTitle>
          Princípios de escalabilidade em projetos Front-end
        </PostTitle>

        <PostLabel>
          11 de jul. de 2021 • <span>@medium</span>
        </PostLabel>

        <PostDescription>
          Breve abordagem de conceitos fundamentais para 
          construir projetos Front-end escaláveis e sustentáveis.
        </PostDescription>
      </Post>
      
    </Container>
  );
}

export default Articles;