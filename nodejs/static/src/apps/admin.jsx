import React from 'react'
import ReactDOM from 'react-dom'
import { Test } from './../apis/admin'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BurgerMenu from 'react-burger-menu'
import MenuWrap from './MenuWrap'
import classNames from 'classnames'
import routes from './routes'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  getMenu() {
    const Menu = BurgerMenu['push'];
    const items = [
      <Link to="/"><a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Home</span></a></Link>,
      <Link to="/management"><a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Management</span></a></Link>,
      <Link to="/chart"><a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Chart</span></a></Link>
    ];
    return (
      <MenuWrap wait={20} side={'left'}>
        <Menu id={'push'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          {items}
        </Menu>
      </MenuWrap>
    );
  }

  changeSide(side) {
  }

  render() {
    return (
      <Router>
        <div id="outer-container" style={{ height: '100%' }}>
          {this.getMenu()}
          <main id="page-wrap">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </main>
        </div>
      </Router>
    );
  }
}


export default App