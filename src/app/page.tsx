"use client";

import { useState } from 'react'
import SettingsPanel from "./components/settings_panel";
import { Button } from '@mui/material';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Settings</Button>
      <SettingsPanel
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
