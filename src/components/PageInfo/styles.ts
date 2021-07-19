import styled from 'styled-components';

export const Container = styled.div`
	grid-area: PI;
    background-color: var(--secondary);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1.5px 0px 0px;
    padding: 0 17px;
    display: flex;
    align-items: center; justify-content: space-between;
    z-index: 2;

    @media (max-width: 935px) {
        display: none;
    }
`;

export const ButtonsLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > h3 {
        padding: 0;
        margin: 0;
        color: #FFF;
    }

    > button {
        margin-left: 10px;
        margin-top: 5px;

        svg {
            color: #747474;
            font-size: 15px;
        }
    }
`;

export const ButtonsRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        margin-left: 12px;

        svg {
            color: #747474;
            font-size: 16px;
        }
    }

    button:hover {
        svg {
            color: #9ea2ff;
        }
    }
`;
