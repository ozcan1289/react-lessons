import { createRoot } from 'react-dom/client'

const myElement = (
  
  <div>
    <h1>Merhaba Dünya!</h1>
    <p>React öğreniyorum.</p>
  </div>

);

createRoot(document.getElementById('root')).render(
  myElement
);

//class Car {
//  constructor(name) {
//    this.brand = name;
//  }
//  
//  present() {
//    return 'I have a ' + this.brand;
//  }
//}

//const mycar = new Car("Ford");
//console.log(mycar.present());