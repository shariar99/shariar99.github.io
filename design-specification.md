# Portfolio Website Design Specification

## 1. Color Scheme & Gradients

### 1.1 Primary Color Palette
- Primary: `#6366f1` (Current indigo)
- Secondary: `#8b5cf6` (Current purple)
- Accent: `#06b6d4` (Current teal)
- Dark: `#1e293b` (Current slate)
- Light: `#f8fafc` (Current light slate)

### 1.2 Updated Gradient System
- Primary Gradient: `linear-gradient(135deg, #6366f1, #8b5cf6)` (Current)
- Secondary Gradient: `linear-gradient(135deg, #06b6d4, #0ea5e9)` (Teal to sky blue)
- Accent Gradient: `linear-gradient(135deg, #f43f5e, #e11d48)` (Rose to red)
- Background Gradient: `linear-gradient(135deg, #f0f4f8, #e2e8f0)` (Light gray gradient)

### 1.3 Dark Mode Palette
- Dark Background: `#0f172a` (Slate 900)
- Dark Cards: `#1e293b` (Slate 800)
- Dark Text: `#f1f5f9` (Slate 100)
- Dark Accent: `#c7d2fe` (Indigo 200)

### 1.4 Contrast Improvements
- Ensure minimum 4.5:1 contrast ratio for text
- Use accessible color combinations
- Implement proper focus states

## 2. Typography System

### 2.1 Font Selection
- Primary Font: 'Inter' (Current, keep for body text)
- Heading Font: 'Space Grotesk' or 'Poppins' (Modern geometric sans-serif)
- Monospace Font: 'Fira Code' or 'JetBrains Mono' (For code snippets)

### 2.2 Font Hierarchy
- H1: 3.5rem (Hero title)
- H2: 2.5rem (Section titles)
- H3: 1.75rem (Card titles)
- H4: 1.375rem (Subheadings)
- Body: 1.125rem (Paragraphs)
- Small: 0.875rem (Captions, tags)

### 2.3 Typography Improvements
- Add proper line height (1.6 for body text)
- Implement letter spacing for headings
- Add responsive font scaling
- Include font fallbacks

## 3. Glassmorphism Effects

### 3.1 Enhanced Glass Cards
- Background: `rgba(255, 255, 255, 0.15)` (Increased opacity)
- Backdrop Filter: `blur(25px)` (Increased blur)
- Border: `1px solid rgba(255, 255, 255, 0.3)` (Enhanced border)
- Border Radius: `20px` (Slightly increased)
- Box Shadow: `0 8px 32px rgba(31, 38, 135, 0.15)` (Enhanced shadow)

### 3.2 Dark Mode Glass
- Background: `rgba(255, 255, 255, 0.1)` (Reduced opacity)
- Backdrop Filter: `blur(25px)` (Same blur)
- Border: `1px solid rgba(255, 255, 255, 0.18)` (Reduced border opacity)

### 3.3 Layered Depth
- Add multiple glass layers with varying opacities
- Implement parallax effect for background elements
- Use subtle shadows between layers
- Add depth with pseudo-elements

## 4. Micro-interactions

### 4.1 Button Interactions
- Hover Scale: `transform: scale(1.05)`
- Active Scale: `transform: scale(0.98)`
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Focus Ring: `box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3)`

### 4.2 Card Interactions
- Hover Lift: `transform: translateY(-10px)`
- Active Press: `transform: translateY(-2px)`
- Shadow Transition: `box-shadow 0.3s ease`
- Border Glow: `border-color 0.3s ease`

### 4.3 Loading Animations
- Skeleton Loading: `linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)`
- Pulse Animation: `opacity 1.5s ease-in-out infinite`
- Progress Bar: `transform 0.3s ease`

## 5. Section-by-Section Design Improvements

### 5.1 Hero Section
- Enhanced profile image with border gradient
- Improved floating elements with better positioning
- Enhanced typing animation with cursor effect
- Better call-to-action buttons with icon transitions

### 5.2 About Section
- Improved statistics cards with icon integration
- Enhanced about image with border effects
- Better paragraph spacing and readability
- Added personal quote or tagline

### 5.3 Skills Section
- Progress bars for skill levels
- Category filtering tabs
- Enhanced skill cards with hover effects
- Better technology tag design

### 5.4 Experience Section
- Interactive timeline with hover details
- Enhanced date badges with better styling
- Improved highlight lists with icons
- Better company branding integration