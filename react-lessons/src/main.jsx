import { createRoot } from 'react-dom/client'

const myElement = (
  
  <div>
    <h1>Merhaba Dünya!</h1>
    <p>React öğreniyorum.</p>
  </div>

);




createRoot(document.getElementById('root')).render(
  myElement
)  