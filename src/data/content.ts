import { ServiceItem, CaseStudy, HolidayDestination, TestimonialItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'corporate-events',
    number: '01',
    title: 'Corporate Events',
    description: 'Conferences, launches, incentives and leadership gatherings shaped around business intent.',
    fullOverview: 'We orchestrate large-scale corporate assemblies where production perfection meets brand narrative. From multi-city roadshows to flagship annual summits, every detail is engineered for strategic resonance.',
    deliverables: [
      'Strategic stage architecture & immersive AV environments',
      'VIP guest logistics & executive protocol management',
      'Keynote speaker coaching & presentation choreography',
      'Custom digital delegate apps and registration infrastructure'
    ]
  },
  {
    id: 'mice',
    number: '02',
    title: 'MICE',
    description: 'End-to-end meetings, incentives, conventions and exhibitions across India and international markets.',
    fullOverview: 'MICE delivery requires seamless operational precision. ZOVENT delivers turn-key global logistics, destination vetting, customs clearance, venue negotiation, and on-ground concierge support.',
    deliverables: [
      'Global venue sourcing, rate lock-ins & contract optimization',
      'Charter flights, group ticketing & visa clearance facilitation',
      'Bespoke incentive reward journeys with curated access',
      'Turnkey exhibition booth fabrication & technology integration'
    ]
  },
  {
    id: 'corporate-travel',
    number: '03',
    title: 'Corporate Travel',
    description: 'Responsive movement planning, traveller care and on-ground coordination for teams.',
    fullOverview: 'Tailored travel management that respects high-value executive time. We pair dedicated travel managers with 24/7 on-ground ground dispatchers to guarantee effortless movement.',
    deliverables: [
      'Dedicated travel director assigned to every movement window',
      'Private aviation charters and executive car fleet management',
      'Luxury hotel block buyouts and bespoke hospitality desks',
      'Real-time itinerary change management and flight tracking'
    ]
  },
  {
    id: 'holidays',
    number: '04',
    title: 'Holidays',
    description: 'Thoughtfully paced journeys, private escapes and multi-generational itineraries.',
    fullOverview: 'For private individuals and families seeking slow travel, authentic cultural immersion, and peerless discretion. Unscripted moments rooted in local heritage.',
    deliverables: [
      'Hand-selected boutique heritage villas and private estates',
      'Privileged after-hours museum and archaeological access',
      'Private chef residencies and regional culinary immersions',
      'Discreet round-the-clock local hosts and private transport'
    ]
  },
  {
    id: 'social-occasions',
    number: '05',
    title: 'Social Occasions',
    description: 'Milestones and gatherings delivered with intimacy, structure and polished hospitality.',
    fullOverview: 'From landmark anniversary banquets to bespoke multi-day milestone celebrations, we blend grand aesthetic scenography with warmth and warmth-driven guest care.',
    deliverables: [
      'Concept design, floral scenography and architectural lighting',
      'Michelin-level banquet curation and sommelier pairings',
      'Renowned world musical artists & heritage performers',
      'Comprehensive guest RSVP concierge and concierge hospitality'
    ]
  }
];

export const DROPDOWN_SERVICES = [
  { name: 'CORPORATE CONFERENCES', href: '#corporate-events' },
  { name: 'MICE EVENTS', href: '#mice' },
  { name: 'OFFSITES & TEAM BUILDING', href: '#corporate-events' },
  { name: 'BRAND ACTIVATIONS', href: '#corporate-events' },
  { name: 'AWARD CEREMONIES', href: '#corporate-events' },
  { name: 'CORPORATE TRAVEL', href: '#corporate-travel' }
];

export const HOLIDAY_DESTINATIONS: HolidayDestination[] = [
  {
    id: 'bhutan',
    region: 'HIMALAYA',
    nights: '9 NIGHTS',
    title: 'Bhutan, in depth',
    summary: 'Valley walks, monastery stays and slow days in Punakha.',
    image: '/src/assets/images/bhutan_valley_monastery_1791547827332.jpg',
    highlights: [
      'Private prayer blessing inside a 17th-century cliffside monastery in Punakha',
      'Hike across the suspended iron bridge to Khamsum Yulley Namgyal Chorten',
      'Traditional hot stone herbal baths overlooking mist-covered river valleys',
      'Direct dialogue with Bhutanese cultural historians and conservationists'
    ],
    curatedStays: ['Amankora Punakha', 'Six Senses Gangtey', 'Gangtey Lodge'],
    itinerary: [
      { day: 'Days 1–3', title: 'Arrival in Paro & Thimphu', detail: 'Acclimatization, tranquil valley walks, meeting local artisans and visits to private national treasures.' },
      { day: 'Days 4–6', title: 'The Sacred Punakha Valley', detail: 'Scenic drive through Dochu La pass, walks among terraced paddy fields, and slow afternoons by Mo Chhu river.' },
      { day: 'Days 7–9', title: 'Gangtey & Tiger’s Nest Ascent', detail: 'Glacial valley nature walks, black-necked crane sanctuary, and morning private ascent to Paro Taktsang.' }
    ]
  },
  {
    id: 'srilanka',
    region: 'INDIAN OCEAN',
    nights: '8 NIGHTS',
    title: 'Sri Lanka by rail',
    summary: 'Tea country, coastal kitchens and restored heritage stays.',
    image: '/src/assets/images/sri_lanka_heritage_train_1791547838370.jpg',
    highlights: [
      'Chartered vintage observation rail car through misty emerald tea plantations',
      'Curated private tasting with master tea planters in high-altitude colonial bungalows',
      'Sunset culinary workshop with celebrated coastal chefs inside Galle Fort',
      'Dawn wildlife safari in quiet leopard reserves with resident naturalists'
    ],
    curatedStays: ['Ceylon Tea Trails', 'Amangalla Galle Fort', 'Wild Coast Tented Lodge'],
    itinerary: [
      { day: 'Days 1–3', title: 'Highland Tea Country (Hatton)', detail: 'Boarding the heritage hill train, colonial bungalow living, and walking the historic tea pluckers trails.' },
      { day: 'Days 4–5', title: 'Ella & Yala Borderlands', detail: 'Nine Arches Bridge scenic crossing, private tented reserve safari tracking elusive leopards and elephants.' },
      { day: 'Days 6–8', title: 'Historic Galle & Southern Coast', detail: 'Cobbled ramparts of UNESCO Galle Fort, oceanfront seafood feasts, and tranquil coastal relaxation.' }
    ]
  },
  {
    id: 'italy',
    region: 'EUROPE',
    nights: '10 NIGHTS',
    title: 'Northern Italy, slowly',
    summary: 'Lake mornings, vineyard tables and private design-led city walks.',
    image: '/src/assets/images/lake_como_italy_1791547880202.jpg',
    highlights: [
      'Private Riva wooden speedboat cruise across the calm waters of Lake Como',
      'Exclusive access to private botanical garden villas closed to general public',
      'Truffle foraging and Barolo wine cellar tastings with multi-generation vintners',
      'Architectural insider walk in Milan guided by local contemporary design curators'
    ],
    curatedStays: ['Villa d’Este Lake Como', 'Grand Hotel Tremezzo', 'Relais San Maurizio Piedmont'],
    itinerary: [
      { day: 'Days 1–4', title: 'Lake Como & Bellagio', detail: 'Lakeside terrace breakfasts, private villa gardens, and sunset aperitivos on mahogany Riva boats.' },
      { day: 'Days 5–7', title: 'Langhe & Piedmont Vineyards', detail: 'Rolling hillside vineyard retreats, seasonal truffle lunches, and cellar visits with master winemakers.' },
      { day: 'Days 8–10', title: 'Milanese Design & Gastronomy', detail: 'Private visits to hidden artist ateliers, reserved opera evenings, and private dining in historic palazzos.' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    tag: 'TECHNOLOGY · ANNUAL SUMMIT',
    title: 'One strategy, 1,200 people, three live stages.',
    description: 'A two-day partner summit delivered across content, production, guest movement and executive hospitality.',
    image: '/src/assets/images/keynote_partner_summit_1791547815948.jpg',
    delegates: '1,200 Delegates',
    duration: '2 Days, 3 Stages',
    location: 'Bengaluru International Exhibition Centre',
    client: 'Global Cloud & Enterprise Infrastructure Leader',
    scope: [
      'Curved panoramic 4K projection stage design & acoustic engineering',
      'Real-time live multi-lingual simultaneous interpretation for 8 delegates countries',
      'Dedicated lounge logistics for 60 C-level executive speakers',
      'Seamless check-in with RFID-enabled credentials in under 12 seconds per attendee'
    ],
    metrics: [
      { label: 'Summit Attendance', value: '1,248' },
      { label: 'Speaker Net Promoter Score', value: '94/100' },
      { label: 'Live Stages Operated', value: '3 Concurrent' },
      { label: 'Zero Flight Delays Managed', value: '100%' }
    ],
    extendedText: 'The client required a brand-defining annual partner conference capable of delivering flawless technical presentations for product rollouts while preserving an intimate executive feel for high-stakes deal rooms. ZOVENT engineered an expansive three-stage arena flanked by private acoustic cabanas and a hospitality lounge, managing all participant flow from flight touchdown to departure.'
  },
  {
    id: 'case-02',
    tag: 'INCENTIVE · SRI LANKA',
    title: 'Recognition, with room to connect.',
    description: '180 top performers · 4 days · 6 movement windows',
    image: '/src/assets/images/beach_dinner_sri_lanka_1791547893257.jpg',
    delegates: '180 Top Performers',
    duration: '4 Days, 3 Nights',
    location: 'Bentota & Galle Coast, Sri Lanka',
    client: 'Fintech Unicorn Leadership Group',
    scope: [
      'Chartered express rail cars connecting Colombo to southern coastline',
      'Private buyout of boutique beachfront resort compound',
      'Sunset gala on secluded shoreline with custom firework synchrony',
      'Curated choice-based excursion tracks (surfing, culinary, wellness, tea heritage)'
    ],
    metrics: [
      { label: 'Performer Retention', value: '98%' },
      { label: 'Participant Satisfaction', value: '4.95 / 5' },
      { label: 'Movement Windows', value: '6 Executed' }
    ],
    extendedText: 'Rather than a rigid conference schedule, the mandate called for true recharge and celebration. ZOVENT designed a fluid multi-track itinerary where high-achieving sales leaders could choose between ocean voyages, high-tea masterclasses, or restful leisure, culminating in an extraordinary lantern-lit seaside banquet.'
  },
  {
    id: 'case-03',
    tag: 'LEADERSHIP · RAJASTHAN',
    title: 'A sharper agenda in a quieter setting.',
    description: 'Senior leadership offsite · strategy, culture and hosted local access',
    image: '/src/assets/images/rajasthan_heritage_meeting_1791547911911.jpg',
    delegates: '32 Senior Leaders',
    duration: '3 Days, 2 Nights',
    location: 'Heritage Palace Fort, Rajasthan',
    client: 'Multinational Healthcare Conglomerate',
    scope: [
      'Exclusive buyout of historic 18th-century boutique palace fort',
      'Open-air shaded courtyard breakout zones equipped with silent technology',
      'Private royal polo match and acoustic classical music under the stars',
      'Executive discretion, confidential board-level security protocol'
    ],
    metrics: [
      { label: 'Strategic Objectives Met', value: '100%' },
      { label: 'Exclusive Property Buyout', value: '100% Privacy' },
      { label: 'Host Cities Coordinated', value: '4 Hubs' }
    ],
    extendedText: 'A high-impact leadership retreat requiring zero distractions. ZOVENT transformed a heritage fort into a strategic sanctuary, providing discreet soundproofing, bespoke banquet dining from historic royal recipes, and hosted evening storytelling with local historians.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ananya-mehta',
    quote: 'ZOVENT understood the business ask before discussing a venue. That clarity carried through every decision — from the agenda to the final airport transfer.',
    author: 'Ananya Mehta',
    role: 'PEOPLE DIRECTOR',
    company: 'MERIDIAN TECHNOLOGIES',
    image: '/src/assets/images/ananya_executive_portrait_1791547923367.jpg'
  },
  {
    id: 'vikram-singh',
    quote: 'Managing 1,200 delegates across 3 live stages without a single microphone glitch or transit bottleneck is rare. ZOVENT owns the detail so our executives can own the room.',
    author: 'Vikram Singh',
    role: 'CHIEF COMMERCIAL OFFICER',
    company: 'APEX GLOBAL MEDIA',
    image: '/src/assets/images/ananya_executive_portrait_1791547923367.jpg'
  }
];
