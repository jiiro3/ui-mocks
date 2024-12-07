import React, { useState } from 'react';

const SlidingConfigPane: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example state for fields
  const [name, setName] = useState("side pane 1");
  const [type, setType] = useState("Regular");
  const [sources, setSources] = useState<string[]>(["main"]);
  const [newSource, setNewSource] = useState("");
  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontSize, setFontSize] = useState(12);
  const [responseFormat, setResponseFormat] = useState("Rich Text");
  const [panelSize, setPanelSize] = useState("300 × 400");
  const [modelName, setModelName] = useState("Claude 3.5 Sonnet");
  const [systemPromptType, setSystemPromptType] = useState("Custom...");
  const [systemPrompt, setSystemPrompt] = useState("");

  const addSource = () => {
    if (newSource.trim()) {
      setSources((prev) => [...prev, newSource.trim()]);
      setNewSource("");
    }
  };

  const removeSource = (src: string) => {
    setSources((prev) => prev.filter((s) => s !== src));
  };

  return (
    <>
      <button
        style={{
          margin: 20,
          padding: '10px 20px',
          cursor: 'pointer',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Toggle Config Pane
      </button>

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '320px',
          height: '100vh',
          background: '#222',
          color: '#fff',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          boxSizing: 'border-box',
          padding: '20px',
          overflowY: 'auto',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Configure Pane</h2>

        {/* Details Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Details</h3>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Name:
            <input
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '8px' }}>
            Type:
            <select
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Regular</option>
              <option>Other</option>
            </select>
          </label>

          <div style={{ marginBottom: '8px' }}>
            <span style={{ display: 'block', marginBottom: '4px' }}>Sources:</span>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
              {sources.map((src) => (
                <div
                  key={src}
                  style={{
                    background: '#444',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{src}</span>
                  <button
                    style={{
                      background: 'transparent',
                      color: '#fff',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onClick={() => removeSource(src)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <input
                style={{
                  flex: 1,
                  padding: '6px',
                  borderRadius: '4px',
                  border: '1px solid #444',
                  background: '#333',
                  color: '#fff',
                }}
                placeholder="Add Source"
                value={newSource}
                onChange={(e) => setNewSource(e.target.value)}
              />
              <button
                style={{
                  background: '#555',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={addSource}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Style Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Style</h3>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Font Family:
            <input
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '8px' }}>
            px:
            <input
              type="number"
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '8px' }}>
            Response Format:
            <select
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={responseFormat}
              onChange={(e) => setResponseFormat(e.target.value)}
            >
              <option>Rich Text</option>
              <option>Plain Text</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '8px' }}>
            Panel Size:
            <select
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={panelSize}
              onChange={(e) => setPanelSize(e.target.value)}
            >
              <option>300 × 400</option>
              <option>400 × 500</option>
              <option>500 × 600</option>
            </select>
          </label>
        </div>

        {/* Model Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3>Model</h3>
          <label style={{ display: 'block', marginBottom: '8px' }}>
            Model Name:
            <input
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
              }}
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '8px' }}>
            System Prompt:
            <select
              style={{
                display: 'block',
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #444',
                background: '#333',
                color: '#fff',
                marginBottom: '8px',
              }}
              value={systemPromptType}
              onChange={(e) => setSystemPromptType(e.target.value)}
            >
              <option>Custom...</option>
              <option>Default</option>
              <option>None</option>
            </select>
            {systemPromptType === "Custom..." && (
              <textarea
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '6px',
                  marginTop: '4px',
                  borderRadius: '4px',
                  border: '1px solid #444',
                  background: '#333',
                  color: '#fff',
                }}
                rows={5}
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
              ></textarea>
            )}
          </label>
        </div>

      </div>
    </>
  );
};

export default SlidingConfigPane;
