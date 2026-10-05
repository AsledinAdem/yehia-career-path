---
name: Kinetic Horizon
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies intentional momentum, architectural restraint, and focused execution. Designed for a personal journey and two-month milestone roadmap, the personality strikes an exact balance between quiet editorial contemplation and high-velocity ambition. It speaks to recruiters, collaborators, and mentors who appreciate crisp craftsmanship, absolute clarity, and high agency.

The aesthetic fuses **Swiss Modernist Typography** with **Digital Utility Minimalism**:
- **Generous Canvas & Negative Space**: Breathing room prioritizes cognitive ease over density, highlighting pivotal achievements without visual noise.
- **Architectural Line Work**: Razor-thin structural borders and subtle division grids ground the interface, evoking blueprints, milestone charts, and editorial journals.
- **Electrified Intent**: A disciplined monochromatic canvas broken only by an energetic electric cobalt accent to signify dynamic progress, active states, and forward motion.
- **Micro-tactility**: Interactive states rely on swift, refined micro-transitions (subtle border illumination, 1px coordinate shifts, and faint glow falloffs) rather than overt dimensionality.

## Colors

The system uses a calibrated dark default mode optimized for deep work, milestone tracking, and code-adjacent presentation. 

### Palette Architecture
- **Primary (`#2563EB`)**: Cobalt Blue. Reserved exclusively for forward momentum—primary call-to-actions, current day/sprint anchors, active milestones, and high-priority interactions.
- **Secondary (`#38BDF8`)**: Sky Cyan. Used for analytical telemetry, secondary metrics, live status pings, and tag accents.
- **Tertiary (`#10B981`)**: Precision Emerald. Deployed sparingly to represent completed roadmap nodes, verified milestones, and passing states.
- **Neutral Base (`#090D16`)**: Deep Obsidian Slate. A cool-cast black that prevents eye fatigue and avoids the starkness of pure `#000000`.

### Surface & Border Hierarchy
- **Canvas Base**: `#090D16`
- **Surface Level 1 (Card/Container)**: `#0F172A` at solid or translucent opacity (`rgba(15, 23, 42, 0.75)`).
- **Surface Level 2 (Elevated Nodes/Popover)**: `#1E293B`.
- **Subtle Borders (`border-subtle`)**: `rgba(148, 163, 184, 0.12)`.
- **Active/Hover Borders (`border-active`)**: `rgba(37, 99, 235, 0.45)`.
- **Text High-Contrast**: `#F8FAFC`.
- **Text Medium-Contrast**: `#94A3B8`.
- **Text Muted/Meta**: `#64748B`.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for structural headlines with **Inter** for readable narrative flow and interface density.

- **Plus Jakarta Sans (Headlines & Milestones)**: Provides geometric precision and modern architectural authority. High-contrast negative tracking (`-0.02em` to `-0.03em`) lends an editorial polish suited for portfolio case study headers and goal horizons.
- **Inter (Body & Controls)**: Neutral, hyper-legible workhorse for roadmap status descriptions, journal entries, and interface controls.
- **Code Metric (`JetBrains Mono`)**: Utilized strictly for auxiliary tracking parameters—timestamp deltas, day counts (e.g., `DAY 24/60`), git hashes, and velocity benchmarks.
- **Labels & Micro-Headers**: Set uppercase with expanded letter-spacing (`0.06em` - `0.08em`) to act as clean categorizers above main titles.

## Layout & Spacing

The layout is grounded in a central **max-width container of 1140px** for the reading and roadmap flow, scaling to a 12-column fluid grid for dashboard and project indexes.

### Form Factors & Breakpoints
- **Desktop (1024px and up)**: 12-column layout with `gutter-lg` (`2rem`) and `margin-lg` (`5rem`). The 60-day roadmap displays as a dual-axis timeline with milestone cards flanking a primary axis line.
- **Tablet (768px - 1023px)**: 8-column layout with `gutter` (`1.5rem`) and `margin-md` (`3rem`). Two-column project showcase with stacked key metrics.
- **Mobile (below 768px)**: 4-column layout with `gutter-sm` (`1rem`) and `margin` (`1.5rem`). Roadmap reflows into a single vertical sequence with left-aligned progress indicators.

### Spacing Philosophy
Rhythm follows strict 4px/8px proportional multiples. Container padding internally preserves a `1.5:1` ratio between vertical and horizontal padding to maintain horizontal cohesion within timeline markers and portfolio summaries.

## Elevation & Depth

This system avoids heavy physical drop-shadows, relying on **tonal layered surfaces**, **backdrop translucency**, and **micro-line borders** to manifest depth.

### Hierarchy Tiers
- **Tier 0 (Canvas Base)**: `#090D16`. Flat background.
- **Tier 1 (Resting Cards & Timeline Blocks)**: `#0F172A` at 80% opacity with `backdrop-filter: blur(12px)`. Enclosed by an ultra-thin 1px border (`rgba(148, 163, 184, 0.08)`).
- **Tier 2 (Interactive Floating / Active Milestone Cards)**: `#1E293B` at 90% opacity with a refined ambient shadow:
  `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(37, 99, 235, 0.25)`.
- **Tier 3 (Modals, Overlays, Floating Nav)**: `#0F172A` at 95% opacity with `backdrop-filter: blur(16px)` and an omnidirectional ambient drop:
  `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)`.

### Accent Glows
For critical milestones or interactive CTAs, use a subtle radial cobalt bleed: `box-shadow: 0 0 24px -4px rgba(37, 99, 235, 0.25)`. Never apply harsh black outlines.

## Shapes

The design system enforces a **Soft (`1`)** roundedness scale, delivering sharp geometric precision without looking dated or clinical.

- **Base Corner Radius (`0.25rem` / `4px`)**: Checkboxes, code chips, tags, and status pills.
- **Medium / Container Radius (`rounded-lg: 0.5rem` / `8px`)**: Interactive buttons, input fields, and milestone sub-cards.
- **Large Container Radius (`rounded-xl: 0.75rem` / `12px`)**: Portfolio preview cards, project showcases, roadmap module containers, and navigation docks.
- **Full Pill (`rounded-full: 9999px`)**: Exclusively reserved for status dots, timeline node checkpoints, and avatar rings.

## Components

### Buttons
- **Primary CTA**: Solid cobalt background (`#2563EB`), high-contrast text (`#F8FAFC`), font weight 600, height 40px, padding `0 18px`, `rounded-lg` (8px). Hover: background `#1D4ED8`, subtle upward 1px transition. Focus: ring 2px `#2563EB` offset by 2px `#090D16`.
- **Secondary / Ghost**: Background `rgba(15, 23, 42, 0.6)`, border 1px `rgba(148, 163, 184, 0.15)`, text `#94A3B8`. Hover: border color `rgba(37, 99, 235, 0.4)`, text `#F8FAFC`.
- **Subtle Action**: Pure text with bottom accent border reveal on hover.

### Roadmap Node Cards
- **Base Style**: `rounded-xl` (12px), background `#0F172A` with 1px border `rgba(148, 163, 184, 0.08)`. Padding `space-lg` (`1.5rem`).
- **State Modifications**:
  - *Current Sprint/Day*: 1px active border `#2563EB`, top-edge 2px gradient line (`#2563EB` to `#38BDF8`), node marker pulsed with subtle radial glow.
  - *Completed*: Left accent badge in Tertiary (`#10B981`), title muted to `#94A3B8`, strike or check indicator.
  - *Upcoming*: Border `rgba(148, 163, 184, 0.05)`, text `#64748B`.

### Portfolio & Project Cards
- **Structure**: Aspect ratio `16:10` image/demo header with bottom metadata panel. Hover triggers an image scale (`transform: scale(1.02)`) enclosed in `overflow-hidden`.
- **Tag Integration**: Bottom bar features micro-chips displaying tech stack or milestone attribution.

### Chips & Badges
- **Status Badges**: Padding `4px 8px`, `rounded-md`, typography `label-sm`.
  - *In Progress*: Background `rgba(37, 99, 235, 0.1)`, text `#60A5FA`, border `rgba(37, 99, 235, 0.2)`.
  - *Done*: Background `rgba(16, 185, 129, 0.1)`, text `#34D399`, border `rgba(16, 185, 129, 0.2)`.
  - *Pending*: Background `rgba(100, 116, 139, 0.1)`, text `#94A3B8`, border `rgba(100, 116, 139, 0.2)`.

### Inputs & Milestone Filters
- **Input Fields**: Background `#0B1120`, border 1px `rgba(148, 163, 184, 0.12)`, height 42px, padding `0 14px`, text `#F8FAFC`, placeholder `#475569`. Focus: border `#2563EB`, box-shadow `0 0 0 1px #2563EB`.
- **Checkboxes**: 18px square, `rounded` (4px), border 1.5px `rgba(148, 163, 184, 0.3)`. Checked state: background `#2563EB`, border `#2563EB` with an SVG tick mark in `#FFFFFF`.

### Metric & Telemetry Strip
- A specialized component for the two-month goal progression:
- Displays `Completed Days / 60`, `Milestones Hit`, and `Live Focus`.
- Numerical metrics rendered in `Plus Jakarta Sans` 700 with accompanying labels set in `code-metric` (`JetBrains Mono`).