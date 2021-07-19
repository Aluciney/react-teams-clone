import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	margin-left: 10px;
	margin-right: 10px;	
  	:before {
		content: '';
		position: absolute;
		bottom: 0px;
		right: -2px;
		width: 10px;
		height: 10px;
		background-color: #F00;
		border-radius: 50%;
		border: 2px solid var(--primary);
	}
`;

export const ImageAvatar = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: 1px solid var(--primary);
`;