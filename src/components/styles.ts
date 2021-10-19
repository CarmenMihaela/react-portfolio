import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 3vh;
  right: 20px;
  z-index: 20;
  display: none;
  

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#172774' : '#172774'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #77D970;
  align-items: center;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;
    color: #172774;

    &:hover {
      color: #FF5CA0;
    }
  }

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    right: 0;
    height: 103vh;
    width: 150px;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    background-color: #77D970;
    padding-top: 30vh;

    li {
      color: #172774;
      margin-right: 1vw;

      &:hover {
        color: #FF5CA0;
      }
    }
  }
`

export const Logo = styled.img`
  margin:1vh;
  width: 120px;
  height: 50px;
  background-color:rgba(255,255,255,0.99);
  object-fit: contain;
  border-radius:10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


  @media (min-width: 900px) {
    width: 200px;
    height: 70px;
  }

`

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`