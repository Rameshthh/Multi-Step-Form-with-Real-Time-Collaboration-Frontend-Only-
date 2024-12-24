Multi-Step Form with Real-Time Collaboration (Frontend Only)
Project Overview
This project is a multi-step form built using Next.js, Tailwind CSS, and Radix UI components. It supports real-time collaboration features through mock API integration and provides a polished, responsive user experience with animations and dark mode support.

Features
Multi-Step Form:
Step 1: Personal Information
Step 2: Address Details
Step 3: Preferences
Step 4: Review & Submit
Dark Mode:
Toggle between light and dark themes.
State Management:
Form state managed using Zustand.
Real-Time Collaboration:
Mock API integration to periodically update form state.
Animations:
Smooth transitions between steps using Framer Motion.
Responsive Design:
Optimized for mobile, tablet, and desktop.
UI/UX Enhancements:
Tooltips, progress indicators, and placeholders.
Accessibility:
Keyboard navigation and ARIA roles.

Tech Stack
Framework: Next.js
Styling: Tailwind CSS, ShadCN UI
State Management: Zustand
Animations: Framer Motion
UI Components: Radix UI
Form Handling: React Hook Form

Installation and Setup
Clone the repository:
 git clone <repository-url>


Navigate to the project directory:
 cd project


Install dependencies:
 npm install


Run the development server:
 npm run dev
 Open http://localhost:3000 to view it in the browser.

Project Structure
project
├── app/              # Application pages and routes
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
├── styles/           # Global styles and Tailwind configuration
└── tsconfig.json     # TypeScript configuration


Development Steps
Step 1: Setting Up the Project
Deliverables:
Tailwind CSS setup with dark mode toggle.
Basic layout with header, main content, and footer.
Step 2: Multi-Step Form Layout
Deliverables:
Static form sections with visible navigation.
Step 3: Form State Management
Deliverables:
Shared state across form steps using Zustand.
Real-time validation and persistence.
Step 4: Animations and Transitions
Deliverables:
Smooth step transitions using Framer Motion.
Progress tracking.
Step 5: Mock API Integration
Deliverables:
Mock API endpoints for real-time updates.
Step 6: UI/UX Enhancements
Deliverables:
Tooltips, placeholders, and responsive design.
Step 7: Stretch Goals (Optional)
Deliverables:
Toast notifications, accessibility improvements, localization, and testing.

Scripts
npm run dev: Start the development server.
npm run build: Build the project for production.
npm run start: Start the production server.
npm run lint: Run linting checks.

Dependencies
Key Libraries:
Next.js
Tailwind CSS
Zustand
Radix UI
Framer Motion
React Hook Form

License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

Author
Rameshth Sharma

Demo
Visit the live demo: https://serene-liger-e09139.netlify.app/

