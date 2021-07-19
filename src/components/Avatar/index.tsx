import React from 'react';

import { 
	Container,
	ImageAvatar
} from './styles';

const Avatar: React.FC = () => {
  return (
	  <Container>
		  <ImageAvatar src="https://github.com/Aluciney.png"/>
	  </Container>
  );
}

export default Avatar;