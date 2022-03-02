import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import "../App.scss";

export const Nav = styled.nav`
-webkit-font-smoothing: antialiased;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(7px);
border: 1px solid rgba(255, 255, 255, 0.18);
height: 59px;
width: 100%;
overflow: hidden;
position: fixed;
display: flex;
justify-content: space-between;
padding: 0.8rem calc((100vw - 1000px) / 4);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled.div`
color: #808080;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
a{
	color: #00D8FF;
	text-decoration: none;
}
a.active {
	color: #ffffff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
`;


export const Button = styled.div`
	color: #007bff;
	border-color: #007bff;
	cursor: pointer;
	display: inline;
	margin: 0;
	padding: 0;
	position: fixed;
	width: 100%;
	left: 49%;
	bottom: 110px;
	height: 20px;
	font-size: 3rem;
	z-index: 1;
	user-select: none;
`;
