import '../assets/element/index.css'

import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Loading,
  MessageBox,
  Message,
  Notification,
  Popover,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Header,
  Main
} from 'element-ui'

const initEle = Vue => {
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Card)
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Popover)
  Vue.use(Menu)
  Vue.use(Submenu)
  Vue.use(MenuItem)
  Vue.use(MenuItemGroup)
  Vue.use(Header)
  Vue.use(Main)
}

export default initEle
