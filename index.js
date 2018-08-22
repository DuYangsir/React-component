import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './src/docs/App'
import Button from './src/docs/demo/button'
import SwitchButton from './src/docs/demo/switch'
import Input from './src/docs/demo/input'
import Forms from './src/docs/demo/form'
import List from './src/docs/demo/list'
import ListView from './src/docs/demo/listview'
import Flex from './src/docs/demo/flex'
import Empty from './src/docs/demo/empty'
import WhiteSpace from './src/docs/demo/whitespace'
import WingSpace from './src/docs/demo/wingspace'
import Checkbox from './src/docs/demo/checkbox'
import Tabs from './src/docs/demo/tabs'
import ImagePicker from './src/docs/demo/imagepicker'
import Message from './src/docs/demo/message'
import Spin from './src/docs/demo/spin'
import Screen from './src/docs/demo/screen'


import './src/docs/App.css'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/button" component={Button} />
      <Route path="/switch" component={SwitchButton} />
      <Route path="/input" component={Input} />
      <Route path="/form" component={Forms} />
      <Route path="/list" component={List} />
      <Route path="/listview" component={ListView} />
      <Route path="/flex" component={Flex} />
      <Route path="/empty" component={Empty} />
      <Route path="/wingspace" component={WingSpace} />
      <Route path="/whitespace" component={WhiteSpace} />
      <Route path="/checkbox" component={Checkbox} />
      <Route path="/tabs" component={Tabs} />
      <Route path="/imagepicker" component={ImagePicker} />
      <Route path="/message" component={Message} />
      <Route path="/spin" component={Spin} />
      <Route path="/screen" component={Screen} />
    </Switch>
  </HashRouter>,
  document.getElementById('App')
)
