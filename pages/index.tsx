import * as React from 'react'
import styled from '@emotion/styled'
import {keyframes, Global, css} from '@emotion/react'

/*
 * styled-космический фон, растянутый на весь экран
 */
const Space = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("background.png");
    background-size: cover;
    overflow: hidden;
    margin: 0;
`

/*
 * styled-область падения звезд. Ширина в 60% учитывается при 
 * генерации свойства left для звезд (см. формулу в generateRandomLeft)
 */
const FallingArea = styled('div')`
    width: 60%;
    height: 100%;
    position: relative;
    margin: auto;
`

/*
 * styled-анимация падения под экран
 */
const animation = keyframes`
  to {
        top: 110%;
`

/*
 * Свойства звезд
 * left: позиция внутри FallingArea
 * onAnimationIteration: обновление left и числа на звезде
 */
type StarProps = {
    left: string,
    onAnimationIteration: any
}

/*
 * styled-звезда. Рождается над экраном и падает, в течение 3с,
 * под экран. Вторая и третья звезды стартуют с задержкой.
 */
const Star = styled('div')<StarProps>`
    background: url("star.png");
    background-size: cover;
    top: -100px;
    width: 88px;
    height: 88px;
    position: absolute;
    animation: ${animation} 3s linear infinite;
    left: ${(props) => props.left};
    &:nth-of-type(2n) {
        animation-delay: 1s;
    }
    &:nth-of-type(3n) {
        animation-delay: 2s;
    }
    & > div {
        position: relative;
        top: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
`
    
/*
 * Свойства игры: положения звезд и числа на них
 */
type GameState = {
    left1: string,
    left2: string,
    left3: string,
    value1: number,
    value2: number,
    value3: number
}

/*
 * Компонент, управляющий игрой. Создает три падающие звезды. 
 * Анимация каждой звезды повторяется бесконечно, в конце каждый итерации,
 * обновляется число на звезде и её координата left (generateValue и 
 * generateRandomLeft, соответственно). В generateRandomLeft учитывается 
 * ширина FallingArea в 60% (т.е. 0.6) и отступ от правого края на ширину звезды (88px)
 */
class Game extends React.Component<GameState> {
        state: GameState = {
            left1: '0px',
            left2: '100px',
            left3: '200px',
            value1: this.generateValue(),
            value2: this.generateValue(),
            value3: this.generateValue(),
    }

    generateValue() {
        return Math.round(Math.random() * 30 - 15)
    }

    generateRandomLeft() {
        return Math.round(Math.random() * (window.innerWidth * 0.6 - 88)) + 'px'
    }

    render() {
        return (
            <Space>
                <Global styles={css`
                    body, html {
                        height: 100%;
                        margin: 0;
                        overflow: hidden;
                    }
                `}/>
                <FallingArea>
                    <Star left={this.state.left1}
                          onAnimationIteration={() => {
                              this.setState({
                                  left1: this.generateRandomLeft(),
                                  value1: this.generateValue()
                              });
                          }}>
                        <div>{this.state.value1}</div>
                    </Star>
                    <Star left={this.state.left2}
                          onAnimationIteration={() => {
                              this.setState({
                                  left2: this.generateRandomLeft(),
                                  value2: this.generateValue()
                              });
                          }}>
                        <div>{this.state.value2}</div>
                    </Star>
                    <Star left={this.state.left3}
                          onAnimationIteration={() => {
                              this.setState({
                                  left3: this.generateRandomLeft(),
                                  value3: this.generateValue()
                              });
                          }}>
                        <div>{this.state.value3}</div>
                    </Star>
                </FallingArea>
            </Space>
        )
    }
}

export default Game
