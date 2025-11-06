# Socket.IO Client Tester

A web-based Socket.IO client testing tool built with Astro. Create multiple WebSocket connections, test rooms, listen to events, send messages, and view real-time event logs.

## Features

- 🔌 **Multiple Connections**: Create and manage multiple Socket.IO connections simultaneously
- 🏠 **Room Management**: Join and leave rooms for each connection
- 📡 **Event Listeners**: Listen to specific events and view incoming messages
- 📤 **Send Events**: Send custom events with JSON payloads using enhanced CodeMirror editor
- 📋 **Event Log**: Real-time log of all sent, received, and system events
- 💾 **State Persistence**: Automatically saves your connections and form data using Zustand with localStorage
- 🔍 **Query Parameters**: Add custom query parameters to Socket.IO connections
- ✨ **JSON Editor Features**: 
  - Real-time JSON validation with syntax error highlighting
  - Auto-format JSON with button or keyboard shortcut (Ctrl/Cmd + Shift + F)
  - Autocompletion for JSON syntax
  - Visual indicators for valid/invalid JSON
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 🎨 **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- [Astro](https://astro.build) - Web framework
- [Socket.IO Client](https://socket.io/docs/v4/client-api/) - WebSocket client
- [CodeMirror](https://codemirror.net) - JSON editor with linting and validation
- [Zustand](https://zustand-demo.pmnd.rs) - State management with localStorage persistence
- [React](https://react.dev) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (or npm/pnpm)

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:4321](http://localhost:4321) to see the app.

### Build

```bash
bun build
```

### Preview

```bash
bun preview
```

## Usage

1. Enter a Socket.IO server URL (e.g., `http://localhost:3000`)
2. Optionally specify a namespace (defaults to `/`)
3. Add query parameters if needed (e.g., authentication tokens)
4. Click "Connect" to create and connect to a new connection
5. Use the interface to:
   - Join/leave rooms
   - Add event listeners
   - Send custom events with JSON data using the enhanced editor:
     - Type JSON directly or paste it
     - Use "Format JSON" button or `Ctrl/Cmd + Shift + F` to format
     - See real-time validation feedback
   - View real-time event logs

### State Persistence

All your connections, form data, query parameters, rooms, and event listeners are automatically saved to localStorage. When you reload the page, everything will be restored (connections will be in disconnected state, ready to reconnect).

### JSON Editor

The JSON editor includes:
- **Real-time validation**: See syntax errors as you type
- **Auto-formatting**: Format JSON with proper indentation
- **Keyboard shortcuts**: `Ctrl/Cmd + Shift + F` to format
- **Visual feedback**: Green checkmark for valid JSON, red error message for invalid

## Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/         # Static assets (SVG images)
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/     # Astro and React components
│   │   ├── ui/         # shadcn/ui React components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   └── switch.tsx
│   │   ├── EventListenersSection.astro
│   │   ├── EventLog.astro
│   │   ├── NewConnectionForm.astro
│   │   ├── RoomsSection.astro
│   │   ├── SendEventSection.astro
│   │   ├── ThemeToggle.astro
│   │   └── Welcome.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── lib/            # Utilities
│   │   └── utils.ts
│   ├── pages/          # Route pages
│   │   └── index.astro
│   ├── store/          # State management
│   │   └── socketStore.ts  # Zustand store with persistence
│   └── styles/         # Global styles
│       └── global.css
├── astro.config.mjs    # Astro configuration
├── components.json     # shadcn/ui configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── bun.lock            # Bun lockfile
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
