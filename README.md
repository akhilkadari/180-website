# 180 Degrees Consulting MSU Website

A modern, responsive website for 180 Degrees Consulting MSU, built with React.js and featuring smooth animations, professional design, and comprehensive functionality.

## 🚀 Features

### Design Features
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, scroll-based animations, and parallax effects
- **Professional Branding**: Consistent 180° DC MSU branding throughout

### Pages & Sections
1. **Home Page**
   - Hero section with animated background
   - Quick stats with counter animations
   - Core values with icons
   - Call-to-action buttons
   - Client testimonials

2. **About Us**
   - Mission & Vision statements
   - What makes us different
   - Gallery of past events/projects
   - Organization history

3. **Team**
   - Executive board member profiles
   - Hover effects revealing bios
   - Social media links
   - Team statistics

4. **Consulting Team**
   - Organized by roles (Project Managers, Consultants, Business Analysts)
   - Team member cards with ratings
   - Highlights carousel
   - Role-specific information

5. **For Clients**
   - Project timeline visualization
   - Success story project cards
   - Why choose us section
   - Client testimonials

6. **Join Us**
   - Benefits of joining
   - Role breakdowns and requirements
   - Application timeline
   - FAQ section with expandable answers

7. **Contact**
   - Embedded contact form
   - Direct contact information
   - Social media links
   - Office hours

### Technical Features
- **React Router**: Client-side routing for smooth navigation
- **Framer Motion**: Advanced animations and transitions
- **React Icons**: Comprehensive icon library
- **Responsive Grid**: CSS Grid and Flexbox for layouts
- **Modern CSS**: CSS3 features with fallbacks
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 180-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Navbar.css         # Navigation styles
│   ├── Footer.js          # Footer component
│   └── Footer.css         # Footer styles
├── pages/
│   ├── Home.js            # Home page
│   ├── Home.css           # Home page styles
│   ├── About.js           # About page
│   ├── About.css          # About page styles
│   ├── Team.js            # Team page
│   ├── Team.css           # Team page styles
│   ├── ConsultingTeam.js  # Consulting team page
│   ├── ConsultingTeam.css # Consulting team styles
│   ├── ForClients.js      # For clients page
│   ├── ForClients.css     # For clients styles
│   ├── JoinUs.js          # Join us page
│   ├── JoinUs.css         # Join us styles
│   ├── Contact.js         # Contact page
│   └── Contact.css        # Contact styles
├── assets/                # Images and other assets
├── App.js                 # Main app component
├── App.css                # Global styles
├── index.js               # Entry point
└── index.css              # Global CSS
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1a365d` - Main brand color
- **Secondary Blue**: `#2d3748` - Secondary brand color
- **Light Gray**: `#f7fafc` - Background color
- **Text Gray**: `#4a5568` - Body text
- **Accent Purple**: `#667eea` - Gradient accents

### Typography
- **Primary Font**: System fonts (San Francisco, Segoe UI, etc.)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400-500)

### Spacing
- **Container**: Max-width 1200px with responsive padding
- **Sections**: 5rem vertical padding
- **Components**: Consistent spacing using rem units

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🔧 Customization

### Updating Content
- **Team Members**: Edit the arrays in `Team.js` and `ConsultingTeam.js`
- **Contact Information**: Update in `Contact.js` and `Footer.js`
- **Statistics**: Modify the numbers in `Home.js`
- **Colors**: Update CSS custom properties in component files

### Adding New Pages
1. Create new component in `pages/` directory
2. Add route in `App.js`
3. Create corresponding CSS file
4. Update navigation in `Navbar.js`

## 📄 License

This project is created for 180 Degrees Consulting MSU. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: contact@180dcmsu.org
- Website: [180 Degrees Consulting MSU](https://180dcmsu.org)

---

**Built with ❤️ for 180 Degrees Consulting MSU**
