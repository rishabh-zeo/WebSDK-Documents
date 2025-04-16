# Zeotap Web SDK Documentation

This repository contains the documentation and examples for the Zeotap Web SDK.

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`.

## Deployment to GitHub Pages

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

To deploy manually:

1. Make sure you have the `gh-pages` package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

The documentation will be available at: https://rishabh-zeo.github.io/WebSDK-Documents/

## Project Structure

- `/src/pages` - Contains all the documentation pages and examples
- `/src/components` - Reusable components used across the documentation
- `/public` - Static assets and the SDK script

## Contributing

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.