import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import './App.css';
import { ContextProvider } from './GlobalContext';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenseSection from './components/IncomeExpenseSection';
import TransactionList from './components/TransactionList';

const paper = { padding: '30px', maxHeight: '97vh' }

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Container maxWidth="sm" >
          <Paper elevation={6} sx={paper} >
            <Header />
            <Balance />
            <IncomeExpenseSection />
            <TransactionList />
            <AddNewTransaction />
          </Paper>
        </Container>
      </ContextProvider>
    </div>

  );
}

export default App;
