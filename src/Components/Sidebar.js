import React, { Component } from 'react';
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
  Card,
  Container
} from 'semantic-ui-react';
import { ToolStorageContainer } from './Tools/ToolStorageContainer';
import { ToolExpContainer } from './Tools/ToolExpContainer';
import { ToolIncomeContainer } from './Tools/ToolIncomeContainer';
import Planner from './Tools/ToolPlanner.js';
import { ToolAnalysContainer } from './Tools/ToolAnalysContainer';
import { ToolShopContainer } from './Tools/ToolShopContainer';
import { ToolLegalize } from './Tools/ToolLegalize';
import './Sidebar.css';
import baner_long from '../images/ads/baner_long.png';
import baner_side from '../images/ads/baner_side.png';

export default class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    const tools = this.props.tools.map((tool, index) => {
        return (
          (tool.id === 'home') ? null :
          <Menu.Item className='sidebar-item' key={tool.id} onClick={() => this.props.click_tool(index)}>
            <Icon size='large' name={tool.icon}/> 
            {tool.name}
          </Menu.Item>         
        )
    });

    const toolName = this.props.tools.map((tool, index) => {
      return (
        (tool.active === true) && <h2 key={tool.id} className="toolname">{tool.name}</h2>
      )
    });

    const toolsMain = this.props.tools.map((tool, index) => {
      return (
        (tool.id === 'home') ? null :
        <Card key={tool.id + 'card'} onClick={() => this.props.click_tool(index)}>
          <Card.Content>
          <Icon size='huge' name={tool.icon}/> 
          <h2>{tool.name}</h2>
          </Card.Content>
        </Card>         
      )
    });

    const toolsMainContainer = 
        (!this.props.tools[7].active) ? null :
        <Container><Card.Group>
          {toolsMain}
        </Card.Group></Container>

    return (
      <div>
        <Button.Group className="subnavbar">
          <Button disabled={visible} onClick={this.handleShowClick} className="toolsbtn">
            Інструменти
          </Button>
          {toolName}
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            {tools}
            <Image className="ads" src={baner_side} />
          </Sidebar>

          <Sidebar.Pusher>
            {toolsMainContainer}
            {this.props.tools[0].active && <ToolStorageContainer />}
            {this.props.tools[1].active && <ToolExpContainer />}
            {this.props.tools[2].active && <ToolIncomeContainer />}
            {this.props.tools[3].active && <Planner />}
            {this.props.tools[4].active && <ToolAnalysContainer />}
            {this.props.tools[5].active && <ToolShopContainer />}
            {this.props.tools[6].active && <ToolLegalize />}
            <Image className="ads" src={baner_long} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
