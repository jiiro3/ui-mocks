import { SettingsPanel, SettingsItem } from "../components/settings_panel";
import "./styles.css"

export default function RevisionSettingsPanel() {
  return (
    <SettingsPanel onClose={() => { console.log("closed") }} open={true}>
      <div className="settings-section">
        <h3>Details</h3>
        <SettingsItem title="Name:" inputType="text" value={"Enter name"} onChange={(e) => {
          console.log("activated input")
        }} />
        <SettingsItem title="Type:" inputType="select" value={"Select type"}>
          <option value="chat">Chat</option>
          <option value="document">Document</option>
          <option value="code">Code</option>
        </SettingsItem>
        <SettingsItem title="Sources:" inputType="text" value={"Source 1, Source 2"}></SettingsItem>
      </div>
      <div className="settings-section">
        <h3>Style</h3>
        <SettingsItem title="Font Family:" inputType="select">
          <option value="Arial">System Default</option>
          <option value="monospace">Monospace</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
        </SettingsItem>
        <SettingsItem title="Font Size:" inputType="number" options={{ min: "8", max: "32" }}></SettingsItem>
        <SettingsItem title="Response Format:" inputType="select">
          <option value="markdown">Markdown</option>
          <option value="text">Plain Text</option>
          <option value="code">Code</option>
        </SettingsItem>
        <SettingsItem title="Panel Size:" inputType="select">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </SettingsItem>
        <SettingsItem title="Model Name:" inputType="select">
          <option value="gpt-4o">GPT-4o</option>
          <option value="gemini-1.5">Gemini</option>
          <option value="claude">Claude</option>
        </SettingsItem>
        <SettingsItem title="System Prompt:" inputType="textarea" />
      </div>
    </SettingsPanel>

  );

}
