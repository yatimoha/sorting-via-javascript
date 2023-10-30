import './App.css'
import { bubbleSorting, shakerSorting } from './sorting/';
import { numbers } from './mocks/index.js';

function App() {

  return (
    <>
      <section>
        <h2>Default array:</h2>
        <pre>
          [{numbers.join(', ')}]
        </pre>
      </section>
      <br/>
      <section>
        <h2>Bubble sorting:</h2>
        <textarea contentEditable rows={9} value={bubbleSorting.toString()}></textarea>
        <pre>
          Result: [{bubbleSorting().join(', ')}]
        </pre>
        <pre>
          Complexity: O(n<sup>2</sup>)
        </pre>
      </section>
      <br/>
      <section>
        <h2>Shaker sorting:</h2>
        <textarea contentEditable rows={9} value={shakerSorting.toString()}></textarea>
        <pre>
          Result: [{shakerSorting().join(', ')}]
        </pre>
        <pre>
          Complexity: O(n<sup>2</sup>)
        </pre>
      </section>
      <br/>
    </>
  )
}

export default App
