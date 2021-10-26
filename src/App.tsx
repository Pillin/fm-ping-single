import styled from '@emotion/styled';
import Card from "./components/Card"


const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px 32px;
`;


function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default App;
