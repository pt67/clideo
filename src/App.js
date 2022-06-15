import './bootstrap/css/bootstrap.min.css';
import './App.css';
import FormList from './com/form_list';


const _min = "<input type=''>";
const _max = "<input type=''>";
const _dur = "<input type=''>";
const _int = "<input type=''>";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormList min={ _min } max={ _max } dur={ _dur } inter={ _int} />
        
      </header>
    </div>
  );
}

export default App;
