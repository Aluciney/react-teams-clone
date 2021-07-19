import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
		--primary: #1f1f1f;
		--secondary: #141414;
		--tertiary: #0a0a0a;
		--quaternary: #292b2f;
		--quinary: #393d42;
		--senary: #828386;
		
		--white: #fff;
		--gray: #8a8c90;
		--chat-input: rgb(64,68,75);
		--symbol: #74777a;
		--notification: #f84a4b;
		--discord: #6e86d6;
		--mention-detail: #f9a839;
		--mention-message: #413f3f;
		--link: #5d80d6;
		--rocketseat: #6633cc;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body, input, button, textarea {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}

	button {
		background: none;
		border: 0px;
		cursor: pointer;
	}

	a, button {
		text-decoration: none;
		:focus {
			outline: 0px;
		}
	}	
`;