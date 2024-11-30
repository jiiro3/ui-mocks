"use client";

import { useState } from 'react'
import { SettingsPanel } from "./components/settings_panel";
import RevisionSettingsPanel from "./revision/settings_panel";
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ background: "#242424" }}>
      <RevisionSettingsPanel />
    </div>
  );
}
