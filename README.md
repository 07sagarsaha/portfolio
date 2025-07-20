# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring interactive UI elements and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: System-aware theme switching with smooth transitions
- **Interactive UI Elements**:
  - Image carousel for project showcases
  - Particle background effects
  - Custom cursor effects
  - Loading screen animations
  - Glass morphism effects
- **Project Showcase**: Dynamic project grid with image sliders and tech stack tags
- **Contact Form**: Integrated email functionality using Gmail SMTP
- **Modern Stack**: Built with Next.js 13, TypeScript, and Tailwind CSS
- **Performance Optimized**: Static site generation for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Effects**: Three.js
- **Form Handling**: React Hook Form
- **Email Integration**: Gmail SMTP with Nodemailer
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/07sagarsaha/portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Gmail credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
```

**Setting up Gmail App Password:**
1. Go to your Google Account settings
2. Select Security
3. Under "Signing in to Google," select 2-Step Verification (must be enabled)
4. At the bottom of the page, select App passwords
5. Select the app and device you want to generate the app password for
6. Follow the instructions to enter the app password

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                  # Next.js 13 app directory
├── components/          # React components
│   ├── sections/       # Page sections
│   ├── ui/            # UI components
│   └── ...
├── lib/                # Utility functions and data
├── public/            # Static assets
└── styles/           # Global styles
```

## 📱 Features Breakdown

### Project Showcase

- Image slider with automatic rotation
- Tech stack tags
- GitHub and live demo links
- Responsive grid layout

### Interactive Elements

- Particle background effect
- Custom cursor following
- Smooth scroll navigation
- Loading screen animation
- Glass morphism UI components

### Contact Form

- Form validation
- Gmail SMTP integration
- Success/error notifications
- Server-side email processing

## 📧 Contact

Sagar Saha - sagar.it.dev@gmail.com

Project Link: [https://sagar-dev-portfolio.netlify.app/](https://sagar-dev-portfolio.netlify.app/)
