import Vue from 'vue'

// Vue.use({
//   install(Vue) {
//     const $window = Vue.observable({
//       hideOverlay: true,
//     })

//     let getHideOverLayFlag = function () {
//       let bp = this.$vueify.breakpoint.name;
//       console.log(bp);
//       switch (bp) {
//         case 'xs': return window.hideOverlay = false;
//         case 'sm': return $window.hideOverlay = false;
//         case 'md': return $windowg.hideOverlay = true;
//         case 'lg': return $window.hideOverlay = true;
//         case 'xl': return $window.hideOverlay = true;
//       }
//     };
//     global.addEventListener('resize', getHideOverLayFlag);

//     Vue.prototype.$window = $window
//   }
// })
