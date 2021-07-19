import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 70px 350px auto;
	grid-template-rows: 50px 60px auto;
	grid-template-areas:
		'PL HE HA'
		'PL PI PH'
		'PL LI SP';
	height: 100vh;

	@media (max-width: 1400px) {
		grid-template-columns: 70px 310px auto;
	}

	@media (max-width: 1210px) {
		grid-template-columns: 70px 270px auto;
	}

	@media (max-width: 980px) {
		grid-template-rows: 50px 60px auto;
		grid-template-areas:
			'PL HA HA'
			'PL PI PH'
			'PL LI SP';
	}

	@media (max-width: 935px) {
		grid-template-columns: 70px auto;
		grid-template-rows: 50px 60px auto;
		grid-template-areas:
			'PL HA'
			'PL PH'
			'PL SP';
	}
`;
