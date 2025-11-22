# Design Guidelines: Waterproofing & Building Repair Business Website

## Design Approach: Professional Service Business Pattern

**Selected Approach**: Reference-based drawing from professional service websites like **ServiceTitan, Thumbtack, and HomeAdvisor** - platforms that build trust through clean layouts, clear service presentation, and credible testimonials.

**Core Principle**: Establish immediate credibility and professionalism while maintaining approachable, friendly aesthetics suitable for Indian housing societies and homeowners.

---

## Typography System

**Font Families** (Google Fonts via CDN):
- **Primary**: Inter (headings, UI elements) - modern, professional, highly legible
- **Secondary**: Open Sans (body text, descriptions) - warm, readable at small sizes

**Hierarchy**:
- H1: 2.5rem (mobile) / 3.5rem (desktop), font-weight: 700, line-height: 1.2
- H2: 2rem (mobile) / 2.75rem (desktop), font-weight: 600, line-height: 1.3
- H3: 1.5rem (mobile) / 2rem (desktop), font-weight: 600, line-height: 1.4
- Body: 1rem / 1.125rem, font-weight: 400, line-height: 1.6
- Small: 0.875rem, font-weight: 400, line-height: 1.5

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Core spacing: `2, 4, 6, 8, 12, 16, 20, 24`
- Section padding: `py-12 md:py-20 lg:py-24`
- Component gaps: `gap-6 md:gap-8`
- Container max-widths: `max-w-7xl` for full sections, `max-w-6xl` for content, `max-w-prose` for text

**Grid System**:
- Service cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Testimonials: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Project gallery: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Contact page: Two-column split on desktop `lg:grid-cols-2`

---

## Component Library

### Navigation
- **Header**: Sticky navigation with logo left, links right, responsive hamburger menu on mobile
- Clean white background with subtle shadow on scroll
- Logo text size: `text-xl font-bold`
- Nav links: `text-base font-medium` with hover underline effect

### Hero Section (Home Page)
- **Large background image**: Professional image of waterproofing work/building exterior with subtle overlay
- Height: `min-h-[500px] md:min-h-[600px]`
- Content centered with max-width container
- Two CTA buttons side-by-side on desktop, stacked on mobile
- Buttons with backdrop-blur background for visibility over images

### Service Cards
- Card structure: Icon at top, heading, short description, optional "Learn More" link
- Padding: `p-6`
- Border radius: `rounded-lg`
- Subtle shadow: `shadow-md hover:shadow-lg` transition
- Icons: Use Heroicons (outline style), size `w-12 h-12`

### Testimonial Cards
- Quote marks or avatar placeholder at top
- Testimonial text in italics
- Name and society name below in smaller, bold text
- Background with subtle border, `rounded-lg`, `p-6`

### Project Gallery Cards
- Before/After image grid within each card
- Project title as H3
- Brief description text
- Location badge/tag
- Hover effect: slight scale and shadow increase

### Contact Form
- Full-width inputs with clear labels above
- Input fields: `p-3 rounded border` with focus states
- Dropdown for service type with all 6 services
- Large textarea for message: `min-h-[120px]`
- Submit button: prominent, full-width on mobile

### Footer
- Three-column layout on desktop: Quick Links | Service Areas | Contact Info
- Single column stack on mobile
- Subtle background differentiation from main content
- Padding: `py-12`

---

## Page-Specific Layouts

### Home Page Sections (6 sections)
1. Hero with background image and CTAs
2. Services Overview (3-column grid of 6 service cards)
3. Why Choose Us (2-column layout: left side bullet points with icons, right side supporting image)
4. Service Areas (centered text with location badges/pills)
5. Testimonials (3-column grid)
6. Final CTA section with contact prompt

### Services Page
- Intro section with page title and description
- 6 detailed service sections, each with:
  - Service icon and H2 heading
  - "The Problem" subsection
  - "Our Solution" subsection
  - Process steps (numbered list or timeline)
  - Benefits list with checkmark icons
- Alternating layout: text-left/image-right, then image-left/text-right

### Projects Gallery Page
- Page title and filter options (optional: filter by service type)
- Masonry or uniform grid of project cards
- 8-12 project cards minimum for full showcase
- Each card includes before/after images side-by-side or stacked

### About Page
- Hero section with company photo/building image
- Story section: single column text with max-width for readability
- Mission/Values: 3-column grid with icons
- Team section (if applicable): photo grid or list

### Contact Page
- Two-column layout: Form (left/top) | Info panel (right/bottom)
- Info panel includes: Phone, email, working hours, service areas map reference, response time assurance
- Success message modal/toast on form submission

---

## Images

**Hero Section (Home Page)**:
- Large hero image required: Professional photograph of waterproofing work in progress or completed building exterior
- Dimensions: 1920x800px minimum
- Overlay: Semi-transparent dark gradient overlay (40% opacity) for text readability

**Service Images**:
- Each service section on Services page: 800x600px images showing the work (terrace, bathroom, walls, etc.)

**Project Gallery**:
- Before/After images: 600x400px each, displayed side-by-side or in slider
- Minimum 8-12 project sets

**About Page**:
- Company/team photo: 1200x600px
- Mission/values icons: Use Heroicons instead of custom images

**Placeholder Strategy**: Use solid color blocks with centered text labels ("Terrace Waterproofing", "Before", "After") during development

---

## Interaction Patterns

- **Smooth scrolling**: Enable smooth scroll behavior for anchor links
- **Card hover states**: Subtle lift (translateY) and shadow increase
- **Button states**: Clear hover and active states with slight scale/brightness changes
- **Form validation**: Real-time validation with inline error messages below fields
- **Mobile menu**: Slide-in hamburger menu with smooth transition
- **Minimal animations**: Fade-in on scroll for sections (subtle, performance-conscious)

---

## Mobile-First Breakpoints

- **Mobile**: < 768px (base styles, single column)
- **Tablet**: 768px - 1024px (md: prefix, 2-column grids)
- **Desktop**: > 1024px (lg: prefix, 3-column grids, full layouts)