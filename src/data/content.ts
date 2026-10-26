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
    title: 'M.I.C.E.',
    description: 'End-to-end meetings, incentives, conventions and exhibitions across India and international markets.',
    fullOverview: 'M.I.C.E. delivery requires seamless operational precision. ZOVENT delivers turn-key global logistics, destination vetting, customs clearance, venue negotiation, and on-ground concierge support.',
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
  { name: 'M.I.C.E. EVENTS', href: '#mice' },
  { name: 'OFFSITES & TEAM BUILDING', href: '#corporate-events' },
  { name: 'BRAND ACTIVATIONS', href: '#corporate-events' },
  { name: 'AWARD CEREMONIES', href: '#corporate-events' },
  { name: 'CORPORATE TRAVEL', href: '#corporate-travel' }
];

export const HOLIDAY_DESTINATIONS: HolidayDestination[] = [
  {
    id: 'bhutan',
    region: 'HIMALAYAS',
    nights: '9 NIGHTS',
    title: 'Bhutan, In Depth',
    summary: 'Valley walks, monastery stays and slow days in Punakha.',
    image: '/images/Holiday/bhutan.jpg',
    highlights: [
      'Private prayer blessing inside a 17th-century cliffside monastery in Punakha',
      'Hike across the suspended iron bridge to Khamsum Yulley Namgyal Chorten',
      'Traditional hot stone herbal baths overlooking mist-covered river valleys',
      'Direct dialogue with Bhutanese cultural historians and conservationists'
    ],
    nearbyAttractions: [
      { name: 'Punakha Dzong', description: 'A 17th-century fortress-monastery set at the confluence of the Pho Chhu and Mo Chhu rivers.' },
      { name: 'Khamsum Yulley Namgyal Chorten', description: 'A hilltop chorten reached by a suspended iron bridge and a walk through terraced paddy fields.' },
      { name: 'Chimi Lhakhang', description: 'The fertility temple dedicated to the "Divine Madman", a short walk from Lobesa village.' }
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'Arrival in Paro & Thimphu', detail: 'Acclimatization, tranquil valley walks, meeting local artisans and visits to private national treasures.' },
      { day: 'Days 4–6', title: 'The Sacred Punakha Valley', detail: 'Scenic drive through Dochu La pass, walks among terraced paddy fields, and slow afternoons by Mo Chhu river.' },
      { day: 'Days 7–9', title: 'Gangtey & Tiger’s Nest Ascent', detail: 'Glacial valley nature walks, black-necked crane sanctuary, and morning private ascent to Paro Taktsang.' }
    ]
  },

  {
    id: 'meghalaya',
    region: 'NORTHEAST INDIA',
    nights: '4 NIGHTS / 5 DAYS',
    title: 'Meghalaya, Land of clouds',
    summary: 'Misty canyons, living root bridges and India’s cleanest village, by road from Guwahati.',
    image: '/images/Holiday/meghalaya.jpg',
    highlights: [
      'Boat ride across the crystal-clear waters of the Umngot River at Dawki',
      'Walk the Bamboo Sky Walk and Living Root Bridge in Mawlynnong, Asia’s cleanest village',
      'Panoramic viewpoints across Laitlum Canyons and the thundering Seven Sisters Falls',
      'Evenings of local cuisine and handicraft shopping at Shillong’s Police Bazaar'
    ],
    nearbyAttractions: [
      { name: 'Umiam Lake', description: 'A vast reservoir fringed by pine forests, just outside Shillong on the Guwahati road.' },
      { name: 'Nohkalikai Falls', description: 'India’s tallest plunge waterfall, cascading from the Cherrapunji plateau.' },
      { name: 'Living Root Bridge, Mawlynnong', description: 'A centuries-old bridge grown from the roots of rubber fig trees in Asia’s cleanest village.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Guwahati – Shillong', detail: 'Arrive in Guwahati and drive to Shillong via Umiam Lake, exploring Elephant Falls and Shillong Peak before an evening at Police Bazaar.' },
      { day: 'Day 2', title: 'Shillong – Cherrapunji', detail: 'Drive to Cherrapunji to take in Laitlum Canyons, Mawkdok Dympep Viewpoint, Nohkalikai and Seven Sisters Falls, and the Mawsmai and Arwah caves.' },
      { day: 'Day 3', title: 'Cherrapunji – Dawki – Mawlynnong', detail: 'Boat across the crystal-clear Umngot River at Dawki near the India–Bangladesh border, then explore Mawlynnong’s Living Root Bridge and Bamboo Sky Walk.' },
      { day: 'Day 4', title: 'Shillong Local Sightseeing', detail: 'Spend the day visiting Ward’s Lake and the Don Bosco Museum, with an afternoon of café-hopping and shopping at Police Bazaar.' },
      { day: 'Day 5', title: 'Shillong – Guwahati', detail: 'Check out after breakfast and drive back to Guwahati for your onward journey home.' }
    ]
  },
  {
    id: 'ooty',
    region: 'SOUTH INDIA',
    nights: '3 NIGHTS / 4 DAYS',
    title: 'Ooty, Queen of the Nilgiris',
    summary: 'Tea gardens, toy trains and cool colonial hill air in the Nilgiris.',
    image: '/images/Holiday/ooty.jpg',
    highlights: [
      'Heritage ride aboard the UNESCO-listed Nilgiri Mountain Railway toy train',
      'Walks through manicured tea estates and the Government Botanical Garden',
      'Boating at Ooty Lake framed by eucalyptus-covered hills',
      'Scenic viewpoints across Doddabetta Peak, the highest point in the Nilgiris'
    ],
    nearbyAttractions: [
      { name: 'Doddabetta Peak', description: 'The highest peak in the Nilgiris, with a telescope house offering 360-degree valley views.' },
      { name: 'Pykara Lake & Falls', description: 'A forested lake and waterfall en route to Mudumalai, popular for boating and picnics.' },
      { name: 'Coonoor Tea Estates', description: 'Rolling tea gardens a short drive from Ooty, home to Sim’s Park and the Dolphin’s Nose viewpoint.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Ooty', detail: 'Arrive in Ooty, check in, and spend the evening at Ooty Lake and the Government Botanical Garden.' },
      { day: 'Day 2', title: 'Ooty Local Sightseeing', detail: 'Visit Doddabetta Peak and the Rose Garden, then ride the toy train from Ooty to Coonoor.' },
      { day: 'Day 3', title: 'Coonoor & Tea Estates', detail: 'Explore Coonoor’s tea estates, Sim’s Park, and the Dolphin’s Nose and Lamb’s Rock viewpoints.' },
      { day: 'Day 4', title: 'Ooty – Departure', detail: 'After breakfast, visit Pykara Lake en route before departing for your onward journey.' }
    ]
  },
  {
    id: 'kashmir',
    region: 'HIMALAYAS, INDIA',
    nights: '5 NIGHTS / 6 DAYS',
    title: 'Kashmir, Paradise Revisited',
    summary: 'Houseboats on Dal Lake, alpine meadows and the gardens of Srinagar.',
    image: '/images/Holiday/kashmir.jpg',
    highlights: [
      'Overnight stay aboard a traditional houseboat on Dal Lake',
      'Shikara rides past floating markets and the Mughal gardens of Srinagar',
      'Gondola ride toward the snowline above Gulmarg’s meadows',
      'Scenic drive through Sonmarg’s glacial valleys and pine forests'
    ],
    nearbyAttractions: [
      { name: 'Dal Lake', description: 'Srinagar’s iconic lake, dotted with houseboats and floating vegetable markets.' },
      { name: 'Gulmarg Gondola', description: 'One of the world’s highest cable cars, rising toward the slopes of Mount Apharwat.' },
      { name: 'Betaab Valley, Pahalgam', description: 'A pine-fringed valley along the Lidder River, named after the Bollywood film shot there.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Srinagar', detail: 'Arrive in Srinagar and check into a houseboat on Dal Lake, followed by an evening shikara ride.' },
      { day: 'Day 2', title: 'Srinagar – Gulmarg', detail: 'Drive to Gulmarg for the gondola ride toward Mount Apharwat and views of the Himalayan range.' },
      { day: 'Day 3', title: 'Gulmarg – Pahalgam', detail: 'Travel to Pahalgam via Srinagar, stopping at the Mughal gardens of Nishat and Shalimar Bagh.' },
      { day: 'Day 4', title: 'Pahalgam Sightseeing', detail: 'Explore Betaab Valley, Aru Valley, and Chandanwari by local cab.' },
      { day: 'Day 5', title: 'Pahalgam – Sonmarg', detail: 'Drive to Sonmarg to view the Thajiwas Glacier and surrounding alpine meadows.' },
      { day: 'Day 6', title: 'Departure from Srinagar', detail: 'Drive back to Srinagar for your onward journey, with time for last-minute shopping.' }
    ]
  },
  {
    id: 'goa',
    region: 'WEST COAST INDIA',
    nights: '4 NIGHTS / 5 DAYS',
    title: 'Goa, Sun and Spice',
    summary: 'Beach shacks, Portuguese old towns and backwater cruises along the Mandovi.',
    image: '/images/Holiday/goa.jpg',
    highlights: [
      'Sunset cruise along the Mandovi River with live Goan folk music',
      'Heritage walk through the whitewashed churches of Old Goa',
      'Beach-hopping across Baga, Calangute and the quieter sands of South Goa',
      'Spice plantation tour with a traditional Goan lunch'
    ],
    nearbyAttractions: [
      { name: 'Basilica of Bom Jesus', description: 'A UNESCO World Heritage church in Old Goa, home to the relics of St. Francis Xavier.' },
      { name: 'Fort Aguada', description: 'A 17th-century Portuguese fort overlooking the Arabian Sea, with a working lighthouse.' },
      { name: 'Dudhsagar Falls', description: 'A four-tiered waterfall on the Goa–Karnataka border, reached by jeep safari through the forest.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in North Goa', detail: 'Arrive and check in, with an evening at leisure on Calangute or Baga beach.' },
      { day: 'Day 2', title: 'North Goa Sightseeing', detail: 'Visit Fort Aguada and Chapora Fort, and browse the flea markets of Anjuna.' },
      { day: 'Day 3', title: 'Old Goa & River Cruise', detail: 'Tour the churches of Old Goa, then enjoy a sunset cruise on the Mandovi River.' },
      { day: 'Day 4', title: 'South Goa & Spice Plantation', detail: 'Visit a spice plantation for a traditional lunch, then unwind on the quieter beaches of South Goa.' },
      { day: 'Day 5', title: 'Departure', detail: 'After breakfast, check out and transfer to the airport for your onward journey.' }
    ]
  },
  {
    id: 'andaman',
    region: 'BAY OF BENGAL',
    nights: '5 NIGHTS / 6 DAYS',
    title: 'Andaman, Island Blue',
    summary: 'Coral reefs, colonial history and the turquoise waters of Havelock and Neil Island.',
    image: '/images/Holiday/Andaman.jpg',
    highlights: [
      'Snorkeling and glass-bottom boat rides over the coral reefs of North Bay',
      'Sunset at Radhanagar Beach, Havelock, ranked among Asia’s finest beaches',
      'Light and sound show at the historic Cellular Jail in Port Blair',
      'Limestone caves and natural bridge formations on Neil Island'
    ],
    nearbyAttractions: [
      { name: 'Radhanagar Beach', description: 'Havelock Island’s flagship beach, known for powder-white sand and turquoise shallows.' },
      { name: 'Cellular Jail', description: 'A colonial-era prison in Port Blair, now a national memorial with a nightly light and sound show.' },
      { name: 'Elephant Beach', description: 'A snorkeling and water-sports cove on Havelock, reachable by boat or a forest trek.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Port Blair', detail: 'Arrive in Port Blair, check in, and visit the Cellular Jail for the evening light and sound show.' },
      { day: 'Day 2', title: 'Port Blair – Havelock', detail: 'Ferry to Havelock Island and spend the evening at Radhanagar Beach.' },
      { day: 'Day 3', title: 'Havelock Island', detail: 'Snorkeling and water sports at Elephant Beach, followed by leisure time by the shore.' },
      { day: 'Day 4', title: 'Havelock – Neil Island', detail: 'Ferry to Neil Island to explore its natural bridge, coral reefs and laid-back bazaar.' },
      { day: 'Day 5', title: 'Neil Island – Port Blair', detail: 'Return to Port Blair by ferry, with time for souvenir shopping at Sagarika Emporium.' },
      { day: 'Day 6', title: 'Departure', detail: 'Transfer to the airport for your onward journey.' }
    ]
  },
  {
    id: 'thailand',
    region: 'SOUTHEAST ASIA',
    nights: '6 NIGHTS / 7 DAYS',
    title: 'Thailand, Bangkok to the Islands',
    summary: 'Temple spires, night markets and the limestone bays of Phuket and Phi Phi.',
    image: '/images/Holiday/thailand.jpg',
    highlights: [
      'Longtail boat cruise through the limestone karsts of the Phi Phi Islands',
      'Evening market crawl through Bangkok’s Chatuchak and riverside night bazaars',
      'Visit to the Grand Palace and the Temple of the Emerald Buddha',
      'Island-hopping and snorkeling off the beaches of Phuket'
    ],
    nearbyAttractions: [
      { name: 'Grand Palace, Bangkok', description: 'The former royal residence and spiritual heart of Thailand, housing the Emerald Buddha temple.' },
      { name: 'Phi Phi Islands', description: 'A cluster of limestone islands south of Phuket, famed for Maya Bay and turquoise lagoons.' },
      { name: 'Big Buddha, Phuket', description: 'A 45-metre marble statue on Nakkerd Hill, offering panoramic views across the island.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bangkok', detail: 'Arrive in Bangkok and settle in, with an evening stroll through a riverside night market.' },
      { day: 'Day 2', title: 'Bangkok City Tour', detail: 'Visit the Grand Palace, Wat Pho, and Wat Arun, followed by a Chao Phraya river cruise.' },
      { day: 'Day 3', title: 'Bangkok – Phuket', detail: 'Fly to Phuket and spend the evening at leisure on Patong Beach.' },
      { day: 'Day 4', title: 'Phuket Island Hopping', detail: 'Longtail boat cruise through the Phi Phi Islands with stops for snorkeling at Maya Bay.' },
      { day: 'Day 5', title: 'Phuket Sightseeing', detail: 'Visit the Big Buddha, Wat Chalong, and the old town’s Sino-Portuguese streets.' },
      { day: 'Day 6', title: 'Leisure Day in Phuket', detail: 'A free day for spa treatments, beach time, or optional water sports.' },
      { day: 'Day 7', title: 'Departure', detail: 'Transfer to the airport for your onward journey.' }
    ]
  },
  {
    id: 'bali',
    region: 'SOUTHEAST ASIA',
    nights: '5 NIGHTS / 6 DAYS',
    title: 'Bali, Island of the Gods',
    summary: 'Rice terraces, clifftop temples and the beach clubs of Seminyak.',
    image: '/images/Holiday/bali.jpg',
    highlights: [
      'Sunrise trek up Mount Batur overlooking Lake Batur’s volcanic crater',
      'Walks through the emerald tiers of the Tegallalang Rice Terraces',
      'Sunset at the clifftop sea temple of Tanah Lot',
      'Beach club afternoons along the sands of Seminyak and Uluwatu'
    ],
    nearbyAttractions: [
      { name: 'Tanah Lot Temple', description: 'An ancient sea temple perched on a rock formation, famed for its silhouette at sunset.' },
      { name: 'Tegallalang Rice Terraces', description: 'Dramatic stepped rice paddies near Ubud, worked using the traditional subak irrigation system.' },
      { name: 'Uluwatu Temple', description: 'A clifftop temple on Bali’s southwestern tip, home to a nightly traditional Kecak fire dance.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Seminyak', detail: 'Arrive in Denpasar and transfer to Seminyak, with an evening at a beachfront club.' },
      { day: 'Day 2', title: 'Ubud Day Trip', detail: 'Visit the Tegallalang Rice Terraces, a coffee plantation, and the Sacred Monkey Forest.' },
      { day: 'Day 3', title: 'Ubud – Kintamani', detail: 'Explore Ubud’s art markets before driving to Kintamani for views of Mount Batur and Lake Batur.' },
      { day: 'Day 4', title: 'South Bali Temples', detail: 'Visit Tanah Lot and Uluwatu temples, ending with the sunset Kecak dance performance.' },
      { day: 'Day 5', title: 'Leisure & Water Sports', detail: 'A free day for water sports at Nusa Dua or optional spa and beach time.' },
      { day: 'Day 6', title: 'Departure', detail: 'Transfer to the airport for your onward journey.' }
    ]
  },
  {
    id: 'kerala',
    region: 'SOUTH INDIA',
    nights: '5 NIGHTS / 6 DAYS',
    title: 'Kerala, God’s Own Country',
    summary: 'Backwater houseboats, spice hills and the beaches of Kovalam.',
    image: '/images/Holiday/kerala.jpg',
    highlights: [
      'Overnight stay aboard a traditional Kerala houseboat on the Alleppey backwaters',
      'Walks through the tea and spice plantations of Munnar’s rolling hills',
      'Wildlife boat safari on Periyar Lake in Thekkady',
      'Sunset and Ayurvedic spa time on the shores of Kovalam Beach'
    ],
    nearbyAttractions: [
      { name: 'Alleppey Backwaters', description: 'A network of lagoons and canals navigated by traditional houseboats, known as the Venice of the East.' },
      { name: 'Munnar Tea Gardens', description: 'Rolling hillside tea estates at over 1,600 metres, with Eravikulam National Park nearby.' },
      { name: 'Periyar Wildlife Sanctuary', description: 'A forest reserve around Periyar Lake in Thekkady, home to elephants and boat safaris.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Cochin', detail: 'Arrive in Kochi and explore Fort Kochi’s colonial streets and Chinese fishing nets.' },
      { day: 'Day 2', title: 'Cochin – Munnar', detail: 'Drive to Munnar through the Western Ghats, stopping at waterfalls along the way.' },
      { day: 'Day 3', title: 'Munnar Sightseeing', detail: 'Visit tea estates, Eravikulam National Park, and Mattupetty Dam.' },
      { day: 'Day 4', title: 'Munnar – Thekkady', detail: 'Drive to Thekkady for a boat safari on Periyar Lake and an evening Kalaripayattu show.' },
      { day: 'Day 5', title: 'Thekkady – Alleppey', detail: 'Travel to Alleppey and board a houseboat for an overnight backwater cruise.' },
      { day: 'Day 6', title: 'Alleppey – Departure', detail: 'Disembark after breakfast and transfer to Cochin airport for your onward journey.' }
    ]
  },
  {
    id: 'rajasthan',
    region: 'NORTH INDIA',
    nights: '6 NIGHTS / 7 DAYS',
    title: 'Rajasthan, Land of Kings',
    summary: 'Desert forts, lake palaces and the painted havelis of Jaipur, Jodhpur and Udaipur.',
    image: '/images/Holiday/Rajasthan.jpg',
    highlights: [
      'Sunset camel safari across the dunes of the Thar Desert in Jaisalmer',
      'Guided tour of the hilltop Amber Fort and City Palace of Jaipur',
      'Boat ride on Lake Pichola past the floating Lake Palace in Udaipur',
      'Exploration of the blue-washed lanes beneath Mehrangarh Fort in Jodhpur'
    ],
    nearbyAttractions: [
      { name: 'Amber Fort, Jaipur', description: 'A hilltop fort of mirrored halls and courtyards overlooking Maota Lake.' },
      { name: 'Mehrangarh Fort, Jodhpur', description: 'One of India’s largest forts, towering over the blue city from a 125-metre cliff.' },
      { name: 'Lake Pichola, Udaipur', description: 'A scenic artificial lake framed by palaces, ghats and the surrounding Aravalli hills.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Jaipur', detail: 'Arrive in Jaipur and visit the City Palace and Jantar Mantar observatory.' },
      { day: 'Day 2', title: 'Jaipur Sightseeing', detail: 'Explore Amber Fort by morning, followed by Hawa Mahal and the local bazaars.' },
      { day: 'Day 3', title: 'Jaipur – Jodhpur', detail: 'Drive to Jodhpur and explore Mehrangarh Fort and the blue lanes of the old city.' },
      { day: 'Day 4', title: 'Jodhpur – Jaisalmer', detail: 'Travel to Jaisalmer, visiting Jaisalmer Fort and Patwon Ki Haveli en route.' },
      { day: 'Day 5', title: 'Jaisalmer Desert Safari', detail: 'Afternoon camel safari into the Sam sand dunes with an evening cultural performance.' },
      { day: 'Day 6', title: 'Jaisalmer – Udaipur', detail: 'Travel to Udaipur and take an evening boat ride on Lake Pichola.' },
      { day: 'Day 7', title: 'Udaipur – Departure', detail: 'Visit the City Palace and Saheliyon Ki Bari gardens before departing for your onward journey.' }
    ]
  },
  {
    id: 'ladakh',
    region: 'HIMALAYAS, INDIA',
    nights: '6 NIGHTS / 7 DAYS',
    title: 'Ladakh, High Desert Himalayas',
    summary: 'Monasteries, high-altitude lakes and the moonscape passes of Leh.',
    image: '/images/Holiday/ladakh.jpg',
    highlights: [
      'Drive over Khardung La, among the world’s highest motorable passes',
      'Sunrise at the turquoise high-altitude waters of Pangong Tso',
      'Visits to centuries-old cliffside monasteries at Thiksey and Hemis',
      'Riverside camping and sightseeing along the Indus at Nimmu'
    ],
    nearbyAttractions: [
      { name: 'Pangong Tso', description: 'A vast high-altitude lake stretching from Ladakh into Tibet, famed for its shifting blue hues.' },
      { name: 'Thiksey Monastery', description: 'A twelve-storey Tibetan Buddhist monastery resembling a smaller Potala Palace.' },
      { name: 'Khardung La', description: 'One of the world’s highest motorable passes, gateway to the Nubra Valley.' }
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Leh', detail: 'Arrive in Leh and spend the day acclimatizing at leisure in the market town.' },
      { day: 'Day 2', title: 'Leh Local Sightseeing', detail: 'Visit Shanti Stupa, Leh Palace, and the monasteries of Thiksey and Hemis.' },
      { day: 'Day 3', title: 'Leh – Nubra Valley', detail: 'Cross Khardung La en route to the Nubra Valley, with a stop for sand dune camel rides at Hunder.' },
      { day: 'Day 4', title: 'Nubra – Pangong Tso', detail: 'Drive via the Shyok route to Pangong Tso and camp overnight by the lake.' },
      { day: 'Day 5', title: 'Pangong – Leh', detail: 'Return to Leh via Chang La pass, with time to rest and explore the old town.' },
      { day: 'Day 6', title: 'Leh – Indus Valley', detail: 'Day trip along the Indus River, visiting Magnetic Hill, Sangam, and Alchi Monastery.' },
      { day: 'Day 7', title: 'Departure', detail: 'Transfer to Leh airport for your onward journey.' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    tag: 'TECHNOLOGY · ANNUAL SUMMIT',
    title: 'One strategy, 1,200 people, three live stages.',
    description: 'A two-day partner summit delivered across content, production, guest movement and executive hospitality.',
    image: '/images/keynote_partner_summit_1791547815948.jpg',
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
    image: '/images/beach_dinner_sri_lanka_1791547893257.jpg',
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
      { label: 'Performer Retention', value: '100%' },
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
    image: '/images/rajasthan_heritage_meeting_1791547911911.jpg',
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
    image: '/images/ananya_executive_portrait_1791547923367.jpg'
  },
  {
    id: 'vikram-singh',
    quote: 'Managing 1,200 delegates across 3 live stages without a single microphone glitch or transit bottleneck is rare. ZOVENT owns the detail so our executives can own the room.',
    author: 'Vikram Singh',
    role: 'CHIEF COMMERCIAL OFFICER',
    company: 'APEX GLOBAL MEDIA',
    image: '/images/ananya_executive_portrait_1791547923367.jpg'
  }
];
