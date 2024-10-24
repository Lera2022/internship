/**
* This way of using it can reside ONLY
* inside of a Vue component
*/

import { useQuasar } from 'quasar'
import CustomComponent from '..path.to.component..'

setup () {
const $q = useQuasar()

$q.dialog({
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
}