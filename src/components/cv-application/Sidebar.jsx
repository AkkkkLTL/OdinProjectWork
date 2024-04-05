import "../../styles/cv-application/Sidebar.css";
import styled from "styled-components";

const SidebarStyle = styled.nav`
  button {
    border: 0
  }
`

export default function Sidebar() {
  return (
    <SidebarStyle>
      <button>
        Content
      </button>
      <button>
        Customize
      </button>
    </SidebarStyle>
  );
}