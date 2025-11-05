# Socket.IO Client Tester

A web-based Socket.IO client testing tool built with Astro. Create multiple WebSocket connections, test rooms, listen to events, send messages, and view real-time event logs.

## Features

- 🔌 **Multiple Connections**: Create and manage multiple Socket.IO connections simultaneously
- 🏠 **Room Management**: Join and leave rooms for each connection
- 📡 **Event Listeners**: Listen to specific events and view incoming messages
- 📤 **Send Events**: Send custom events with JSON payloads using CodeMirror editor
- 📋 **Event Log**: Real-time log of all sent, received, and system events
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 🎨 **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- [Astro](https://astro.build) - Web framework
- [Socket.IO Client](https://socket.io/docs/v4/client-api/) - WebSocket client
- [CodeMirror](https://codemirror.net) - JSON editor
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
3. Click "Connect" to create and connect to a new connection
4. Use the interface to:
   - Join/leave rooms
   - Add event listeners
   - Send custom events with JSON data
   - View real-time event logs

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
