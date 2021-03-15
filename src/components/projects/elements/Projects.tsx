import styled from "styled-components";

export const ProjectsContainer = styled.div`
    text-align: center;
    display: grid;
    margin: 3rem;;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: repeat(1, 600px);
    grid-gap: 8px;
    justify-content: center;
`;

export const Header = styled.h1`
    margin: 1.4rem;
    text-align: center;
`;
