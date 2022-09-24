/* @refresh reload */
import { render } from 'solid-js/web';

import './index.scss';
import App from './App';

//TODO
//========== Chalanging
// Tree
// Collapse
// Popover
// Segmented
// Notification
// Modal
// Tabs
// Popconfirm
// Context menu (but not wrapper other)

//========== Basic
// Breadcrumb
// DatePicker
// ColorPicker
// Slider
// Avatar
// Badge
// Rate
// Tag
// Progress/Spin

// add disabled to all component (plus pointer events none)
// change all click from border change to changing opacity ver slightly like on input with end button
// Smart Table

render(() => <App />, document.getElementById('root') as HTMLElement);
