import styled from 'styled-components';

export const Container = styled.div`
	grid-area: PL;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: var(--tertiary);
	max-height: 100vh;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const ButtonList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;