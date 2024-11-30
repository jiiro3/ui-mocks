
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SettingsItemProps {
  title: string;
  inputType: 'text' | 'number' | 'select' | 'toggle' | 'textarea';
  value?: string | number | boolean;
  onChange?: (value: any) => void;
  options?: { min: string; max: string };
  children?: React.ReactNode;
}

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  title,
  inputType,
  value,
  onChange,
  options,
  children
}) => {
  const renderInput = () => {
    switch (inputType) {
      case 'text':
        return (
          <input
            type="text"
            value={value as string}
            onChange={(e) => onChange?.(e.target.value)}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            value={value as number}
            onChange={(e) => onChange?.(Number(e.target.value))}
          />
        );
      case 'select':
        return (
          <select
            value={value as string}
            onChange={(e) => onChange?.(e.target.value)}
          >
            children
          </select>
        );
      case 'toggle':
        return (
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={(e) => onChange?.(e.target.checked)}
          />);
      case 'textarea':
        return (
          <textarea
            value={value as string}
            onChange={(e) => onChange?.(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              resize: 'vertical',
              minHeight: '100px'
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-item">
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      {renderInput()}
    </div>
  );
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  open,
  onClose,
  children
}) => {
  return (
    <Drawer
      className="settings-drawer"
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

export { SettingsPanel, SettingsItem };
