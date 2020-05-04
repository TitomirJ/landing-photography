/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import leftArrow from '../../assets/images/Left.png'
import rightArrow from '../../assets/images/Right.png'

const Arrow = ({ direction, handleClick }) => (
    <div
        onClick={handleClick}
        css={css`
            display: flex;
            height: 50px;
            width: 30px;
            justify-content: center;
            cursor: pointer;
            align-items: center;
            transition: transform ease-in 0.1s;
            &:hover {
                transform: scale(1.1);
            }
            img {
                transform: translateX(${direction === 'left' ? '-2' : '2'}px);
                &:focus {
                  outline: 0;
                }
                width: 30px;
            }
        `}
    >
        {direction === 'right' ? <img alt={rightArrow} src={rightArrow} /> : <img alt={leftArrow} src={leftArrow} />}
    </div>
)

export default Arrow