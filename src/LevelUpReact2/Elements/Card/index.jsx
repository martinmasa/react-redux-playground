import styled from 'styled-components';

import { elevation, transition, colors, teal } from '../../Utilities';

export const Card = styled.div`
  background: ${teal};
  border-radius: 5px;
  padding: 15px;
  color: ${colors.purp};
  ${elevation[4]};
  ${transition({
    length: '0.5s'
  })};

  &:hover {
    ${elevation[5]};
  }
`;
