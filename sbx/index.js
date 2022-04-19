//let {ipcRender} = require('electron')
//let nodeConsole = require('console');
//let myConsole = new nodeConsole.Console(process.stdout, process.stderr);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.inc').forEach((x) => { 
    x.addEventListener('click', (event) => {
      let attr = event.currentTarget.parentElement.querySelector(".attribute")
      let available_skillpoints = document.querySelector("#skillpoints")
      // console.log(available_skillpoints.innerHTML.valueOf());
      
      let attr_value = parseInt(attr.innerText, 10);
      let skillpoints_value = parseInt(available_skillpoints.innerText, 10);

      if (attr_value > 4) return;
      if (skillpoints_value < 1) return;

      // console.log(attr)

      attr.innerText = attr_value + 1;
      available_skillpoints.innerText = skillpoints_value - 1;

    })
  })

  document.querySelectorAll('.dec').forEach((x) => { 
    x.addEventListener('click', (event) => {
      let attr = event.currentTarget.parentElement.querySelector(".attribute")
      let available_skillpoints = document.querySelector("#skillpoints")
      // console.log(available_skillpoints.innerHTML.valueOf());
      
      let attr_value = parseInt(attr.innerText, 10);
      let skillpoints_value = parseInt(available_skillpoints.innerText, 10);

      if (attr_value < 2) return;
      // if (skillpoints_value < 1) return;

      // console.log(attr)

      attr.innerText = attr_value - 1;
      available_skillpoints.innerText = skillpoints_value + 1;
    })
  })
})