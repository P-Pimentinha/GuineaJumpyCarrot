class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if (
        (e.key === 'ArrowRight' ||
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp') &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      }
    });

    window.addEventListener('keyup', (e) => {
      if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp'
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}

export default InputHandler;

// export default class InputHandler {
//   constructor() {
//     this.lastKey = 'STANDING RIGHT';

//     window.addEventListener('keydown', (e) => {
//       switch (e.key) {
//         case 'ArrowLeft':
//           this.lastKey = 'PRESS left';
//           break;
//         case 'ArrowUp':
//           this.lastKey = 'PRESS up';
//           break;
//         case 'ArrowDown':
//           this.lastKey = 'PRESS down';
//           break;
//         case 'ArrowRight':
//           this.lastKey = 'PRESS right';
//           break;
//       }
//     });
//     window.addEventListener('keyup', (e) => {
//       switch (e.key) {
//         case 'ArrowLeft':
//           this.lastKey = 'RELEASE left';
//           break;
//         case 'ArrowUp':
//           this.lastKey = 'RELEASE up';
//           break;
//         case 'ArrowDown':
//           this.lastKey = 'RELEASE down';
//           break;
//         case 'ArrowRight':
//           this.lastKey = 'RELEASE right';
//           break;
//       }
//     });
//   }
// }
