import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider';

const Repair = styled.div `
color: #ffffff;
font-size: 40px;
line-height: 50px;
font-weight: 700;

span{
	font-size: 24px;
	display: block;
    line-height: 30px;
}

`
const LightText= styled.div`
color: #ffffff;
margin-top:54px;
font-size: 18px;
font-weight: 300;
line-height: 28px;
`

const Connect =styled.button`
width: 247px;
height: 67px;
border-radius:30px;
background-color: #ffa14b;
margin-top:32px;
color: #ffffff;
font-size: 18px;
font-weight: bold;
line-height: 24px;
}`
class Main extends React.Component{
	render(){
		return(
<Row>
	<Col lg={5}>
	<Repair> 
		Качественный ремонт
<span>iphone за 35 минут и гарантия 1 год</span>
	</Repair>
	<LightText>
		Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
	</LightText>
	<Connect>
	Оставить заявку!
	</Connect>
	</Col>

	<Col lg={6} lgOffset={1}>
		<Slider />
	</Col>

</Row>
			)
	}
}
export default Main