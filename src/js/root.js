import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive'
export default class Root extends React.Component{
	render(){
		return(
			<div>
				<MediaQuery query='(min-device-width:1224px)'>
					<PCIndex></PCIndex>
				</MediaQuery>
				<MediaQuery query='(max-device-width:1224px)'>
					<MobileIndex></MobileIndex>
				</MediaQuery>
				
			</div>
			
		);
	};
}
ReactDom.render(<Root/>,document.getElementById('mainContainer'))