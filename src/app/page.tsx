"use client";

import { useState } from 'react'
import SlidingConfigPane from "./components/sliding_panel/sliding_panel"
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#000'
    },
    text: {
      primary: '#ffffff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000',
        }
      }
    }
  }
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Button onChange={() => setIsOpen(!isOpen)}>Toggle Panel</Button>
      <SlidingConfigPane></SlidingConfigPane>
    </div>
  );
}
