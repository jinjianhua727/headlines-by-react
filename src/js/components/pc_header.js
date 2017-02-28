import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon ,Tabs,Message,Form,Input,Button,CheckBox,Modal} from 'antd';

const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class PCHeader extends React.Component{
	constructor(){
		super()
		this.state = {
			current : 'top',
			modalVisible:false,
			action:'login',
			hasLogined:false,
			userNickName:'',
			userid:0
		}
	}
	setModalVisible(value) {
		this.setState({
			modalVisible:value
		})
	}
	handleClick(e) {
		if (e.key=="register") {
			this.setState({
				current:'register'
			})
			this.setModalVisible(true)
		}else{
			this.setState({
				current:e.key
			})
		}
	}
	handleSubmit(e) {

	}
	render(){
		let {getFieldProps} = this.props.form;
		const userShow = this.state.hasLogined
		? <Menu.Item key='logout' class='register'>
			<Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
			&nbsp;&nbsp;
			<Link target="_blank">
				<Button type="dashed" htmlType='button'>个人中心</Button>
			</Link>
			&nbsp;&nbsp;
			<Button type="ghost" htmlType='button'>退出</Button>
		</Menu.Item>
		: <Menu.Item key='register' class='register'>
			<Icon type="appstore"/>注册/登录
		</Menu.Item>;

		
		return(
			<header>
				<Row>
			      <Col span={2}></Col>
			      <Col span={4}>
					<a href="/" class="logo">
						<img src="./images/logo.png" alt="logo"/>
						<span>ReactNews</span>
					</a>
			      </Col>
			      <Col span={16}>
					<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
					  <Menu.Item key="top">
					  	<Icon type="appstore"></Icon>头条
					  </Menu.Item>
					  <Menu.Item key="shehui">
					  	<Icon type="appstore"></Icon>社会
					  </Menu.Item>
					  <Menu.Item key="guonei">
					  	<Icon type="appstore"></Icon>国内
					  </Menu.Item>
					  <Menu.Item key="guoji">
					  	<Icon type="appstore"></Icon>国际
					  </Menu.Item>
					  <Menu.Item key="yule">
					  	<Icon type="appstore"></Icon>娱乐
					  </Menu.Item>
					  <Menu.Item key="tiyu">
					  	<Icon type="appstore"></Icon>体育
					  </Menu.Item>
					  <Menu.Item key="keji">
					  	<Icon type="appstore"></Icon>科技
					  </Menu.Item>
					  <Menu.Item key="shishang">
					  	<Icon type="appstore"></Icon>时尚
					  </Menu.Item>
					  {userShow}
					</Menu>

					<Modal title="用户中心" wrapClassName="verical-center-modal" visible={this.state.modalVisible} onCancle={()=>this.setModalVisible(false)} onOk={()=> this.setModalVisible(false)} okText="关闭">
						<Tabs type="card">
							<TabPane tab="注册" key="2">
								<Form forizontal onSubmit={this.handleSubmit.bind(this)}>
									<FormItem label="账户">
										<Input placeholder="请输入您的帐号" {...getFieldProps('r_userName')}/>
									</FormItem>
									<FormItem label="密码">
										<Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
									</FormItem>
									<FormItem label="账户">
										<Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirm')}/>
									</FormItem>
									<Button type="primary" htmlType="submit">注册</Button>
								</Form>
							</TabPane>
						</Tabs>
					</Modal>
			      </Col>
			      <Col span={2}></Col>
			    </Row>
			</header>
		)
	}
}
export default PCHeader = Form.create({})(PCHeader)