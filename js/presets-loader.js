/**
 * Presets Loader for MIDI Drum Remapper
 * Dynamically loads preset options from the DRUM_PRESETS object
 */

// Function to populate dropdown selects with preset options
function populatePresetDropdowns() {
    // Get references to the dropdown elements
    const sourcePresetSelect = document.getElementById('sourcePreset');
    const targetPresetSelect = document.getElementById('targetPreset');
    
    // Clear existing options (if any)
    sourcePresetSelect.innerHTML = '';
    targetPresetSelect.innerHTML = '';
    
    // Check if DRUM_PRESETS exists
    if (!window.DRUM_PRESETS) {
        console.error('DRUM_PRESETS not found. Make sure presets.js is loaded before this script.');
        return;
    }
    
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

// Ensure DRUM_PRESETS is available in the window object
window.DRUM_PRESETS = DRUM_PRESETS;

// Run immediately after the script is loaded and DRUM_PRESETS is available
populatePresetDropdowns();
