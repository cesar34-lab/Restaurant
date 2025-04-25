import React from 'react';
import styled from 'styled-components';

function CustomerDashboard() {
  return (
    <Container>
      <StyledWrapper>
        <button className="styled-button">
          Reservas Realizadas
          <div className="inner-button">
            <svg
              id="Arrow"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              className="icon"
            >
              <defs>
                <linearGradient
                  y2="100%"
                  x2="100%"
                  y1="0%"
                  x1="0%"
                  id="iconGradient"
                >
                  <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%" />
                  <stop style={{ stopColor: '#AAAAAA', stopOpacity: 1 }} offset="100%" />
                </linearGradient>
              </defs>
              <path
                fill="url(#iconGradient)"
                d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
              />
            </svg>
          </div>
        </button>

        <button className="styled-button">
          Relizadar Reserva
          <div className="inner-button">
            <svg
              id="Arrow2"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              className="icon"
            >
              <defs>
                <linearGradient
                  y2="100%"
                  x2="100%"
                  y1="0%"
                  x1="0%"
                  id="iconGradient2"
                >
                  <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%" />
                  <stop style={{ stopColor: '#AAAAAA', stopOpacity: 1 }} offset="100%" />
                </linearGradient>
              </defs>
              <path
                fill="url(#iconGradient2)"
                d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
              />
            </svg>
          </div>
        </button>
      </StyledWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color:black;
  height: 100vh;
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
`;

const StyledWrapper = styled.div`
background-color:black;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width:109vw;

  .styled-button {
    position: relative;
    padding: 1em 2em;
    font-size: 1.3rem;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to bottom, #171717, #242424);
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #292929;
  }

  .styled-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }

  .styled-button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 1), 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  .styled-button .inner-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #171717, #242424);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 1);
    border: 1px solid #252525;
    transition: all 0.2s ease;
  }

  .styled-button .inner-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }

  .styled-button .inner-button .icon {
    filter: drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9))
      drop-shadow(0 0 4px rgba(0, 0, 0, 1));
    transition: all 0.4s ease-in-out;
  }

  .styled-button .inner-button .icon:hover {
    filter: drop-shadow(0 10px 20px rgba(50, 50, 50, 1))
      drop-shadow(0 0 20px rgba(2, 2, 2, 1));
    transform: rotate(-35deg);
  }
`;

export default CustomerDashboard;
