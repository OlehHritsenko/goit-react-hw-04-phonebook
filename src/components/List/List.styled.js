import styled from 'styled-components';

const List = styled.ul`
  padding-left: 35px;
  width: 305px;
`;

const Item = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const BtnDelete = styled.button`
  width: 60px;
  height: 20px;
  padding: 0;
  margin-left: 15px;
  text-align: center;
  color: #2a2a2a;
  background-color: transparent;
  border-radius: 10%;
  border: 1px solid rgba(128, 128, 128, 0.263);
  box-shadow: 3px 5px 10px -5px rgba(75, 92, 165, 0.5);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(21 136 221 / 45%);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

export { List, Item, BtnDelete };