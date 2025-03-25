import Body from './components/Body';
import { Head } from './components/Head';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

/**
 * Head
 * Body
 *  MainContainer
 *    Sidebar
 *    Main Container
 *      Status Container("Pending", "In Progress", "Completed")
 *        To-do cards   
 */


function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head/>
        <Body/>
    </div>
  </Provider>

  );
}

export default App;


