import * as React from "react"
import styled from "styled-components"

const Butana = styled.div`
    background-color: aliceblue;
    padding: 50px;
`
const Conver = styled.button`
    background-color: #555;
    padding: 25px 15px;
    color: white;
    border: none;

    &:hover {
        background-color: #767343;
    }
`

/**
 * Primary UI component for user interaction
 */
 export const Massa = () => {
    return (
      <Butana>
          <Conver>
            Légolas
          </Conver>
      </Butana>
    );
  };

