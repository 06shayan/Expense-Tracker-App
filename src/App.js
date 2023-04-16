import './App.css';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenseSection from './components/IncomeExpenseSection';
import Toggler from './components/Toggler';
import TransactionList from './components/TransactionList';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ContextProvider } from './GlobalContext';
import ResetDialogueBox from './components/ResetDialogueBox';



const mainContainer = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
const paper = { width: '60%', padding: '30px', backgroundColor: '#FFEAEA' }

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Box sx={mainContainer}>
          <Paper elevation={3} sx={paper} >
            <Header />
            <Balance />
            <ResetDialogueBox/>
            {/* <Toggler /> */}
            <IncomeExpenseSection />
            <TransactionList />
            <AddNewTransaction />
          </Paper>
        </Box>
      </ContextProvider>
    </div>

  );
}

export default App;
