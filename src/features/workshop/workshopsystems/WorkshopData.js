/**
 * workshopsData.js
 * Single source of truth for all workshop content.
 * To add a new workshop, simply append a new object to this array.
 */

export const workshops = [
  {
    id: "foundations-of-calligraphy",
    title: "Foundations of Calligraphy",
    price: { inr: "₹1,499", usd: "$18" },
    duration: "4 Weeks",
    level: "Beginner",
    badge: "Most Popular",
    shortDescription:
      "Start your calligraphy journey from absolute zero. Learn to hold the pen, understand letterforms, and build a consistent daily practice.",
    fullDescription:
      "This is the workshop where every journey begins. Designed for complete beginners, Foundations of Calligraphy walks you through the essential building blocks of the art — from understanding nib angles and ink consistency, to forming your very first alphabets with confidence. You'll develop muscle memory through structured daily exercises, and by the end of four weeks, you'll have a solid, repeatable practice that you can build on for years. No prior experience required — only curiosity and a willingness to show up.",
    topics: [
      "Introduction to calligraphy tools and materials",
      "Understanding pen angle, pressure, and grip",
      "Basic strokes and warm-up exercises",
      "Uppercase and lowercase alphabet (modern script)",
      "Spacing, rhythm, and letterform consistency",
      "Building a sustainable daily practice routine",
    ],
    image: "https://placehold.co/600x400/efe9de/9c8060?text=Foundations",
    accentColor: "#b5924c",
  },
  {
    id: "modern-brush-lettering",
    title: "Modern Brush Lettering",
    price: { inr: "₹1,999", usd: "$24" },
    duration: "3 Weeks",
    level: "Beginner",
    badge: "New",
    shortDescription:
      "Explore the expressive world of brush pens. Create fluid, organic letterforms with personality and flair.",
    fullDescription:
      "Brush lettering is calligraphy in motion — loose, expressive, and deeply personal. In this workshop, you'll trade the nib for a brush pen and learn how varying pressure creates beautiful thick-to-thin transitions that are the hallmark of this style. We'll explore bounce lettering, flourishes, and how to develop a signature hand that feels authentically yours. Whether you're making greeting cards, quotes for your wall, or content for social media, this workshop gives you the techniques to make it look effortlessly beautiful.",
    topics: [
      "Choosing the right brush pens for your style",
      "Pressure control and thick-to-thin strokes",
      "Lowercase bounce lettering alphabet",
      "Uppercase flourished letters",
      "Composition and word spacing",
      "Creating finished pieces and layouts",
    ],
    image: "https://placehold.co/600x400/e8e0d5/9c8060?text=Brush+Lettering",
    accentColor: "#8a7455",
  },
  {
    id: "italic-script-mastery",
    title: "Italic Script Mastery",
    price: { inr: "₹2,499", usd: "$30" },
    duration: "5 Weeks",
    level: "Intermediate",
    badge: null,
    shortDescription:
      "Dive into the elegance of classical italic — a versatile, refined script used in formal correspondence and fine art.",
    fullDescription:
      "Italic script is one of the most enduring and versatile styles in the history of calligraphy, dating back to Renaissance Italy. In this intermediate workshop, you'll learn the precise structural logic behind italic letterforms — the consistent angle, the controlled branching, the rhythmic oval foundation. We'll work through both formal and informal italic variations, explore how to use guidelines effectively, and practice writing full words, phrases, and compositions. By the end, you'll command a script worthy of wedding invitations, certificates, and heirloom correspondence.",
    topics: [
      "History and structure of italic script",
      "Guidelines, x-height, and ascender/descender ratios",
      "Core italic lowercase with correct branching",
      "Formal uppercase italic capitals",
      "Connecting letters and word rhythm",
      "Writing complete compositions and addressing envelopes",
    ],
    image: "https://placehold.co/600x400/f0ece4/9c8060?text=Italic+Script",
    accentColor: "#6b8c6b",
  },
  {
    id: "copperplate-essentials",
    title: "Copperplate Essentials",
    price: { inr: "₹2,999", usd: "$36" },
    duration: "6 Weeks",
    level: "Intermediate",
    badge: "Premium",
    shortDescription:
      "Master the pointed pen and pressure-shading techniques of copperplate — the pinnacle of classical Western calligraphy.",
    fullDescription:
      "Copperplate is the crown jewel of Western calligraphy — the elegant, pressure-shaded script of love letters, royal documents, and fine stationery. This workshop introduces you to the pointed flexible nib, the oblique pen holder, and the science of ink preparation. You'll learn the Spencerian-influenced oval system that underlies every copperplate letterform, and work through a structured curriculum of exercises before moving to the full alphabet. Patience is rewarded here: by week six, you'll be writing with a refinement and control that most people never achieve.",
    topics: [
      "Pointed nib selection and oblique pen holder setup",
      "Ink preparation and paper selection",
      "Basic shade and hairline strokes",
      "Oval-based lowercase alphabet",
      "Swash uppercase capitals",
      "Words, phrases, and finished envelope addressing",
    ],
    image: "https://placehold.co/600x400/ede8df/9c8060?text=Copperplate",
    accentColor: "#7a6248",
  },
  {
    id: "calligraphy-for-occasions",
    title: "Calligraphy for Occasions",
    price: { inr: "₹1,299", usd: "$16" },
    duration: "2 Weeks",
    level: "Beginner",
    badge: null,
    shortDescription:
      "A focused workshop on creating beautiful calligraphy for weddings, festivals, birthdays, and personal gifts.",
    fullDescription:
      "Sometimes you don't need to master every script — you need to make something beautiful for someone you love. This workshop is purpose-built for occasions: weddings, festivals, birthdays, housewarmings, and heartfelt gifts. You'll learn a simplified modern script that looks stunning without years of practice, and work through real-world projects like place cards, gift tags, quote prints, and greeting cards. By the end of two weeks, you'll have the skill and confidence to add a handcrafted, personal touch to any celebration.",
    topics: [
      "Quick-start modern script for special occasions",
      "Designing and writing place cards",
      "Creating gift tags and envelope art",
      "Festive layout and composition tips",
      "Choosing inks and paper for different surfaces",
      "Photographing your calligraphy for sharing",
    ],
    image: "https://placehold.co/600x400/f5f0e8/9c8060?text=Occasions",
    accentColor: "#b5924c",
  },
];

/**
 * Helper: Get a single workshop by its slug ID.
 * Returns undefined if not found.
 */
export const getWorkshopById = (id) =>
  workshops.find((w) => w.id === id);

export default workshops;