/**
* This way of using it can reside outside
* of a Vue component as well
*/

import { Dialog } from 'quasar'
import CustomComponent from '..path.to.component..'

Dialog.create({
component: CustomComponent,

// props forwarded to your custom component
componentProps: {
text: 'something',
persistent: true,
// ...more..props...
}
}).onOk(() => {
console.log('OK')
}).onCancel(() => {
console.log('Cancel')
}).onDismiss(() => {
console.log('Called on OK or Cancel')
})