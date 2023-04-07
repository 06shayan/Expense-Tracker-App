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



const mainContainer = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const paper = { width: '50%' }

function App() {
  return (
    <ContextProvider>
      <Box sx={mainContainer}>
        <Paper elevation={3} sx={paper} >
          <Header />
          <Balance />
          <Toggler />
          <IncomeExpenseSection />
          <TransactionList />
          <AddNewTransaction />
        </Paper>
      </Box>
    </ContextProvider>
  );
}

export default App;
