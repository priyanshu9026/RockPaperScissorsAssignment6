import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto;
  font-size: 20px;
`

export const ScoreCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  margin: 15px;
  padding: 5px;
`
export const ParagrapgScore = styled.p`
  font-family: 'Roboto;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  margin: 0;
  text-align: center;  
`
export const ScoreSpan = styled.p`
  font-family: 'Roboto;
  font-size: 30px;
  font-weight: bold;
  color: #000000;
  margin: 0;
  text-align: center;
`
export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  padding: 0;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto;
  font-size: 15px;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CloseLineButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 25px;
`
