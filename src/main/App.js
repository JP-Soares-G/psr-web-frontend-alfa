import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
function App() {

	return (
		<div className="App">
			<Routes />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
