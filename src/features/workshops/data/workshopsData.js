/**
 * workshopsData.js
 * Single source of truth for all workshop content.
 * To add a new workshop, simply append a new object to this array.
 */

export const workshops = [
  {
    id: "Brush-Calligraphy-Workshop",
    title: "Brush Calligraphy Workshop",
    price: { inr: "₹3,200", usd: "$65" },
    duration: "9 Hours",
    level: "Beginner",
    badge: "Most Popular",
    shortDescription:
      "Relax. Breathe. Create. A beginner-friendly workshop to learn brush lettering and find calm through creativity.",
    fullDescription:
      "Brush lettering is more than just writing — it’s a mindful and creative practice. In this workshop, you’ll slow down, focus on each stroke, and discover the joy of creating beautiful letterforms.Designed for beginners, this course helps you build a strong foundation in brush calligraphy — from basic strokes to forming letters and words. Beyond technique, it offers a calming space to pause, breathe, and express yourself through art. By the end of the workshop, you’ll be able to confidently create letters, words, and simple compositions with clarity and flow.",
    topics: [
      "Welcome & Introduction to Modern Calligraphy",
      "Understanding Brush Lettering Basics",
      "Calligraphy vs Handwriting (Key Differences)",
      "Needed Tools & Materials (Beginner Kit Guide)",
      "How to Hold & Control a Brush Pen",
      "Understanding Guidelines & Letter Structure",
      "Basic Strokes (Foundation Practice)",
      "Forming Lowercase Letters (a–z)",
      "Forming Uppercase Letters (A–Z)",
      "Connecting Letters & Word Formation",
      "Creating Simple Words and Phrases"
    ],
    image: "https://placehold.co/600x400/efe9de/9c8060?text=Brush+Calligraphy",
    accentColor: "#b5924c",
  },
  {
    id: "Italic-Calligraphy",
    title: "Itallic Calligraphy",
    price: { inr: "₹4,500", usd: "$90" },
    duration: "9 Sessions",
    level: "Beginner",
    badge: "New",
    shortDescription:
      "Learn the elegance of Italic calligraphy with structured strokes, balance, and refined letterforms.",
    fullDescription:
      "Master the art of Italic calligraphy — a timeless script known for its clarity, balance, and graceful flow. This structured workshop focuses on building precision and consistency through guided practice. You’ll learn how to form clean, elegant letters using proper guidelines, spacing, and stroke techniques. The course is designed to help you develop rhythm and control, transforming everyday writing into refined and expressive lettering.  Whether you're a beginner or looking to improve your skills, this workshop builds a strong foundation in Italic script.",
    topics: [
      "Introduction to Italic Calligraphy",
      "Tools & Materials",
      "Guidelines & Practice Sheets",
      "Basic Strokes & Rules",
      "Lowercase Letter Groups (n , u, oval based)",
      "Uppercase Letters",
      "Spacing & Alignment",
      "Word Formation & Practice",
    ],
    image: "https://placehold.co/600x400/e8e0d5/9c8060?text=Italic+Calligraphy",
    accentColor: "#8a7455",
  },
  {
    id: "Copperplate-Calligraphy",
    title: "Copperplate Calligraphy",
    price: { inr: "₹6,000", usd: "$125" },
    duration: "9 Sessions",
    level: "Intermediate",
    badge: null,
    shortDescription:
      "Explore the beauty of Copperplate calligraphy with delicate strokes, contrast, and elegant flourishes.",
    fullDescription:
      "Discover the timeless elegance of Copperplate calligraphy — a script defined by its delicate hairlines, bold contrasts, and flowing curves. In this workshop, you’ll learn the fundamentals of using an oblique holder, controlling pressure, and forming both lowercase and uppercase letters with precision. Through guided exercises and structured practice, you’ll develop rhythm, consistency, and confidence. This course is perfect for those who want to create sophisticated, expressive lettering rooted in classical tradition.",
    topics: [
      "Introduction to Copperplate Script",
      "Warm-Up Exercises",
      "Basic Strokes",
      "Lowercase Letters",
      "Uppercase Strokes & Forms",
      "Uppercase Letters & Numbers",
      "Connecting Letters & Word Formation",
    ],
    image: "https://placehold.co/600x400/f0ece4/9c8060?text=Copperplate+Calligraphy",
    accentColor: "#6b8c6b",
  },
  {
    id: "Bounce-Lettering",
    title: "Bounce Lettering",
    price: { inr: "₹", usd: "" },
    duration: "",
    level: "Intermediate",
    badge: "Premium",
    shortDescription:
      "",
    fullDescription:
      "",
    topics: [

    ],
    image: "https://placehold.co/600x400/ede8df/9c8060?text=Bounce+Lettering",
    accentColor: "#7a6248",
  },
  {
    id: "Water-Color-Backgrounds",
    title: "Watercolor Backgrounds",
    price: { inr: "₹", usd: "$" },
    duration: "",
    level: "",
    badge: null,
    shortDescription:
      "",
    fullDescription:
      "",
    topics: [

    ],
    image: "https://placehold.co/600x400/f5f0e8/9c8060?text=Watercolor+Backgrounds",
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
