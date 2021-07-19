import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.button<Props>`
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
		color: ${(props: Props) => props.active ? '#9ea2ff' : '#9c9c9c'};
	}

	span {
		font-size: 10px;
		color: ${(props: Props) => props.active ? '#9ea2ff' : '#9c9c9c'};
		margin-top: 2px;
	}
	
	&:hover {
		background-color: #292929;
		svg {
			color: #9ea2ff;
		}
		span {
			color: #9ea2ff;
		}
	}

	&::after {
		content: '';
		display: ${(props: Props) => props.active ? 'inline' : 'none'};
		position: absolute;
		left: 1px;
		top: 0;
		margin-top: 5px;
		height: calc(90% - 5px);
		width: 2px;
		background-color: #9ea2ff;
		border-radius: 1px;
	}
`;
