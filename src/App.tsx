import './App.css'
import { bubbleSorting, combSorting, shakerSorting, simpleSorting } from './sorting/';
import { numbers } from './mocks';
import { SortingSection } from './components';

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
      <SortingSection sortingFunction={simpleSorting}>
        <h2>Simple sorting:</h2>
      </SortingSection>
      <SortingSection sortingFunction={bubbleSorting}>
        <h2>Bubble sorting:</h2>
      </SortingSection>
      <SortingSection sortingFunction={shakerSorting}>
        <h2>Shaker sorting:</h2>
      </SortingSection>
      <SortingSection sortingFunction={combSorting}>
        <h2>Comb sorting:</h2>
      </SortingSection>
    </>
  )
}

export default App
