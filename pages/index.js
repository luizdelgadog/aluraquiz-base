import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
              <h1>Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>wubba lubba dub dub</h1>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>testing stuff stuff stuff</h1>

            <h1>wubba lubba dub dub</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/luizdelgadog"/>
    </QuizBackground>
  )
}
