# 💕 Valentine's Bloom - Interactive Proposal Website

A beautiful and interactive Valentine's Day proposal website featuring premium animated blooming flowers, smooth interactions, and a delightful celebration experience.

## ✨ Features

- **Stunning Flower Animations**: Premium 3D blooming flowers with realistic petal animations, glowing effects, and swaying leaves
- **Interactive Proposal**: Two buttons with engaging interactions - a Yes button that leads to celebration, and an evasive No button that moves away
- **Celebration View**: Beautiful acceptance page with dancing GIF, celebration messages, and a personal message input box
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Aesthetic**: Elegant dark theme with glowing elements and atmospheric lighting
- **Smooth Transitions**: Fluid animations and transitions throughout the experience
- **Customizable**: Easy to personalize messages, fonts, colors, and animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Custom CSS Animations
- **Bundler**: Vite
- **Icons**: Lucide React
- **Testing**: Vitest



🚀 Usage
Customization
Change the Proposal Text

Edit the heading in ValentineProposal.tsx
Modify font, size, and styling in the component
Change Celebration Date

Update the date "19th" in the celebration message
Edit ValentineProposal.tsx line where it says "19th"
Modify Colors

Update color variables in index.css
Adjust Tailwind theme in tailwind.config.ts
Change the Celebration GIF

Replace the GIF URL in ValentineProposal.tsx
Use any giphy or image URL
Adjust Animation Timing

Modify animation delays in index.css
Update PremiumFlowerAnimation.tsx for flower timing adjustments


📁 Project Structure

src/
├── components/
│   ├── PremiumFlowerAnimation.tsx    # Main flower animation component
│   ├── ValentineProposal.tsx         # Proposal UI component
│   ├── Tulip.tsx                     # Individual tulip component
│   ├── TulipGarden.tsx               # Garden container
│   └── ui/                           # UI component library
├── App.tsx                           # Main app component
├── App.css                           # App styles
├── index.css                         # Global styles & animations
├── main.tsx                          # Entry point
└── vite-env.d.ts                     # Type definitions

🎨 Animation Features
Flower System
Growth Sequence: Stems grow first, followed by leaves and flowers
3D Effects: Realistic perspective transforms and depth
Glow Effects: Pulsing glows on flower centers
Interactive Sway: Flowers gently sway with natural motion
Particle Effects
Floating Lights: Yellow and pink glowing particles
Animated Grass: Swaying grass at the bottom
Firefly Particles: Drifting particles with fade animations
🎯 Features Breakdown
Proposal Stage
Large elegant heading asking "Will You Be My Valentine?"
Yes button with glow effect
Interactive No button that escapes cursor

Celebration Stage
Dancing celebration GIF
Success message with celebration emoji
Custom message input box
Floating heart animations
Personalization prompt


📱 Browser Support
Chrome/Chromium (Latest)
Firefox (Latest)
Safari (Latest)
Edge (Latest)
Mobile browsers (iOS Safari, Chrome Mobile)


🎁 Perfect For
Valentine's Day proposals
Anniversary celebrations
Romantic gestures
Special occasions
Love confessions
