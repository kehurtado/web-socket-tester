# Contributing

We welcome contributions! This project is open source and we appreciate any help you can provide.

## How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (see [Commit Guidelines](#commit-guidelines))
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

## Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/your-username/web-socket-tester.git
   cd web-socket-tester
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Make your changes and test them locally

## Code Standards

- **TypeScript**: Use proper types, avoid `any` when possible
- **Formatting**: Code is automatically formatted (ensure your editor runs format on save)
- **Components**: Use Astro components for server-rendered content, React components for interactive UI
- **Styling**: Use Tailwind CSS classes, follow the existing design system
- **Naming**: Use descriptive names for variables, functions, and components

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add export event log functionality
fix: prevent memory leak in event listeners
docs: update contributing guidelines
refactor: simplify SocketManager class
```

## Pull Request Process

1. **Update documentation** if you're adding features or changing behavior
2. **Ensure your code follows the project's style and standards**
3. **Test your changes** thoroughly
4. **Write a clear PR description** explaining:
   - What changes you made
   - Why you made them
   - How to test the changes
   - Any breaking changes (if applicable)

## Reporting Bugs

If you find a bug, please [open an issue](https://github.com/your-username/web-socket-tester/issues) with:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, version
- **Screenshots**: If applicable

## Suggesting Features

We'd love to hear your ideas! [Open an issue](https://github.com/your-username/web-socket-tester/issues) with:

- **Feature Description**: What you'd like to see
- **Use Case**: Why this would be useful
- **Proposed Solution**: How you envision it working (optional)

## Questions?

Feel free to [open an issue](https://github.com/your-username/web-socket-tester/issues) for questions or discussions.

Thank you for contributing! 🎉

