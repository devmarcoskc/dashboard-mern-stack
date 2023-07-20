import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme }from '@mui/material/styles';
import {themeSettings} from "./theme.js";
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Layout from './pages/layout';
import Products from './pages/products/index.jsx';
import Customers from './pages/customers/index.jsx';
import Transactions from './pages/transactions/index.jsx';
import Geography from './pages/geography/index.jsx';
import Overview from './pages/sales/index.jsx';
import Daily from './pages/daily/index.jsx';
import Monthly from './pages/monthly/index.jsx';
import Breakdown from './pages/breakdown/index.jsx';
import Admins from './pages/admins/index.jsx';
import Performance from "./pages/performance/index.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() =>createTheme(themeSettings(mode)), [mode]);
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/geography" element={<Geography/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/daily" element={<Daily/>} />
            <Route path="/monthly" element={<Monthly/>} />
            <Route path="/breakdowns" element={<Breakdown/>} />
            <Route path="/admin" element={<Admins/>} />
            <Route path="/performance" element={<Performance/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
