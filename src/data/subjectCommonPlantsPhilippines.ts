import { Subject } from '../types';

export const commonPlantsSubject: Subject = {
  id: 'subj-common-plants-ph',
  name: 'COMMON PLANTS IN THE PHILIPPINES',
  description: 'Comprehensive taxonomic catalog, memorization reviewer, and binomial nomenclature guide for 93 common Philippine plants, including Local/Filipino names, English common names, scientific binomials, and botanical families.',
  color: '#059669',
  reviewers: [
    {
      id: 'rev-plants-notes',
      name: 'Lecture Notes & Memorization Guide',
      fileName: 'Common-Plants-Philippines_84f76317.pdf',
      fileSnippet: 'Complete botanical taxonomic reference containing all 93 Philippine plants with Local Names, English Common Names, Scientific Binomials, Plant Families, and High-Yield Board Exam Mnemonics.',
      testDate: '2026-10-30',
      questionTypes: ['multiple_choice', 'identification', 'enumeration'],
      questionCount: 50,
      createdAt: '2026-10-20',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'pl-n-1',
          title: 'Introduction to Philippine Botanical Taxonomy & Binomial Nomenclature Rules',
          category: 'Concept',
          content: '• Binomial Nomenclature Overview:\n  - Developed by Carl Linnaeus in *Species Plantarum* (1753).\n  - Every plant species is assigned a two-part Latinized scientific name:\n    1. Genus (First word): Capitalized, indicates the taxonomic group of closely related species.\n    2. Specific Epithet (Second word): Lowercase, describes a distinguishing characteristic, geographic origin, or dedicatee.\n  - Formatting rule: Italicized when typed (*e.g., Mangifera indica*), or underlined separately when handwritten (*e.g., <u>Mangifera</u> <u>indica</u>*).\n\n• Philippine Botanical Context:\n  - The Philippines boasts over 10,000 vascular plant species with high endemism.\n  - Local (vernacular) names often vary across Philippine dialects (Tagalog, Ilokano, Bisaya, Kapampangan), making scientific binomials vital for standardized identification in pharmacy, agriculture, medicine, and biology board examinations.\n\n• Core Plant Families Represented in this Module:\n  - Solanaceae (Nightshade Family): *Solanum*, *Capsicum*, *Nicotiana*\n  - Fabaceae / Leguminosae (Legume Family): *Phaseolus*, *Vigna*, *Arachis*, *Lablab*\n  - Cucurbitaceae (Gourd Family): *Momordica*, *Cucurbita*, *Cucumis*, *Luffa*, *Benincasa*\n  - Rutaceae (Citrus Family): *Citrus sinensis*, *Citrus maxima*\n  - Poaceae / Gramineae (Grass Family): *Oryza sativa*, *Zea mays*, *Imperata cylindrica*, *Bambusa sp.*',
          importance: 'high',
          tags: ['Botany', 'Taxonomy', 'Binomial Nomenclature', 'Linnaeus', 'Plant Families'],
          highlighted: true
        },
        {
          id: 'pl-n-2',
          title: 'Tropical Fruits & Orchard Trees (Part 1: Avocado to Manga)',
          category: 'Definition',
          content: 'High-yield tropical fruit trees cultivated throughout the Philippine archipelago:\n\n1. Avocado (English: Avocado)\n   - Scientific Name: *Persea americana*\n   - Family: Lauraceae\n   - Key Features: High in healthy monounsaturated fatty acids; pear-shaped drupe.\n\n2. Balimbing (English: Starfruit)\n   - Scientific Name: *Averrhoa carambola*\n   - Family: Oxalidaceae\n   - Key Features: Five-angled fruit cross-section forming a distinct star; contains oxalic acid.\n\n3. Chico (English: Sapodilla)\n   - Scientific Name: *Manilkara zapota* (syn. *Manika sapota*)\n   - Family: Sapotaceae\n   - Key Features: Sweet, malty brown flesh; chicle latex source.\n\n4. Dulian / Durian (English: Durian)\n   - Scientific Name: *Durio zibethinus*\n   - Family: Malvaceae\n   - Key Features: "King of Tropical Fruits"; thorny rind and potent pungent aroma due to volatile sulfur compounds.\n\n5. Duhat (English: Black Plum / Java Plum)\n   - Scientific Name: *Syzygium cumini* (in text: *Syzygium cinnamomeum*)\n   - Family: Myrtaceae\n   - Key Features: Dark purple to black astringent-sweet berries; stains tongue purple.\n\n6. Guyabano (English: Soursop)\n   - Scientific Name: *Annona muricata*\n   - Family: Annonaceae\n   - Key Features: Prickly green outer skin, fibrous tart white pulp rich in acetogenins.\n\n7. Kasuy (English: Cashew)\n   - Scientific Name: *Anacardium occidentale*\n   - Family: Anacardiaceae\n   - Key Features: True fruit is the kidney-shaped nut attached beneath an accessory fleshy "cashew apple".\n\n8. Langka (English: Jackfruit)\n   - Scientific Name: *Artocarpus heterophyllus* (in text: *Artrocarpus heterophyllus*)\n   - Family: Moraceae\n   - Key Features: Heaviest tree-borne fruit in the world; yellow sweet arils.\n\n9. Lanzones (English: Boboa / Langsat)\n   - Scientific Name: *Lansium domesticum*\n   - Family: Meliaceae\n   - Key Features: Translucent segmented sweet-acidic flesh; Camiguin lanzones festival fame.\n\n10. Letsias (English: Lychee)\n    - Scientific Name: *Litchi chinensis*\n    - Family: Sapindaceae\n    - Key Features: Rough red pericarp with sweet translucent white aril.\n\n11. Manga (English: Mango)\n    - Scientific Name: *Mangifera indica*\n    - Family: Anacardiaceae\n    - Key Features: National fruit of the Philippines; Carabao mango is globally prized for extreme sweetness.',
          importance: 'high',
          tags: ['Fruit Trees', 'Avocado', 'Balimbing', 'Durian', 'Guyabano', 'Langka', 'Mango'],
          highlighted: true
        },
        {
          id: 'pl-n-3',
          title: 'Tropical Fruits & Orchard Trees (Part 2: Manggustan to Ubas)',
          category: 'Definition',
          content: 'Continuation of Philippine fruit crops and imported cultivars:\n\n12. Manggustan (English: Mangosteen)\n    - Scientific Name: *Garcinia mangostana*\n    - Family: Clusiaceae\n    - Key Features: "Queen of Tropical Fruits"; deep purple leathery rind, white sweet segments rich in xanthones.\n\n13. Mansanas (English: Apple)\n    - Scientific Name: *Malus domestica*\n    - Family: Rosaceae\n    - Key Features: Pome fruit; temperate crop adapted in highland Benguet.\n\n14. Makopa (English: Malay Apple / Wax Apple)\n    - Scientific Name: *Syzygium samarangense* (in text: *Syzygium samargense*)\n    - Family: Myrtaceae\n    - Key Features: Bell-shaped waxy red or green fruit with crisp, watery flesh.\n\n15. Niyog (English: Coconut)\n    - Scientific Name: *Cocos nucifera*\n    - Family: Arecaceae\n    - Key Features: "Tree of Life"; produces endosperm (buko meat and water), copra, oil, and coir fiber.\n\n16. Papaya (English: Pawpaw / Papaya)\n    - Scientific Name: *Carica papaya*\n    - Family: Caricaceae\n    - Key Features: Fast-growing herbaceous tree; rich in papain enzyme used as a meat tenderizer and digestive aid.\n\n17. Piña (English: Pineapple)\n    - Scientific Name: *Ananas comosus*\n    - Family: Bromeliaceae\n    - Key Features: Multiple fruit (syncarp) formed by fusion of individual berry flowers; rich in bromelain.\n\n18. Pomelo / Suha (English: Pomelo)\n    - Scientific Name: *Citrus maxima*\n    - Family: Rutaceae\n    - Key Features: Largest citrus fruit; thick spongy rind and sweet pink or yellow pulp vesicles (Davao pomelo).\n\n19. Rambutan (English: Rambutan)\n    - Scientific Name: *Nephelium lappaceum*\n    - Family: Sapindaceae\n    - Key Features: Hairy red or yellowish-orange rind (*rambut* means hair in Malay); juicy white aril.\n\n20. Santol (English: Sentol / Cottonfruit)\n    - Scientific Name: *Sandoricum koetjape*\n    - Family: Meliaceae\n    - Key Features: Velvety yellowish pericarp; cottony white pulp tightly clinging to large seeds.\n\n21. Sampalok (English: Tamarind)\n    - Scientific Name: *Tamarindus indica*\n    - Family: Fabaceae\n    - Key Features: Hard-shelled pod containing acidic, paste-like pulp used as a primary souring agent (*sinigang*).\n\n22. Ubas (English: Grape Fruit / Grape)\n    - Scientific Name: *Vitis vinifera*\n    - Family: Vitaceae\n    - Key Features: Woody climbing vine bearing berry clusters; high in resveratrol.',
          importance: 'high',
          tags: ['Mangosteen', 'Coconut', 'Papaya', 'Pineapple', 'Pomelo', 'Rambutan', 'Tamarind'],
          highlighted: true
        },
        {
          id: 'pl-n-4',
          title: 'High-Yield Root Crops & Underground Tubers',
          category: 'Definition',
          content: 'Root crops, underground storage stems, and tubers of the Philippines:\n\n1. Gabi (English: Taro)\n   - Scientific Name: *Colocasia esculenta*\n   - Family: Araceae\n   - Key Features: Underground corms rich in starch; leaves and petioles used in *laing*; contains calcium oxalate raphide crystals that require thorough cooking.\n\n2. Kamote (English: Sweet Potato)\n   - Scientific Name: *Ipomoea batatas*\n   - Family: Convolvulaceae\n   - Key Features: Swollen storage root (not a true tuber); rich in beta-carotene and dietary fiber; edible green shoots (*talbos ng kamote*).\n\n3. Kamoteng Kahoy (English: Cassava / Manioc)\n   - Scientific Name: *Manihot esculenta*\n   - Family: Euphorbiaceae\n   - Key Features: Starch-dense storage root; tapioca source; contains cyanogenic glycosides (linamarin) requiring processing/cooking to neutralize cyanide.\n\n4. Labanos (English: Radish)\n   - Scientific Name: *Raphanus sativus*\n   - Family: Brassicaceae\n   - Key Features: Pungent, elongated white taproot; contains glucosinolates; staple in *sinigang*.\n\n5. Patatas (English: Potato)\n   - Scientific Name: *Solanum tuberosum*\n   - Family: Solanaceae\n   - Key Features: True stem tuber with "eyes" (buds); major highland staple in Benguet and Mountain Province.\n\n6. Singkamas (English: Jicama / Yam Bean)\n   - Scientific Name: *Pachyrhizus erosus*\n   - Family: Fabaceae\n   - Key Features: Crisp, succulent, sweet taproot eaten raw with salt or bagoong; seeds contain rotenone toxin.\n\n7. Ube (English: Purple Yam)\n   - Scientific Name: *Dioscorea alata*\n   - Family: Dioscoreaceae\n   - Key Features: Underground tuber with deep purple flesh rich in anthocyanins; celebrated in Philippine pastries and desserts (*halaya*).',
          importance: 'high',
          tags: ['Root Crops', 'Tuber', 'Gabi', 'Kamote', 'Cassava', 'Labanos', 'Patatas', 'Singkamas', 'Ube'],
          highlighted: true
        },
        {
          id: 'pl-n-5',
          title: 'Traditional Leafy Vegetables, Greens & Medicinal Herbs',
          category: 'Definition',
          content: 'Foliar greens and herbaceous culinary/medicinal plants:\n\n1. Alugbati (English: Malabar Spinach)\n   - Scientific Name: *Basella alba*\n   - Family: Basellaceae\n   - Key Features: Succulent climbing herbaceous vine with mucilaginous leaves; excellent heat tolerance.\n\n2. Bangka-bankaan (English: Oyster Plant / Moses-in-the-Cradle)\n   - Scientific Name: *Tradescantia spathacea* (syn. *Rhoeo discolor*)\n   - Family: Commelinaceae\n   - Key Features: Dark green upper leaves with deep purple undersides; medicinal decoctions for cough and dysentery.\n\n3. Begonia (English: Begonia)\n   - Scientific Name: *Begonia coccinea*\n   - Family: Begoniaceae\n   - Key Features: Asymmetrical winged foliage and scarlet red floral clusters.\n\n4. Ispinats (English: Spinach)\n   - Scientific Name: *Spinacia oleracea*\n   - Family: Amaranthaceae\n   - Key Features: Nutrient-rich annual green; rich in iron, lutein, and vitamins.\n\n5. Kangkong (English: Water Spinach / Swamp Cabbage)\n   - Scientific Name: *Ipomoea aquatica* (in text: *Ipomoea aquatia*)\n   - Family: Convolvulaceae\n   - Key Features: Hollow-stemmed semi-aquatic creeper; staple in *adobong kangkong*.\n\n6. Letsugas (English: Lettuce)\n   - Scientific Name: *Lactuca sativa*\n   - Family: Asteraceae\n   - Key Features: Crisp salad green; cultivated widely in elevated cooler climates.\n\n7. Malungay / Malunggay (English: Moringa / Horseradish Tree)\n   - Scientific Name: *Moringa oleifera*\n   - Family: Moringaceae\n   - Key Features: "Miracle Tree"; exceptional micronutrient density (calcium, vitamin C, protein); galactagogue for nursing mothers.\n\n8. Mustasa (English: Mustard Greens)\n   - Scientific Name: *Brassica juncea*\n   - Family: Brassicaceae\n   - Key Features: Peppery serrated leaves; pickled to produce *burong mustasa*.\n\n9. Oregano (English: Oregano / Mexican Mint)\n   - Scientific Name: *Plectranthus amboinicus* (syn. *Coleus aromaticus*)\n   - Family: Lamiaceae\n   - Key Features: Aromatic, fleshy pubescent leaves; traditional remedy for pediatric coughs and asthma.\n\n10. Pansit-Pantitan / Ulasiman-bato (English: Peperomia / Clearweed)\n    - Scientific Name: *Peperomia pellucida* (in text: *Pepperonia pellucida*)\n    - Family: Piperaceae\n    - Key Features: One of the DOH 10 endorsed medicinal plants; succulent heart-shaped leaves; lowers uric acid in gout.\n\n11. Petsay / Pechay (English: Pechay / Chinese Cabbage)\n    - Scientific Name: *Brassica rapa* subsp. *chinensis*\n    - Family: Brassicaceae\n    - Key Features: Smooth green leaves with white fleshy petioles; staple soup green in *nilaga* and *bulalo*.\n\n12. Selery / Kintsay (English: Celery)\n    - Scientific Name: *Apium graveolens*\n    - Family: Apiaceae\n    - Key Features: Aromatic grooved petioles rich in apiol; soup flavoring.',
          importance: 'high',
          tags: ['Leafy Greens', 'Alugbati', 'Kangkong', 'Malunggay', 'Mustasa', 'Oregano', 'Pansit-Pantitan', 'Pechay'],
          highlighted: true
        },
        {
          id: 'pl-n-6',
          title: 'Pods, Legumes & Protein Crops (Fabaceae)',
          category: 'Definition',
          content: 'Leguminous crops with root nodules harboring nitrogen-fixing *Rhizobium* bacteria:\n\n1. Bataw (English: Hyacinth Bean / Lablab Bean)\n   - Scientific Name: *Lablab purpureus*\n   - Family: Fabaceae\n   - Key Features: Climbing vine with flat, curved purple-edged pods mentioned in *Bahay Kubo*.\n\n2. Bitsuelas (English: Baguio Beans / Common Green Bean)\n   - Scientific Name: *Phaseolus vulgaris*\n   - Family: Fabaceae\n   - Key Features: Annual bush or pole bean with crisp cylindrical green pods grown in high elevations.\n\n3. Ipil-Ipil (English: Ipil-Ipil / Lead Tree)\n   - Scientific Name: *Leucaena leucocephala* (syn. *Leucaena glauca*)\n   - Family: Fabaceae\n   - Key Features: Fast-growing nitrogen-fixing legume tree; used as livestock forage and agroforestry green manure.\n\n4. Mani (English: Peanut / Groundnut)\n   - Scientific Name: *Arachis hypogaea*\n   - Family: Fabaceae\n   - Key Features: Geocarpic development: flower stalks bend down and push fertilized ovaries underground to mature.\n\n5. Munggo (English: Mung Bean / Green Gram)\n   - Scientific Name: *Vigna radiata* (in text: *Vigna radiate*)\n   - Family: Fabaceae\n   - Key Features: Small olive-green seeds high in plant protein; sprouted to produce *toge* (bean sprouts).\n\n6. Sitaw (English: Yard-long Bean / String Bean)\n   - Scientific Name: *Vigna unguiculata* subsp. *sesquipedalis*\n   - Family: Fabaceae\n   - Key Features: Slender elongated edible pods reaching 30–90 cm; staple in *pinakbet* and *sinigang*.',
          importance: 'high',
          tags: ['Legumes', 'Fabaceae', 'Bataw', 'Bitsuelas', 'Ipil-Ipil', 'Mani', 'Munggo', 'Sitaw'],
          highlighted: true
        },
        {
          id: 'pl-n-7',
          title: 'Cucurbits & Solanaceous Fruiting Vegetables',
          category: 'Definition',
          content: 'Fruiting vegetables dominating Philippine gardens and cuisine:\n\n1. Ampalaya (English: Bitter Melon / Bitter Gourd)\n   - Scientific Name: *Momordica charantia*\n   - Family: Cucurbitaceae\n   - Key Features: DOH-recognized medicinal plant; warty green fruit containing momordicin and charantin with proven hypoglycemic (antidiabetic) properties.\n\n2. Kalabasa (English: Squash / Pumpkin)\n   - Scientific Name: *Cucurbita maxima*\n   - Family: Cucurbitaceae\n   - Key Features: Large yellow-orange fruit high in vitamin A (carotenoids); edible flowers (*bulaklak ng kalabasa*).\n\n3. Kamatis (English: Tomato)\n   - Scientific Name: *Solanum lycopersicum*\n   - Family: Solanaceae\n   - Key Features: Juicy red berry high in lycopene antioxidant; foundational base in Philippine sautéing (*gisa*).\n\n4. Kundol (English: Winter Melon / Wax Gourd)\n   - Scientific Name: *Benincasa hispida*\n   - Family: Cucurbitaceae\n   - Key Features: Large oblong melon with a white chalky waxy coating; candied into winter melon sweets.\n\n5. Okra (English: Okra / Lady’s Finger)\n   - Scientific Name: *Abelmoschus esculentus* (in text: *Abelmoschu sesculentus*)\n   - Family: Malvaceae\n   - Key Features: Pentagonal ribbed green pod producing rich mucilage (soluble fiber) beneficial for gastrointestinal motility.\n\n6. Patola (English: Ribbed Gourd / Luffa)\n   - Scientific Name: *Luffa acutangula* (in text: *Lufa acutangula*)\n   - Family: Cucurbitaceae\n   - Key Features: 10 sharp longitudinal ridges; fibrous vascular skeleton of dried mature fruits becomes natural bath sponges.\n\n7. Pipino (English: Cucumber)\n   - Scientific Name: *Cucumis sativus*\n   - Family: Cucurbitaceae\n   - Key Features: Cylindrical, high water content (95%) fruit used in salads and pickling.\n\n8. Sayote (English: Chayote / Mirliton Pear)\n   - Scientific Name: *Sechium edule*\n   - Family: Cucurbitaceae\n   - Key Features: Pear-shaped single-seeded squash with pale green flesh; tender shoots are consumed as greens.\n\n9. Sili (English: Bell Pepper / Chili Pepper)\n   - Scientific Name: *Capsicum annuum* (in text: *Capsicum anuum*)\n   - Family: Solanaceae\n   - Key Features: Contains capsaicin alkaloid responsible for heat; versatile culinary spice.\n\n10. Talong (English: Eggplant / Aubergine)\n    - Scientific Name: *Solanum melongena*\n    - Family: Solanaceae\n    - Key Features: Glossy deep purple berry with spongy white interior; star ingredient in *tortang talong*.',
          importance: 'high',
          tags: ['Cucurbits', 'Solanaceae', 'Ampalaya', 'Kalabasa', 'Kamatis', 'Okra', 'Patola', 'Pipino', 'Sayote', 'Sili', 'Talong'],
          highlighted: true
        },
        {
          id: 'pl-n-8',
          title: 'Bulb Alliums, Zingiberaceous Rhizomes & Kitchen Spices',
          category: 'Definition',
          content: 'Pungent subterranean bulbs and rhizomes forming the aromatic triad of Filipino cuisine:\n\n1. Bawang (English: Garlic)\n   - Scientific Name: *Allium sativum*\n   - Family: Amaryllidaceae (Alliaceae)\n   - Key Features: One of the 10 DOH medicinal plants; produces organosulfur compound allicin upon crushing; lowers blood cholesterol and blood pressure.\n\n2. Luya (English: Ginger)\n   - Scientific Name: *Zingiber officinale*\n   - Family: Zingiberaceae\n   - Key Features: Pungent aromatic underground rhizome; contains gingerols and shogaols; brewed into *salabat* for throat inflammation.\n\n3. Sibuyas (English: Onion)\n   - Scientific Name: *Allium cepa*\n   - Family: Amaryllidaceae (Alliaceae)\n   - Key Features: Concentric fleshy bulb scales rich in quercetin and lachrymatory factor synthase (causes eye watering).',
          importance: 'high',
          tags: ['Spices', 'Bawang', 'Luya', 'Sibuyas', 'Allicin', 'Gingerol', 'Alliaceae'],
          highlighted: true
        },
        {
          id: 'pl-n-9',
          title: 'Cereals, Fibers, Stalks & Agro-Industrial Grasses (Poaceae & Others)',
          category: 'Definition',
          content: 'Economically vital staple grasses, fibers, and structural plants:\n\n1. Mais (English: Corn / Maize)\n   - Scientific Name: *Zea mays*\n   - Family: Poaceae\n   - Key Features: Monoecious annual grass with distinct male tassel and female ear; second most important grain in the Philippines.\n\n2. Palay (English: Rice / Paddy Rice)\n   - Scientific Name: *Oryza sativa*\n   - Family: Poaceae\n   - Key Features: Primary staple food of the Filipino nation; semi-aquatic grass grown in rainfed and irrigated paddies.\n\n3. Labong (English: Bamboo Shoot)\n   - Scientific Name: *Bambusa sp.*\n   - Family: Poaceae (Bambusoideae)\n   - Key Features: Tender edible young emerging culms of woody giant grasses; culms used extensively for lightweight rural housing.\n\n4. Kugon (English: Cogon Grass)\n   - Scientific Name: *Imperata cylindrica*\n   - Family: Poaceae\n   - Key Features: Aggressive rhizomatous perennial weed with sharp silica-rich blades; origin of the cultural idiom "ningas-kugon".\n\n5. Pandan (English: Screw Pine / Fragrant Pandan)\n   - Scientific Name: *Pandanus amaryllifolius*\n   - Family: Pandanaceae\n   - Key Features: Ribbon-like leaves containing 2-acetyl-1-pyrroline giving distinct aromatic aroma cooked with rice and desserts.\n\n6. Tabako (English: Tobacco)\n   - Scientific Name: *Nicotiana tabacum*\n   - Family: Solanaceae\n   - Key Features: Cash crop of Northern Luzon (Ilocos region); produces nicotine alkaloid synthesized in roots and stored in leaves.',
          importance: 'high',
          tags: ['Cereals', 'Poaceae', 'Rice', 'Corn', 'Bamboo', 'Cogon', 'Pandan', 'Tobacco'],
          highlighted: true
        },
        {
          id: 'pl-n-10',
          title: 'Commercial Cash Crops, Stimulants & Medicinal Shrubs',
          category: 'Definition',
          content: 'Commercial plantations, industrial crops, and therapeutic species:\n\n1. Atsuete / Achuete (English: Annatto Seed / Lipstick Tree)\n   - Scientific Name: *Bixa orellana*\n   - Family: Bixaceae\n   - Key Features: Red prickly pods with seeds coated in bixin pigment; natural orange-red food coloring in *kare-kare*.\n\n2. Camphor (English: Camphor Tree)\n   - Scientific Name: *Cinnamomum camphora*\n   - Family: Lauraceae\n   - Key Features: Evergreen tree yielding aromatic crystalline camphor used in topical analgesics and decongestants.\n\n3. Cacao (English: Cacao / Cocoa Tree)\n   - Scientific Name: *Theobroma cacao* (in text: *Theobrama cacao*)\n   - Family: Malvaceae\n   - Key Features: Cauliflorous tree bearing pods directly on trunk; seeds fermented and roasted to produce tablea chocolate; *Theobroma* means "food of the gods".\n\n4. Fire Tree (English: Fire Tree / Royal Poinciana)\n   - Scientific Name: *Delonix regia*\n   - Family: Fabaceae\n   - Key Features: Flamboyant canopy covered with brilliant scarlet-orange flowers during dry season.\n\n5. Jatropha / Tuba-tuba (English: Physic Nut)\n   - Scientific Name: *Jatropha curcas* (in text: *Jathropa scurcas*)\n   - Family: Euphorbiaceae\n   - Key Features: Seeds contain 30–40% inedible oil historically researched for biodiesel production; highly toxic phorbol esters.\n\n6. Kamias (English: Cucumber Tree / Bilimbi)\n   - Scientific Name: *Averrhoa bilimbi*\n   - Family: Oxalidaceae\n   - Key Features: Extremely acidic cylindrical fruits growing in clusters on tree trunk; used as souring agent and stain remover.\n\n7. Kamanchile / Camachile (English: Madras Thorn)\n   - Scientific Name: *Pithecellobium dulce*\n   - Family: Fabaceae\n   - Key Features: Spiny tree with spiraled pods containing sweetish white-to-pink spongy aril around black seeds.\n\n8. Kape (English: Coffee / Arabica Coffee)\n   - Scientific Name: *Coffea arabica*\n   - Family: Rubiaceae\n   - Key Features: Highland shrub bearing red "cherries" containing two caffeine-rich beans; prized in Benguet, Cavite, and Batangas.\n\n9. Lagundi (English: Five-Leaved Chaste Tree)\n   - Scientific Name: *Vitex negundo*\n   - Family: Lamiaceae\n   - Key Features: Premier DOH-approved herbal drug; scientifically formulated into tablets and syrups for cough and bronchial asthma.',
          importance: 'high',
          tags: ['Cash Crops', 'Cacao', 'Coffee', 'Atsuete', 'Camphor', 'Lagundi', 'Kamias'],
          highlighted: true
        },
        {
          id: 'pl-n-11',
          title: 'Ornamental Plants, Garden Florals & National Botanical Symbols',
          category: 'Definition',
          content: 'Florals, landscape plants, and symbolic Philippine species:\n\n1. Anonas (English: Custard Apple / Cherimoya)\n   - Scientific Name: *Annona cherimola* (syn. *Annona reticulata*)\n   - Family: Annonaceae\n   - Key Features: Heart-shaped brownish-yellow fruit with fragrant custard-like pulp.\n\n2. Aratiles (English: Calabura / Cotton Candy Berry)\n   - Scientific Name: *Muntingia calabura*\n   - Family: Muntingiaceae\n   - Key Features: Fast-growing pioneer tree with sweet red round berries popular among children and birds.\n\n3. Atis (English: Sugar Apple / Sweetsop)\n   - Scientific Name: *Annona squamosa* (in text: *Anonasquamosa*)\n   - Family: Annonaceae\n   - Key Features: Knobby segmented fruit with extremely sweet, creamy white segmented pulp.\n\n4. Balete (English: Ficus / Strangler Fig)\n   - Scientific Name: *Ficus benjamina*\n   - Family: Moraceae\n   - Key Features: Epiphytic strangler fig with extensive aerial roots; deeply rooted in Philippine folklore and supernatural traditions.\n\n5. Banaba (English: Giant Crape Myrtle / Pride of India)\n   - Scientific Name: *Lagerstroemia speciosa*\n   - Family: Lythraceae\n   - Key Features: DOH-recognized medicinal tree; leaves contain corosolic acid used as natural herbal tea for diabetes and kidney support.\n\n6. Brokoli (English: Broccoli)\n   - Scientific Name: *Brassica oleracea* var. *italica*\n   - Family: Brassicaceae\n   - Key Features: Edible immature green flower heads and stalk.\n\n7. Gumamela (red) (English: Red Hibiscus / China Rose)\n   - Scientific Name: *Hibiscus rosa-sinensis* (in text: *Hibiscus rosa-sinensi*)\n   - Family: Malvaceae\n   - Key Features: Solitary 5-petaled red flower with prominent exerted staminal column; classic school botany specimen.\n\n8. Kalasutsi / Calachuchi (English: Temple Flower / Plumeria)\n   - Scientific Name: *Plumeria acuminata* (syn. *Plumeria rubra*)\n   - Family: Apocynaceae\n   - Key Features: Fragrant waxy floral whorl with milky latex sap.\n\n9. Karrot (English: Carrot)\n   - Scientific Name: *Daucus carota*\n   - Family: Apiaceae\n   - Key Features: Conical orange taproot loaded with provitamin A beta-carotene.\n\n10. Kuliplor (English: Cauliflower)\n    - Scientific Name: *Brassica oleracea* var. *botrytis*\n    - Family: Brassicaceae\n    - Key Features: Compact white head composed of dense undeveloped inflorescence meristem tissue.\n\n11. Mayana (English: Coleus / Joseph’s Coat)\n    - Scientific Name: *Coleus scutellarioides* (syn. *Coleus blumei*)\n    - Family: Lamiaceae\n    - Key Features: Vibrant variegated multi-colored foliage; poultice applied to bruises, sprains, and headaches.\n\n12. Orange (English: Sweet Orange)\n    - Scientific Name: *Citrus sinensis*\n    - Family: Rutaceae\n    - Key Features: Spherical citrus fruit with bright orange rind and sweet acidic pulp.\n\n13. Poinsettia (English: Flame Leaf / Christmas Flower)\n    - Scientific Name: *Euphorbia pulcherrima*\n    - Family: Euphorbiaceae\n    - Key Features: Iconic crimson-red modified leaves (bracts) surrounding tiny inconspicuous flowers; holiday ornament.\n\n14. Rosas (English: Rose / Wild Dog Rose)\n    - Scientific Name: *Rosa canina*\n    - Family: Rosaceae\n    - Key Features: Thorny woody perennial with showy fragrant petals; hips rich in vitamin C.\n\n15. Saging (English: Banana)\n    - Scientific Name: *Musa sp.* (*Musa acuminata* / *Musa balbisiana*)\n    - Family: Musaceae\n    - Key Features: World’s largest herbaceous flowering plant (pseudo-stem of rolled leaf bases); hanging inflorescence called *puso ng saging*.\n\n16. Sampagita / Sampaguita (English: Arabian Jasmine)\n    - Scientific Name: *Jasminum sambac*\n    - Family: Oleaceae\n    - Key Features: National Flower of the Philippines; starry, pure white intensely fragrant blossoms strung into garlands.\n\n17. Strawberry (English: Strawberry)\n    - Scientific Name: *Fragaria × ananassa*\n    - Family: Rosaceae\n    - Key Features: Aggregate accessory fruit with seed-like achenes on the outer surface of swollen receptacle; La Trinidad, Benguet emblem.',
          importance: 'high',
          tags: ['Ornamental', 'Sampaguita', 'Gumamela', 'Banaba', 'Atis', 'Saging', 'Strawberry'],
          highlighted: true
        },
        {
          id: 'pl-n-12',
          title: 'High-Yield Board Exam Traps & Memorization Mnemonics',
          category: 'Key Takeaway',
          content: 'Essential botanical rules, frequent exam traps, and family pairings to memorize by heart:\n\n• TRAP 1: The *Averrhoa* Twins\n  - *Averrhoa carambola* = Balimbing (Starfruit, 5-angled)\n  - *Averrhoa bilimbi* = Kamias (Cucumber tree, small cylindrical sour fruit)\n\n• TRAP 2: The *Annona* Triad\n  - *Annona squamosa* = Atis (Sugar apple, knobby round)\n  - *Annona muricata* = Guyabano (Soursop, prickly spine)\n  - *Annona cherimola* = Anonas (Custard apple, smooth heart-shaped)\n\n• TRAP 3: The *Solanum* Triplets\n  - *Solanum lycopersicum* = Kamatis (Tomato)\n  - *Solanum melongena* = Talong (Eggplant)\n  - *Solanum tuberosum* = Patatas (Potato)\n\n• TRAP 4: The *Brassica* Polymorphs\n  - *Brassica oleracea* = Brokoli / Kuliplor (Broccoli / Cauliflower)\n  - *Brassica rapa* = Petsay (Pechay)\n  - *Brassica juncea* = Mustasa (Mustard)\n\n• TRAP 5: The *Vigna* Legumes\n  - *Vigna radiata* = Munggo (Mung bean)\n  - *Vigna unguiculata* = Sitaw (Yard-long bean)\n\n• TRAP 6: The *Syzygium* Berries\n  - *Syzygium cumini* = Duhat (Black plum)\n  - *Syzygium samarangense* = Makopa (Malay/wax apple)\n\n• DOH Top 10 Medicinal Plants present in this module:\n  1. Bawang (*Allium sativum*) – Hypercholesterolemia / Hypertension\n  2. Ampalaya (*Momordica charantia*) – Non-insulin dependent diabetes mellitus\n  3. Lagundi (*Vitex negundo*) – Cough, asthma, fever\n  4. Ulasiman-bato / Pansit-pantitan (*Peperomia pellucida*) – Gout, arthritis (lowers uric acid)\n  5. Bayabas (*Psidium guajava*) – Antiseptic wound wash',
          importance: 'high',
          tags: ['Board Exam', 'Mnemonics', 'Traps', 'DOH Medicinal Plants', 'Reviewer'],
          highlighted: true
        }
      ],
      questions: []
    },
    {
      id: 'rev-plants-quiz-50',
      name: 'Multiple Choice Quiz (50 Items)',
      fileName: 'Plants_50_Item_Practice_Quiz.json',
      fileSnippet: '50-item comprehensive multiple choice quiz testing scientific names, local names, and botanical families for Philippine flora.',
      testDate: '2026-10-30',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-20',
      notes: [],
      questions: [
        {
          id: 'pq-1',
          type: 'multiple_choice',
          question: 'What is the scientific binomial name of Ampalaya (Bitter Melon)?',
          options: ['Momordica charantia', 'Cucurbita maxima', 'Luffa acutangula', 'Benincasa hispida'],
          correctAnswer: 'Momordica charantia',
          explanation: 'Ampalaya belongs to the Cucurbitaceae family and is scientifically named Momordica charantia.',
          points: 1
        },
        {
          id: 'pq-2',
          type: 'multiple_choice',
          question: 'Which of the following is the scientific name of the national fruit of the Philippines, Manga (Mango)?',
          options: ['Mangifera indica', 'Durio zibethinus', 'Garcinia mangostana', 'Nephelium lappaceum'],
          correctAnswer: 'Mangifera indica',
          explanation: 'Manga is classified under the family Anacardiaceae as Mangifera indica.',
          points: 1
        },
        {
          id: 'pq-3',
          type: 'multiple_choice',
          question: 'The National Flower of the Philippines, Sampagita (Jasmin), has which scientific name?',
          options: ['Jasminum sambac', 'Hibiscus rosa-sinensis', 'Plumeria acuminata', 'Rosa canina'],
          correctAnswer: 'Jasminum sambac',
          explanation: 'Sampagita belongs to the Oleaceae family and is scientifically named Jasminum sambac.',
          points: 1
        },
        {
          id: 'pq-4',
          type: 'multiple_choice',
          question: 'What is the scientific name of Balimbing (Starfruit)?',
          options: ['Averrhoa carambola', 'Averrhoa bilimbi', 'Sandoricum koetjape', 'Manilkara zapota'],
          correctAnswer: 'Averrhoa carambola',
          explanation: 'Balimbing is Averrhoa carambola, distinguished by its five-angled star-shaped cross section. Averrhoa bilimbi is Kamias.',
          points: 1
        },
        {
          id: 'pq-5',
          type: 'multiple_choice',
          question: 'What is the scientific name of Kamias (Cucumber tree)?',
          options: ['Averrhoa bilimbi', 'Averrhoa carambola', 'Cucumis sativus', 'Momordica charantia'],
          correctAnswer: 'Averrhoa bilimbi',
          explanation: 'Kamias is Averrhoa bilimbi, an acidic cylindrical fruit growing on the tree trunk.',
          points: 1
        },
        {
          id: 'pq-6',
          type: 'multiple_choice',
          question: 'Which scientific name corresponds to the "Tree of Life", Niyog (Coconut)?',
          options: ['Cocos nucifera', 'Pandanus amaryllifolius', 'Bambusa sp.', 'Oryza sativa'],
          correctAnswer: 'Cocos nucifera',
          explanation: 'Coconut is Cocos nucifera, belonging to the palm family Arecaceae.',
          points: 1
        },
        {
          id: 'pq-7',
          type: 'multiple_choice',
          question: 'What is the scientific name of Malunggay (Moringa / Horseradish tree)?',
          options: ['Moringa oleifera', 'Basella alba', 'Spinacia oleracea', 'Brassica rapa'],
          correctAnswer: 'Moringa oleifera',
          explanation: 'Malunggay is Moringa oleifera, renowned as a nutrient-dense miracle tree.',
          points: 1
        },
        {
          id: 'pq-8',
          type: 'multiple_choice',
          question: 'Guyabano (Soursop) is known botanically as:',
          options: ['Annona muricata', 'Annona squamosa', 'Annona cherimola', 'Durio zibethinus'],
          correctAnswer: 'Annona muricata',
          explanation: 'Guyabano is Annona muricata. Annona squamosa is Atis, and Annona cherimola is Anonas.',
          points: 1
        },
        {
          id: 'pq-9',
          type: 'multiple_choice',
          question: 'Atis (Sugar apple) has which scientific binomial name?',
          options: ['Annona squamosa', 'Annona muricata', 'Annona cherimola', 'Bixa orellana'],
          correctAnswer: 'Annona squamosa',
          explanation: 'Atis is Annona squamosa, bearing knobby segmented sweet fruits.',
          points: 1
        },
        {
          id: 'pq-10',
          type: 'multiple_choice',
          question: 'What is the scientific name of Bayabas (Guava)?',
          options: ['Psidium guajava', 'Muntingia calabura', 'Pithecellobium dulce', 'Carica papaya'],
          correctAnswer: 'Psidium guajava',
          explanation: 'Bayabas is Psidium guajava of the family Myrtaceae, widely used as an antiseptic wash.',
          points: 1
        },
        {
          id: 'pq-11',
          type: 'multiple_choice',
          question: 'What is the scientific name of Bawang (Garlic)?',
          options: ['Allium sativum', 'Allium cepa', 'Zingiber officinale', 'Apium graveolens'],
          correctAnswer: 'Allium sativum',
          explanation: 'Bawang is Allium sativum (Alliaceae/Amaryllidaceae), rich in allicin. Allium cepa is Sibuyas (Onion).',
          points: 1
        },
        {
          id: 'pq-12',
          type: 'multiple_choice',
          question: 'What is the scientific name of Sibuyas (Onion)?',
          options: ['Allium cepa', 'Allium sativum', 'Brassica juncea', 'Raphanus sativus'],
          correctAnswer: 'Allium cepa',
          explanation: 'Sibuyas is Allium cepa.',
          points: 1
        },
        {
          id: 'pq-13',
          type: 'multiple_choice',
          question: 'Luya (Ginger) is scientifically known as:',
          options: ['Zingiber officinale', 'Curcuma longa', 'Allium sativum', 'Coleus aromaticus'],
          correctAnswer: 'Zingiber officinale',
          explanation: 'Luya is Zingiber officinale, an underground aromatic rhizome.',
          points: 1
        },
        {
          id: 'pq-14',
          type: 'multiple_choice',
          question: 'What is the scientific name of the staple grain Palay (Rice)?',
          options: ['Oryza sativa', 'Zea mays', 'Imperata cylindrica', 'Saccharum officinarum'],
          correctAnswer: 'Oryza sativa',
          explanation: 'Rice is Oryza sativa, belonging to the grass family Poaceae.',
          points: 1
        },
        {
          id: 'pq-15',
          type: 'multiple_choice',
          question: 'What is the scientific name of Mais (Corn)?',
          options: ['Zea mays', 'Oryza sativa', 'Phaseolus vulgaris', 'Vigna radiata'],
          correctAnswer: 'Zea mays',
          explanation: 'Mais is Zea mays.',
          points: 1
        },
        {
          id: 'pq-16',
          type: 'multiple_choice',
          question: 'What is the scientific name of Talong (Eggplant)?',
          options: ['Solanum melongena', 'Solanum lycopersicum', 'Solanum tuberosum', 'Capsicum annuum'],
          correctAnswer: 'Solanum melongena',
          explanation: 'Talong is Solanum melongena. Tomato is Solanum lycopersicum and potato is Solanum tuberosum.',
          points: 1
        },
        {
          id: 'pq-17',
          type: 'multiple_choice',
          question: 'Kamatis (Tomato) is scientifically classified as:',
          options: ['Solanum lycopersicum', 'Solanum melongena', 'Solanum tuberosum', 'Capsicum annuum'],
          correctAnswer: 'Solanum lycopersicum',
          explanation: 'Tomato is Solanum lycopersicum.',
          points: 1
        },
        {
          id: 'pq-18',
          type: 'multiple_choice',
          question: 'Patatas (Potato) is scientifically classified as:',
          options: ['Solanum tuberosum', 'Solanum lycopersicum', 'Ipomoea batatas', 'Manihot esculenta'],
          correctAnswer: 'Solanum tuberosum',
          explanation: 'Patatas is Solanum tuberosum. Sweet potato is Ipomoea batatas.',
          points: 1
        },
        {
          id: 'pq-19',
          type: 'multiple_choice',
          question: 'What is the scientific name of Kamote (Sweet Potato)?',
          options: ['Ipomoea batatas', 'Ipomoea aquatica', 'Manihot esculenta', 'Dioscorea alata'],
          correctAnswer: 'Ipomoea batatas',
          explanation: 'Kamote is Ipomoea batatas (Convolvulaceae). Kangkong is Ipomoea aquatica.',
          points: 1
        },
        {
          id: 'pq-20',
          type: 'multiple_choice',
          question: 'What is the scientific name of Kangkong (Water Spinach)?',
          options: ['Ipomoea aquatica', 'Ipomoea batatas', 'Basella alba', 'Spinacia oleracea'],
          correctAnswer: 'Ipomoea aquatica',
          explanation: 'Kangkong is Ipomoea aquatica.',
          points: 1
        },
        {
          id: 'pq-21',
          type: 'multiple_choice',
          question: 'What is the scientific name of Alugbati (Malabar Spinach)?',
          options: ['Basella alba', 'Ipomoea aquatica', 'Spinacia oleracea', 'Amaranthus spinosus'],
          correctAnswer: 'Basella alba',
          explanation: 'Alugbati is Basella alba of the family Basellaceae.',
          points: 1
        },
        {
          id: 'pq-22',
          type: 'multiple_choice',
          question: 'Kamoteng Kahoy (Cassava) has which scientific name?',
          options: ['Manihot esculenta', 'Dioscorea alata', 'Colocasia esculenta', 'Pachyrhizus erosus'],
          correctAnswer: 'Manihot esculenta',
          explanation: 'Cassava is Manihot esculenta (Euphorbiaceae).',
          points: 1
        },
        {
          id: 'pq-23',
          type: 'multiple_choice',
          question: 'Gabi (Taro) is scientifically named:',
          options: ['Colocasia esculenta', 'Manihot esculenta', 'Dioscorea alata', 'Ipomoea batatas'],
          correctAnswer: 'Colocasia esculenta',
          explanation: 'Gabi is Colocasia esculenta (Araceae).',
          points: 1
        },
        {
          id: 'pq-24',
          type: 'multiple_choice',
          question: 'Ube (Purple Yam) is scientifically named:',
          options: ['Dioscorea alata', 'Colocasia esculenta', 'Ipomoea batatas', 'Pachyrhizus erosus'],
          correctAnswer: 'Dioscorea alata',
          explanation: 'Ube is Dioscorea alata (Dioscoreaceae).',
          points: 1
        },
        {
          id: 'pq-25',
          type: 'multiple_choice',
          question: 'Singkamas (Jicama / Yam Bean) is scientifically designated as:',
          options: ['Pachyrhizus erosus', 'Raphanus sativus', 'Daucus carota', 'Brassica rapa'],
          correctAnswer: 'Pachyrhizus erosus',
          explanation: 'Singkamas is Pachyrhizus erosus (Fabaceae).',
          points: 1
        },
        {
          id: 'pq-26',
          type: 'multiple_choice',
          question: 'Labanos (Radish) belongs to Brassicaceae under what scientific name?',
          options: ['Raphanus sativus', 'Brassica rapa', 'Daucus carota', 'Beta vulgaris'],
          correctAnswer: 'Raphanus sativus',
          explanation: 'Labanos is Raphanus sativus.',
          points: 1
        },
        {
          id: 'pq-27',
          type: 'multiple_choice',
          question: 'What is the scientific name of Munggo (Mung Bean)?',
          options: ['Vigna radiata', 'Vigna unguiculata', 'Phaseolus vulgaris', 'Arachis hypogaea'],
          correctAnswer: 'Vigna radiata',
          explanation: 'Munggo is Vigna radiata. Sitaw is Vigna unguiculata.',
          points: 1
        },
        {
          id: 'pq-28',
          type: 'multiple_choice',
          question: 'Sitaw (Yard-long Bean) has which scientific name?',
          options: ['Vigna unguiculata', 'Vigna radiata', 'Phaseolus vulgaris', 'Lablab purpureus'],
          correctAnswer: 'Vigna unguiculata',
          explanation: 'Sitaw is Vigna unguiculata subsp. sesquipedalis.',
          points: 1
        },
        {
          id: 'pq-29',
          type: 'multiple_choice',
          question: 'Mani (Peanut / Groundnut) is scientifically named:',
          options: ['Arachis hypogaea', 'Phaseolus vulgaris', 'Lablab purpureus', 'Leucaena leucocephala'],
          correctAnswer: 'Arachis hypogaea',
          explanation: 'Mani is Arachis hypogaea, famed for underground pod maturation (geocarpy).',
          points: 1
        },
        {
          id: 'pq-30',
          type: 'multiple_choice',
          question: 'Bataw (Hyacinth Bean) is scientifically named:',
          options: ['Lablab purpureus', 'Phaseolus vulgaris', 'Vigna radiata', 'Bixa orellana'],
          correctAnswer: 'Lablab purpureus',
          explanation: 'Bataw is Lablab purpureus.',
          points: 1
        },
        {
          id: 'pq-31',
          type: 'multiple_choice',
          question: 'Bitsuelas (Baguio Beans) has which scientific binomial name?',
          options: ['Phaseolus vulgaris', 'Vigna unguiculata', 'Lablab purpureus', 'Pisum sativum'],
          correctAnswer: 'Phaseolus vulgaris',
          explanation: 'Bitsuelas is Phaseolus vulgaris.',
          points: 1
        },
        {
          id: 'pq-32',
          type: 'multiple_choice',
          question: 'Ipil-Ipil is scientifically designated as:',
          options: ['Leucaena leucocephala', 'Delonix regia', 'Pithecellobium dulce', 'Tamarindus indica'],
          correctAnswer: 'Leucaena leucocephala',
          explanation: 'Ipil-Ipil is Leucaena leucocephala (syn. Leucaena glauca).',
          points: 1
        },
        {
          id: 'pq-33',
          type: 'multiple_choice',
          question: 'What is the scientific name of Kalabasa (Squash)?',
          options: ['Cucurbita maxima', 'Momordica charantia', 'Benincasa hispida', 'Luffa acutangula'],
          correctAnswer: 'Cucurbita maxima',
          explanation: 'Kalabasa is Cucurbita maxima.',
          points: 1
        },
        {
          id: 'pq-34',
          type: 'multiple_choice',
          question: 'Patola (Ribbed Gourd / Luffa) is scientifically called:',
          options: ['Luffa acutangula', 'Benincasa hispida', 'Sechium edule', 'Cucumis sativus'],
          correctAnswer: 'Luffa acutangula',
          explanation: 'Patola is Luffa acutangula.',
          points: 1
        },
        {
          id: 'pq-35',
          type: 'multiple_choice',
          question: 'Kundol (Winter Melon) is scientifically called:',
          options: ['Benincasa hispida', 'Luffa acutangula', 'Cucurbita maxima', 'Sechium edule'],
          correctAnswer: 'Benincasa hispida',
          explanation: 'Kundol is Benincasa hispida.',
          points: 1
        },
        {
          id: 'pq-36',
          type: 'multiple_choice',
          question: 'Sayote (Chayote) has which scientific binomial name?',
          options: ['Sechium edule', 'Benincasa hispida', 'Luffa acutangula', 'Cucumis sativus'],
          correctAnswer: 'Sechium edule',
          explanation: 'Sayote is Sechium edule.',
          points: 1
        },
        {
          id: 'pq-37',
          type: 'multiple_choice',
          question: 'Pipino (Cucumber) is scientifically classified as:',
          options: ['Cucumis sativus', 'Cucumis melo', 'Sechium edule', 'Cucurbita maxima'],
          correctAnswer: 'Cucumis sativus',
          explanation: 'Pipino is Cucumis sativus.',
          points: 1
        },
        {
          id: 'pq-38',
          type: 'multiple_choice',
          question: 'Okra (Lady’s Finger) is scientifically designated as:',
          options: ['Abelmoschus esculentus', 'Hibiscus rosa-sinensis', 'Theobroma cacao', 'Gossypium hirsutum'],
          correctAnswer: 'Abelmoschus esculentus',
          explanation: 'Okra is Abelmoschus esculentus (family Malvaceae).',
          points: 1
        },
        {
          id: 'pq-39',
          type: 'multiple_choice',
          question: 'What is the scientific name of Sili (Bell Pepper / Chili Pepper)?',
          options: ['Capsicum annuum', 'Solanum melongena', 'Piper nigrum', 'Zingiber officinale'],
          correctAnswer: 'Capsicum annuum',
          explanation: 'Sili is Capsicum annuum.',
          points: 1
        },
        {
          id: 'pq-40',
          type: 'multiple_choice',
          question: 'Langka (Jackfruit) belongs to the Moraceae family under what scientific name?',
          options: ['Artocarpus heterophyllus', 'Artocarpus altilis', 'Ficus benjamina', 'Durio zibethinus'],
          correctAnswer: 'Artocarpus heterophyllus',
          explanation: 'Langka is Artocarpus heterophyllus.',
          points: 1
        },
        {
          id: 'pq-41',
          type: 'multiple_choice',
          question: 'Dulian / Durian has which scientific binomial name?',
          options: ['Durio zibethinus', 'Artocarpus heterophyllus', 'Garcinia mangostana', 'Lansium domesticum'],
          correctAnswer: 'Durio zibethinus',
          explanation: 'Durian is Durio zibethinus.',
          points: 1
        },
        {
          id: 'pq-42',
          type: 'multiple_choice',
          question: 'Manggustan (Mangosteen) has which scientific name?',
          options: ['Garcinia mangostana', 'Durio zibethinus', 'Lansium domesticum', 'Nephelium lappaceum'],
          correctAnswer: 'Garcinia mangostana',
          explanation: 'Mangosteen is Garcinia mangostana.',
          points: 1
        },
        {
          id: 'pq-43',
          type: 'multiple_choice',
          question: 'Lanzones has which scientific binomial name?',
          options: ['Lansium domesticum', 'Sandoricum koetjape', 'Nephelium lappaceum', 'Litchi chinensis'],
          correctAnswer: 'Lansium domesticum',
          explanation: 'Lanzones is Lansium domesticum.',
          points: 1
        },
        {
          id: 'pq-44',
          type: 'multiple_choice',
          question: 'Rambutan has which scientific name?',
          options: ['Nephelium lappaceum', 'Litchi chinensis', 'Lansium domesticum', 'Sandoricum koetjape'],
          correctAnswer: 'Nephelium lappaceum',
          explanation: 'Rambutan is Nephelium lappaceum.',
          points: 1
        },
        {
          id: 'pq-45',
          type: 'multiple_choice',
          question: 'Santol (Cottonfruit) is scientifically designated as:',
          options: ['Sandoricum koetjape', 'Lansium domesticum', 'Nephelium lappaceum', 'Tamarindus indica'],
          correctAnswer: 'Sandoricum koetjape',
          explanation: 'Santol is Sandoricum koetjape.',
          points: 1
        },
        {
          id: 'pq-46',
          type: 'multiple_choice',
          question: 'Sampalok (Tamarind) is scientifically called:',
          options: ['Tamarindus indica', 'Sandoricum koetjape', 'Pithecellobium dulce', 'Bixa orellana'],
          correctAnswer: 'Tamarindus indica',
          explanation: 'Sampalok is Tamarindus indica.',
          points: 1
        },
        {
          id: 'pq-47',
          type: 'multiple_choice',
          question: 'Lagundi (Five-leaved chaste tree), a premier DOH herbal cough medicine, is:',
          options: ['Vitex negundo', 'Peperomia pellucida', 'Coleus aromaticus', 'Basella alba'],
          correctAnswer: 'Vitex negundo',
          explanation: 'Lagundi is Vitex negundo (Lamiaceae).',
          points: 1
        },
        {
          id: 'pq-48',
          type: 'multiple_choice',
          question: 'Pansit-Pantitan (Peperomia / Ulasiman-bato), used to lower uric acid in gout, is:',
          options: ['Peperomia pellucida', 'Vitex negundo', 'Basella alba', 'Coleus blumei'],
          correctAnswer: 'Peperomia pellucida',
          explanation: 'Pansit-pantitan is Peperomia pellucida (Piperaceae).',
          points: 1
        },
        {
          id: 'pq-49',
          type: 'multiple_choice',
          question: 'Atsuete (Annatto seed), used as a natural orange food coloring in kare-kare, is:',
          options: ['Bixa orellana', 'Theobroma cacao', 'Cinnamomum camphora', 'Delonix regia'],
          correctAnswer: 'Bixa orellana',
          explanation: 'Atsuete is Bixa orellana (Bixaceae).',
          points: 1
        },
        {
          id: 'pq-50',
          type: 'multiple_choice',
          question: 'Cacao (Cocoa tree) is scientifically classified as:',
          options: ['Theobroma cacao', 'Coffea arabica', 'Camellia sinensis', 'Bixa orellana'],
          correctAnswer: 'Theobroma cacao',
          explanation: 'Cacao is Theobroma cacao, literally meaning "food of the gods".',
          points: 1
        }
      ]
    },
    {
      id: 'rev-plants-id-25',
      name: '25-Item Identification Exam',
      fileName: 'Plants_25_Item_Identification_Exam.json',
      fileSnippet: 'Rigorous binomial identification exam testing exact scientific names, local names, and botanical families for Philippine flora.',
      testDate: '2026-10-31',
      questionTypes: ['identification'],
      questionCount: 25,
      createdAt: '2026-10-20',
      notes: [],
      questions: [
        {
          id: 'id-1',
          type: 'identification',
          question: 'Provide the scientific binomial name for Ampalaya (Bitter Melon).',
          correctAnswer: 'Momordica charantia',
          explanation: 'Momordica charantia is the scientific binomial name of Ampalaya.',
          points: 2
        },
        {
          id: 'id-2',
          type: 'identification',
          question: 'What is the scientific name of Manga (Mango), the national fruit of the Philippines?',
          correctAnswer: 'Mangifera indica',
          explanation: 'Mangifera indica is the scientific binomial name of Manga.',
          points: 2
        },
        {
          id: 'id-3',
          type: 'identification',
          question: 'Provide the scientific name of Sampagita (Jasmin), the national flower of the Philippines.',
          correctAnswer: 'Jasminum sambac',
          explanation: 'Jasminum sambac is the scientific name of Sampagita.',
          points: 2
        },
        {
          id: 'id-4',
          type: 'identification',
          question: 'What is the scientific name of Balimbing (Starfruit)?',
          correctAnswer: 'Averrhoa carambola',
          explanation: 'Averrhoa carambola is Balimbing.',
          points: 2
        },
        {
          id: 'id-5',
          type: 'identification',
          question: 'What is the scientific name of Kamias (Cucumber Tree)?',
          correctAnswer: 'Averrhoa bilimbi',
          explanation: 'Averrhoa bilimbi is Kamias.',
          points: 2
        },
        {
          id: 'id-6',
          type: 'identification',
          question: 'Provide the scientific name of Niyog (Coconut).',
          correctAnswer: 'Cocos nucifera',
          explanation: 'Cocos nucifera is Niyog.',
          points: 2
        },
        {
          id: 'id-7',
          type: 'identification',
          question: 'What is the scientific name of Malunggay (Moringa)?',
          correctAnswer: 'Moringa oleifera',
          explanation: 'Moringa oleifera is Malunggay.',
          points: 2
        },
        {
          id: 'id-8',
          type: 'identification',
          question: 'Provide the scientific name of Guyabano (Soursop).',
          correctAnswer: 'Annona muricata',
          explanation: 'Annona muricata is Guyabano.',
          points: 2
        },
        {
          id: 'id-9',
          type: 'identification',
          question: 'What is the scientific name of Atis (Sugar apple)?',
          correctAnswer: 'Annona squamosa',
          explanation: 'Annona squamosa is Atis.',
          points: 2
        },
        {
          id: 'id-10',
          type: 'identification',
          question: 'What is the scientific name of Bayabas (Guava)?',
          correctAnswer: 'Psidium guajava',
          explanation: 'Psidium guajava is Bayabas.',
          points: 2
        },
        {
          id: 'id-11',
          type: 'identification',
          question: 'Provide the scientific name of Bawang (Garlic).',
          correctAnswer: 'Allium sativum',
          explanation: 'Allium sativum is Bawang.',
          points: 2
        },
        {
          id: 'id-12',
          type: 'identification',
          question: 'Provide the scientific name of Sibuyas (Onion).',
          correctAnswer: 'Allium cepa',
          explanation: 'Allium cepa is Sibuyas.',
          points: 2
        },
        {
          id: 'id-13',
          type: 'identification',
          question: 'Provide the scientific name of Luya (Ginger).',
          correctAnswer: 'Zingiber officinale',
          explanation: 'Zingiber officinale is Luya.',
          points: 2
        },
        {
          id: 'id-14',
          type: 'identification',
          question: 'What is the scientific name of Palay (Rice)?',
          correctAnswer: 'Oryza sativa',
          explanation: 'Oryza sativa is Palay.',
          points: 2
        },
        {
          id: 'id-15',
          type: 'identification',
          question: 'What is the scientific name of Mais (Corn)?',
          correctAnswer: 'Zea mays',
          explanation: 'Zea mays is Mais.',
          points: 2
        },
        {
          id: 'id-16',
          type: 'identification',
          question: 'What is the scientific name of Talong (Eggplant)?',
          correctAnswer: 'Solanum melongena',
          explanation: 'Solanum melongena is Talong.',
          points: 2
        },
        {
          id: 'id-17',
          type: 'identification',
          question: 'Provide the scientific name of Kamatis (Tomato).',
          correctAnswer: 'Solanum lycopersicum',
          explanation: 'Solanum lycopersicum is Kamatis.',
          points: 2
        },
        {
          id: 'id-18',
          type: 'identification',
          question: 'Provide the scientific name of Patatas (Potato).',
          correctAnswer: 'Solanum tuberosum',
          explanation: 'Solanum tuberosum is Patatas.',
          points: 2
        },
        {
          id: 'id-19',
          type: 'identification',
          question: 'What is the scientific name of Kamote (Sweet Potato)?',
          correctAnswer: 'Ipomoea batatas',
          explanation: 'Ipomoea batatas is Kamote.',
          points: 2
        },
        {
          id: 'id-20',
          type: 'identification',
          question: 'What is the scientific name of Kangkong (Water Spinach)?',
          correctAnswer: 'Ipomoea aquatica',
          explanation: 'Ipomoea aquatica is Kangkong.',
          points: 2
        },
        {
          id: 'id-21',
          type: 'identification',
          question: 'Provide the scientific name of Alugbati (Malabar Spinach).',
          correctAnswer: 'Basella alba',
          explanation: 'Basella alba is Alugbati.',
          points: 2
        },
        {
          id: 'id-22',
          type: 'identification',
          question: 'What is the scientific name of Kamoteng Kahoy (Cassava)?',
          correctAnswer: 'Manihot esculenta',
          explanation: 'Manihot esculenta is Kamoteng Kahoy.',
          points: 2
        },
        {
          id: 'id-23',
          type: 'identification',
          question: 'What is the scientific name of Gabi (Taro)?',
          correctAnswer: 'Colocasia esculenta',
          explanation: 'Colocasia esculenta is Gabi.',
          points: 2
        },
        {
          id: 'id-24',
          type: 'identification',
          question: 'What is the scientific name of Ube (Purple Yam)?',
          correctAnswer: 'Dioscorea alata',
          explanation: 'Dioscorea alata is Ube.',
          points: 2
        },
        {
          id: 'id-25',
          type: 'identification',
          question: 'Provide the scientific name of Lagundi, an approved DOH herbal medicine for cough.',
          correctAnswer: 'Vitex negundo',
          explanation: 'Vitex negundo is Lagundi.',
          points: 2
        }
      ]
    }
  ]
};
