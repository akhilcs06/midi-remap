/**
 * Presets Loader for MIDI Drum Remapper
 * Dynamically loads preset options from the DRUM_PRESETS object
 */
import { DRUM_PRESETS } from './presets.js';

// Function to populate dropdown selects with preset options
function populatePresetDropdowns() {
    // Get references to the dropdown elements
    const sourcePresetSelect = document.getElementById('sourcePreset');
    const targetPresetSelect = document.getElementById('targetPreset');
    
    // Clear existing options (if any)
    sourcePresetSelect.innerHTML = '';
    targetPresetSelect.innerHTML = '';
      // No need to check if DRUM_PRESETS exists since we're using ES modules
    // The import would fail if the module wasn't available
    
    // Create and append options for each preset in DRUM_PRESETS
    Object.keys(DRUM_PRESETS).forEach(presetKey => {
        const preset = DRUM_PRESETS[presetKey];
        
        // Create option elements
        const sourceOption = document.createElement('option');
        const targetOption = document.createElement('option');
        
        // Set value and text
        sourceOption.value = presetKey;
        sourceOption.textContent = preset.name;
        
        targetOption.value = presetKey;
        targetOption.textContent = preset.name;
        
        // Append options to their respective dropdowns
        sourcePresetSelect.appendChild(sourceOption);
        targetPresetSelect.appendChild(targetOption);
    });
    
    console.log(`Populated dropdown menus with ${Object.keys(DRUM_PRESETS).length} preset options`);
}

// We'll execute this function immediately rather than waiting for DOMContentLoaded
// since the script is loaded after the DOM elements we need
// Export the function for global access
window.populatePresetDropdowns = populatePresetDropdowns;

// No need to add DRUM_PRESETS to the window object as we're using ES modules

// Run immediately after the script is loaded and DRUM_PRESETS is available
populatePresetDropdowns();
