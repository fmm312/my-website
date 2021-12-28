import { 
  Title, 
  TitleContainer,
  NumberTitle,
  Line
} from './styles';

export default function TitleComponent({
  step,
  title,
  disabledLine=false
}) {
  return (
    <TitleContainer>
      <NumberTitle>{step}</NumberTitle>
      <Title>{title}</Title>
      {!disabledLine && <Line />}
    </TitleContainer>
  )
}
