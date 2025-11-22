# Waterproofing & Building Repair Business Website

## Overview

This is a fully responsive, SEO-optimized website for an Indian waterproofing and building repair business (Shri Siddhivinayak Waterproofing). The application provides information about services, showcases completed projects, and allows potential customers to submit contact inquiries. Built with modern web technologies, the site follows professional service business design patterns similar to ServiceTitan, Thumbtack, and HomeAdvisor, emphasizing trust, credibility, and approachability for housing societies and homeowners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Core Technologies:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (multi-page SPA with routes: /, /about, /services, /projects, /contact)
- React Helmet Async for SEO meta tag management and structured data injection

**UI Component System:**
- Shadcn UI (New York style) as the component library foundation
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theme consistency (colors, spacing, typography)

**State Management & Data Fetching:**
- TanStack Query (React Query) for server state management and API interactions
- React Hook Form with Zod for form validation and type-safe form handling
- Custom hooks for mobile detection and toast notifications

**Design System:**
- Typography: Inter (headings/UI), Open Sans (body text) loaded via Google Fonts CDN
- Color system: HSL-based with CSS custom properties for theme flexibility
- Spacing: Tailwind units with consistent section padding patterns
- Responsive grid system: 1/2/3 column layouts for services, testimonials, and projects

**SEO Optimization:**
- JSON-LD structured data for LocalBusiness schema
- Per-page meta tags (title, description, keywords, Open Graph, Twitter Card)
- Semantic HTML structure with proper heading hierarchy
- Canonical URLs and mobile-friendly viewport configuration

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server with TypeScript
- Separate entry points for development (index-dev.ts with Vite middleware) and production (index-prod.ts serving static files)
- Custom request logging middleware tracking API response times and status codes

**API Design:**
- RESTful API pattern with `/api` prefix for backend routes
- Single endpoint: `POST /api/contact` for contact form submissions
- Admin endpoint: `GET /api/contact/submissions` for retrieving all submissions
- JSON request/response format with Zod validation

**Data Layer:**
- In-memory storage implementation (MemStorage class) using Map for contact submissions
- Interface-based storage abstraction (IStorage) allowing future database integration
- Drizzle ORM configured for PostgreSQL (schema defined but not actively used)
- Database configuration points to Neon serverless PostgreSQL via DATABASE_URL

**Development Environment:**
- Hot module replacement in development via Vite middleware integration
- Replit-specific plugins for cartographer, error overlay, and dev banner
- TypeScript incremental compilation with strict mode enabled

### Data Schema & Validation

**Zod Schemas:**
- Contact form validation: name, phone (10-digit Indian format), email (optional), society name, location, service type, message
- Service type definitions with id, title, description, icon mapping
- Testimonial structure with name, society, quote
- Project schema with before/after images, location, service type

**Static Data:**
- Services, testimonials, projects, service areas, and "why choose us" sections stored in `/client/src/lib/data.ts`
- Hard-coded content allows for fast initial load and easy content management

### Build & Deployment

**Development:**
- `npm run dev` starts Vite dev server with Express backend proxy
- TypeScript compilation in watch mode with path aliases (@/, @shared/)
- Separate client and server source directories

**Production:**
- `npm run build` compiles React app to static files and bundles Express server
- Client assets output to `dist/public`
- Server bundle created with esbuild (ESM format, external packages)
- `npm start` runs production server serving pre-built static files

**File Structure:**
- `/client` - React frontend application
- `/server` - Express backend and API routes
- `/shared` - Shared TypeScript types and Zod schemas
- `/attached_assets` - Additional project documentation

## External Dependencies

**UI & Styling:**
- Shadcn UI components (@radix-ui/* packages for primitives)
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority for component variant management
- Lucide React for icon components

**Forms & Validation:**
- React Hook Form for form state management
- Zod for runtime type validation
- @hookform/resolvers for Zod integration

**Data Fetching:**
- @tanstack/react-query for API state management

**Database (Configured but Not Active):**
- Drizzle ORM with Drizzle Kit for schema management
- @neondatabase/serverless for PostgreSQL connection
- Drizzle Zod integration for schema-to-Zod conversion
- Note: Database is configured but application currently uses in-memory storage

**Routing:**
- Wouter for lightweight client-side routing

**SEO:**
- react-helmet-async for dynamic meta tag management

**Development Tools:**
- Vite with React plugin
- TypeScript with strict mode
- ESBuild for production server bundling
- Replit-specific development plugins (cartographer, error modal, dev banner)

**Session Management:**
- connect-pg-simple (installed but not actively used in current implementation)

**Date Handling:**
- date-fns for date formatting and manipulation