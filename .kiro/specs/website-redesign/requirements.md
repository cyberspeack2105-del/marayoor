# Requirements Document

## Introduction

This document captures the requirements for a complete visual redesign of the Kanthalloor Tourism website — a Next.js 15 application with TypeScript and Tailwind CSS v4. The redesign replaces all photographic images (Unsplash URLs and `<img>` tags) with SVG illustrations, CSS patterns, emoji/icon-based cards, and gradient visuals. A new white + light-green nature palette replaces the current dark-forest-green and amber colour scheme. Animated arrows are introduced as a consistent visual motif throughout: scroll-triggered, hover-triggered, and decorative. The layout adopts a clean, professional section hierarchy with generous whitespace and a consistent grid system across all 18 component files and the shared design system files (`globals.css` and `constants.ts`).

---

## Glossary

- **Design_System**: The combination of `globals.css` CSS custom properties, keyframe animations, and utility classes that define the visual language applied across all components.
- **Palette**: The set of CSS custom property colour tokens defined in `globals.css` under `@theme`.
- **Arrow_Animation**: Any CSS keyframe animation or Framer Motion animation applied to arrow or chevron icons to communicate directionality or draw attention.
- **Image_Free_Card**: A card component that uses emoji icons, SVG illustrations, CSS gradients, or Tailwind colour backgrounds instead of a photographic `<img>` tag.
- **Section_Arrow**: The circular arrow button rendered at the bottom of sections to guide the user to the next section.
- **CTA**: Call-to-action — a button or link element intended to prompt user interaction.
- **Accent_Color**: A colour token used for emphasis; in the new palette this is `--green-mid` (`#5ca87a`) replacing the previous amber (`#d97706`).
- **Navbar**: The fixed top navigation bar component (`Navbar.tsx`).
- **HeroSection**: The first full-width section visible on page load (`HeroSection.tsx`).
- **StatsSection**: The statistics strip below the hero (`StatsSection.tsx`).
- **ExperienceSection**: The experience card grid (`ExperienceSection.tsx`).
- **DestinationsSection**: The destinations card grid (`DestinationsSection.tsx`).
- **JeepSafariSection**: The jeep safari packages and timeline section (`JeepSafariSection.tsx`).
- **HomestaysSection**: The homestay card grid with filters (`HomestaysSection.tsx`).
- **ResortsSection**: The resort card grid (`ResortsSection.tsx`).
- **PackagesSection**: The pricing package cards (`PackagesSection.tsx`).
- **GallerySection**: The nature stat/info tile grid (`GallerySection.tsx`).
- **TestimonialsSection**: The guest review cards (`TestimonialsSection.tsx`).
- **HistorySection**: The heritage timeline section (`HistorySection.tsx`).
- **TravelGuideSection**: The travel tips card grid (`TravelGuideSection.tsx`).
- **FAQSection**: The accordion FAQ section (`FAQSection.tsx`).
- **BlogSection**: The blog post card grid (`BlogSection.tsx`).
- **NewsletterSection**: The email subscription section (`NewsletterSection.tsx`).
- **ContactSection**: The booking enquiry form and map card section (`ContactSection.tsx`).
- **Footer**: The site footer (`Footer.tsx`).

---

## Requirements

### Requirement 1: Design System — Palette and Token Replacement

**User Story:** As a developer, I want all colour tokens in `globals.css` to use the new white/light-green palette, so that every component inherits consistent brand colours without manual overrides.

#### Acceptance Criteria

1. THE Design_System SHALL define the following CSS custom properties under `@theme`: `--green-primary: #2d7a4f`, `--green-light: #e8f5ee`, `--green-mid: #5ca87a`, `--green-pale: #f0faf4`, `--white: #ffffff`, `--green-dark: #1a4d35`, `--text-dark: #0f2d1f`, `--text-muted: #5a7065`.
2. THE Design_System SHALL remove all amber and dark-forest colour tokens (`#d97706`, `#b45309`, `#234e52` used as a primary dark) from the `@theme` block, replacing their roles with the new green palette tokens.
3. WHEN a component renders any button, heading accent, or icon colour, THE Design_System SHALL supply that colour via a CSS custom property token rather than an inline hex value.

---

### Requirement 2: Design System — Arrow Animation Keyframes and Utilities

**User Story:** As a designer, I want a shared set of arrow animation keyframes and utility classes in `globals.css`, so that all 18 components can apply consistent animated arrow behaviour without duplicating CSS.

#### Acceptance Criteria

1. THE Design_System SHALL define a `@keyframes arrowBounce` animation that translates an element vertically by 8 px at 50% and returns to origin, completing one cycle in 1.8 s.
2. THE Design_System SHALL define a `@keyframes arrowSlide` animation that translates an element horizontally by 4 px, transitioning from opacity 0 to opacity 1 within 0.4 s.
3. THE Design_System SHALL define a `@keyframes leafFloat` animation that translates an element vertically by −10 px and rotates it 3 degrees at 50%, completing one cycle in an appropriate duration to feel gentle and natural.
4. THE Design_System SHALL expose `.arrow-bounce`, `.arrow-slide`, `.arrow-cta`, and `.section-arrow` utility classes that apply the defined keyframes and baseline arrow styling (circular border, green colour tokens, centred icon).
5. WHEN a `.section-arrow` element is rendered, THE Design_System SHALL apply a white background, `--green-mid` border, `--green-dark` icon colour, and a subtle green-tinted box-shadow.

---

### Requirement 3: Design System — Removal of Image-Dependent Utilities

**User Story:** As a developer, I want all CSS utilities that depended on background images or Unsplash URLs removed from `globals.css`, so that no component inadvertently references external image resources through CSS.

#### Acceptance Criteria

1. THE Design_System SHALL contain no `background-image` CSS properties that reference an external `http` or `https` URL.
2. WHEN the `globals.css` file is parsed, THE Design_System SHALL retain the `.noise-overlay::after` pattern only if the SVG data-URI does not reference an external URL.

---

### Requirement 4: constants.ts — Image URL Removal

**User Story:** As a developer, I want all Unsplash image URLs removed from `constants.ts` data arrays, so that no component receives a photographic image URL from the shared data layer.

#### Acceptance Criteria

1. THE `constants.ts` module SHALL contain no string values that start with `https://images.unsplash.com`.
2. WHEN a data array in `constants.ts` previously contained an `image` field with a URL, THE `constants.ts` module SHALL replace that field with an `icon` field (emoji string) or remove the field entirely if the component no longer renders an image.
3. THE `constants.ts` module SHALL retain all non-image fields (titles, descriptions, prices, ratings, tags, etc.) unchanged.
4. THE `GALLERY_IMAGES` array in `constants.ts` SHALL already conform to the image-free format (icon, stat, description, color) and SHALL require no further modification.

---

### Requirement 5: Navbar — White Background and Green Brand Colours

**User Story:** As a visitor, I want the Navbar to display a white background with green brand colours when scrolled, so that it feels clean and consistent with the new palette.

#### Acceptance Criteria

1. WHEN the page is scrolled more than 40 px, THE Navbar SHALL display a white (`#ffffff`) background with a light green (`--green-light`) border-bottom.
2. WHEN the page is scrolled more than 40 px, THE Navbar SHALL render desktop navigation links in `--text-dark` colour, transitioning to `--green-primary` on hover.
3. WHEN a navigation link is active (current page), THE Navbar SHALL apply a green arrow-style sweep underline animation using the `.nav-link::after` pseudo-element defined in the Design_System.
4. WHEN the page is not scrolled (transparent state), THE Navbar SHALL render the logo and links in white to contrast against the hero gradient background.
5. THE Navbar logo icon container SHALL use `--green-primary` (`#2d7a4f`) as its background colour.

---

### Requirement 6: HeroSection — Image-Free Gradient Background

**User Story:** As a visitor, I want the HeroSection to display an animated nature-themed gradient background with floating leaf shapes instead of a photographic image, so that the page loads quickly and reinforces the green nature brand.

#### Acceptance Criteria

1. THE HeroSection SHALL contain no `<img>` tags or CSS `background-image` properties referencing external URLs.
2. THE HeroSection SHALL render a large radial gradient background using `--green-pale` and `--green-light` colour tokens as the section background.
3. THE HeroSection SHALL render at least three CSS-animated floating orb elements using `--green-light` and `--green-pale` colours with the `animate-float` utility class.
4. THE HeroSection SHALL render the headline with gradient green text using the `.gradient-text` class applied to the accent phrase.
5. THE HeroSection SHALL render a bouncing downward arrow CTA below the main buttons using the `.arrow-bounce` utility class.
6. WHEN the page loads, THE HeroSection SHALL animate headline, subheading, buttons, and stat cards into view using opacity and vertical translate transitions with staggered delays.

---

### Requirement 7: StatsSection — Light Green Strip with Arrow Indicators

**User Story:** As a visitor, I want the StatsSection to use the new light green palette instead of the dark teal background, so that it fits the updated white/green theme.

#### Acceptance Criteria

1. THE StatsSection SHALL use `--green-light` (`#e8f5ee`) as its background colour instead of `#234e52`.
2. THE StatsSection SHALL render stat values in `--green-dark` (`#1a4d35`) and labels in `--text-muted` (`#5a7065`).
3. THE StatsSection SHALL display a small upward-pointing arrow indicator beside each numeric stat value to reinforce positive metrics.

---

### Requirement 8: ExperienceSection — Image-Free Icon Cards with Hover Arrow

**User Story:** As a visitor, I want experience cards to use large emoji icons on gradient green backgrounds instead of photographic images, so that the section is visually rich without external image dependencies.

#### Acceptance Criteria

1. THE ExperienceSection SHALL contain no `<img>` tags.
2. WHEN an experience card is rendered, THE ExperienceSection SHALL display the emoji icon from `EXPERIENCES[n].icon` centred on a gradient green card background using `--green-pale` and `--green-light` colour tokens.
3. WHEN a user hovers over an experience card, THE ExperienceSection SHALL animate the "Learn more" arrow icon to slide 4 px to the right using the `group-hover:translate-x-1` utility.
4. WHEN a user hovers over an experience card, THE ExperienceSection SHALL render a green gradient bottom border that transitions from opacity 0 to opacity 1.

---

### Requirement 9: DestinationsSection — Gradient Green Card Tiles with Animated Arrow

**User Story:** As a visitor, I want destination cards to use gradient green tile backgrounds with location pin icons instead of photographs, so that they communicate place identity through colour and iconography.

#### Acceptance Criteria

1. THE DestinationsSection SHALL contain no `<img>` tags.
2. WHEN a destination card is rendered, THE DestinationsSection SHALL display the destination icon from `DESTINATIONS[n].icon` on a gradient background using `--green-light` to `--white` gradient tokens.
3. WHEN a user hovers over a destination card, THE DestinationsSection SHALL animate the "Read More" arrow icon to slide 4 px to the right.
4. THE DestinationsSection SHALL render tag chips using the TAG_COLORS palette updated to reference only green palette tokens (no amber).

---

### Requirement 10: JeepSafariSection — SVG Landscape and Bullet Arrows

**User Story:** As a visitor, I want the JeepSafariSection to replace the photographic hero image with an SVG landscape illustration, so that the section communicates adventure without external image dependencies.

#### Acceptance Criteria

1. THE JeepSafariSection SHALL contain no `<img>` tags referencing external URLs.
2. THE JeepSafariSection SHALL replace the hero image area with an inline SVG landscape illustration depicting mountain silhouettes in `--green-mid` and `--green-pale` tones, sized to fill the same `h-80` container.
3. THE JeepSafariSection SHALL render the safari feature bullet points with animated arrow (→) prefixes that slide in on card selection.
4. THE JeepSafariSection timeline SHALL use `--green-primary` coloured dots and a vertical gradient line from `--green-primary` to `--green-mid`.
5. THE JeepSafariSection Book CTA container SHALL use `--green-primary` (`#2d7a4f`) as its background instead of `#234e52`.

---

### Requirement 11: HomestaysSection — Image-Free Cards with Home Icon

**User Story:** As a visitor, I want homestay cards to use a home icon on a green gradient background instead of photographic images, so that the cards are visually consistent with the image-free design.

#### Acceptance Criteria

1. THE HomestaysSection SHALL contain no `<img>` tags.
2. WHEN a homestay card is rendered, THE HomestaysSection SHALL replace the image area with a styled icon block: a large home emoji or lucide `Home` icon centred on a `--green-pale` to `--green-light` gradient background with a height of at least 180 px.
3. THE HomestaysSection SHALL render star rating chips in `--green-mid` colour.
4. WHEN a user clicks the "Book" button on a card, THE HomestaysSection SHALL dispatch the `book-item` custom event with type `"homestay"` and the stay name, unchanged from the current behaviour.
5. THE HomestaysSection filter buttons SHALL use `--green-primary` as the active background colour.

---

### Requirement 12: ResortsSection — Image-Free Resort Icon Cards

**User Story:** As a visitor, I want resort cards to use resort icon illustrations on green gradient backgrounds instead of photographs, so that the section is consistent with the image-free design language.

#### Acceptance Criteria

1. THE ResortsSection SHALL contain no `<img>` tags.
2. WHEN a resort card is rendered, THE ResortsSection SHALL replace the image area with a styled icon block using a building or mountain emoji centred on a `--green-light` gradient background.
3. THE ResortsSection badge colours SHALL use only green palette tokens: `--green-primary` for Luxury, `--green-dark` for Premium, `--green-mid` for Boutique.
4. WHEN a user clicks "Book Now" on a resort card, THE ResortsSection SHALL dispatch the `book-item` custom event with type `"resort"` and the resort name, unchanged from the current behaviour.

---

### Requirement 13: PackagesSection — Clean Pricing Cards with Check-Arrow Includes

**User Story:** As a visitor, I want the packages section to display clean white cards with a green header stripe and checkmark-arrow include items, so that pricing is easy to scan and brand-consistent.

#### Acceptance Criteria

1. THE PackagesSection SHALL render each package card with a solid `--green-primary` header stripe containing the package highlight badge and title on a contrasting white or light background.
2. THE PackagesSection includes list SHALL render each item with a `CheckCircle2` icon in `--green-primary` colour.
3. THE PackagesSection "Most Popular" badge SHALL use `--green-mid` instead of the amber colour.
4. THE PackagesSection custom package CTA block SHALL use a gradient from `--green-primary` to `--green-dark` instead of `#234e52` to `#1a3a3d`.

---

### Requirement 14: GallerySection — Animated Nature Stat/Info Tiles

**User Story:** As a visitor, I want the gallery section to display animated CSS art tiles showing nature statistics instead of photographic images, so that the section communicates Kanthalloor's qualities without any external image URLs.

#### Acceptance Criteria

1. THE GallerySection SHALL contain no `<img>` tags.
2. WHEN gallery tiles are rendered, THE GallerySection SHALL use data from the `GALLERY_IMAGES` array in `constants.ts`, which already provides `icon`, `stat`, `description`, and `color` fields.
3. THE GallerySection SHALL apply a subtle hover scale transform (`scale-105`) to each tile via the `card-hover` utility.
4. WHEN a gallery tile is rendered, THE GallerySection SHALL display the `icon` emoji in a rounded container, the `stat` value in a large bold font, and the `description` in muted text, using the `color` field for the icon container background.

---

### Requirement 15: TestimonialsSection — Initials-Based Avatar Circles

**User Story:** As a visitor, I want testimonial author avatars to use green-background initials circles instead of photographic avatars, so that no external avatar images are needed.

#### Acceptance Criteria

1. THE TestimonialsSection SHALL contain no `<img>` tags.
2. WHEN a testimonial card is rendered, THE TestimonialsSection SHALL display a circular avatar using the reviewer's initials (first letter of first name + first letter of last name) on a `--green-light` background with `--green-primary` text.
3. THE TestimonialsSection star icons SHALL use `--green-mid` (`#5ca87a`) fill colour instead of amber.
4. THE TestimonialsSection section divider accent SHALL use `--green-primary` instead of the amber label colour.

---

### Requirement 16: HistorySection — Animated Arrow Timeline Connectors

**User Story:** As a visitor, I want the history timeline to use animated arrow connectors between events instead of static gradient lines and photographic collage images, so that the timeline communicates forward movement and fits the image-free design.

#### Acceptance Criteria

1. THE HistorySection SHALL contain no `<img>` tags.
2. THE HistorySection SHALL replace the image collage with an SVG or CSS illustration using concentric green circles and a central heritage badge block showing "3000 / Years of Heritage".
3. WHEN the history timeline is rendered on desktop, THE HistorySection SHALL animate small downward or rightward arrow icons between timeline nodes using `arrowBounce` or `arrowSlide` keyframes to indicate progression through time.
4. THE HistorySection timeline dots SHALL use `--green-primary` border colour and the timeline connecting line SHALL use a gradient from `--green-primary` to `--green-mid`.
5. THE HistorySection year labels SHALL use `--green-primary` colour instead of amber.

---

### Requirement 17: TravelGuideSection — Icon-Based Tip Cards with Arrow CTA

**User Story:** As a visitor, I want the travel guide section to use icon-based tip cards with a prominent arrow-pointing CTA at the end, so that practical information is easy to scan and the section ends with a clear next action.

#### Acceptance Criteria

1. THE TravelGuideSection SHALL contain no `<img>` tags.
2. THE TravelGuideSection guide card icon containers SHALL use `--green-primary` or `--green-mid` tinted backgrounds rather than amber-tinted backgrounds.
3. THE TravelGuideSection SHALL render a CTA button at the end of the section with an ArrowRight icon that animates 4 px to the right on hover, linking to the `#contact` anchor.
4. THE TravelGuideSection nearby attractions grid SHALL render each location tile with a hover background of `--green-pale` and hover text of `--green-primary`.

---

### Requirement 18: FAQSection — Accordion with Animated Rotating Chevron Arrow

**User Story:** As a visitor, I want FAQ accordion items to use an animated rotating chevron arrow instead of plus/minus icons, so that the expand/collapse interaction is visually consistent with the arrow animation motif.

#### Acceptance Criteria

1. THE FAQSection SHALL replace the `Plus`/`Minus` icon toggle with a `ChevronDown` icon that rotates 180 degrees when the accordion item is expanded, using a CSS transition.
2. WHEN an accordion item is expanded, THE FAQSection SHALL apply `--green-primary` colour to the question text and rotate the chevron icon.
3. WHEN an accordion item is collapsed, THE FAQSection SHALL apply `--text-dark` colour to the question text and reset the chevron rotation to 0 degrees.
4. THE FAQSection toggle button container SHALL use `--green-light` as the active (expanded) background and `--green-pale` as the inactive background.
5. THE FAQSection "Call Us Now" CTA SHALL use `btn-primary` styling with the new green palette.

---

### Requirement 19: BlogSection — Image-Free Cards with Category Headers and Arrow Read-More

**User Story:** As a visitor, I want blog post cards to display colour-coded category headers and animated arrow read-more links instead of photographic images, so that the section works without external image dependencies.

#### Acceptance Criteria

1. THE BlogSection SHALL contain no `<img>` tags.
2. WHEN a blog card is rendered, THE BlogSection SHALL replace the image area with a styled category header block: a tall gradient panel in the category's colour (green tones for Culture/Heritage, `--green-mid` for Adventure) containing the category label in large text.
3. THE BlogSection CATEGORY_COLORS map SHALL use only green palette tokens: `--green-primary` region for Culture, `--green-mid` region for Adventure, `--green-dark` region for Heritage.
4. WHEN a user hovers over a blog card, THE BlogSection SHALL animate the "Read Article" arrow icon to slide 4 px to the right.

---

### Requirement 20: NewsletterSection — Green Gradient Section with Leaf Decoration and Arrow Submit

**User Story:** As a visitor, I want the newsletter section to display a green gradient background with leaf SVG decoration instead of a photographic background image, so that the section is image-free and on-brand.

#### Acceptance Criteria

1. THE NewsletterSection SHALL contain no `<img>` tags or CSS `background-image` properties referencing external URLs.
2. THE NewsletterSection SHALL replace the photographic background with a CSS gradient using `--green-primary` to `--green-dark` colour tokens.
3. THE NewsletterSection SHALL render at least two decorative leaf SVG or CSS shapes as background decoration using `--green-mid` with low opacity.
4. THE NewsletterSection subscribe button ArrowRight icon SHALL animate 4 px to the right on hover using the `group-hover:translate-x-1` utility.
5. THE NewsletterSection mail icon container SHALL use `--green-light` background with `--green-primary` icon colour.

---

### Requirement 21: ContactSection — CSS-Illustrated Map Card with Location Pin Animation

**User Story:** As a visitor, I want the ContactSection to replace the photographic map image with a CSS-illustrated map card containing an animated location pin, so that the section works without any external image.

#### Acceptance Criteria

1. THE ContactSection SHALL contain no `<img>` tags.
2. THE ContactSection SHALL replace the map image area with a CSS art card: a `--green-pale` background with a CSS-drawn grid pattern (subtle lines), a pulsing `MapPin` icon centred in `--green-primary` colour, and a "View on Google Maps" link.
3. WHEN the map card is rendered, THE ContactSection SHALL apply a continuous pulse animation to the `MapPin` icon using a CSS keyframe that scales the icon between 1.0 and 1.15 on a 2 s loop.
4. THE ContactSection contact info icon containers SHALL use `--green-primary`/10 as their background and `--green-primary` as the icon colour.
5. WHEN a user submits the enquiry form, THE ContactSection SHALL display a success state with a `--green-primary` tinted check icon circle, unchanged in behaviour from the current implementation.

---

### Requirement 22: Footer — Dark Green Background with Green Brand Colours

**User Story:** As a visitor, I want the footer to use a dark green background instead of near-black, so that it completes the green nature palette from top to bottom.

#### Acceptance Criteria

1. THE Footer SHALL use `--green-dark` (`#1a4d35`) as its background colour instead of `#111111`.
2. THE Footer contact icon accent colour SHALL use `--green-mid` (`#5ca87a`) instead of amber (`#d97706`).
3. THE Footer social icon hover state SHALL use `--green-primary` as the hover background.
4. WHEN a footer navigation link is hovered, THE Footer SHALL animate a small `ArrowRight` icon to slide in from the left side of the link text, using the existing `group-hover:w-3` width transition pattern.
5. THE Footer "Powered by" accent text SHALL use `--green-mid` colour.
6. THE Footer logo icon container SHALL use `--green-primary` as its background colour.

---

### Requirement 23: Accessibility and Interactivity Preservation

**User Story:** As a visitor using assistive technologies, I want all interactive elements and ARIA attributes to remain fully functional after the redesign, so that keyboard navigation and screen reader support are not degraded.

#### Acceptance Criteria

1. THE Design_System SHALL preserve all existing `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls`, `aria-current`, `aria-checked`, `role`, and `tabIndex` attributes across all 18 components.
2. WHEN any image (`<img>` tag) is removed from a component, THE component SHALL ensure the removal does not eliminate any content that was conveyed solely through the image's `alt` text without providing an equivalent text alternative elsewhere in the component.
3. THE Design_System SHALL maintain the `:focus-visible` outline defined in `globals.css` using `--green-primary` colour.
4. WHEN arrow animations are applied to interactive elements, THE animation SHALL not interfere with `prefers-reduced-motion` — components that use Framer Motion SHALL respect system motion preferences via `useReducedMotion` or equivalent.

---

### Requirement 24: No External Network Requests for Visual Assets

**User Story:** As a developer, I want to be certain that after the redesign, no component makes an external network request to fetch a visual asset (image, font-face via URL, etc.), so that the site has no runtime dependency on third-party CDN availability for visual rendering.

#### Acceptance Criteria

1. WHEN the production build is generated, THE application SHALL contain no `<img src="https://...">` attributes pointing to an external domain in any component file under `src/components/`.
2. WHEN the production build is generated, THE application SHALL contain no CSS `background-image: url("https://...")` rules in `globals.css` or any component's inline styles.
3. IF a component requires an illustrative visual element, THEN THE component SHALL satisfy that requirement using inline SVG, CSS gradients, CSS shapes, or emoji characters.
