import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 70px 300px auto;
	grid-template-rows: 50px 60px auto;
	grid-template-areas:
		'PL HE HA'
		'PL PI PH'
		'PL LI SP';
	height: 100vh;
`;
