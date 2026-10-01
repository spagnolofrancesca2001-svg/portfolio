const projects = [
  {
    id: 0,
    category: "Art Direction, Video Editing",
    year: "2025",
    title: ["forte_forte loves tomasa"],
    client: "forte_forte",
    role: "Art Direction, Video Editing",
    description: `forte_forte is an Italian advanced contemporary fashion brand, present in 11 boutiques worldwide and 600 wholesale partners. For their SS25 capsule collection, they collaborated with Tomasa - a Guatemalan accessories brand rooted in the beadwork tradition of an indigenous community from the villages around Lake Atitlán. The result was six handmade beaded necklaces, each depicting a different animal. My role was art direction, photography direction and video content for the launch campaign.

With a very tight timeline and a limited budget, there was no room for a full video production - the challenge was to make the craftsmanship feel alive rather than simply documented. I gave each animal its own personality by separating still life photographs into layers in After Effects and animating them digitally - five short videos, five different characters. The result sits somewhere between stop motion and illustration.

The campaign was covered by WWD, Vogue Italia, Elle France and Pambianco, and the collection launched across forte_forte's boutiques and e-commerce.`,
    images: {
      cover: "img/tomasa-hero.jpg",
      hero: "img/tomasa-hero.jpg",                                              
      gallery: []                
    }                                                                           
  },
  {
    id: 1,
    category: "Art Direction, Content Production, Communication Planning",
    year: "2026",
    title: ["forte_forte x suicoke"],
    client: "forte_forte",
    role: "Art Direction, Content Production, Communication Planning",
    description: `forte_forte teamed up with Suicoke - the Tokyo-founded footwear brand known internationally for its minimal and innovative sandals - to create an exclusive capsule for SS26. My role was art direction: concept development, set design, on-set direction for the campaign shoot and post-production.

The challenge was to bridge two very different visual languages - forte_forte's romantic femininity and Suicoke's urban Japanese streetwear. The direction was playful and slightly surreal: hands and feet as the only protagonists, coloured socks and flowers as props, a clean white background. Graphic and irreverent, but with the warmth and attention to detail that both brands share.

The campaign was covered by Marie Claire Italia, Grazia, Vanity Fair Italia, Wondernet and Fashions-Addict, with additional pickup in Japan through Oricon - reflecting the international reach of the collaboration.`,
    images: {
      cover: "img/suicoke/suicoke-hero.gif",
      hero: "img/suicoke/suicoke-hero.gif",
      gallery: [
      "img/suicoke/ff_suicoke screen 1.jpg",
      "img/suicoke/ff_suicoke_05.jpg",
      { layout: 'trio', srcs: ['img/suicoke/ff_suicoke_32.jpg', 'img/suicoke/ff_suicoke_37.jpg', 'img/suicoke/ff_suicoke_08.jpg'] },
      { layout: 'duo', srcs: ['img/suicoke/suicoke-01.jpg', 'img/suicoke/suicoke-03.jpg'] },
      "img/suicoke/suicoke-07.jpg",
      { layout: 'text', content: 'The capsule was communicated across forte_forte\'s Instagram, newsletter and website, with content adapted for each channel.' },
      { layout: 'duo-video', srcs: ['img/suicoke/ScreenRecording_09-28-2026 22-59-07_1.mov', 'img/suicoke/ScreenRecording_09-28-2026 23-01-56_1.mov'] }
    ]
    }
  },
  {
    id: 2,
    category: "Branding & Digital Design",
    year: "2024",
    title: ["My Wardrobe HQ"],
    client: "My Wardrobe HQ",
    role: "Branding & Digital Design",
    description: `My Wardrobe HQ is a luxury fashion rental platform. In a market where most competitors lead with sustainability as their primary message, the founders wanted to take a different direction - building a brand that feels genuinely close to the luxury fashion world, modern and desirable, without making eco-consciousness the central narrative. The brief was to redesign the brand identity to reflect this positioning.

The project was developed during my internship at Numbered Studio in Amsterdam, under the supervision of Jack Milburn. The direction was clean and high-fashion - a visual language that could sit comfortably alongside luxury brands without feeling derivative. Beyond the core identity, we developed a tag system for the website to help users navigate the platform's dual offer of rental and purchase at a glance. This was not in the original brief but emerged as a natural UX solution during the process.`,
    images: {
      cover: "img/My Wardrobe-hero.jpg",
      hero: "img/My Wardrobe-hero.jpg",
      gallery: [
        { layout: 'duo', srcs: ['img/my wardrobe/splitscreen 1.gif', 'img/my wardrobe/splitscreen 2.jpg'] },
        "img/my wardrobe/screen 3 – palette.jpg",
        "img/my wardrobe/screen 4.gif",
        "img/my wardrobe/screen 12.jpg",
        { layout: 'text', content: 'The brand identity was fully implemented on the existing website and across the brand\'s communication. My Wardrobe HQ now reads as a luxury platform first - the rental model is the product, not the message.' },
        { layout: 'framed-video', src: 'img/my wardrobe/Senza nome.mp4', speed: 0.75 },
        "img/my wardrobe/screen 7.jpg",
        "img/my wardrobe/screen 8.jpg",
        "img/my wardrobe/screen 9.jpg",
        "img/my wardrobe/screen 10.jpg"
      ]
    }
  },
  {
    id: 3,
    category: "Brand Identity & Art Direction",
    year: "2025",
    title: ["SUUP"],
    client: "SUUP",
    role: "Brand Identity & Art Direction",
    description: `SUUP is a brand identity for a soup restaurant in Lisbon, developed as a design challenge for a communication studio. In Portugal soup is a staple eaten in nearly every household, but it carries an outdated image tied to babies, the elderly and convalescence. The brief was to reposition it for a younger, international audience, without turning it into a health-food niche.

The name stretches the word "soup" just enough to make it feel contemporary, closer to a streetwear or food-tech brand than a traditional eatery. Every visual choice works against the stereotype: a bold hand-drawn logo, a warm but punchy terracotta palette, and a photography direction based on flash, real kitchens and people eating together.

The identity covers logo, typography, colour palette, Instagram feed and stories, staff uniform, signage and menu - a system designed to stay recognisable even without the logo.`,
    images: { cover: "img/SUUP-hero.jpg", hero: "img/SUUP-hero.jpg", gallery: [
      "img/suup/deck 1 - logo.jpg",
      { layout: 'duo', srcs: ['img/suup/palette.jpg', 'img/suup/uniforme.jpg'] },
      "img/suup/deck 2 – video ingredienti.gif",
      { layout: 'duo', srcs: ['img/suup/menu.jpg', 'img/suup/esterni.jpg'] },
      "img/suup/storie.jpg",
      { layout: 'duo', srcs: ['img/suup/grid.jpg', 'img/suup/storie evi.jpg'] }
    ] }
  },
  {
    id: 4,
    category: "Brand Identity, Packaging & Art Direction",
    year: "2024",
    title: ["Animae"],
    client: "Animae",
    role: "Brand Identity, Packaging & Art Direction",
    description: `Animae is a cosmetics brand created by Anna Mambrelli, Italian content creator known for her soft, minimal aesthetic. Daam Studio commissioned me as freelance designer to develop the full brand identity, translating Anna's personal visual language into a system that could stand on its own as a commercial brand.

My work covered naming, logo design, claim - love yourself, always - colour palette and all brand collaterals, plus art direction for packshots and mood photography. The packaging was developed in collaboration with Daam Studio for the technical production aspects. The direction was quiet and intentional: a soft sans-serif logotype built on Anna's initials, an all-white packaging system, and a visual language designed to feel personal without being precious.

Animae launched with a lip and face collection and has since expanded into a full skincare range - serums, creams, eye care and more - maintaining the same visual identity across an increasingly wide product line.`,
    images: { cover: "img/animae-hero.jpg", hero: "img/animae-hero.jpg", gallery: [
      { layout: 'duo', srcs: ['img/animae – 01.jpg', 'img/animae – 02.gif'] },
      { layout: 'duo', srcs: ['img/animae – 04.gif', 'img/animae – 03.jpg'] },
      "img/animae social.jpg",
      { layout: 'duo', srcs: ['img/animae 07.jpg', 'img/animae 08.jpg'] },
      "img/animae – 06.jpg",
      "img/animae – 05.jpg"
    ] }
  },
  {
    id: 6,
    category: "Brand Identity & Social Media",
    year: "2025",
    title: ["Casa Bosa"],
    client: "Casa Bosa",
    role: "Brand Identity & Social Media",
    description: `Casa Bosa is a self-initiated brand identity for an Italian restaurant. The brief I set myself was to build a brand that is genuinely traditional in its food and values, but doesn't look like every other Italian restaurant: classic and recognisable, never nostalgic.

The identity is built around the idea of home, summed up in the claim "feels like home". A house-shaped mark holds the initials, paired with a serif logotype and handwritten notes that bring back the warmth of a family kitchen. The palette is drawn from Italian culture but used in a fresh way, and the photography avoids anything staged: natural light, real gestures, images that feel like a memory.

The system covers logo, typography, palette, menu, signage, staff uniforms, merchandise and social media, with templates for feed, stories and highlights.`,
    images: { cover: "img/casa bosa - hero.jpg", hero: "img/casa bosa 01.gif", gallery: [
      "img/casa bosa - gif iniziale.gif",
      { layout: 'duo', srcs: ['img/casa bosa 02.jpg', 'img/casa bosa 03.jpg'] },
      "img/casa bosa – brand.jpg",
      { layout: 'duo', srcs: ['img/casa bosa 04.jpg', 'img/casa bosa 05.gif'] },
      "img/casa bosa SOCIAL.jpg",
      { layout: 'duo', srcs: ['img/casa bosa 06.jpg', 'img/casa bosa 07.jpg'] }
    ] }
  },
];
