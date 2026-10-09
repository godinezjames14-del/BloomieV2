import { Subject } from '../types';

export const plantStemSubject: Subject = {
  id: 'subj-plant-stem',
  name: 'PLANT ORGANOGRAPHY: STEM',
  description: 'Morphology, external markers, stem modifications (rhizome, tuber, bulb, corm, cladophyll), dicot vs monocot anatomy, secondary growth, xylem/phloem transport, and pharmaceutical importance.',
  color: '#F59E0B',
  reviewers: [
    {
      id: 'rev-stem-notes',
      name: 'Lecture Notes & Study Guide',
      fileName: 'Plant_Organography_Stem_PHBIOSCI131.pdf',
      fileSnippet: 'Comprehensive 50-slide study reviewer detailing stem morphology, vegetative modifications, internal dicot/monocot anatomy, secondary wood, transport biophysics, and pharmacognosy.',
      testDate: '2026-10-24',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'ps-n-1',
          title: 'Functions & External Morphology of the Stem',
          category: 'Definition',
          content: '• The Stem:\n  - The primary ascending axis of a vascular plant; supports leaves, flowers, and fruits, and mechanically links subterranean roots with aerial foliage.\n  - Core Functions:\n    1. Mechanical support for foliage, flowers, and fruits.\n    2. Conduction of water and mineral ions via xylem.\n    3. Conduction of photosynthesized sugars via phloem.\n    4. Nutrient and water storage.\n    5. Production of new vegetative branches, leaves, and reproductive floral structures.\n    6. Vegetative (asexual) reproduction.\n\n• External Morphological Features:\n  - Nodes: Distinct structural points along the stem where leaves, lateral branches, buds, or flowers emerge.\n  - Internodes: Stem spans located between two successive nodes; their elongation determines spacing between foliage.\n  - Terminal (Apical) Bud: Located at the apex of the stem; contains the SAM and is responsible for primary elongation.\n  - Axillary Bud: Positioned in the upper angle (axil) between a leaf petiole and stem; capable of developing into a lateral branch or flower.\n  - Lenticels: Small, spongy raised openings on woody stems and bark that enable gas exchange between internal tissues and the atmosphere.\n  - Leaf Scars: Distinct crescent- or shield-shaped scars remaining on a twig where a petiole detached after leaf abscission.',
          importance: 'high',
          tags: ['Stem Functions', 'Nodes', 'Internodes', 'Terminal Bud', 'Axillary Bud', 'Lenticels', 'Leaf Scars'],
          highlighted: true
        },
        {
          id: 'ps-n-2',
          title: 'Specialized Stem Modifications',
          category: 'Concept',
          content: 'All true stems possess nodes, internodes, and axillary buds—distinguishing modified stems from modified roots and leaves.\n\n• 1. Underground Modifications:\n  - Rhizome: Thick, horizontal underground stem growing near the soil surface. Bears nodes, internodes, scale leaves, and adventitious roots. Stores nutrients and aids vegetative reproduction. *Example*: Ginger (*Zingiber officinale* Roscoe).\n  - Tuber: Swollen subterranean stem formed at the terminal tip of a slender stolon, specialized for food (starch) storage. "Eyes" of a potato are axillary buds located at nodes. *Example*: Potato (*Solanum tuberosum*).\n  - Bulb: Compressed underground stem called the basal plate, surrounded by fleshy, nutrient-rich scale leaves that store food and water, with a central growing bud. *Example*: Onion (*Allium cepa* L.).\n  - Corm: Short, thick, vertically swollen underground stem. Unlike a bulb, the main storage tissue is the solid stem itself rather than fleshy leaves. *Example*: Taro (*Colocasia esculenta* (L.) Schott).\n\n• 2. Subaerial & Aerial Modifications:\n  - Runner (Stolon): Slender horizontal stem growing above the ground surface with long internodes; roots and daughter plantlets emerge at nodes for rapid vegetative propagation. *Example*: Strawberry (*Fragaria × ananassa*).\n  - Thorn: Sharp, hardened, woody modified stem or branch developing from an axillary bud with vascular connection. Protects against herbivores. *Example*: Citrus. (*Note: Spine = modified leaf; Prickle = superficial epidermal outgrowth*).\n  - Stem Tendril: Slender, coiled, sensitive modified stem helping weak-stemmed vines climb toward sunlight. *Example*: Grapevine (*Vitis*).\n  - Cladophyll (Cladode): Green, flattened, or cylindrical stem that performs photosynthesis while true leaves are reduced to protective scales or spines. *Example*: Asparagus (*Asparagus officinalis* L.), Ruscus, prickly pear cactus.',
          importance: 'high',
          tags: ['Rhizome', 'Tuber', 'Bulb', 'Corm', 'Runner', 'Thorn', 'Tendril', 'Cladophyll', 'Ginger', 'Potato', 'Taro'],
          highlighted: true
        },
        {
          id: 'ps-n-3',
          title: 'Comparative Internal Anatomy: Dicot vs. Monocot Stems',
          category: 'Key Takeaway',
          content: '• Dicot Stem Primary Structure:\n  - Vascular Bundles: Arranged in an orderly, concentric ring surrounding a central pith.\n  - Cortex & Pith: Clearly demarcated; distinct cortex beneath epidermis and prominent central parenchyma pith.\n  - Vascular Cambium: Present as a meristematic strip between primary xylem and primary phloem (open vascular bundles).\n  - Medullary Rays (Pith Rays): Parenchyma bands extending radially between vascular bundles; facilitate horizontal transport and storage.\n  - Secondary Growth: Retains capacity for extensive secondary growth in thickness. *Examples*: Sunflower, bean, mango.\n\n• Monocot Stem Primary Structure:\n  - Vascular Bundles: Scattered irregularly throughout the ground parenchyma tissue (more crowded toward the periphery).\n  - Cortex & Pith: No clear boundary distinguishing cortex from pith.\n  - Vascular Cambium: Completely absent (closed vascular bundles).\n  - Secondary Growth: Little to no secondary growth; herbaceous throughout lifespan. *Examples*: Corn, rice, sugarcane, bamboo.',
          importance: 'high',
          tags: ['Dicot Stem', 'Monocot Stem', 'Vascular Bundles', 'Vascular Cambium', 'Open Bundles', 'Closed Bundles', 'Pith'],
          highlighted: true
        },
        {
          id: 'ps-n-4',
          title: 'Secondary Growth & Woody Anatomy',
          category: 'Definition',
          content: '• Secondary Growth:\n  - Radial thickening of stems and roots driven by lateral meristems (Vascular Cambium and Cork Cambium); prominent in woody dicots and gymnosperms.\n\n• 1. Vascular Cambium Activity:\n  - Cylindrical meristematic sheath situated between xylem and phloem.\n  - Divides to produce Secondary Xylem toward the inside (constituting the bulk of commercial wood) and Secondary Phloem toward the outside (inner bark).\n\n• 2. Cork Cambium (Phellogen) & Periderm:\n  - Replaces the fragile epidermis as stems expand in girth.\n  - Periderm consists of three concentric layers:\n    1. Phellem (Cork): Outer protective layers of dead cells impregnated with waxy, waterproof suberin.\n    2. Phellogen (Cork Cambium): Dividing meristem layer.\n    3. Phelloderm (Secondary Cortex): Parenchyma cells produced inward.\n\n• 3. Annual Rings & Heartwood vs. Sapwood:\n  - Annual Rings: Growth rings formed by seasonal variation in secondary xylem vessel size; early wood (spring wood) has wide, thin-walled vessels (lighter), while late wood (summer wood) has narrow, thick-walled vessels (darker).\n  - Heartwood: Older, darker, non-functional central wood; vessels blocked with tyloses and impregnated with resins/tannins; provides structural support.\n  - Sapwood: Younger, lighter outer secondary xylem; actively conducts water and dissolved minerals from roots to crown.',
          importance: 'high',
          tags: ['Vascular Cambium', 'Cork Cambium', 'Phellem', 'Phelloderm', 'Periderm', 'Annual Rings', 'Heartwood', 'Sapwood'],
          highlighted: true
        },
        {
          id: 'ps-n-5',
          title: 'Biophysics of Long-Distance Molecular Transport',
          category: 'Formula',
          content: '• Xylem Transport: Cohesion-Tension Mechanism:\n  - Main Driver: Transpiration Pull (evaporation of water from leaf mesophyll through open stomata creates negative pressure / tension in leaf xylem).\n  - Cohesion: Hydrogen bonding between polar water molecules forms an unbroken, continuous water column up to tree heights.\n  - Adhesion: Attractive forces between water molecules and hydrophilic xylem wall cellulose/lignin support column weight.\n  - Root Pressure: Active mineral absorption into root stele lowers water potential, generating positive osmotic pressure that pushes sap upward (secondary mechanism, observed during guttation).\n  - Direction: Strictly unidirectional (roots → leaves).\n\n• Phloem Transport: Pressure-Flow (Bulk Flow) Mechanism:\n  - Main Driver: Hydrostatic Turgor Pressure Gradient generated between source and sink tissues.\n  - Phloem Loading: Sucrose actively loaded into sieve tubes at source (mature photosynthetic leaves) → solute concentration increases → water potential drops → water flows into sieve tubes from adjacent xylem via osmosis → creates high positive turgor pressure at source.\n  - Bulk Flow: High pressure at source pushes sugar solution along sieve tube continuum toward areas of lower pressure (sink).\n  - Phloem Unloading: Sugars actively unloaded at sinks (roots, fruits, developing seeds, growing shoots) for metabolism or starch storage → water potential rises → water exits phloem and recycles into xylem.\n  - Direction: Bidirectional (source → sink).',
          importance: 'high',
          tags: ['Transpiration Pull', 'Cohesion-Tension', 'Pressure-Flow', 'Bulk Flow', 'Source', 'Sink', 'Turgor Pressure'],
          highlighted: true
        },
        {
          id: 'ps-n-6',
          title: 'Pharmaceutical and Pharmacognostic Importance of Stems & Barks',
          category: 'Summary',
          content: '• Crude Drugs in Pharmacognosy:\n  - Stems and stem barks are indispensable sources of therapeutic natural products and raw materials for phytopharmaceuticals.\n\n• Major Classes of Bioactive Phytochemicals Found in Stems:\n  1. Alkaloids: Nitrogenous basic compounds exerting pronounced physiological effects on the central/autonomic nervous system, smooth muscles, and pathogens (e.g., quinine from *Cinchona* bark).\n  2. Tannins: Polyphenolic compounds with astringent properties that precipitate proteins, exhibit antimicrobial action, and protect wounded tissues.\n  3. Flavonoids & Phenolics: Potent antioxidants that scavenge free radicals and display anti-inflammatory and vascular protective activities.\n  4. Terpenoids: Volatile and non-volatile isoprenoid compounds contributing to antimicrobial, analgesic, and anti-inflammatory activities (e.g., taxol from yew bark).\n  5. Saponins: Amphiphilic glycosides that lower surface tension, interact with cell membranes, and exhibit immunomodulatory, antifungal, and hemolytic actions.\n\n• Quality Control, Standardization & WHO Guidelines:\n  - Raw stem materials are evaluated via macroscopic observation, light and powder microscopy, physicochemical tests (ash values, extractive yields), and chromatographic fingerprinting.\n  - WHO guidelines underscore rigorous botanical authentication of species and specific plant parts to eliminate adulteration, substitution, and accidental toxic contamination.',
          importance: 'high',
          tags: ['Pharmacognosy', 'Alkaloids', 'Tannins', 'Flavonoids', 'Terpenoids', 'Saponins', 'WHO Guidelines', 'Standardization'],
          highlighted: true
        }
      ],
      questions: [
        {
          id: 'ps-q-1',
          type: 'multiple_choice',
          question: 'What is the primary function of the plant stem axis?',
          options: [
            'Absorbing moisture directly from deep bedrock aquifers',
            'Supporting leaves, flowers, and fruits while conducting materials between roots and shoots',
            'Producing pollen grains through meiotic division in the cortex',
            'Excreting excess oxygen gas into the soil'
          ],
          correctAnswer: 'Supporting leaves, flowers, and fruits while conducting materials between roots and shoots',
          explanation: 'The stem forms the main axis that elevates foliage for photosynthesis and facilitates xylem and phloem transport.',
          points: 10
        },
        {
          id: 'ps-q-2',
          type: 'multiple_choice',
          question: 'What is the point on a stem where leaves, lateral branches, buds, or flowers develop?',
          options: ['Internode', 'Node', 'Lenticel', 'Leaf scar'],
          correctAnswer: 'Node',
          explanation: 'Nodes are specific developmental locations on the stem axis where leaves and axillary buds arise.',
          points: 10
        },
        {
          id: 'ps-q-3',
          type: 'multiple_choice',
          question: 'What is the section of a stem located between two successive nodes called?',
          options: ['Node', 'Lenticel', 'Internode', 'Pith ray'],
          correctAnswer: 'Internode',
          explanation: 'An internode is the stem span between two consecutive nodes.',
          points: 10
        },
        {
          id: 'ps-q-4',
          type: 'multiple_choice',
          question: 'Which bud is positioned at the terminal apex of the stem and drives vertical elongation?',
          options: ['Axillary bud', 'Adventitious bud', 'Terminal or apical bud', 'Lateral cambial bud'],
          correctAnswer: 'Terminal or apical bud',
          explanation: 'The terminal or apical bud is situated at the stem tip and houses the SAM responsible for primary elongation.',
          points: 10
        },
        {
          id: 'ps-q-5',
          type: 'multiple_choice',
          question: 'Where is an axillary bud situated on a vegetative shoot?',
          options: [
            'In the upper angle between a leaf petiole and the stem',
            'Directly underneath the root cap',
            'Inside the vascular xylem lumen',
            'At the tip of a taproot'
          ],
          correctAnswer: 'In the upper angle between a leaf petiole and the stem',
          explanation: 'Axillary buds reside in the leaf axil and can give rise to vegetative branches or flowers.',
          points: 10
        },
        {
          id: 'ps-q-6',
          type: 'multiple_choice',
          question: 'What are lenticels, and what vital physiological function do they perform on woody stems?',
          options: [
            'Adhesive pads that allow vines to stick to rock walls',
            'Small spongy openings on woody stems that allow gas exchange between inner tissues and air',
            'Waxy glands that secrete antibacterial resin to kill insects',
            'Storage chambers filled with concentrated sucrose crystals'
          ],
          correctAnswer: 'Small spongy openings on woody stems that allow gas exchange between inner tissues and air',
          explanation: 'Lenticels are porous ruptures in the cork layer enabling respiratory oxygen exchange for internal bark cells.',
          points: 10
        },
        {
          id: 'ps-q-7',
          type: 'multiple_choice',
          question: 'What structural mark remains on a woody twig after a leaf petiole naturally falls off?',
          options: ['Lenticel', 'Node', 'Leaf scar', 'Terminal bud scale scar'],
          correctAnswer: 'Leaf scar',
          explanation: 'A leaf scar marks the point where a petiole was attached prior to seasonal abscission.',
          points: 10
        },
        {
          id: 'ps-q-8',
          type: 'multiple_choice',
          question: 'Which universal morphological features distinguish modified stems from modified roots and leaves?',
          options: [
            'Stems always contain chlorophyll and flowers at all times',
            'All stems possess nodes, internodes, and axillary buds',
            'Stems only grow above ground and never store starch',
            'Stems are completely surrounded by thick dead bark'
          ],
          correctAnswer: 'All stems possess nodes, internodes, and axillary buds',
          explanation: 'Regardless of modification, stems are identified by the presence of nodes, internodes, and buds.',
          points: 10
        },
        {
          id: 'ps-q-9',
          type: 'multiple_choice',
          question: 'What type of modified stem is a ginger rhizome (Zingiber officinale Roscoe)?',
          options: [
            'A vertical photosynthetic green stem',
            'A horizontal underground stem that stores starch and produces adventitious roots and shoots',
            'An enlarged aerial thorn used for defensive combat',
            'A coiled thread-like tendril used for climbing trees'
          ],
          correctAnswer: 'A horizontal underground stem that stores starch and produces adventitious roots and shoots',
          explanation: 'A rhizome is a horizontal subterranean stem with nodes, scale leaves, and adventitious roots.',
          points: 10
        },
        {
          id: 'ps-q-10',
          type: 'multiple_choice',
          question: 'What botanical structure are the "eyes" of a common potato tuber (Solanum tuberosum)?',
          options: [
            'Parasitic fungal spore clusters',
            'Axillary buds located at nodes capable of producing new shoots',
            'Secondary xylem vessel elements filled with air',
            'Lignified prickles that penetrate the soil'
          ],
          correctAnswer: 'Axillary buds located at nodes capable of producing new shoots',
          explanation: 'The eyes of a potato are axillary buds situated at nodes in the modified stem.',
          points: 10
        },
        {
          id: 'ps-q-11',
          type: 'multiple_choice',
          question: 'How is an onion bulb (Allium cepa L.) structurally organized?',
          options: [
            'A solid swollen stem with no scale leaves',
            'A short, compressed underground stem (basal plate) surrounded by fleshy, nutrient-storing scale leaves',
            'A long horizontal runner running across the soil surface',
            'An aerial stem covered with sharp prickles'
          ],
          correctAnswer: 'A short, compressed underground stem (basal plate) surrounded by fleshy, nutrient-storing scale leaves',
          explanation: 'In a bulb, a small basal plate stem is surrounded by layers of fleshy leaves that store carbohydrates and water.',
          points: 10
        },
        {
          id: 'ps-q-12',
          type: 'multiple_choice',
          question: 'How does a corm (such as taro, Colocasia esculenta) differ anatomically from a bulb?',
          options: [
            'In a corm, the main storage tissue is the solid swollen stem itself, whereas in a bulb it is fleshy scale leaves',
            'A corm is composed entirely of hollow xylem tubes',
            'A corm only grows in marine salt water',
            'A bulb stores starch while a corm stores only lipids'
          ],
          correctAnswer: 'In a corm, the main storage tissue is the solid swollen stem itself, whereas in a bulb it is fleshy scale leaves',
          explanation: 'A corm is a solid swollen stem; a bulb consists primarily of fleshy scale leaves enclosing a tiny stem.',
          points: 10
        },
        {
          id: 'ps-q-13',
          type: 'multiple_choice',
          question: 'What is a runner (or stolon), as seen in strawberry plants (Fragaria × ananassa)?',
          options: [
            'A swollen subterranean tuber storing glycogen',
            'A slender horizontal stem that grows along the soil surface, forming plantlets at its nodes',
            'A sharp modified branch that deters browsing goats',
            'A specialized leaf that captures insects'
          ],
          correctAnswer: 'A slender horizontal stem that grows along the soil surface, forming plantlets at its nodes',
          explanation: 'Runners are aboveground horizontal stems that produce adventitious roots and plantlets at nodes.',
          points: 10
        },
        {
          id: 'ps-q-14',
          type: 'multiple_choice',
          question: 'How is a true stem thorn (such as in citrus) anatomically distinguished from a spine and a prickle?',
          options: [
            'Thorns have no vascular connection and peel off easily with fingernails',
            'Thorns develop from stem tissue (axillary buds) and contain vascular connections',
            'Thorns are modified leaves produced only in deserts',
            'Thorns are composed solely of dead epidermal cuticle'
          ],
          correctAnswer: 'Thorns develop from stem tissue (axillary buds) and contain vascular connections',
          explanation: 'Thorns are modified branches with vascular connections; spines are modified leaves, and prickles are epidermal outgrowths.',
          points: 10
        },
        {
          id: 'ps-q-15',
          type: 'multiple_choice',
          question: 'What is the function of a stem tendril in weak-stemmed climbing vines like grapevines?',
          options: [
            'Photosynthesizing starch during dark nights',
            'Coiling around supports to help the plant climb toward sunlight',
            'Absorbing rainwater directly from tree trunks',
            'Storing toxic metabolites away from floral tissues'
          ],
          correctAnswer: 'Coiling around supports to help the plant climb toward sunlight',
          explanation: 'Stem tendrils are thigmotropic modified stems that coil around trellises and branches for climbing.',
          points: 10
        },
        {
          id: 'ps-q-16',
          type: 'multiple_choice',
          question: 'What is a cladophyll (or cladode), such as seen in asparagus (Asparagus officinalis L.)?',
          options: [
            'An underground bulb with thick papery tunics',
            'A modified green stem that functions like a leaf to perform photosynthesis',
            'A hollow water-conducting pipe in secondary wood',
            'A specialized root that senses gravity'
          ],
          correctAnswer: 'A modified green stem that functions like a leaf to perform photosynthesis',
          explanation: 'Cladophylls are flattened or needle-like green stems that take over photosynthesis when true leaves are reduced.',
          points: 10
        },
        {
          id: 'ps-q-17',
          type: 'multiple_choice',
          question: 'How are vascular bundles arranged in a typical primary dicot stem cross-section?',
          options: [
            'Scattered randomly throughout the ground tissue',
            'Arranged in an orderly concentric ring surrounding a central pith',
            'Forming a solid star shape at the center of the cortex',
            'Clustered exclusively in the outer epidermis'
          ],
          correctAnswer: 'Arranged in an orderly concentric ring surrounding a central pith',
          explanation: 'Dicot stems exhibit a characteristic circular ring of vascular bundles with distinct cortex and pith.',
          points: 10
        },
        {
          id: 'ps-q-18',
          type: 'multiple_choice',
          question: 'How are vascular bundles arranged in a monocot stem cross-section (e.g., corn, rice)?',
          options: [
            'Arranged in a single outer ring with a large hollow pith',
            'Scattered throughout the ground tissue with no clear distinction between cortex and pith',
            'Surrounded by a thick layer of secondary bark',
            'Fused into a solid cylinder of secondary xylem'
          ],
          correctAnswer: 'Scattered throughout the ground tissue with no clear distinction between cortex and pith',
          explanation: 'Monocot stems have scattered vascular bundles embedded in ground parenchyma, lacking distinct cortex and pith.',
          points: 10
        },
        {
          id: 'ps-q-19',
          type: 'multiple_choice',
          question: 'Why are monocot vascular bundles classified as "closed vascular bundles"?',
          options: [
            'Because they are sealed with thick layers of suberized cork',
            'Because they do not contain vascular cambium between xylem and phloem, preventing normal secondary growth',
            'Because they do not transport water or nutrients',
            'Because their sieve plates have no open pores'
          ],
          correctAnswer: 'Because they do not contain vascular cambium between xylem and phloem, preventing normal secondary growth',
          explanation: 'Lacking vascular cambium between xylem and phloem, monocot bundles are closed to secondary growth.',
          points: 10
        },
        {
          id: 'ps-q-20',
          type: 'multiple_choice',
          question: 'Which lateral meristem is responsible for generating secondary xylem (wood) and secondary phloem?',
          options: ['Protoderm', 'Cork cambium (phellogen)', 'Vascular cambium', 'Intercalary meristem'],
          correctAnswer: 'Vascular cambium',
          explanation: 'The vascular cambium produces secondary xylem toward the inside and secondary phloem toward the outside.',
          points: 10
        },
        {
          id: 'ps-q-21',
          type: 'multiple_choice',
          question: 'In a woody stem, in which direction does the vascular cambium produce secondary xylem?',
          options: [
            'Toward the outside forming cork bark',
            'Toward the inside forming the bulk of wood',
            'Directly into the soil forming taproots',
            'Horizontally into leaf petioles'
          ],
          correctAnswer: 'Toward the inside forming the bulk of wood',
          explanation: 'Secondary xylem is produced inward toward the center, accumulating as wood year after year.',
          points: 10
        },
        {
          id: 'ps-q-22',
          type: 'multiple_choice',
          question: 'What is another botanical name for the cork cambium?',
          options: ['Procambium', 'Phellogen', 'Phellem', 'Phelloderm'],
          correctAnswer: 'Phellogen',
          explanation: 'The cork cambium is termed phellogen; it produces phellem (cork) outward and phelloderm inward.',
          points: 10
        },
        {
          id: 'ps-q-23',
          type: 'multiple_choice',
          question: 'What three layers compose the protective periderm in woody stems?',
          options: [
            'Epidermis, cortex, and pith',
            'Cork (phellem), cork cambium (phellogen), and secondary cortex (phelloderm)',
            'Primary xylem, secondary xylem, and heartwood',
            'Cuticle, stomata, and trichomes'
          ],
          correctAnswer: 'Cork (phellem), cork cambium (phellogen), and secondary cortex (phelloderm)',
          explanation: 'Periderm = phellem (cork) + phellogen (cork cambium) + phelloderm (secondary cortex).',
          points: 10
        },
        {
          id: 'ps-q-24',
          type: 'multiple_choice',
          question: 'What waxy, waterproof fatty substance impregnates the walls of dead cork cells (phellem)?',
          options: ['Pectin', 'Suberin', 'Cellulose', 'Starch'],
          correctAnswer: 'Suberin',
          explanation: 'Suberin renders cork impermeable to water and gases, forming an effective physical barrier.',
          points: 10
        },
        {
          id: 'ps-q-25',
          type: 'multiple_choice',
          question: 'What causes the formation of distinct annual growth rings in the secondary xylem of temperate trees?',
          options: [
            'Seasonal shifts in rainfall that turn chlorophyll red',
            'Seasonal differences in secondary growth rate producing wider light early wood and narrower dark late wood',
            'Fungal infections that invade the heartwood every autumn',
            'Periodic shedding of dead roots during the winter'
          ],
          correctAnswer: 'Seasonal differences in secondary growth rate producing wider light early wood and narrower dark late wood',
          explanation: 'Spring wood has large thin-walled vessels; late summer wood has dense small vessels, creating annual growth rings.',
          points: 10
        },
        {
          id: 'ps-q-26',
          type: 'multiple_choice',
          question: 'What is heartwood in a mature tree trunk?',
          options: [
            'The outer pale wood actively conducting water and minerals',
            'The older, darker central wood that no longer conducts water and provides structural support',
            'The living phloem tissue that translocates sucrose',
            'The meristematic layer that produces secondary cortex'
          ],
          correctAnswer: 'The older, darker central wood that no longer conducts water and provides structural support',
          explanation: 'Heartwood is non-conductive, resin-infiltrated central secondary xylem providing core physical strength.',
          points: 10
        },
        {
          id: 'ps-q-27',
          type: 'multiple_choice',
          question: 'What is sapwood in a mature tree trunk?',
          options: [
            'The younger, outer secondary xylem that actively conducts water and minerals',
            'The dead cork layers on the exterior of the bark',
            'The central pith that stores starch',
            'The layer of leaf scars left on twigs'
          ],
          correctAnswer: 'The younger, outer secondary xylem that actively conducts water and minerals',
          explanation: 'Sapwood consists of the active, functional water-conducting secondary xylem vessels.',
          points: 10
        },
        {
          id: 'ps-q-28',
          type: 'multiple_choice',
          question: 'What are medullary rays (pith rays)?',
          options: [
            'Radial bands of parenchyma cells that transport water, minerals, and nutrients sideways across the stem',
            'Spines that emerge from terminal buds to protect flowers',
            'Conducting tubes that transport sucrose unidirectionally to roots',
            'Hollow canals that secrete essential oils in conifers'
          ],
          correctAnswer: 'Radial bands of parenchyma cells that transport water, minerals, and nutrients sideways across the stem',
          explanation: 'Medullary rays extend radially, transporting substances horizontally between pith, vascular bundles, and cortex.',
          points: 10
        },
        {
          id: 'ps-q-29',
          type: 'multiple_choice',
          question: 'What is the main driver of upward water and mineral transport through the xylem?',
          options: ['Root osmotic pressure', 'Transpiration pull generated by water evaporation from leaf surfaces', 'Phloem bulk flow', 'Capillary gravity inversion'],
          correctAnswer: 'Transpiration pull generated by water evaporation from leaf surfaces',
          explanation: 'Transpiration pull generates negative pressure (tension) in leaf xylem that pulls water from roots upward.',
          points: 10
        },
        {
          id: 'ps-q-30',
          type: 'multiple_choice',
          question: 'In the cohesion-tension theory, what is cohesion?',
          options: [
            'The attraction of water molecules to the lignified xylem vessel walls',
            'The mutual attraction between water molecules via hydrogen bonding that maintains an unbroken water column',
            'The active pumping of sucrose across sieve plates',
            'The enzymatic breakdown of starch in the cortex'
          ],
          correctAnswer: 'The mutual attraction between water molecules via hydrogen bonding that maintains an unbroken water column',
          explanation: 'Hydrogen bonding between water molecules provides high tensile strength, holding the xylem column together.',
          points: 10
        },
        {
          id: 'ps-q-31',
          type: 'multiple_choice',
          question: 'In xylem transport, what is adhesion?',
          options: [
            'Water molecules sticking to one another through hydrogen bonds',
            'Water molecules adhering to the hydrophilic cellulose and lignin walls of xylem vessels',
            'Sucrose molecules binding to companion cell receptors',
            'Suberin depositing in secondary cell walls'
          ],
          correctAnswer: 'Water molecules adhering to the hydrophilic cellulose and lignin walls of xylem vessels',
          explanation: 'Adhesion of water to xylem cell walls helps counteract gravity and supports the water column.',
          points: 10
        },
        {
          id: 'ps-q-32',
          type: 'multiple_choice',
          question: 'What causes positive root pressure in vascular plants?',
          options: [
            'High wind evaporating water from the crown',
            'Active absorption of mineral ions into root xylem, causing water to follow by osmosis',
            'Rapid cell division in the shoot apical meristem',
            'Lignin dissolving in the heartwood'
          ],
          correctAnswer: 'Active absorption of mineral ions into root xylem, causing water to follow by osmosis',
          explanation: 'Active mineral accumulation in the stele draws water inward by osmosis, generating positive root pressure.',
          points: 10
        },
        {
          id: 'ps-q-33',
          type: 'multiple_choice',
          question: 'What mechanism drives the translocation of sugars and organic nutrients through the phloem?',
          options: ['Cohesion-tension mechanism', 'Pressure-flow (bulk flow) mechanism', 'Capillary action alone', 'Gravitational sedimentation'],
          correctAnswer: 'Pressure-flow (bulk flow) mechanism',
          explanation: 'Phloem sap moves by bulk flow driven by an osmotic turgor pressure gradient between source and sink.',
          points: 10
        },
        {
          id: 'ps-q-34',
          type: 'multiple_choice',
          question: 'In the pressure-flow model, what is a photosynthetic "source"?',
          options: [
            'A developing root tip consuming sucrose for energy',
            'A plant organ that produces or releases sugars, such as a mature green leaf',
            'A dormant winter seed storing oil',
            'A non-photosynthetic woody stem base'
          ],
          correctAnswer: 'A plant organ that produces or releases sugars, such as a mature green leaf',
          explanation: 'A source produces more photosynthate than it requires, loading sucrose into sieve tubes.',
          points: 10
        },
        {
          id: 'ps-q-35',
          type: 'multiple_choice',
          question: 'In the pressure-flow model, what is a "sink"?',
          options: [
            'A mature leaf producing excess carbohydrates',
            'An organ that consumes or stores sugars, such as roots, fruits, seeds, and growing buds',
            'An open stomatal pore that releases water vapor',
            'A xylem vessel element undergoing apoptosis'
          ],
          correctAnswer: 'An organ that consumes or stores sugars, such as roots, fruits, seeds, and growing buds',
          explanation: 'A sink consumes sucrose for respiration, growth, or storage.',
          points: 10
        },
        {
          id: 'ps-q-36',
          type: 'multiple_choice',
          question: 'During phloem loading, what event causes water to move from nearby xylem into the sieve tube at the source?',
          options: [
            'Sucrose accumulation lowers water potential in the sieve tube, causing water to enter by osmosis',
            'Stomata open wide and draw water into the roots',
            'Lignin hardens and squeezes water out of the cortex',
            'Companion cells pump pure oxygen into the phloem'
          ],
          correctAnswer: 'Sucrose accumulation lowers water potential in the sieve tube, causing water to enter by osmosis',
          explanation: 'High sucrose concentration lowers sieve tube water potential, drawing in xylem water by osmosis and generating high turgor pressure.',
          points: 10
        },
        {
          id: 'ps-q-37',
          type: 'multiple_choice',
          question: 'What happens to water in the phloem after sucrose is unloaded at the sink tissue?',
          options: [
            'It is permanently converted into starch crystals',
            'Water potential rises, causing water to leave the phloem and recycle back into the xylem',
            'It evaporates instantly into the intercellular air spaces',
            'It is excreted through root hairs into the soil'
          ],
          correctAnswer: 'Water potential rises, causing water to leave the phloem and recycle back into the xylem',
          explanation: 'Sugar unloading raises phloem water potential, allowing water to exit and return to the xylem for recirculation.',
          points: 10
        },
        {
          id: 'ps-q-38',
          type: 'multiple_choice',
          question: 'Why are stems and stem barks significant in pharmacognosy?',
          options: [
            'They are only used as combustible fuel in steam engines',
            'They represent primary sources of crude drugs and diverse therapeutic phytochemicals',
            'They contain no secondary metabolites and are used only as inert fillers',
            'They are toxic to all living animals and prohibited in medicine'
          ],
          correctAnswer: 'They represent primary sources of crude drugs and diverse therapeutic phytochemicals',
          explanation: 'Stems and barks are rich in alkaloids, tannins, flavonoids, terpenoids, and saponins used as herbal crude drugs.',
          points: 10
        },
        {
          id: 'ps-q-39',
          type: 'multiple_choice',
          question: 'What bioactive phytochemicals found in plant stems commonly affect the nervous system, smooth muscles, and microorganisms?',
          options: ['Alkaloids', 'Waxes', 'Cellulose fibrils', 'Pectins'],
          correctAnswer: 'Alkaloids',
          explanation: 'Alkaloids are basic nitrogenous compounds with profound pharmacological actions (e.g., quinine, morphine, reserpine).',
          points: 10
        },
        {
          id: 'ps-q-40',
          type: 'multiple_choice',
          question: 'Which phytochemicals found in tree bark possess astringent properties and contribute to wound healing and antimicrobial activity?',
          options: ['Tannins', 'Starch polymers', 'Chlorophylls', 'Mucilages'],
          correctAnswer: 'Tannins',
          explanation: 'Tannins bind and precipitate proteins, acting as astringents and antimicrobial agents in bark.',
          points: 10
        },
        {
          id: 'ps-q-41',
          type: 'multiple_choice',
          question: 'Which class of stem phytochemicals is widely studied for antioxidant and anti-inflammatory effects?',
          options: ['Flavonoids and phenolic compounds', 'Inorganic silica crystals', 'Suberin waxes', 'Sclerenchyma lignin'],
          correctAnswer: 'Flavonoids and phenolic compounds',
          explanation: 'Flavonoids and polyphenols scavenge reactive oxygen species and mitigate inflammatory cascades.',
          points: 10
        },
        {
          id: 'ps-q-42',
          type: 'multiple_choice',
          question: 'Which phytochemical group contains volatile and resinous compounds contributing to antimicrobial and analgesic activities?',
          options: ['Terpenoids', 'Cellulose', 'Cutin', 'Amyloplasts'],
          correctAnswer: 'Terpenoids',
          explanation: 'Terpenoids (isoprenoids) include essential oils, resins, and diterpenes with analgesic and antimicrobial properties.',
          points: 10
        },
        {
          id: 'ps-q-43',
          type: 'multiple_choice',
          question: 'What properties characterize saponins found in certain stem barks?',
          options: [
            'They form stable foams, interact with cell membranes, and exhibit diverse biological effects',
            'They conduct electrical current through secondary xylem',
            'They crystallize into pure glass under pressure',
            'They attract pollinating hummingbirds to dead wood'
          ],
          correctAnswer: 'They form stable foams, interact with cell membranes, and exhibit diverse biological effects',
          explanation: 'Saponins are glycosides that produce soap-like foams and interact with membrane sterols.',
          points: 10
        },
        {
          id: 'ps-q-44',
          type: 'multiple_choice',
          question: 'According to WHO guidelines on herbal medicines, why is correct botanical identification of stems essential?',
          options: [
            'To increase commercial tax rates on herbal exports',
            'To avoid adulteration, substitution, contamination, and incorrect dosing',
            'To ensure the stems are painted in attractive marketing colors',
            'To prevent farmers from growing monocot crops'
          ],
          correctAnswer: 'To avoid adulteration, substitution, contamination, and incorrect dosing',
          explanation: 'The World Health Organization mandates botanical authentication to ensure safety, efficacy, and dosage accuracy.',
          points: 10
        },
        {
          id: 'ps-q-45',
          type: 'multiple_choice',
          question: 'Which method is used in pharmacognostic quality control to inspect powdered stem materials under magnification?',
          options: ['Powder microscopy', 'Mass spectrometry alone', 'Thermal combustion testing', 'Soil filtration'],
          correctAnswer: 'Powder microscopy',
          explanation: 'Powder microscopy identifies diagnostic cell fragments like stone cells, fibers, vessels, and starch granules.',
          points: 10
        },
        {
          id: 'ps-q-46',
          type: 'multiple_choice',
          question: 'Which common agricultural crops are examples of monocot stems?',
          options: ['Sunflower, mango, and bean', 'Corn, rice, and sugarcane', 'Rose, oak, and pine', 'Apple, tomato, and eggplant'],
          correctAnswer: 'Corn, rice, and sugarcane',
          explanation: 'Corn (maize), rice, sugarcane, and grasses are classic monocots with scattered vascular bundles.',
          points: 10
        },
        {
          id: 'ps-q-47',
          type: 'multiple_choice',
          question: 'Which plants possess typical dicot stems with vascular bundles arranged in a ring?',
          options: ['Corn, rice, and wheat', 'Sunflower, bean, and mango', 'Bamboo, sugarcane, and barley', 'Onion, garlic, and leek'],
          correctAnswer: 'Sunflower, bean, and mango',
          explanation: 'Sunflower, bean, and mango are dicotyledonous angiosperms displaying concentric rings of bundles.',
          points: 10
        },
        {
          id: 'ps-q-48',
          type: 'multiple_choice',
          question: 'What is the role of the pith in young dicot stems?',
          options: [
            'Converts sunlight into mechanical sound vibrations',
            'Occupies the central core and serves primarily in food and water storage',
            'Forms the waterproof outer epidermis',
            'Synthesizes pollen in floral ovaries'
          ],
          correctAnswer: 'Occupies the central core and serves primarily in food and water storage',
          explanation: 'The central pith is composed of parenchyma cells that store carbohydrates, water, and metabolic reserves.',
          points: 10
        },
        {
          id: 'ps-q-49',
          type: 'multiple_choice',
          question: 'What herbal preparation involves boiling chopped or crushed woody stems in water to extract water-soluble compounds?',
          options: ['Decoction', 'Cold infusion', 'Poultice', 'Tincture distillation'],
          correctAnswer: 'Decoction',
          explanation: 'A decoction is prepared by boiling tough, fibrous materials like roots, stems, and barks in water.',
          points: 10
        },
        {
          id: 'ps-q-50',
          type: 'multiple_choice',
          question: 'In dendrochronology, how can annual rings be used by scientists?',
          options: [
            'To estimate the age of a woody tree and analyze historical climate patterns',
            'To count how many flowers a tree produced each year',
            'To measure the exact depth of subterranean taproots',
            'To calculate the concentration of chlorophyll in green leaves'
          ],
          correctAnswer: 'To estimate the age of a woody tree and analyze historical climate patterns',
          explanation: 'Annual rings reveal tree age and past environmental conditions (dendrochronology).',
          points: 10
        }
      ]
    },
    {
      id: 'rev-stem-quiz-50',
      name: '50-Item Practice Quiz',
      fileName: 'Plant_Stem_50Q_Quiz.pdf',
      fileSnippet: '50 multiple choice questions testing stem morphology, anatomy, modifications, transport, and pharmacognosy with shuffled choices.',
      testDate: '2026-10-24',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [] // Populated by reference to rev-stem-notes questions in code
    },
    {
      id: 'rev-stem-id-15',
      name: '15-Item Identification Exam',
      fileName: 'Plant_Stem_15_Identification.pdf',
      fileSnippet: '15 identification items covering stem structures, specialized modifications, transport principles, and pharmacognostic compounds.',
      testDate: '2026-10-24',
      questionTypes: ['identification'],
      questionCount: 15,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [
        {
          id: 'ps-id-1',
          type: 'identification',
          question: 'What is the point on a stem axis where leaves, buds, branches, and flowers originate?',
          correctAnswer: 'Node',
          explanation: 'A node is the specific structural locus on a stem where leaves and axillary buds develop.',
          points: 10
        },
        {
          id: 'ps-id-2',
          type: 'identification',
          question: 'What is the section of stem between two successive nodes called?',
          correctAnswer: 'Internode',
          explanation: 'The internode is the stem span between two adjacent nodes.',
          points: 10
        },
        {
          id: 'ps-id-3',
          type: 'identification',
          question: 'What small, spongy openings on woody stems facilitate gas exchange between internal tissues and the atmosphere?',
          correctAnswer: 'Lenticels',
          explanation: 'Lenticels are raised, porous openings in bark that allow respiratory gas exchange.',
          points: 10
        },
        {
          id: 'ps-id-4',
          type: 'identification',
          question: 'What is the structural mark left on a twig or stem when a leaf naturally detaches?',
          correctAnswer: 'Leaf Scar',
          explanation: 'A leaf scar marks the attachment point of a fallen leaf petiole.',
          points: 10
        },
        {
          id: 'ps-id-5',
          type: 'identification',
          question: 'What type of horizontal underground stem with nodes, scale leaves, and adventitious roots is exemplified by ginger?',
          correctAnswer: 'Rhizome',
          explanation: 'A rhizome is a horizontal subterranean stem capable of vegetative reproduction and storage.',
          points: 10
        },
        {
          id: 'ps-id-6',
          type: 'identification',
          question: 'What enlarged underground storage stem developing at the end of a stolon has buds commonly called "eyes" (e.g., potato)?',
          correctAnswer: 'Tuber',
          explanation: 'A potato is a modified stem tuber whose "eyes" are axillary buds.',
          points: 10
        },
        {
          id: 'ps-id-7',
          type: 'identification',
          question: 'What short, compressed underground stem (basal plate) is surrounded by fleshy, food-storing scale leaves in onions?',
          correctAnswer: 'Bulb',
          explanation: 'A bulb consists of a basal plate stem enclosed by fleshy storage leaves.',
          points: 10
        },
        {
          id: 'ps-id-8',
          type: 'identification',
          question: 'What solid, swollen underground stem stores food in its stem tissue rather than in fleshy scale leaves (e.g., taro)?',
          correctAnswer: 'Corm',
          explanation: 'A corm is a solid swollen stem base, distinguishable from a bulb by its solid internal stem tissue.',
          points: 10
        },
        {
          id: 'ps-id-9',
          type: 'identification',
          question: 'What slender horizontal stem grows along the ground surface, producing daughter plantlets at its nodes (e.g., strawberry)?',
          correctAnswer: 'Runner',
          explanation: 'Runners (stolons) spread along the surface for rapid vegetative propagation.',
          points: 10
        },
        {
          id: 'ps-id-10',
          type: 'identification',
          question: 'What sharp, hardened modified branch develops from an axillary bud with vascular connections (e.g., in citrus)?',
          correctAnswer: 'Thorn',
          explanation: 'A thorn is a modified stem; spines are modified leaves, and prickles are epidermal outgrowths.',
          points: 10
        },
        {
          id: 'ps-id-11',
          type: 'identification',
          question: 'What modified green stem functions like a leaf to perform photosynthesis while true leaves are reduced (e.g., asparagus)?',
          correctAnswer: 'Cladophyll',
          explanation: 'A cladophyll (cladode) is a green, photosynthetic modified stem.',
          points: 10
        },
        {
          id: 'ps-id-12',
          type: 'identification',
          question: 'Which lateral meristem cylinder produces secondary xylem toward the inside and secondary phloem toward the outside?',
          correctAnswer: 'Vascular Cambium',
          explanation: 'The vascular cambium drives secondary thickening, forming secondary xylem (wood) and phloem.',
          points: 10
        },
        {
          id: 'ps-id-13',
          type: 'identification',
          question: 'What secondary protective tissue replaces the epidermis in woody stems, consisting of cork, cork cambium, and phelloderm?',
          correctAnswer: 'Periderm',
          explanation: 'The periderm replaces the epidermis during secondary growth.',
          points: 10
        },
        {
          id: 'ps-id-14',
          type: 'identification',
          question: 'What term describes the older, darker, non-functional central wood of a tree trunk that provides structural support?',
          correctAnswer: 'Heartwood',
          explanation: 'Heartwood is the non-conductive, resin-infiltrated central core of wood.',
          points: 10
        },
        {
          id: 'ps-id-15',
          type: 'identification',
          question: 'What is the primary driving mechanism of upward water movement in the xylem according to the cohesion-tension theory?',
          correctAnswer: 'Transpiration Pull',
          explanation: 'Transpiration pull generated by water evaporation from leaves creates negative tension pulling water up.',
          points: 10
        }
      ]
    }
  ]
};

// Sync rev-stem-quiz-50 questions with rev-stem-notes questions
plantStemSubject.reviewers[1].questions = [...plantStemSubject.reviewers[0].questions];
