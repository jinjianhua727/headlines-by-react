import React from 'react';
import { Row, Col } from 'antd';
export default class PCIndex extends React.Component{
	render(){
		return(
			<header>
				<Row>
			      <Col span={2}></Col>
			      <Col span={4}>
					<a href="/">
						<img src="../../images/logo.png" alt="logo"/>
						<span>ReactNews</span>
					</a>
			      </Col>
			      <Col span={2}></Col>
			    </Row>
			</header>
		)
	}
}