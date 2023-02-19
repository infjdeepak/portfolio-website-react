import styled from "styled-components";
export const About = styled.div`
  min-height: 90vh;
  min-height: 90svh;
  padding: 4rem 5%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
`;
export const Description = styled.div`
  flex: 2 1 30rem;
`;
export const Hide = styled.div`
  overflow: hidden;
`;
export const Image = styled.div`
  flex: 1 1 30rem;
  overflow: hidden;
  text-align: end;
  img {
    width: 100%;
    height: 55rem;
    object-fit: cover;
  }
`;
