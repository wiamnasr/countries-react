import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Content = styled.div`
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 0;
  margin: 1rem 0 1rem 2rem;
  background-color: #4b4b4b;
  width: 500px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 300px;
  }

  h2 {
    width: 100%;
    margin: 2rem 0 0 1rem;
  }

  .countryFields {
    font-weight: 800;
    font-size: 20px;
    margin: 1rem 0 0 1rem;
  }
`;
