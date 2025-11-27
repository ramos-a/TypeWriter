# TypeWriter: a writer's app

A distraction-free writing application that hides previously written text, allowing you to focus on the present moment and your current thoughts. Write freely without the burden of reviewing or editing what came before.

## Features

- **Distraction-Free Writing**: Only the current line is visible—all previous text is hidden, eliminating the temptation to edit or second-guess yourself
- **Light & Dark Modes**: Choose your preferred writing environment with built-in theme support
- **Easy File Management**: Save your work as `.txt` files in a dedicated folder with a single click
- **Cross-Platform**: Built with Electron for a native experience on Windows, macOS, and Linux
- **Lightweight & Fast**: Simple JavaScript-based implementation ensures smooth performance

## Getting Started

### Installation

Download the latest installer or packaged application from the [Releases](https://github.com/ramos-a/TypeWriter/releases) page.

- **Windows**: Download the `.exe` installer or the packaged program ready to use

### Running from Source

If you prefer to build and run from source:

```bash
npm install
npm start
```

## Usage

1. **Start Writing**: Open TypeWriter and begin typing immediately
2. **Switch Themes**: Toggle between light and dark modes using the theme selector
3. **Save Your Work**: Click the save button to export your text as a `.txt` file to a designated folder in 'Documents'

## Built With

- [Electron](https://www.electronjs.org/) - Cross-platform desktop application framework
- HTML5, CSS3, and vanilla JavaScript - Simple and efficient frontend

## Project Structure

```
.
├── main.js              # Electron main process
├── preload.js          # Preload script for security
├── forge.config.js     # Electron Forge configuration
├── package.json        # Project dependencies
├── src/
│   ├── typewriter.html # Main application UI
│   ├── script.js       # Application logic
│   ├── display.js      # Display utilities
│   └── styles.css      # Application styling
└── images/             # Assets and images
```

## License

This project is open source and available on [GitHub](https://github.com/ramos-a/TypeWriter).

---

Enjoy distraction-free writing!