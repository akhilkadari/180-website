// EmailJS Configuration
// Temporary hardcoded values for testing - replace with environment variables later

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_hm97zvi',
  TEMPLATE_ID: 'template_9zknl2e',
  PUBLIC_KEY: 'RpHQucRtxZB_a5Vid'
};

// How to set up environment variables (once we fix the loading issue):
// 1. Create a file named .env.local in your project root (same level as package.json)
// 2. Add your EmailJS credentials:
//    REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
//    REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
//    REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
// 3. Restart your development server
// 4. The .env.local file should be added to .gitignore to keep credentials secure
