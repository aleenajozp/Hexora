# Hexora Publication

A responsive frontend website for Hexora Publication, a technology-focused company. The site includes Home, About Us and Contact Us pages, a persistent light/dark theme preference, and an accessible client-side contact form demo. No backend, database or message delivery is included.

## Technologies

- React, JavaScript and JSX
- Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- Lucide React
- React Hook Form and Zod
- React Helmet Async
- ESLint and Prettier

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Production

```bash
npm run build
npm run preview
```

## Quality checks and formatting

```bash
npm run lint
npm run format
npm run format:check
```

## Structure

```text
src/
├── assets/
├── components/     Shared navigation, footer, form and UI components
├── data/           Service and process content
├── hooks/
├── pages/          Home, About and Contact
├── routes/         Three-page route configuration
├── App.jsx
├── index.css
└── main.jsx
public/             Static favicon
```

## Customizing content

- Edit service descriptions and process steps in `src/data/services.js`.
- Update company copy and imagery in `src/pages/`.
- Replace the clearly editable contact detail placeholders in `src/pages/Contact.jsx` with approved company information.
- Update colors and responsive styles in `src/index.css`.
- Replace the generic social platform destinations in `src/components/Footer.jsx` with the company's official profile URLs when available.

## Connecting a backend later

The contact form currently validates with React Hook Form and Zod, shows a brief loading state, and explicitly tells visitors that their message was not sent or stored. To connect a backend later, replace the simulated delay in `src/components/ContactForm.jsx` with a request to an approved API endpoint, handle server errors visibly, and keep server-side validation and spam protection in place. Do not treat client-side validation as a security boundary.
