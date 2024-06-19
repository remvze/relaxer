<div align="center">
  <h2>Relaxer 🎈</h2>
  <p>Breathing exercises in your terminal.</p>
  <a href="https://npmjs.com/package/relaxer"><strong>npm</strong></a> | <a href="https://buymeacoffee.com/remvze">Buy Me a Coffee</a>
</div>

## Table of Contents

- ⚡ [Installation](#installation)
- ✨ [Usage](#usage)
- 🔮 [Commands](#commands)
- 🤝 [Contributing](#contributing)
- ⭐ [Support](#support)
- 📜 [License](#license)

## Installation

To install Relaxer, you need Node.js and npm installed on your machine. You can install the CLI tool globally using the following command:

```bash
npm install -g relaxer
```

## Usage

After installation, you can run the CLI tool using the following command:

```bash
relaxer [command] [options]
```

To see a list of available commands and options, run:

```bash
relaxer --help
```

## Commands

### `exercise`

Start a breathing exercise.

```bash
relaxer exercise [options]
```

**Options:**

- `--type <type>`: The type of the exercise (i.e., `box`, `4-7-8`, `pursed-lip`, `resonant`).

### `custom`

Start a custom breathing exercise.

```bash
relaxer custom [options]
```

**Options:**

- `--inhale <seconds>`: Custom breath in time in seconds. **(Required)**
- `--hold-inhale <seconds>`: Custom hold time after inhaling in seconds.
- `--exhale <seconds>`: Custom breath out time in seconds. **(Required)**
- `--hold-exhale <seconds>`: Custom hold time after exhaling in seconds.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive commit message.
4. Push your changes to your fork.
5. Open a pull request with a detailed description of your changes.

Please make sure to follow our [Contributing Guidelines](CONTRIBUTING.md).

## Support

If you find this project useful, please consider supporting it by giving it a star on GitHub. Your support helps us continue to improve and maintain the project.

You can also support the project by [making a donation](https://buymeacoffee.com/remvze). Every little bit helps and is greatly appreciated!

Thank you for your support!

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Relaxer! If you have any questions or feedback, please open an issue on GitHub.
