# MIDI Drum Remapper

A web application for remapping drum MIDI notes from one library to another. Helps you convert MIDI drum tracks to work with different drum software and libraries.

## Features

- Upload MIDI files and extract drum notes
- Select source and target drum libraries from built-in presets
- Map each drum note from source to target
- Create, save, and apply custom mappings
- Export and import custom preset configurations
- Download remapped MIDI files
- Dark mode support

## Deployment to Netlify

This application is designed to work as a static site on Netlify. Follow these steps to deploy it:

### Method 1: Direct Upload

1. Run the prepare script:
   - On Windows: `.\deploy.ps1` in PowerShell
   - On macOS/Linux: `bash deploy.sh`

2. Upload the generated `dist` folder to Netlify:
   - Go to [Netlify](https://app.netlify.com/)
   - Drag and drop the `dist` directory onto the Netlify dashboard

### Method 2: Using Netlify CLI

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Run the prepare script:
   - On Windows: `.\deploy.ps1` in PowerShell
   - On macOS/Linux: `bash deploy.sh`

3. Deploy using the CLI:
   ```
   cd dist
   netlify deploy
   ```

### Method 3: GitHub Integration

1. Push this repository to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure the build settings:
   - Base directory: `/`
   - Publish directory: `/`
   - No build command needed

## Local Development

To run the application locally:

1. Clone the repository
2. Open `index.html` in your browser

No server is required as the application runs entirely in the browser. All dependencies are loaded via CDN.

## Customization

### Adding New Presets

To add new drum library presets, edit the `js/presets.js` file and add your mapping to the `DRUM_PRESETS` object.

### Custom User Presets

Users can create their own mappings that are stored in the browser's localStorage. 
They can also export these presets to JSON files for backup or sharing.

## Browser Support

This application uses modern JavaScript features and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## License

MIT License