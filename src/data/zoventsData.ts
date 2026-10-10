export interface ServiceDetail {
  slug: string;
  tag: string;
  title: string;
  shortDesc: string;
  heroTagline: string;
  overview: string;
  bulletPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  tags?: string[];
}

export interface GalleryProject {
  id: number;
  category: 'CONFERENCES' | 'MICE' | 'OFFSITES' | 'AWARDS' | 'ACTIVATIONS' | 'TRAVEL';
  city: string;
  project: string;
  year: string;
  image: string;
  description: string;
  delegates?: string;
}

export interface BlogPost {
  slug: string;
  category: 'EVENT PLANNING' | 'INDUSTRY TRENDS' | 'TRAVEL' | 'CORPORATE CULTURE';
  title: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  relatedSlugs: string[];
}

export const SITE_INFO = {
  name: 'ZOVENT',
  fullName: 'ZOVENT Pvt. Ltd.',
  phone: '+91-8800753816',
  phoneDisplay: '+91 8800753816',
  email: 'info@zovents.com',
  whatsappUrl: 'https://wa.me/918800753816?text=Hi%20Zovent%20Team,%20I%20would%20like%20to%20inquire%20about%20event%20and%20travel%20services.',
  offices: [
    { city: 'GURUGRAM', address: 'Golf Course Road, DLF Phase 5, Gurugram, Haryana', phone: '+91-8800753816', email: 'info@zovents.com' },
    { city: 'KOLKATA', address: 'Salt Lake Sector V, Bidhannagar, Kolkata, West Bengal', phone: '+91-8800753816', email: 'info@zovents.com' }
  ],
  citiesReached: [
    'GURUGRAM', 'DELHI', 'NOIDA', 'MUMBAI', 'BENGALURU', 
    'HYDERABAD', 'CHENNAI', 'KOLKATA', 'GOA', 
    'JAIPUR', 'KOCHI', 'ODISHA'
  ]
};

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    slug: 'conferences',
    tag: 'CORPORATE EVENT',
    title: 'Corporate Conferences & Meetings',
    heroTagline: 'From intimate boardroom meetings to large-scale corporate conferences, Zovent plans and manages every detail.',
    shortDesc: 'From intimate boardroom meetings to large-scale corporate conferences, Zovent plans and manages every detail — from venue and technology to delegates, speakers and on-ground execution.',
    overview: 'Zovent is a corporate event management company in India specialising in conferences, business meetings, leadership events, annual meets, dealer meets, seminars and large-scale corporate gatherings. Our end-to-end conference management services cover event planning, venue sourcing, hospitality, delegate management, audio-visual production, event branding, logistics and on-ground execution. Whether you’re planning a corporate conference, business meeting, MICE event or multi-city corporate event, Zovent brings together strategy, creativity and flawless execution to create an experience that reflects your brand.',
    bulletPoints: [
      { title: 'Venue Sourcing & Management', desc: 'Premium hotels, convention centres and unique venues across India, matched to your event requirements.' },
      { title: 'AV & Event Production', desc: 'Professional audio-visual production, stage design, lighting, LED screens and technical support for seamless presentations and live events.' },
      { title: 'Speaker & Delegate Management', desc: 'End-to-end coordination for speakers, VIPs, delegates, registrations, hospitality and attendee experience.' },
      { title: 'Conference Registration & On-Ground Support', desc: 'Smooth registration, help desks, attendee coordination and dedicated event staff throughout your conference.' },
      { title: 'Budget & Vendor Management', desc: 'Strategic budgeting, vendor sourcing and negotiations to maximise event value without compromising quality.' },
      { title: 'Post-Event Reporting & Analytics', desc: 'Detailed reporting, feedback analysis and actionable insights to measure event performance and engagement.' }
    ],
    faqs: [
      { q: 'How far in advance should we book a corporate conference?', a: 'We recommend 8–12 weeks for domestic conferences and 12–16 weeks for large-scale or international events, to secure preferred venues and speaker availability.' },
      { q: 'Can you manage hybrid (in-person + virtual) conferences?', a: 'Yes — we handle livestreaming, virtual delegate platforms and hybrid AV setups alongside on-ground execution.' },
      { q: 'Do you handle venue sourcing across multiple cities?', a: 'We work with a vetted network of convention centres and five-star venues across India, so multi-city or roadshow-style conferences are handled by one team.' },
      { q: 'What’s included in your conference management fee?', a: 'Planning, vendor coordination, on-ground staffing and reporting are bundled; venue, catering and production costs are billed at actuals with full transparency.' },
      { q: 'Can you accommodate last-minute changes to delegate count?', a: 'Yes, within reason — our vendor contracts are built with flexibility for headcount shifts up to a few days before the event.' }
    ]
  },
  {
    slug: 'mice',
    tag: 'END-TO-END MICE MANAGEMENT',
    title: 'M.I.C.E.',
    heroTagline: 'Seamless MICE experiences designed around your brand, business goals and people.',
    shortDesc: 'From high-impact corporate meetings and incentive trips to conferences and exhibitions, Zovent creates seamless MICE experiences designed around your brand, business goals and people across India and international destinations.',
    overview: 'Zovent is a MICE event management company delivering end-to-end Meetings, Incentives, Conferences and Exhibitions solutions across India and international destinations. Our MICE services include corporate meetings, incentive travel, conference management, exhibition management, destination management, group travel, corporate hospitality, hotel bookings, flight coordination, ground transportation and event production. Whether you’re planning a corporate incentive trip, international conference, dealer meet, leadership meeting, exhibition or corporate group tour, our team manages the complete experience — from planning and budgeting to travel, hospitality and on-ground execution.',
    bulletPoints: [
      { title: 'Corporate Meetings & Conferences', desc: 'End-to-end planning and execution for meetings, conferences, seminars and leadership events.' },
      { title: 'Incentive Travel & Group Trips', desc: 'Curated incentive tours, employee rewards and group travel experiences built around your goals.' },
      { title: 'Destination Management (DMC)', desc: 'Local expertise, venues, activities, transportation and experiences across India and global destinations.' },
      { title: 'Exhibition & Trade Show Management', desc: 'Exhibition planning, stall coordination, branding, logistics and on-ground event management.' },
      { title: 'Flights, Hotels & Ground Logistics', desc: 'Group air travel, accommodation, transfers, transportation and complete travel coordination.' },
      { title: 'Experiential Programme Design', desc: 'Themed experiences, team activities, entertainment and customised itineraries that make your programme memorable.' }
    ],
    faqs: [
      { q: 'What’s the difference between MICE and a regular corporate event?', a: 'MICE specifically covers Meetings, Incentives, Conferences and Exhibitions — programmes tied to business objectives like sales performance, partner relations or industry visibility, often involving travel and multi-day logistics.' },
      { q: 'Do you manage international MICE programmes?', a: 'Yes — we handle destination selection, visas, group flights and on-ground DMC coordination for MICE programmes across Asia, the Middle East and Europe.' },
      { q: 'How do you price a MICE programme?', a: 'Pricing is based on delegate count, destination, duration and inclusions (stay, transfers, activities). We provide a detailed per-delegate cost breakdown before confirmation.' },
      { q: 'Can you handle group sizes of 500+?', a: 'Yes — we’ve managed MICE groups from 20 to 2,000+ delegates, with dedicated on-ground teams scaled to group size.' },
      { q: 'What information do you need from us to start planning?', a: 'Just your objective, target dates, approximate delegate count and budget range — we take it from there.' }
    ]
  },
  {
    slug: 'offsites',
    tag: 'RETREAT. REFLECT. RECONNECT.',
    title: 'Offsites & Team Building',
    heroTagline: 'Purposefully designed corporate offsites that bring teams together and spark fresh thinking.',
    shortDesc: 'Purposefully designed corporate offsites that bring teams together, spark fresh thinking and create experiences people actually remember — from leadership retreats to experiential getaways.',
    overview: 'Looking for a corporate offsite partner in India? Zovent plans and executes customised corporate retreats, team-building programmes, leadership offsites and employee engagement experiences across India and international destinations. From destination selection and accommodation to activities, entertainment, food & beverage and on-ground logistics, our team takes care of every detail.',
    bulletPoints: [
      { title: 'Corporate Offsite Planning', desc: 'End-to-end planning for productive, engaging and memorable corporate offsites.' },
      { title: 'Leadership Retreats & Strategic Offsites', desc: 'Thoughtfully curated retreats designed for leadership alignment, strategy and meaningful conversations.' },
      { title: 'Team-Building Activities', desc: 'Creative team-building experiences that encourage collaboration, connection and a little healthy competition.' },
      { title: 'Corporate Team Outings', desc: 'From adventure getaways to relaxed resort escapes, we create team outings that everyone looks forward to.' },
      { title: 'Wellness & Experiential Programmes', desc: 'Mindful, immersive experiences designed to refresh teams and boost employee engagement.' },
      { title: 'Resort & Destination Sourcing', desc: 'Handpicked resorts, hotels and destinations that match your team, objectives and budget.' },
      { title: 'F&B, Travel & Logistics Management', desc: 'Flights, transfers, accommodation, meals, activities and on-ground coordination — all handled seamlessly.' }
    ],
    faqs: [
      { q: 'How long should a typical corporate offsite run?', a: 'Most offsites run 2–3 days. Shorter 1-day formats work well for quarterly check-ins; longer 4–5 day formats suit annual leadership retreats.' },
      { q: 'Can you tailor offsites for fully remote teams?', a: 'Yes — we design offsites specifically to help distributed teams build in-person rapport, with a strong focus on structured connection activities.' },
      { q: 'Do you provide facilitators for strategy sessions?', a: 'We can bring in experienced external facilitators for leadership offsites where objective, structured discussion is important.' },
      { q: 'What’s a realistic budget range for a team offsite?', a: 'It varies widely by destination and group size — from a modest per-person cost for a nearby hill-station retreat to a significantly higher spend for premium international offsites. We’ll model options against your budget.' },
      { q: 'Can offsites include both work sessions and leisure time?', a: 'Absolutely — most of our offsite itineraries deliberately balance focused work blocks with team-building and downtime.' }
    ]
  },
  {
    slug: 'activations',
    tag: 'CREATE MOMENTS. BUILD BRAND.',
    title: 'Brand Activations',
    heroTagline: 'Strategic brand activation experiences that turn attention into engagement.',
    shortDesc: 'Strategic brand activation experiences that turn attention into engagement and audiences into advocates — from product launches to immersive experiential campaigns.',
    overview: 'Zovent is a brand activation and experiential marketing agency creating product launches, corporate events, pop-ups and immersive brand experiences across India and international destinations. At Zovent, we create brand activation events, experiential marketing campaigns and corporate experiences that make people stop, engage and remember. Whether you’re launching a new product, celebrating a milestone or creating a consumer-facing brand experience, we combine creative ideas with flawless event execution to deliver experiences that move people and strengthen your brand.',
    bulletPoints: [
      { title: 'Product Launches & Brand Events', desc: 'Create anticipation and impact with professionally managed product launches, unveilings and brand reveal events.' },
      { title: 'Experiential Marketing', desc: 'Design immersive brand experiences that encourage audiences to interact, connect and engage with your brand.' },
      { title: 'Corporate Brand Events', desc: 'From milestone celebrations to annual events, we create experiences that bring your brand, people and story together.' },
      { title: 'Pop-Up Brand Experiences', desc: 'Take your brand beyond traditional spaces with creative pop-ups, installations and interactive experiences.' },
      { title: 'Press & Media Events', desc: 'From media previews to influencer events, we manage the experience, production and guest journey from start to finish.' },
      { title: 'Experiential Brand Activations', desc: 'Build meaningful audience connections through interactive concepts, entertainment, technology and creative storytelling.' }
    ],
    faqs: [
      { q: 'What is the typical timeline for a brand activation?', a: 'Depending on scale, 4–10 weeks from concept to execution — larger multi-city activations need more lead time for permits and logistics.' },
      { q: 'Can you handle influencer or media components?', a: 'Yes — we coordinate media previews, influencer invites and content capture alongside the core activation.' },
      { q: 'Do you design the creative concept or just execute it?', a: 'Both — our team can develop the creative concept from scratch, or execute against a concept your internal or agency team has already designed.' },
      { q: 'Can activations run across multiple cities simultaneously?', a: 'Yes — we’ve run synchronised multi-city activations with central creative direction and local execution teams.' },
      { q: 'How do you measure activation success?', a: 'We track footfall, engagement, media reach and post-event sentiment depending on your objectives, and share a wrap report.' }
    ]
  },
  {
    slug: 'awards',
    tag: 'CELEBRATE EXCELLENCE WITH DISTINCTION',
    title: 'Award Ceremonies & Recognition',
    heroTagline: 'We design recognition events that genuinely honour achievement.',
    shortDesc: 'We design recognition events that genuinely honour achievement — from annual sales award galas and gala dinners to employee appreciation dinners and leadership felicitations.',
    overview: 'Celebrations of achievement, thoughtfully designed and flawlessly executed — from elegant award ceremonies and gala dinners to corporate recognition and milestone events.',
    bulletPoints: [
      { title: 'Gala Dinner & Awards Night Management', desc: 'End-to-end planning and execution of sophisticated corporate award nights and gala dinners.' },
      { title: 'Trophy Design & Fabrication', desc: 'Custom awards, trophies and recognition pieces designed to reflect your brand and occasion.' },
      { title: 'Host & Entertainment Booking', desc: 'Professional hosts, performers and entertainment curated to elevate the guest experience.' },
      { title: 'Award Category & Programme Consulting', desc: 'Strategic support for award categories, nomination formats and a seamless event programme.' },
      { title: 'Nomination & Shortlisting Platforms', desc: 'Efficient digital solutions to manage nominations, entries, judging and shortlisting.' },
      { title: 'Video Production & Highlight Reels', desc: 'Powerful award films, winner AVs and event highlight videos that capture the moments worth remembering.' }
    ],
    tags: [
      'AWARD CEREMONY MANAGEMENT', 'CORPORATE AWARD CEREMONIES', 'AWARDS NIGHT MANAGEMENT',
      'CORPORATE RECOGNITION EVENTS', 'EMPLOYEE RECOGNITION EVENTS', 'GALA DINNER MANAGEMENT',
      'CORPORATE AWARDS', 'EMPLOYEE APPRECIATION EVENTS', 'LEADERSHIP RECOGNITION EVENTS',
      'TROPHY DESIGN', 'AWARD EVENT MANAGEMENT'
    ],
    faqs: [
      { q: 'How many guests can you accommodate for an award night?', a: 'We’ve delivered award ceremonies from intimate 50-guest dinners to 1,000+ guest galas.' },
      { q: 'Do you help design the award categories and nomination process?', a: 'Yes — we offer consulting on award categories, and can set up a digital nomination and judging platform.' },
      { q: 'Can you produce video content for the ceremony?', a: 'Yes — winner AVs, highlight reels and opening films are part of our standard production offering.' },
      { q: 'How far in advance should we start planning an awards night?', a: '8-10 weeks is typical, allowing time for venue booking, trophy fabrication and content production.' },
      { q: 'Do you handle entertainment and hosting?', a: 'Yes — we curate and book hosts, performers and entertainment suited to your audience and tone.' }
    ]
  },
  {
    slug: 'travel',
    tag: 'TRAVEL THAT WORKS AROUND YOU',
    title: 'Corporate Travel & Holidays',
    heroTagline: 'From seamless business travel to bespoke group getaways, managed with precision.',
    shortDesc: 'From seamless business travel to bespoke group getaways, Zovent manages every journey with precision, comfort and care across India and international destinations.',
    overview: 'From seamless business travel to bespoke group getaways, Zovent manages every journey with precision, comfort and care. We curate corporate travel, incentive trips, luxury holidays and group travel experiences across India and international destinations — tailored around your people, purpose and preferences.',
    bulletPoints: [
      { title: 'Corporate Travel Management (CTM)', desc: 'End-to-end business travel solutions including flights, hotels, transfers, travel coordination and traveller support.' },
      { title: 'Group & Incentive Travel', desc: 'Reward your teams with thoughtfully planned incentive trips and group travel experiences designed around your goals.' },
      { title: 'Luxury Hotels, Villas & Resorts', desc: 'Access carefully selected premium hotels, luxury resorts and private villas for business and leisure travel.' },
      { title: 'International Holiday Packages', desc: 'Curated international travel packages with customised itineraries, stays, experiences and seamless logistics.' },
      { title: 'Visa & Travel Documentation Assistance', desc: 'Support with visa processing, documentation and essential travel requirements for international journeys.' },
      { title: '24/7 In-Trip Support', desc: 'Reliable on-ground assistance throughout the journey, helping travellers stay comfortable and connected.' }
    ],
    tags: ['CUSTOM ITINERARIES', 'GROUP TRAVEL', 'SOLO TRAVEL', 'PAX TRIPS', 'INCENTIVE TRAVEL', 'BUSINESS TRAVEL'],
    faqs: [
      { q: 'Do you handle both domestic and international corporate travel?', a: 'Yes — from routine domestic business trips to international incentive programmes and luxury group travel.' },
      { q: 'Can you manage visa processing for international trips?', a: 'Yes, we assist with visa documentation and processing as part of our international travel coordination.' },
      { q: 'Is 24/7 support available during trips?', a: 'Yes — our team provides round-the-clock in-trip support for group and individual travellers.' },
      { q: 'Can you build custom itineraries for small groups or individuals?', a: 'Yes — alongside group travel management, we design fully custom itineraries for solo and small-group trips.' },
      { q: 'How do you handle last-minute travel changes?', a: 'Our travel desk handles rebookings, cancellations and itinerary changes directly with airline and hotel partners to minimise disruption.' }
    ]
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    category: 'CONFERENCES',
    city: 'GURUGRAM',
    project: 'Corporate Event',
    year: '2026',
    image: '/src/assets/images/keynote_partner_summit_1791547815948.jpg',
    description: 'National tech innovation conference for 800+ executive delegates, featuring dual keynote stages and seamless live stream infrastructure.',
    delegates: '800 delegates'
  },
  {
    id: 2,
    category: 'MICE',
    city: 'DELHI',
    project: 'MICE Programme',
    year: '2026',
    image: '/src/assets/images/hero_banquet_udaipur_1791547888910.jpg',
    description: 'End-to-end multi-day congress bringing international delegations together with VIP protocol, airport transfers, and gala dinners.',
    delegates: '1,200 delegates'
  },
  {
    id: 3,
    category: 'ACTIVATIONS',
    city: 'NOIDA',
    project: 'Brand Activation',
    year: '2026',
    image: '/src/assets/images/planner_desk_review_1791547802924.jpg',
    description: 'Experiential automotive reveal pavilion featuring interactive tactile displays, immersive acoustic mapping, and VIP press preview.',
    delegates: '450 attendees'
  },
  {
    id: 4,
    category: 'AWARDS',
    city: 'GURUGRAM',
    project: 'Awards Gala',
    year: '2026',
    image: '/src/assets/images/hero_banquet_udaipur_1791547888910.jpg',
    description: 'Annual excellence gala honouring top performers across 18 business units with bespoke brass trophies and celebrity host.',
    delegates: '600 delegates'
  },
  {
    id: 5,
    category: 'OFFSITES',
    city: 'GOA',
    project: 'Leadership Offsite',
    year: '2026',
    image: '/src/assets/images/beach_dinner_sri_lanka_1791547893257.jpg',
    description: '3-day beachfront executive reset combining morning strategy sprints with sundowner beach dining and acoustic jazz.',
    delegates: '65 leaders'
  },
  {
    id: 6,
    category: 'TRAVEL',
    city: 'JAIPUR',
    project: 'Corporate Travel',
    year: '2026',
    image: '/src/assets/images/rajasthan_heritage_meeting_1791547911911.jpg',
    description: 'Palace fort buyout for executive delegations, private royal dining, and hosted heritage walk through old pink city ramparts.',
    delegates: '40 delegates'
  },
  {
    id: 7,
    category: 'OFFSITES',
    city: 'BENGALURU',
    project: 'Team Building Retreat',
    year: '2026',
    image: '/src/assets/images/bhutan_valley_monastery_1791547827332.jpg',
    description: 'High-energy outdoor immersion retreat in forest estate featuring custom problem-solving challenges and campfire sessions.',
    delegates: '140 team members'
  },
  {
    id: 8,
    category: 'ACTIVATIONS',
    city: 'DELHI',
    project: 'Product Launch Event',
    year: '2026',
    image: '/src/assets/images/keynote_partner_summit_1791547815948.jpg',
    description: 'Flagship consumer electronics unveiling attended by 300 tech journalists, live product unboxings, and stage demo theatrics.',
    delegates: '350 attendees'
  },
  {
    id: 9,
    category: 'CONFERENCES',
    city: 'GURUGRAM',
    project: 'Annual Conference',
    year: '2026',
    image: '/src/assets/images/keynote_partner_summit_1791547815948.jpg',
    description: 'All-hands strategy congress featuring multi-track breakout sessions, digital delegate check-in, and interactive voting.',
    delegates: '1,500 delegates'
  },
  {
    id: 10,
    category: 'AWARDS',
    city: 'HYDERABAD',
    project: 'Recognition Ceremony',
    year: '2026',
    image: '/src/assets/images/hero_banquet_udaipur_1791547888910.jpg',
    description: 'Grand recognition banquet at convention centre, cinematic video tributes for milestone employees, and gourmet catering.',
    delegates: '520 attendees'
  },
  {
    id: 11,
    category: 'MICE',
    city: 'NOIDA',
    project: 'Incentive Programme',
    year: '2026',
    image: '/src/assets/images/sri_lanka_heritage_train_1791547838370.jpg',
    description: 'Partner rewards programme with curated itineraries, luxury resort hospitality, and customized commemorative gifts.',
    delegates: '220 performers'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'corporate-event-management-india-guide',
    category: 'EVENT PLANNING',
    title: 'Corporate Event Management in India: The Complete Guide',
    author: 'Priya Mehta',
    date: 'December 15, 2025',
    readTime: '8 min read',
    summary: 'From boardroom product launches in Mumbai to incentive retreats in Goa — everything you need to know before planning a corporate event in India.',
    content: [
      'India has become one of the most dynamic corporate event markets in the world. From boardroom product launches in Mumbai to large-scale conferences in Delhi NCR and incentive retreats in Goa, businesses across the country are investing more than ever in bringing people together in person. If you’re planning a corporate event in India — or evaluating a partner to run one for you — this guide covers everything you need to know.',
      'WHAT IS CORPORATE EVENT MANAGEMENT?\n\nCorporate event management is the end-to-end process of planning, organizing, and executing business events — conferences, seminars, product launches, annual meets, offsites, award nights, and incentive trips. It covers everything from venue sourcing and vendor negotiation to logistics, audio-visual production, hospitality, and on-ground execution.\n\nUnlike social events, corporate events are tied directly to business outcomes: brand perception, employee engagement, client relationships, and revenue. That makes precision, professionalism, and ROI-thinking non-negotiable.',
      'TYPES OF CORPORATE EVENTS IN INDIA\n\n• Conferences and Seminars — Large-format knowledge or industry events, often with multiple tracks, keynote speakers, and exhibition zones.\n• Product Launches — High-impact events designed to generate media coverage and market buzz.\n• Annual General Meetings (AGMs) and Town Halls — Internal or shareholder-facing events focused on communication and alignment.\n• Corporate Offsites and Team Retreats — Strategy sessions combined with team-building, usually at resort or hill-station destinations.\n• Incentive Travel (MICE) — Reward trips for top performers, often domestic or international.\n• Award Nights and Galas — Recognition-driven events with a strong entertainment and production component.\n• Trade Shows and Exhibitions — B2B-focused events for lead generation and networking.',
      'WHY CORPORATE EVENT MANAGEMENT IN INDIA IS DIFFERENT\n\n• Scale and diversity — India’s geography means an event in Kerala looks nothing like one in Rajasthan. Vendors, weather, logistics, and local regulations vary widely by region.\n• Cost efficiency — India offers a strong cost-to-quality ratio compared to many international destinations, making it attractive for both domestic and inbound corporate events.\n• Infrastructure growth — Tier-1 and increasingly Tier-2 cities now have world-class convention centres, five-star inventory, and improved connectivity.\n• Cultural richness — Heritage properties, palaces, and unique local experiences give planners creative options that are hard to replicate elsewhere.',
      'KEY STAGES OF CORPORATE EVENT PLANNING\n\n1. DEFINE OBJECTIVES: Every successful event starts with a clear brief: is this about brand visibility, employee morale, client retention, or sales enablement? Objectives shape every downstream decision.\n2. BUDGETING: A realistic budget accounts for venue, travel, accommodation, F&B, décor, AV production, artist fees, permits, and a contingency buffer (typically 10–15%).\n3. VENUE AND DESTINATION SELECTION: Location drives cost and experience. Consider connectivity, delegate profile, seasonality, and venue capacity alongside the “wow factor.”\n4. VENDOR COORDINATION: This includes decor teams, caterers, AV/production houses, transport operators, and entertainment. A single point of coordination (usually the event management agency) keeps this manageable.\n5. ON-GROUND EXECUTION: Registration desks, delegate management, timeline adherence, and real-time problem-solving determine whether an event feels seamless or chaotic.\n6. POST-EVENT REPORTING: Feedback surveys, engagement metrics, and ROI analysis close the loop and inform future planning.',
      'CHOOSING THE RIGHT CORPORATE EVENT MANAGEMENT COMPANY\n\nWhen evaluating partners, look for:\n• A demonstrated track record with events of similar scale and format\n• Strong vendor and venue relationships across multiple Indian cities\n• Transparent budgeting with no hidden markups\n• In-house production and creative capabilities (not just outsourcing)\n• Responsiveness and a dedicated single point of contact',
      'FINAL THOUGHTS\n\nCorporate event management in India is no longer just about logistics — it’s a strategic function that shapes how employees, clients, and stakeholders experience your brand. Whether you’re planning a 50-person offsite or a 2,000-delegate conference, the right planning process and the right partner make all the difference.\n\nLooking to plan your next corporate event in India? Zovent specialises in end-to-end corporate event management across the country — get in touch to discuss your requirements.'
    ],
    relatedSlugs: ['corporate-event-ideas-engage-employees', 'corporate-offsite-planning-india']
  },
  {
    slug: 'what-is-mice-event-management',
    category: 'INDUSTRY TRENDS',
    title: 'What is MICE Event Management?',
    author: 'Rohit Sinha',
    date: 'November 28, 2025',
    readTime: '7 min read',
    summary: 'Understanding Meetings, Incentives, Conferences, and Exhibitions — and why this specialized travel and event discipline is booming.',
    content: [
      'If you work in corporate travel, HR, or events, you’ve likely come across the term “MICE.” It’s one of the most important categories in the events and travel industry, and understanding it properly can help you plan smarter, budget better, and choose the right partners.',
      'MICE: WHAT DOES IT STAND FOR?\n\n• M — Meetings: Smaller, focused gatherings — think leadership offsites, board meetings, or departmental strategy sessions. Usually 10–100 people, held at a hotel, resort, or dedicated meeting venue.\n• I — Incentives: Reward-based trips given to employees, dealers, or channel partners for hitting performance targets. Incentive travel blends business recognition with leisure experiences — often at aspirational domestic or international destinations.\n• C — Conferences: Larger, structured events with an agenda, speakers, and sessions — industry conferences, annual sales conferences, or association congresses. These can range from 100 to several thousand attendees.\n• E — Exhibitions: Trade shows and expos where companies showcase products or services, typically B2B, with booths, networking, and lead generation as core objectives.',
      'WHY MICE MATTERS AS A BUSINESS CATEGORY\n\nMICE tourism is a high-value segment because:\n• Higher spending per traveler — Corporate budgets typically allow for better accommodation, F&B, and experiences than average leisure travel.\n• Group volume — MICE events bring in large groups at once, which is valuable for hotels, airlines, and destinations.\n• Off-season potential — Many destinations use MICE business to fill capacity during traditionally low tourist seasons.\n• Repeat business — Companies host recurring annual events, creating long-term relationships with venues and destinations.',
      'MICE EVENT MANAGEMENT: WHAT IT INVOLVES\n\nManaging a MICE event professionally requires coordination across destination vetting, flights, visas, room block agreements, balanced agendas, and on-ground hospitality desks.',
      'HOW TO PLAN A SUCCESSFUL MICE EVENT\n\n1. Clarify the objective — is this a working meeting, a reward trip, or a large conference?\n2. Set a realistic per-delegate budget early, since this shapes destination and venue options.\n3. Choose a destination with the right connectivity and infrastructure for your group size.\n4. Partner with an experienced MICE event management company that understands both the “M” and the “E” — the business rigor and the experiential design.\n5. Build in feedback mechanisms to measure engagement and ROI.'
    ],
    relatedSlugs: ['best-mice-destinations-india', 'top-international-mice-destinations']
  },
  {
    slug: 'best-mice-destinations-india',
    category: 'TRAVEL',
    title: 'Best MICE Destinations in India',
    author: 'Sneha Rao',
    date: 'November 10, 2025',
    readTime: '8 min read',
    summary: 'From metro convention powerhouses to palace courtyards: the top 10 destinations for corporate meetings, conferences, and incentive travel in India.',
    content: [
      'India’s diversity is its biggest advantage when it comes to MICE (Meetings, Incentives, Conferences, and Exhibitions) tourism. Whether you need a business-district location for a conference or a scenic escape for an incentive trip, India has a destination to match.',
      '1. MUMBAI: Financial capital with Jio World Convention Centre, ideal for international connectivity and massive corporate product reveals.\n2. DELHI NCR (GURUGRAM & NOIDA): India Expo Mart and Bharat Mandapam, unparalleled for exhibitions and government conferences.\n3. GOA: The perennial favorite for incentive travel, blending beach resorts and relaxed team bonding.\n4. JAIPUR: Historic palaces and royal theme galas that provide unmatched prestige.\n5. UDAIPUR: Lake-facing palace luxury for high-value executive retreats.\n6. BENGALURU: Silicon Valley of India, ideal for technology conferences and startup summits.\n7. HYDERABAD: HITEX and HICC convention facilities backed by world-class hotels and tech corridors.\n8. KERALA: Backwater houseboats and tea-hill retreats in Munnar and Kumarakom.\n9. AGRA: Bucket-list international delegate conferences alongside the Taj Mahal.\n10. RISHIKESH: Riverside wellness retreats and adventure offsites in the Himalayan foothills.',
      'HOW TO CHOOSE THE RIGHT MICE DESTINATION\n\nBalance group size and connectivity with per-delegate budget, seasonal climate, and the underlying event intent.'
    ],
    relatedSlugs: ['what-is-mice-event-management', 'top-international-mice-destinations']
  },
  {
    slug: 'corporate-incentive-travel-planning-guide',
    category: 'CORPORATE CULTURE',
    title: 'Corporate Incentive Travel: How to Plan a Trip Your Team Will Never Forget',
    author: 'Arjun Kapoor',
    date: 'October 24, 2025',
    readTime: '8 min read',
    summary: 'A step-by-step roadmap to designing high-impact reward journeys that build loyalty and motivate teams.',
    content: [
      'Incentive travel is one of the most powerful tools a company has for driving performance, loyalty, and morale. Unlike a cash bonus, a well-designed incentive trip creates shared memories, strengthens relationships, and gives high performers a tangible, visible reward.',
      'WHY INCENTIVE TRAVEL WORKS\n\n• Emotional impact — Experiences create longer-lasting motivation than cash.\n• Visibility — Public peer recognition reinforces aspiration for the entire organisation.\n• Retention & Culture — Shared travel builds deep interpersonal bonds that carry back into everyday work.',
      'STEP-BY-STEP PLANNING PROCESS\n\n1. Define qualification criteria early to sustain annual motivation.\n2. Set an aspirational per-person budget.\n3. Pick an exciting destination (Goa, Kerala, Andaman or international spots like Bali, Dubai, Thailand, Georgia).\n4. Balance business recognition with leisure and a signature "hero moment".\n5. Provide seamless logistics: group flights, private transfers, and VIP concierge desks.\n6. Build anticipation with countdown comms and event apps.'
    ],
    relatedSlugs: ['top-international-mice-destinations', 'what-is-mice-event-management']
  },
  {
    slug: 'corporate-offsite-planning-india',
    category: 'EVENT PLANNING',
    title: 'Corporate Offsite Planning in India',
    author: 'Priya Mehta',
    date: 'October 5, 2025',
    readTime: '9 min read',
    summary: 'How to structure strategic retreats, team-building sessions, and executive alignment getaways that actually deliver business value.',
    content: [
      'A well-planned corporate offsite can reset team dynamics, sharpen strategic focus, and re-energize employees in a way no in-office meeting can. A poorly planned one, however, can feel like an expensive vacation with a token PowerPoint session.',
      'TYPES OF CORPORATE OFFSITES\n\n• Strategy Offsites — Leadership teams working through annual planning, OKRs, or major decisions.\n• Team-Building Offsites — Focused on trust, collaboration, and morale.\n• Sales Kickoffs — Combining strategy communication, training, and motivation.\n• Departmental Retreats — Smaller, function-specific alignment sessions.',
      'BEST PRACTICES FOR AGENDA DESIGN\n\nKeep focused working sessions to 2–4 hours per day. Allow ample unstructured social time over meals and evening gatherings, and bring in external facilitators for objective leadership dialogue.'
    ],
    relatedSlugs: ['best-destinations-corporate-offsites-retreats', 'corporate-event-management-india-guide']
  },
  {
    slug: 'top-international-mice-destinations',
    category: 'TRAVEL',
    title: 'Top International MICE Destinations for Indian Corporates',
    author: 'Rohit Sinha',
    date: 'September 18, 2025',
    readTime: '8 min read',
    summary: 'Evaluating visa ease, flight connectivity, and value-for-money across Thailand, Dubai, Bali, Vietnam, Singapore, and beyond.',
    content: [
      'As Indian companies grow and reward budgets increase, more organizations are looking beyond domestic destinations for their MICE events.',
      'TOP PICKS:\n\n1. THAILAND: Bangkok conferences & Phuket incentive retreats with visa-on-arrival ease.\n2. DUBAI & ABU DHABI: Short flights, world-class convention infrastructure, and desert safaris.\n3. BALI: Cultural charm and cliffside resorts for senior leadership recognition.\n4. VIETNAM: Da Nang and Ha Long Bay, providing exceptional scenic value and modern infrastructure.\n5. SINGAPORE: High-stakes financial and corporate meetings with world-class efficiency.\n6. MALAYSIA, MALDIVES, GEORGIA, AZERBAIJAN, SRI LANKA, and TURKEY.'
    ],
    relatedSlugs: ['what-is-mice-event-management', 'best-international-holiday-destinations']
  },
  {
    slug: 'corporate-travel-management-guide',
    category: 'TRAVEL',
    title: 'Corporate Travel Management: The Complete Guide',
    author: 'Sneha Rao',
    date: 'September 1, 2025',
    readTime: '9 min read',
    summary: 'How companies manage flights, hotels, duty of care, and group logistics while saving costs and eliminating traveller friction.',
    content: [
      'Corporate travel management is the backbone of a company’s business travel program — covering everything from booking flights and hotels for individual employee trips to managing large-scale group movements for conferences and incentive programs.',
      'KEY PILLARS:\n\n1. Clear Travel Policies: Guardrails for booking windows, room tiers, and approvals.\n2. Negotiated Corporate Rates: Maximising savings through aggregated volume.\n3. Duty of Care: Real-time tracking and safety protocols for business travellers.\n4. Group & Event Travel Coordination: Specialized handling for large movements distinct from solo corporate bookings.'
    ],
    relatedSlugs: ['corporate-incentive-travel-planning-guide', 'top-international-mice-destinations']
  },
  {
    slug: 'best-destinations-corporate-offsites-retreats',
    category: 'TRAVEL',
    title: '10 Best Destinations in India for Corporate Offsites & Team Retreats',
    author: 'Arjun Kapoor',
    date: 'August 14, 2025',
    readTime: '7 min read',
    summary: 'The top destinations for offsites tailored by team size, drive distance, and strategic focus.',
    content: [
      'Choosing the right destination sets the tone for the entire retreat.',
      '1. GOA: Versatile beachside resorts for 20 to 500 attendees.\n2. JAIPUR: Palace hotels for executive grandeur.\n3. UDAIPUR: Exclusive lake retreats for confidential board meetings.\n4. LONAVALA / KHANDALA: Short drives from Mumbai for 2D/1N offsites.\n5. COORG: Coffee estates for deep, quiet strategic thinking.\n6. RISHIKESH: Ganges rafting, yoga, and wellness alignment.\n7. KERALA: Houseboats and tranquil backwaters.\n8. MANESAR / NEEMRANA: Quick escapes from Delhi NCR.\n9. MAHABALESHWAR: Scenic hill climate.\n10. ANDAMAN ISLANDS: Pristine turquoise waters for unforgettable leadership retreats.'
    ],
    relatedSlugs: ['corporate-offsite-planning-india', 'best-mice-destinations-india']
  },
  {
    slug: 'corporate-event-ideas-engage-employees',
    category: 'EVENT PLANNING',
    title: '10 Corporate Event Ideas to Engage Employees, Clients & Teams',
    author: 'Priya Mehta',
    date: 'July 27, 2025',
    readTime: '7 min read',
    summary: 'Move beyond boring slide presentations: 10 creative event formats that foster authentic engagement and leave lasting impressions.',
    content: [
      'Corporate events are most effective when they’re designed with a clear engagement goal, not just as a box-ticking exercise.',
      'IDEAS THAT WORK:\n\n1. Themed Annual Days & Milestone Anniversaries\n2. Hackathons and Innovation Sprints\n3. Curated Client Appreciation Dinners\n4. Dedicated Wellness and Mindfulness Days\n5. CSR-Linked Purpose Building\n6. High-Production Gala Award Nights\n7. Immersive Product Unveilings\n8. Family Day Experiences\n9. Sales Kickoff (SKO) High-Energy Stages\n10. Experiential Outdoor Team Challenges.'
    ],
    relatedSlugs: ['corporate-event-management-india-guide', 'corporate-incentive-travel-planning-guide']
  },
  {
    slug: 'best-international-holiday-destinations',
    category: 'TRAVEL',
    title: 'Best International Holiday Destinations for Indian Travellers',
    author: 'Rohit Sinha',
    date: 'July 10, 2025',
    readTime: '8 min read',
    summary: 'Curated international destinations for Indian travellers across honeymoons, family holidays, and adventure expeditions.',
    content: [
      'With rising disposable incomes and expanding direct flight connectivity, international travel has never been more seamless for Indian travellers.',
      'HIGHLIGHTS:\n\n• For First-Timers: Thailand, Dubai, Sri Lanka (low friction, easy visas, direct flights).\n• For Honeymoons: Maldives, Bali, Santorini (privacy and romance).\n• For Families: Singapore, Malaysia, Switzerland (safety, theme parks, and alpine trains).\n• For Adventure: Vietnam, New Zealand.\n• Value-for-Money Gems: Georgia, Azerbaijan, Nepal.'
    ],
    relatedSlugs: ['top-international-mice-destinations', 'corporate-incentive-travel-planning-guide']
  }
];

export const DEMO_INVOICES: Record<string, {
  refId: string;
  clientName: string;
  eventName: string;
  amount: string;
  status: 'UNPAID' | 'PAID';
  dueDate: string;
  items: { description: string; amount: string }[];
}> = {
  'ZOV-2026-8812': {
    refId: 'ZOV-2026-8812',
    clientName: 'TechCore India Pvt. Ltd.',
    eventName: 'Annual Leadership Summit & Gala — Gurugram',
    amount: '₹4,50,000',
    status: 'UNPAID',
    dueDate: '15-Nov-2026',
    items: [
      { description: 'Stage Production & 4K LED Screen Setup', amount: '₹2,20,000' },
      { description: 'VIP Delegate Hospitality & Venue Coordination', amount: '₹1,50,000' },
      { description: 'Audio Engineering & Professional Host Booking', amount: '₹80,000' }
    ]
  },
  'ZOV-2026-9401': {
    refId: 'ZOV-2026-9401',
    clientName: 'Meridian Technologies',
    eventName: 'Senior Management Offsite — Udaipur Palace',
    amount: '₹2,80,000',
    status: 'UNPAID',
    dueDate: '20-Nov-2026',
    items: [
      { description: 'Heritage Palace Fort Buyout Coordination', amount: '₹1,80,000' },
      { description: 'Private Charter Ground Logistics & Hospitality', amount: '₹1,00,000' }
    ]
  }
};
