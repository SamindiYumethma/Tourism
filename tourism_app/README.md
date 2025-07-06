# Blissful Lanka - Tourism Website

A modern React/Next.js tourism website showcasing the beauty and culture of Sri Lanka.

## Features

- **Home Page**: Showcases Sri Lanka's top destinations including Sigiriya, Dalada Maligawa, and Galle Fort
- **Spices Page**: Dedicated page highlighting Sri Lanka's famous spices
- **Responsive Design**: Built with Bootstrap for mobile-friendly experience
- **Interactive Elements**: Hover effects and smooth transitions
- **Video Background**: Engaging video content on the home page

## Technologies Used

- **Next.js 15**: React framework for production
- **React 19**: Latest version of React
- **Bootstrap 5**: For responsive design and components
- **Font Awesome**: For icons
- **Google Fonts**: Great Vibes and Montserrat fonts

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd tourism_app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tourism_app/
├── public/
│   └── assets/
│       ├── images/          # All website images
│       └── css/            # Custom CSS files
├── src/
│   └── app/
│       ├── page.js         # Home page component
│       ├── spices/
│       │   └── page.js     # Spices page component
│       ├── layout.js       # Root layout with navigation
│       └── globals.css     # Global styles
└── package.json
```

## Pages

### Home Page (/)
- Hero section with background image
- Featured destinations (Sigiriya, Dalada Maligawa, Galle Fort)
- Video background section
- Content sections about train journeys, wildlife, tea, and heritage
- Interactive cards for different attractions

### Spices Page (/spices)
- Information about Sri Lankan spices
- Gallery of spice images
- Cultural context and history

## Customization

### Adding New Pages
1. Create a new folder in `src/app/` with the page name
2. Add a `page.js` file in that folder
3. The page will be accessible at `/{folder-name}`

### Styling
- Global styles are in `src/app/globals.css`
- Bootstrap classes are used for layout and components
- Custom CSS classes are defined in the globals.css file

### Images
- All images are stored in `public/assets/images/`
- Reference them in components using `/assets/images/filename.jpg`

## Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Blissful Lanka** - Explore Sri Lanka's soul — from sun-kissed shores to misty highlands ✨
