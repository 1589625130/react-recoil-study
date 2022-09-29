import './App.css'
import { setText, useCount, useText } from './model'
const App = () => {
  const count = useCount()
  const text = useText()
  const useSetText = setText()
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          useSetText(e.target.value)
        }}
      />
      <br />
      <p>{count}</p>
    </div>
  )
}

export default App
