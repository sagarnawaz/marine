export const siteConfig = {
  name: "Marine Registration Services",
  legalName: "Marine Registration Services LLC",
  tagline: "Taking Care of your Maritime needs Since 2011",
  phone: "+971 4 123 4567",
  email: "info@marineregistrationservices.ae",
  address: "Dubai Maritime City, Dubai, United Arab Emirates",
  yearFounded: 2011,
};

export const marineImages = {
  hero: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80",
  heroAlt: "Luxury yacht sailing on open ocean at sunset",
  whoWeAre: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  whoWeAreAlt: "Yachts and boats docked at marina",
  newsletter: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
  newsletterAlt: "Yacht on calm waters at golden hour",
  pleasureDocs: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  pleasureDocsAlt: "Pleasure yacht at marina",
  commercialDocs: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
  commercialDocsAlt: "Commercial cargo ship at port",
  foreignDocs: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
  foreignDocsAlt: "Foreign flagged sailboat in harbor",
};

export const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Pleasure", href: "#pleasure" },
  { label: "Commercial", href: "#commercial" },
  { label: "Foreign", href: "#foreign" },
  { label: "Contact", href: "#contact" },
];

export const whoWeAreContent = {
  intro:
    "Marine Registration Services provides comprehensive maritime solutions for local and international clients. We specialize in small and mega marine, sailing, yacht, and vessel services — delivering expert guidance through every stage of registration, compliance, and naval architecture.",
  authorities: [
    "Pleasure Transport Authority",
    "Dubai Maritime City Authority",
    "Port Saeed / RTA / Coastguard / Customs related services",
    "Telecommunication regulatory authority",
    "UAE Coast Guard",
  ],
};

export const serviceCategories = {
  title: "Our Services Covers The Following Categories",
  items: [
    {
      title: "Vessel Registration & Renewal",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
      imageAlt: "Yacht registration at marina",
    },
    {
      title: "Trim and Stability Booklets",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
      imageAlt: "Commercial ship hull stability assessment",
    },
    {
      title: "Inclining experiments",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      imageAlt: "Commercial vessel inclining test at port",
    },
    {
      title: "Load tests",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
      imageAlt: "Cargo ship load testing at shipping port",
    },
    {
      title: "General arrangements",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      imageAlt: "Yachts arranged at marina dock",
    },
    {
      title: "Lines plan and offset tables",
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
      imageAlt: "Aerial view of boat hull lines",
    },
    {
      title: "Tank calibrations",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      imageAlt: "Large vessel tank calibration at sea",
    },
    {
      title: "Safety Equipment Supply",
      image:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
      imageAlt: "Safety equipment on luxury yacht deck",
    },
    {
      title: "Insurance",
      image:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
      imageAlt: "Luxury yacht marine insurance coverage",
    },
    {
      title: "Fire & Safety plan",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80",
      imageAlt: "Ship fire and safety compliance",
    },
    {
      title: "Freeboard calculations",
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
      imageAlt: "Vessel freeboard measurement at sea",
    },
    {
      title: "Equipment Number calculations",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
      imageAlt: "Nautical equipment on ship bridge",
    },
    {
      title: "Resistance and powering calculations",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
      imageAlt: "Ship propulsion and powering analysis",
    },
    {
      title: "Damage Stability",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      imageAlt: "Ship stability and hull integrity",
    },
    {
      title: "Tonnage calculations",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
      imageAlt: "Cargo vessel tonnage measurement",
    },
    {
      title: "Naval Architecture / Seaman Affairs",
      image:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80",
      imageAlt: "Naval architect reviewing luxury yacht design",
    },
    {
      title: "Light Shift / draft survey",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      imageAlt: "Draft survey of cruise ship at port",
    },
  ],
};

export interface ServiceBlock {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const serviceBlocks: ServiceBlock[] = [
  {
    id: "tourism-commercial",
    title: "Tourism / Commercial / Pleasure / Sailing",
    subtitle: "Multi-sector maritime expertise",
    description:
      "From leisure yachts to commercial fleets and tourism vessels, we navigate the regulatory landscape across every sector — ensuring your vessel meets all UAE and international compliance standards.",
    highlights: [
      "Tourism vessel licensing & permits",
      "Commercial fleet registration",
      "Pleasure craft compliance",
      "Sailing vessel certifications",
    ],
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
    imageAlt: "Luxury yacht sailing on open ocean",
  },
  {
    id: "naval-architecture",
    title: "Naval Architecture & Design",
    subtitle: "Engineering excellence at sea",
    description:
      "Our naval architects deliver precision engineering services including stability analysis, structural assessments, and technical documentation required by maritime authorities worldwide.",
    highlights: [
      "Stability & hydrostatic analysis",
      "Structural design review",
      "Technical drawing packages",
      "Class society liaison",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    imageAlt: "Commercial ship naval architecture and design",
  },
  {
    id: "pleasure",
    title: "Pleasure Vessel Registration & Renewal",
    subtitle: "Yacht & leisure craft specialists",
    description:
      "We streamline pleasure vessel registration with the Pleasure Transport Authority and Dubai Maritime City Authority — handling documentation, inspections, and renewals with precision and speed.",
    highlights: [
      "New pleasure craft registration",
      "Annual renewal processing",
      "Flag state documentation",
      "Owner transfer services",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    imageAlt: "Pleasure yacht at marina",
  },
  {
    id: "commercial",
    title: "Commercial Vessel Registration & Renewal",
    subtitle: "Fleet compliance & operations",
    description:
      "Commercial vessel operators trust us for end-to-end registration, tonnage certification, and ongoing compliance with RTA, Coast Guard, and Customs requirements across the UAE.",
    highlights: [
      "Commercial license applications",
      "Tonnage & safety certificates",
      "Crew documentation support",
      "Port authority clearances",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    imageAlt: "Commercial cargo vessel at port",
  },
  {
    id: "foreign",
    title: "Foreign Vessel Registration & Renewal",
    subtitle: "International vessel services",
    description:
      "Operating foreign-flagged vessels in UAE waters requires specialized expertise. We manage temporary import permits, cruising licenses, and full registration transfers with seamless authority coordination.",
    highlights: [
      "Temporary import permits",
      "Cruising license applications",
      "Foreign flag documentation",
      "Cross-border compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
    imageAlt: "Foreign flagged yacht cruising in harbor",
  },
];

export interface DocumentList {
  title: string;
  items: string[];
}

export const pleasureDocuments: { newRegistration: DocumentList; renewal: DocumentList } = {
  newRegistration: {
    title: "New Registration",
    items: [
      "Valid passport copy of owner",
      "UAE residence visa (if applicable)",
      "Vessel purchase agreement / bill of sale",
      "Builder's certificate or previous registration",
      "Hull identification number documentation",
      "Insurance certificate (third party liability)",
      "Survey report from approved surveyor",
      "Power of attorney (if applicable)",
      "NOC from previous flag state (if applicable)",
      "Vessel photographs (port, starboard, stern)",
    ],
  },
  renewal: {
    title: "Renewal",
    items: [
      "Current registration certificate",
      "Valid insurance certificate",
      "Updated survey report (if expired)",
      "Owner identification documents",
      "Renewal application form",
      "Fee payment receipt",
      "Any modification documentation",
    ],
  },
};

export const commercialDocuments: { newRegistration: DocumentList; renewal: DocumentList } = {
  newRegistration: {
    title: "New Registration",
    items: [
      "Trade license of operating company",
      "Memorandum of association",
      "Vessel ownership documents",
      "Classification society certificates",
      "Safety management certificate",
      "ISM/ISPS documentation",
      "Crew list and certifications",
      "Insurance policies (P&I, H&M)",
      "Tonnage measurement certificate",
      "Stability booklet approval",
    ],
  },
  renewal: {
    title: "Renewal",
    items: [
      "Current commercial registration",
      "Valid trade license",
      "Updated classification certificates",
      "Annual survey reports",
      "Insurance renewal certificates",
      "Crew compliance documentation",
      "Safety equipment survey report",
    ],
  },
};

export const foreignDocuments: { newRegistration: DocumentList; renewal: DocumentList } = {
  newRegistration: {
    title: "New Registration",
    items: [
      "Foreign registration certificate",
      "Crew list with valid certifications",
      "Insurance covering UAE waters",
      "Vessel particulars & specifications",
      "Captain's license & credentials",
      "Port of call itinerary",
      "Customs declaration documents",
      "Agent appointment letter",
    ],
  },
  renewal: {
    title: "Renewal",
    items: [
      "Current cruising permit",
      "Updated insurance certificate",
      "Valid foreign registration",
      "Revised itinerary (if changed)",
      "Agent confirmation letter",
      "Port clearance documents",
    ],
  },
};

export const testimonials = [
  {
    id: 1,
    quote:
      "Marine Registration Services handled our mega yacht registration flawlessly. Their knowledge of Dubai Maritime City Authority requirements saved us weeks of delays.",
    author: "Captain James Whitfield",
    role: "Yacht Owner, Monaco",
  },
  {
    id: 2,
    quote:
      "We've relied on their team for our entire commercial fleet renewals. Professional, thorough, and always ahead of regulatory deadlines.",
    author: "Sarah Al-Mansouri",
    role: "Fleet Operations Director",
  },
  {
    id: 3,
    quote:
      "The naval architecture team delivered our stability booklet with exceptional precision. True maritime experts who understand both engineering and compliance.",
    author: "David Chen",
    role: "Ship Manager, Singapore",
  },
  {
    id: 4,
    quote:
      "From foreign vessel permits to customs clearance, they coordinated every authority seamlessly. Outstanding service since 2011 — and it shows.",
    author: "Elena Rodriguez",
    role: "Charter Company CEO",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Collect",
    description:
      "We gather all required documentation and vessel particulars, ensuring nothing is missing before submission.",
  },
  {
    step: "02",
    title: "Inspect",
    description:
      "Our team coordinates surveys and inspections with approved authorities and classification societies.",
  },
  {
    step: "03",
    title: "Approve",
    description:
      "We liaise directly with maritime authorities to secure approvals, permits, and certifications.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Your completed registration, certificates, and documentation — delivered on time, every time.",
  },
];

export const approvedAuthorities = [
  { name: "Dubai Maritime City Authority", abbr: "DMCA" },
  { name: "Pleasure Transport Authority", abbr: "PTA" },
  { name: "UAE Coast Guard", abbr: "UAECG" },
  { name: "RTA Dubai", abbr: "RTA" },
  { name: "UAE Customs", abbr: "CUSTOMS" },
  { name: "TRA UAE", abbr: "TRA" },
];
