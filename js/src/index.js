import Alert from './alert'
import Button from './button'
import Carousel from './carousel'
import Collapse from './collapse'
import Dropdown from './dropdown'
import Modal from './modal'
import Popover from './popover'
import ScrollSpy from './scrollspy'
import Tab from './tab'
import Tooltip from './tooltip'
import Util from './util'

function init() {
  Alert.init()
  Button.init()
  Carousel.init()
  Collapse.init()
  Dropdown.init()
  Modal.init()
  Popover.init()
  ScrollSpy.init()
  Tab.init()
  Tooltip.init()
  Util.init()
}

export {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  ScrollSpy,
  Tab,
  Tooltip,
  Util,
  init
}

export default init

