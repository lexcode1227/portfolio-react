import styled from 'styled-components';
import { primaryColor, secondaryColor, textColorRemark } from '../../constants';

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${secondaryColor};
  background-color: ${primaryColor};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  z-index: 1;

  /* &:hover {
    background-color: ${textColorRemark};
  } */
`;