const {contextBridge} = require('electron')

contextBridge.exposeInMainWorld('inc_attr', (attr_id) => {
  console.log(document.getElementById('skillpoints'))
  console.log(document.getElementById(attr_id))
})

contextBridge.exposeInMainWorld('dec_attr', (attr_id) => {
  console.log(document.getElementById('skillpoints'))
  console.log(document.getElementById(attr_id))
})