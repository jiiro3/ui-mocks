
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  open,
  onClose,
  children
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="temporary"
      SlideProps={{
        timeout: 300,
      }}
      PaperProps={{
        sx: {
          width: {
            xs: '100%',
            sm: 400,
          },
          p: 3,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography variant="h6">Settings</Typography>
          <IconButton onClick={onClose} size="large" edge="end">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsPanel;
