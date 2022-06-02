import {
  Title,
  TitleContainer,
  NumberTitle,
  Line,
} from './styles';

export default function TitleComponent({
  step,
  title,
  disabledLine = false,
}) {
  const letters = title.split('');

  return (
    <TitleContainer>
      <NumberTitle>{step}</NumberTitle>
      {letters.map((item) => (
        <Title>{item}</Title>
      ))}
      {!disabledLine && <Line />}
    </TitleContainer>
  );
}
