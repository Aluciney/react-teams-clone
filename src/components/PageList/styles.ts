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

	> button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 5px;
		padding-bottom: 5px;
		cursor: pointer;
		width: 100%;
		height: 57px;
		position: relative;

		svg {
			font-size: 22px;
			color: #9c9c9c;
		}

		span {
			font-size: 10px;
			color: #9c9c9c;
			margin-top: 2px;
		}
	}

	> button:hover {
		background-color: #292929;
		svg {
			color: #9ea2ff;
		}

		span {
			color: #9ea2ff;
		}
	}

	> button.active {
		svg {
			color: #9ea2ff;
		}

		span {
			color: #9ea2ff;
		}

		&::after {
			content: '';
			position: absolute;
			left: 1px;
			top: 0;
			margin-top: 5px;
			height: calc(90% - 5px);
			width: 2px;
			background-color: #9ea2ff;
			border-radius: 1px;
		}
	}
`;