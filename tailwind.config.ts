/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',  // Deep black as primary
        'primary-hover': '#1F1F1F',  // Slightly lightened black for hover
        'primary-foreground': 'var(--primary-foreground)',  // New: White for text on primary
        secondary: '#F9F9F9',  // Light gray (client secondary bg)
        'secondary-foreground': 'var(--secondary-foreground)',  // New: Black for text on secondary
        accent: '#FFFFFF',  // White
        'accent-foreground': 'var(--accent-foreground)',  // New: Black for text on accent
        section: '#F9F9F9',  // Light gray
        neutral: '#EDEDED',  // Adjusted lighter gray for gradation
        'muted-foreground': 'var(--muted-foreground)',  // New: Gray for subdued text
        highlight: '#ECCA45',  // Muted gold as highlight
        discount: '#F13838',  // Streetwear red for discounts
        destructive: 'var(--destructive)',  // New: Red for warnings/destructive actions
        success: '#ECCA45',  // Muted gold
      },
    },
  },
  plugins: [],
};