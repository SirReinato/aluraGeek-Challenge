import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  width: 133px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #2a7ae4;
  
  color: ${props => props.type === 'semBg' ? '#2a7ae4' : '#fff' };
  background: ${props => props.type === 'semBg' ? 'none' : '#2a7ae4' };
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export default function BotaoPrincipal({ texto, tipo }) {
  return (
    <Link to={'/login'} >
      <Btn type={tipo}>{texto}</Btn>
    </Link>
  );
}
