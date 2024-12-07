import { SettingsPanel, SettingsItem, SettingsRow } from "../components/settings_panel";
import React from "react";
import "./styles.css"

export default function RevisionSettingsPanel() {
  const [type, setType] = React.useState('chat');
  const [name, setName] = React.useState('');
  const [font, setFont] = React.useState('arial');
  const [model, setModel] = React.useState('gpt-4o');
  const [sources, setSources] = React.useState('');
  const [fontSize, setFontSize] = React.useState('16');
  const [panelSize, setPanelSize] = React.useState('medium');
  const [systemPrompt, setSystemPrompt] = React.useState('');
  const [responseFormat, setResponseFormat] = React.useState('markdown');

  return (
    <SettingsPanel onClose={() => { console.log("closed") }} open={true}>
      <div className="settings-section">
        <h3>Details</h3>
        <SettingsRow>
          <SettingsItem title="Name:" inputType="text" value={name} onChange={(e) => {
            setName(e);
          }} />
          <SettingsItem
            title="Type:"
            inputType="select"
            value={type}
            options={[
              { label: "Chat", value: "chat" },
              { label: "Document", value: "document" },
              { label: "Code", value: "code" }
            ]}
            onChange={(e) => {
              setType(e)
            }}
          >
          </SettingsItem>
        </SettingsRow>
        <SettingsItem
          title="Sources:"
          inputType="text"
          value={sources}
          onChange={(e) => {
            setSources(e);
          }}></SettingsItem>
      </div>
      <div className="settings-section">
        <h3>Style</h3>
        <SettingsItem
          title="Font Family:"
          inputType="select"
          value={font}
          options={[
            { label: "System default", value: "arial" },
            { label: "Monospace", value: "monospace" },
            { label: "Serif", value: "serif" },
            { label: "Sans-serif", value: "sans-serif" }
          ]}
          onChange={(e) => {
            setFont(e);
          }}
        >
        </SettingsItem>
        <SettingsItem
          title="Font Size:"
          inputType="number"
          properties={{ min: "8", max: "32" }}
          value={fontSize}
          onChange={(e) => {
            setFontSize(e)
          }}></SettingsItem>
        <SettingsItem
          title="Response Format:"
          inputType="select"
          value={responseFormat}
          options={[
            { label: "Markdown", value: "markdown" },
            { label: "text", value: "Plain Text" },
            { label: "Code", value: "code" }
          ]}
          onChange={(e) => {
            setResponseFormat(e);
          }}
        >
        </SettingsItem>
        <SettingsItem
          title="Panel Size:"
          inputType="select"
          value={panelSize}
          options={[
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" }
          ]}
          onChange={(e) => {
            setPanelSize(e)
          }}
        >
        </SettingsItem>
        <SettingsItem
          title="Model Name:"
          inputType="select"
          value={model}
          options={[
            { label: "GPT-4o", value: "gpt-4o" },
            { label: "Gemini", value: "gemini-1.5" },
            { label: "Claude", value: "claude" }
          ]}
          onChange={(e) => {
            setModel(e);
          }}
        >
        </SettingsItem>
        <SettingsItem
          title="System Prompt:"
          label="Prompt"
          inputType="textarea"
          value={systemPrompt}
          onChange={(e) => { setSystemPrompt(e); }} />
      </div>
    </SettingsPanel>

  );

}
