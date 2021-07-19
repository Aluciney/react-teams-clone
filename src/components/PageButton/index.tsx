import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import { IconType } from 'react-icons';

export interface Props extends ButtonHTMLAttributes<HTMLElement> {
	title?: string;
	active?: boolean;
	icon: IconType;
	iconSize?: number;
}

const PageButton: React.FC<Props> = (props) => {

	const Icon = props.icon;

	return (
		<Container {...props} type="button">
			<Icon size={props.iconSize ? props.iconSize : undefined} />
			<span>{props.title}</span>
		</Container>
	);
}

export default PageButton;