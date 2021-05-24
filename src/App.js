import Counter from './components/Counter';
import store from './redux/store';
import { Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter /> 
      </div>
       
    </Provider>
    
      
  );
}

export default App;
