import styled from "styled-components";

const MutiColListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

export default function MutiColList({ children }) {
  return (
    <MutiColListStyle className="MutiColList">
      { children }
    </MutiColListStyle>
  );
}