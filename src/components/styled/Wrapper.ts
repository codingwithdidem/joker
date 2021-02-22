import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface WrapperProps {
    theme: DefaultTheme
}

const Wrapper = styled.div<WrapperProps>`
     max-width: 80rem;
     height: 80rem;
     padding: 20px;
     margin: 0 auto;
     background: ${({ theme }) => theme.colors.white};
     border-radius: 5px;
     box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .5);
     opacity: 0.5;
     filter: invert(1);
  `;

export default Wrapper;