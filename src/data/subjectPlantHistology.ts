import { Subject } from '../types';

export const plantHistologySubject: Subject = {
  id: 'subj-plant-histology',
  name: 'PLANT HISTOLOGY: TISSUES AND PRIMARY GROWTH',
  description: 'Exploration of plant cell specialization, simple and complex tissues (parenchyma, collenchyma, sclerenchyma, xylem, phloem), tissue systems, primary growth, and root/shoot apical meristems.',
  color: '#10B981',
  reviewers: [
    {
      id: 'rev-histology-notes',
      name: 'Lecture Notes & Study Guide',
      fileName: 'Plant_Histology_Tissues_Primary_Growth.pdf',
      fileSnippet: 'Detailed 34-slide guide covering meristems, simple permanent tissues, xylem and phloem cell types, dermal/ground/vascular systems, root tip zonation, and shoot phytomers.',
      testDate: '2026-10-22',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'ph-n-1',
          title: 'Plant Histology & Structural Hierarchy',
          category: 'Definition',
          content: '• Plant Histology:\n  - The microscopic study of plant tissue structure, cellular arrangement, and internal organization.\n  - Focuses on how specialized cellular architectures contribute to overall plant survival, structural integrity, and physiological function.\n\n• Structural Hierarchy in Plants:\n  - Cells → Tissues → Tissue Systems → Plant Organs (Roots, Stems, Leaves).\n  - Tissues are organized groups of cells that perform a coordinated collective function.',
          importance: 'high',
          tags: ['Plant Histology', 'Structural Hierarchy', 'Tissues', 'Organs'],
          highlighted: true
        },
        {
          id: 'ph-n-2',
          title: 'Major Categories of Plant Tissues: Meristematic vs. Permanent',
          category: 'Concept',
          content: '• 1. Meristematic Tissues (Undifferentiated Growth Regions):\n  - Composed of small, thin-walled, undifferentiated cells with dense cytoplasm and large nuclei.\n  - Continuously undergo mitosis to supply new cells for growth, organogenesis, and tissue renewal.\n  - *Classifications by Location*:\n    - Apical Meristems: Located at extreme tips of roots (Root Apical Meristem - RAM) and shoots (Shoot Apical Meristem - SAM); drive primary growth (increase in length/height).\n    - Lateral Meristems: Arranged parallel to sides of stems/roots (Vascular Cambium and Cork Cambium); drive secondary growth (increase in girth/thickness).\n    - Intercalary Meristems: Positioned at nodes and leaf bases in monocots (grasses); facilitate rapid regrowth after grazing or mechanical mowing.\n\n• 2. Permanent Tissues (Differentiated Non-Dividing Tissues):\n  - Fully differentiated cells that have specialized structures and distinct non-dividing physiological functions.',
          importance: 'high',
          tags: ['Meristems', 'Apical', 'Lateral', 'Intercalary', 'Primary Growth', 'Mitosis'],
          highlighted: true
        },
        {
          id: 'ph-n-3',
          title: 'Simple Permanent Tissues (Single Cell Type)',
          category: 'Definition',
          content: '• Parenchyma:\n  - Most abundant plant tissue; living at maturity with thin primary cell walls and large central vacuoles.\n  - Functions: Photosynthesis (when rich in chloroplasts, called chlorenchyma), metabolic storage (starch, water), and tissue repair/wound regeneration.\n\n• Collenchyma:\n  - Living cells featuring unevenly thickened primary cell walls rich in pectin.\n  - Functions: Delivers flexible mechanical support to young, actively growing plant organs (such as leaf petioles and expanding stems) without impeding growth.\n\n• Sclerenchyma:\n  - Dead at functional maturity with thick, heavily lignified secondary cell walls.\n  - Types:\n    - Fibers: Long, slender, tapered strands providing tensile strength (e.g., hemp, flax).\n    - Sclereids (Stone Cells): Short, irregularly shaped, hard cells found in seed coats, nut shells, and the gritty texture of pears.\n  - Functions: Provides rigid structural reinforcement and protection against physical stress.',
          importance: 'high',
          tags: ['Parenchyma', 'Chlorenchyma', 'Collenchyma', 'Sclerenchyma', 'Fibers', 'Sclereids', 'Pectin', 'Lignin'],
          highlighted: true
        },
        {
          id: 'ph-n-4',
          title: 'Complex Permanent Tissues: Xylem and Phloem',
          category: 'Concept',
          content: '• Xylem (Water & Inorganic Mineral Transport):\n  - Conveys water and dissolved soil minerals in an exclusively unidirectional path upward from roots to leaves.\n  - Conducting Elements (Dead at maturity):\n    - Tracheids: Long, tapered, narrow dead cells with pit pairs in cell walls; found in all vascular plants.\n    - Vessel Elements: Shorter, wider, open-ended cylindrical cells joined end-to-end to form continuous open pipelines (vessels); primarily found in angiosperms (flowering plants).\n  - Supportive Cells: Xylem parenchyma (nutrient storage) and xylem fibers (mechanical strength).\n\n• Phloem (Organic Nutrient & Sugar Transport):\n  - Translocates photosynthesized sugars (mainly sucrose), amino acids, and hormones bidirectionally from source tissues to sink tissues.\n  - Conducting Elements (Living at maturity):\n    - Sieve Tube Elements: Elongated cells connected by porous sieve plates; lack nuclei, ribosomes, and vacuoles at maturity to facilitate unhindered bulk fluid flow.\n    - Companion Cells: Nucleated metabolic support cells connected to sieve tubes via plasmodesmata; load and unload sugars and maintain sieve tube vitality.\n  - Supportive Cells: Phloem parenchyma and phloem fibers.',
          importance: 'high',
          tags: ['Xylem', 'Phloem', 'Tracheids', 'Vessel Elements', 'Sieve Tube Elements', 'Companion Cells'],
          highlighted: true
        },
        {
          id: 'ph-n-5',
          title: 'Plant Tissue Systems: Dermal, Ground & Vascular',
          category: 'Summary',
          content: 'Three continuous tissue systems extend through all plant organs:\n\n1. Dermal Tissue System:\n   - Outermost protective barrier formed by the epidermis.\n   - Features: Secretes a waxy cuticle to minimize water loss; contains specialized guard cells flanking stomata (regulating photosynthetic gas exchange and transpiration) and trichomes (cellular hairs providing defense and moisture retention).\n\n2. Ground Tissue System:\n   - Constitutes the bulk of the internal plant body, occupying space between dermal and vascular systems.\n   - Consists of the cortex, pith, and leaf mesophyll; conducts photosynthesis, metabolic storage, and flexible/rigid support.\n\n3. Vascular Tissue System:\n   - Embedded continuous transport network organized into arranged bundles of xylem and phloem, coordinating long-distance resource distribution throughout roots, stems, and leaves.',
          importance: 'high',
          tags: ['Dermal Tissue', 'Ground Tissue', 'Vascular Tissue', 'Cuticle', 'Stomata', 'Trichomes'],
          highlighted: true
        },
        {
          id: 'ph-n-6',
          title: 'Primary Growth & Apical Differentiation',
          category: 'Key Takeaway',
          content: '• Primary Growth Concept:\n  - The developmental process by which plants elongate along their primary vertical axis (roots growing downward, stems growing upward).\n  - Characteristic Indeterminate Growth: Plants retain active meristems enabling them to continuously form new leaves, stems, and roots throughout their lifespan.\n\n• Three Primary Meristems Formed by Apical Meristems:\n  1. Protoderm: Outermost primary meristem layer → differentiates into the Dermal Tissue System (Epidermis).\n  2. Ground Meristem: Middle primary meristem region → differentiates into the Ground Tissue System (Cortex, Pith, Mesophyll).\n  3. Procambium: Innermost strands of apical meristem → differentiates into the Primary Vascular System (Primary Xylem & Primary Phloem).',
          importance: 'high',
          tags: ['Protoderm', 'Ground Meristem', 'Procambium', 'Indeterminate Growth', 'Differentiation'],
          highlighted: true
        },
        {
          id: 'ph-n-7',
          title: 'Zonation of Root Tip & Shoot Apical Architecture',
          category: 'Concept',
          content: '• Root Tip Zonation (Proximal to Distal):\n  1. Root Cap: Thimble-shaped outer protective shield; secretes lubricating mucilage (polysaccharide slime) aiding soil penetration; houses statocytes with amyloplasts for gravitropism (sensing gravity).\n  2. Zone of Cell Division: Houses the Root Apical Meristem (RAM); site of continuous mitotic division generating new primary cells.\n  3. Zone of Elongation: Cells absorb water into expanding vacuoles, lengthening significantly along the longitudinal axis and physically driving the root tip through soil.\n  4. Zone of Maturation (Differentiation):\n     - Cells reach functional maturity and specialize into dermal, ground, and vascular tissues.\n     - Outward epidermal cells form microscopic root hairs, dramatically expanding the surface area for water and mineral uptake.\n\n• Shoot Apical Meristem (SAM) & Phytomer Architecture:\n  - SAM is a dome-shaped terminal growing point that produces stem internodes and lateral leaf primordia.\n  - Protection: Unlike roots, shoots have no protective cap because they advance into non-abrasive air; the delicate SAM is sheltered by overlapping leaf primordia and young leaves.\n  - Phytomer Modular Unit: Shoot growth progresses via repeating modular segments comprising:\n    - Node: Point of leaf attachment.\n    - Internode: Stem segment between two successive nodes.\n    - Attached Leaf\n    - Axillary Bud: Dormant bud situated in the leaf axil with potential to form a branch or flower.',
          importance: 'high',
          tags: ['Root Cap', 'RAM', 'Zone of Elongation', 'Zone of Maturation', 'Root Hairs', 'SAM', 'Phytomer', 'Leaf Primordia'],
          highlighted: true
        }
      ],
      questions: [
        {
          id: 'ph-q-1',
          type: 'multiple_choice',
          question: 'What is the definition of plant histology?',
          options: [
            'The study of fossilized tree rings to date prehistoric climates',
            'The microscopic study of plant tissue structure, cellular arrangement, and internal organization',
            'The biochemical analysis of plant secondary metabolites and volatile oils',
            'The study of floral genetics and hybridization techniques'
          ],
          correctAnswer: 'The microscopic study of plant tissue structure, cellular arrangement, and internal organization',
          explanation: 'Plant histology focuses on the microscopic architecture and internal cellular organization of plant tissues.',
          points: 10
        },
        {
          id: 'ph-q-2',
          type: 'multiple_choice',
          question: 'Which sequence correctly represents the structural hierarchy of a plant body from smallest to largest?',
          options: [
            'Organs → Tissues → Cells → Tissue Systems',
            'Cells → Tissues → Tissue Systems → Organs',
            'Tissues → Cells → Organs → Tissue Systems',
            'Cells → Organs → Tissues → Tissue Systems'
          ],
          correctAnswer: 'Cells → Tissues → Tissue Systems → Organs',
          explanation: 'Slide 4 outlines: Cells aggregate into Tissues, which form Tissue Systems, which comprise Plant Organs (Roots, Stems, Leaves).',
          points: 10
        },
        {
          id: 'ph-q-3',
          type: 'multiple_choice',
          question: 'What type of plant tissues are composed of undifferentiated cells that continuously undergo mitosis to produce new cells?',
          options: ['Permanent tissues', 'Meristematic tissues', 'Epidermal tissues', 'Sclerenchyma tissues'],
          correctAnswer: 'Meristematic tissues',
          explanation: 'Meristematic tissues are specialized growth regions of perpetually dividing, undifferentiated cells.',
          points: 10
        },
        {
          id: 'ph-q-4',
          type: 'multiple_choice',
          question: 'Which cytological characteristics are typical of meristematic cells?',
          options: [
            'Large dead cells with thick secondary walls and no cytoplasm',
            'Small, thin-walled cells with dense cytoplasm and prominent large nuclei',
            'Elongated dead cells with lignified pits and hollow lumens',
            'Cells completely filled with starch granules and no nucleus'
          ],
          correctAnswer: 'Small, thin-walled cells with dense cytoplasm and prominent large nuclei',
          explanation: 'Meristematic cells are characterized by thin primary walls, rich dense cytoplasm, and large active nuclei for division.',
          points: 10
        },
        {
          id: 'ph-q-5',
          type: 'multiple_choice',
          question: 'Where are apical meristems situated, and what type of plant growth do they drive?',
          options: [
            'At the sides of stems driving secondary growth in thickness',
            'At the extreme tips of roots and shoots driving primary growth in length/height',
            'Inside the vascular bundles driving sugar storage',
            'At leaf margins driving autumn leaf senescence'
          ],
          correctAnswer: 'At the extreme tips of roots and shoots driving primary growth in length/height',
          explanation: 'Apical meristems occupy root and shoot apexes, driving primary vertical growth in length.',
          points: 10
        },
        {
          id: 'ph-q-6',
          type: 'multiple_choice',
          question: 'Which meristems are positioned parallel to the sides of stems and roots, causing plants to grow thicker in girth?',
          options: ['Apical meristems', 'Lateral meristems', 'Intercalary meristems', 'Protoderm meristems'],
          correctAnswer: 'Lateral meristems',
          explanation: 'Lateral meristems (vascular cambium and cork cambium) drive secondary growth in diameter/thickness.',
          points: 10
        },
        {
          id: 'ph-q-7',
          type: 'multiple_choice',
          question: 'Where are intercalary meristems located, and what ecological advantage do they provide in grasses?',
          options: [
            'At root tips, protecting the root from rocky soil',
            'At nodes and leaf bases in monocots, allowing rapid regrowth after grazing or mowing',
            'In tree bark, allowing trees to shed dead leaves',
            'Inside floral petals, attracting pollinating bees'
          ],
          correctAnswer: 'At nodes and leaf bases in monocots, allowing rapid regrowth after grazing or mowing',
          explanation: 'Intercalary meristems at monocot nodes and leaf bases enable lawn grass to regrow rapidly after mowing.',
          points: 10
        },
        {
          id: 'ph-q-8',
          type: 'multiple_choice',
          question: 'What is the most abundant simple permanent tissue in the plant body?',
          options: ['Collenchyma', 'Sclerenchyma', 'Parenchyma', 'Xylem vessels'],
          correctAnswer: 'Parenchyma',
          explanation: 'Parenchyma is the most widespread and abundant tissue found throughout plant roots, stems, leaves, and fruits.',
          points: 10
        },
        {
          id: 'ph-q-9',
          type: 'multiple_choice',
          question: 'What is specialized photosynthetic parenchyma tissue containing abundant chloroplasts called?',
          options: ['Aerenchyma', 'Chlorenchyma', 'Collenchyma', 'Phellem'],
          correctAnswer: 'Chlorenchyma',
          explanation: 'Parenchyma specialized for photosynthesis is called chlorenchyma (predominant in leaf mesophyll).',
          points: 10
        },
        {
          id: 'ph-q-10',
          type: 'multiple_choice',
          question: 'Which simple permanent tissue is composed of living cells featuring unevenly thickened primary cell walls rich in pectin?',
          options: ['Sclerenchyma', 'Parenchyma', 'Collenchyma', 'Tracheids'],
          correctAnswer: 'Collenchyma',
          explanation: 'Collenchyma cells have unevenly thickened primary cell walls rich in pectin, providing flexible support.',
          points: 10
        },
        {
          id: 'ph-q-11',
          type: 'multiple_choice',
          question: 'What primary mechanical function does collenchyma tissue perform?',
          options: [
            'Transports water from roots to leaves under high negative pressure',
            'Provides flexible support to young, growing plant organs without restraining growth',
            'Forms the hard impermeable shell of nuts and fruit pits',
            'Stores toxic metabolic wastes and heavy metal ions'
          ],
          correctAnswer: 'Provides flexible support to young, growing plant organs without restraining growth',
          explanation: 'Collenchyma offers plastic, flexible support to expanding stems and petioles (like the strings in celery).',
          points: 10
        },
        {
          id: 'ph-q-12',
          type: 'multiple_choice',
          question: 'Which simple permanent tissue is dead at functional maturity and possesses thick, heavily lignified secondary cell walls?',
          options: ['Collenchyma', 'Parenchyma', 'Sclerenchyma', 'Chlorenchyma'],
          correctAnswer: 'Sclerenchyma',
          explanation: 'Sclerenchyma cells synthesize rigid lignified secondary walls and undergo programmed death at functional maturity.',
          points: 10
        },
        {
          id: 'ph-q-13',
          type: 'multiple_choice',
          question: 'What are the two morphological categories of sclerenchyma cells?',
          options: [
            'Tracheids and vessel elements',
            'Fibers and sclereids',
            'Sieve tubes and companion cells',
            'Guard cells and trichomes'
          ],
          correctAnswer: 'Fibers and sclereids',
          explanation: 'Sclerenchyma exists as elongated fibers (commercial fibers) or short stone cells called sclereids.',
          points: 10
        },
        {
          id: 'ph-q-14',
          type: 'multiple_choice',
          question: 'The gritty texture felt when eating a pear is caused by which specialized cell type?',
          options: ['Parenchyma storage cells', 'Collenchyma pectin strands', 'Sclereids (stone cells)', 'Companion cells'],
          correctAnswer: 'Sclereids (stone cells)',
          explanation: 'Sclereids are short, hard, heavily lignified stone cells that create pear grittiness and seed coat hardness.',
          points: 10
        },
        {
          id: 'ph-q-15',
          type: 'multiple_choice',
          question: 'Why are xylem and phloem classified as complex permanent tissues rather than simple tissues?',
          options: [
            'Because they are composed of multiple distinct cell types working together',
            'Because they contain only dead cells',
            'Because they only occur in gymnosperm cones',
            'Because they have no cell walls'
          ],
          correctAnswer: 'Because they are composed of multiple distinct cell types working together',
          explanation: 'Simple tissues consist of a single cell type; complex tissues comprise multiple cell types (e.g., tracheids, vessels, parenchyma, fibers).',
          points: 10
        },
        {
          id: 'ph-q-16',
          type: 'multiple_choice',
          question: 'What is the direction and primary substance transported by xylem tissue?',
          options: [
            'Bidirectional transport of sucrose and amino acids',
            'Unidirectional transport of water and dissolved minerals upward from roots to leaves',
            'Downward transport of fatty acids from leaves to roots',
            'Horizontal transport of oxygen from stems to roots'
          ],
          correctAnswer: 'Unidirectional transport of water and dissolved minerals upward from roots to leaves',
          explanation: 'Xylem water transport is strictly unidirectional upward from the soil through roots to aerial foliage.',
          points: 10
        },
        {
          id: 'ph-q-17',
          type: 'multiple_choice',
          question: 'Which water-conducting cells of xylem are narrow, elongated, tapered, and found in all vascular plants?',
          options: ['Vessel elements', 'Tracheids', 'Sieve tube elements', 'Albuminous cells'],
          correctAnswer: 'Tracheids',
          explanation: 'Tracheids are the primitive conducting elements found in all vascular plants (ferns, gymnosperms, angiosperms).',
          points: 10
        },
        {
          id: 'ph-q-18',
          type: 'multiple_choice',
          question: 'Which wider, open-ended water-conducting tube elements align end-to-end and are primarily found in angiosperms?',
          options: ['Tracheids', 'Vessel elements', 'Companion cells', 'Laticifers'],
          correctAnswer: 'Vessel elements',
          explanation: 'Vessel elements have perforated end plates that align end-to-end into open vessels in flowering plants.',
          points: 10
        },
        {
          id: 'ph-q-19',
          type: 'multiple_choice',
          question: 'What is the function of phloem tissue in vascular plants?',
          options: [
            'Transports water and dissolved minerals from roots to leaves',
            'Translocates photosynthesized sugars (sucrose) bidirectionally from source to sink tissues',
            'Anchors the plant in soil and absorbs atmospheric nitrogen',
            'Generates defensive resins and latex in response to bark beetles'
          ],
          correctAnswer: 'Translocates photosynthesized sugars (sucrose) bidirectionally from source to sink tissues',
          explanation: 'Phloem translocates sucrose and organic nutrients from photosynthetic sources to growing or storage sinks.',
          points: 10
        },
        {
          id: 'ph-q-20',
          type: 'multiple_choice',
          question: 'Why do mature sieve tube elements lack nuclei, ribosomes, and large vacuoles?',
          options: [
            'Because they are dead cells with lignified walls',
            'To reduce resistance and allow free bulk flow of nutrient-rich sap through their lumen',
            'Because they were destroyed by viral infection',
            'To prevent water from entering the cells'
          ],
          correctAnswer: 'To reduce resistance and allow free bulk flow of nutrient-rich sap through their lumen',
          explanation: 'Disintegration of the nucleus and central vacuole opens up the cellular interior for unobstructed fluid flow.',
          points: 10
        },
        {
          id: 'ph-q-21',
          type: 'multiple_choice',
          question: 'How are companion cells connected to sieve tube elements to manage their physiological and transport functions?',
          options: ['Via tight junctions', 'Via desmosomes', 'Via plasmodesmata', 'Via Casparian strips'],
          correctAnswer: 'Via plasmodesmata',
          explanation: 'Numerous plasmodesmata connect companion cells with sieve tubes, facilitating metabolic support and sugar loading.',
          points: 10
        },
        {
          id: 'ph-q-22',
          type: 'multiple_choice',
          question: 'Which tissue system forms the outer protective covering of the plant body?',
          options: ['Ground tissue system', 'Vascular tissue system', 'Dermal tissue system', 'Pericyclic tissue system'],
          correctAnswer: 'Dermal tissue system',
          explanation: 'The dermal tissue system (epidermis) acts as the plant\'s outer protective skin.',
          points: 10
        },
        {
          id: 'ph-q-23',
          type: 'multiple_choice',
          question: 'What waxy protective layer is secreted by epidermal cells to restrict water loss through transpiration?',
          options: ['Suberin', 'Cuticle', 'Lignin', 'Pectin'],
          correctAnswer: 'Cuticle',
          explanation: 'Epidermal cells secrete a waxy cutin layer known as the cuticle to prevent desiccation.',
          points: 10
        },
        {
          id: 'ph-q-24',
          type: 'multiple_choice',
          question: 'What specialized epidermal cells regulate the opening and closing of stomata for gas exchange?',
          options: ['Pavement cells', 'Trichomes', 'Guard cells', 'Subsidiary fibers'],
          correctAnswer: 'Guard cells',
          explanation: 'Paired guard cells regulate stomatal aperture by changing turgor pressure in response to light and water.',
          points: 10
        },
        {
          id: 'ph-q-25',
          type: 'multiple_choice',
          question: 'What are trichomes?',
          options: [
            'Hollow tubes that transport xylem sap',
            'Epidermal outgrowths or hairs that aid in defense, reduction of water loss, and secretion',
            'Underground stems that store starch',
            'Reproductive spores produced by ferns'
          ],
          correctAnswer: 'Epidermal outgrowths or hairs that aid in defense, reduction of water loss, and secretion',
          explanation: 'Trichomes are epidermal hairs serving defensive, insulating, and secretory roles.',
          points: 10
        },
        {
          id: 'ph-q-26',
          type: 'multiple_choice',
          question: 'What tissues comprise the bulk of the ground tissue system in stems and roots?',
          options: ['Epidermis and periderm', 'Cortex and pith', 'Xylem and phloem', 'Tracheids and vessels'],
          correctAnswer: 'Cortex and pith',
          explanation: 'Ground tissue occupies the interior space between dermal and vascular tissues, comprising cortex and pith.',
          points: 10
        },
        {
          id: 'ph-q-27',
          type: 'multiple_choice',
          question: 'What concept describes the plant growth pattern where organs and tissues are continuously formed throughout the plant\'s life?',
          options: ['Determinate growth', 'Indeterminate growth', 'Finite growth', 'Programmed senescence'],
          correctAnswer: 'Indeterminate growth',
          explanation: 'Unlike animals with determinate body plans, plants have indeterminate growth driven by perpetually active meristems.',
          points: 10
        },
        {
          id: 'ph-q-28',
          type: 'multiple_choice',
          question: 'Which primary meristem layer gives rise to the dermal tissue system (epidermis)?',
          options: ['Ground meristem', 'Procambium', 'Protoderm', 'Vascular cambium'],
          correctAnswer: 'Protoderm',
          explanation: 'The outermost meristematic layer of the apical meristem is the protoderm, which differentiates into epidermis.',
          points: 10
        },
        {
          id: 'ph-q-29',
          type: 'multiple_choice',
          question: 'Which primary meristem differentiates into cortex, pith, and leaf mesophyll?',
          options: ['Protoderm', 'Ground meristem', 'Procambium', 'Phellogen'],
          correctAnswer: 'Ground meristem',
          explanation: 'The ground meristem produces the entire ground tissue system (cortex, pith, mesophyll).',
          points: 10
        },
        {
          id: 'ph-q-30',
          type: 'multiple_choice',
          question: 'Which primary meristem forms primary xylem and primary phloem?',
          options: ['Procambium', 'Protoderm', 'Ground meristem', 'Periderm'],
          correctAnswer: 'Procambium',
          explanation: 'The procambium differentiates into primary vascular tissues (primary xylem and primary phloem).',
          points: 10
        },
        {
          id: 'ph-q-31',
          type: 'multiple_choice',
          question: 'What thimble-shaped structure shields the delicate root apical meristem as the root pushes through abrasive soil?',
          options: ['Coleoptile', 'Root cap', 'Hypocotyl', 'Casparian strip'],
          correctAnswer: 'Root cap',
          explanation: 'The root cap covers and protects the root apical meristem from mechanical soil abrasion.',
          points: 10
        },
        {
          id: 'ph-q-32',
          type: 'multiple_choice',
          question: 'What substance is secreted by the root cap to lubricate the root as it advances through soil particles?',
          options: ['Cutin', 'Lignin', 'Mucilage (polysaccharide slime)', 'Latex'],
          correctAnswer: 'Mucilage (polysaccharide slime)',
          explanation: 'Root cap cells secrete slimy mucilage that lubricates root passage through compacted soil.',
          points: 10
        },
        {
          id: 'ph-q-33',
          type: 'multiple_choice',
          question: 'What specialized gravity-sensing cells containing starch-rich amyloplasts are housed in the root cap?',
          options: ['Statocytes', 'Trichocytes', 'Sclereids', 'Guard cells'],
          correctAnswer: 'Statocytes',
          explanation: 'Statocytes in the root cap contain dense amyloplasts that settle with gravity, mediating positive root gravitropism.',
          points: 10
        },
        {
          id: 'ph-q-34',
          type: 'multiple_choice',
          question: 'In which root zone does active mitotic division take place, generating all new primary root cells?',
          options: ['Zone of elongation', 'Zone of cell division', 'Zone of maturation', 'Root hair zone'],
          correctAnswer: 'Zone of cell division',
          explanation: 'The zone of cell division houses the Root Apical Meristem (RAM) where mitosis actively occurs.',
          points: 10
        },
        {
          id: 'ph-q-35',
          type: 'multiple_choice',
          question: 'In which root tip zone do newly formed cells take up water and stretch along the vertical axis, physically driving the tip forward?',
          options: ['Zone of cell division', 'Zone of elongation', 'Zone of maturation', 'Root cap zone'],
          correctAnswer: 'Zone of elongation',
          explanation: 'Rapid vacuolar water uptake in the zone of elongation causes cells to stretch up to 10-fold, pushing the root tip.',
          points: 10
        },
        {
          id: 'ph-q-36',
          type: 'multiple_choice',
          question: 'In which root zone do epidermal cells develop root hairs and tissues complete their functional differentiation?',
          options: ['Zone of cell division', 'Zone of elongation', 'Zone of maturation (differentiation)', 'Root cap zone'],
          correctAnswer: 'Zone of maturation (differentiation)',
          explanation: 'Cells undergo final differentiation into mature tissues and generate root hairs in the zone of maturation.',
          points: 10
        },
        {
          id: 'ph-q-37',
          type: 'multiple_choice',
          question: 'What is the primary physiological function of root hairs?',
          options: [
            'Photosynthesizing glucose in dark subterranean soil',
            'Dramatically expanding the root surface area for water and mineral absorption',
            'Deterring underground insect herbivores with toxic alkaloids',
            'Anchoring the shoot apical meristem above ground'
          ],
          correctAnswer: 'Dramatically expanding the root surface area for water and mineral absorption',
          explanation: 'Root hairs are tubular extensions of epidermal cells that enormously increase absorptive surface area.',
          points: 10
        },
        {
          id: 'ph-q-38',
          type: 'multiple_choice',
          question: 'What dome-shaped meristematic region is situated at the terminal tip of the growing stem?',
          options: ['Root Apical Meristem (RAM)', 'Shoot Apical Meristem (SAM)', 'Vascular Cambium', 'Cork Cambium'],
          correctAnswer: 'Shoot Apical Meristem (SAM)',
          explanation: 'The Shoot Apical Meristem (SAM) is the terminal dome-shaped growing point of vegetative shoots.',
          points: 10
        },
        {
          id: 'ph-q-39',
          type: 'multiple_choice',
          question: 'Why does the Shoot Apical Meristem (SAM) lack a protective cap like the root cap?',
          options: [
            'Because shoot tips are completely dormant throughout winter',
            'Because shoots advance into non-abrasive air rather than abrasive, compacted soil',
            'Because shoots are covered by thick animal fur',
            'Because the shoot meristem does not undergo mitosis'
          ],
          correctAnswer: 'Because shoots advance into non-abrasive air rather than abrasive, compacted soil',
          explanation: 'Shoots expand into air rather than abrasive soil; instead of a cap, they are sheltered by overlapping leaf primordia.',
          points: 10
        },
        {
          id: 'ph-q-40',
          type: 'multiple_choice',
          question: 'What structures surround and physically protect the delicate Shoot Apical Meristem?',
          options: ['Casparian strips', 'Overlapping leaf primordia and young leaves', 'Thick layers of dead bark', 'Lignified root caps'],
          correctAnswer: 'Overlapping leaf primordia and young leaves',
          explanation: 'Developing leaf primordia curve inward over the apex, providing physical and thermal protection to the SAM.',
          points: 10
        },
        {
          id: 'ph-q-41',
          type: 'multiple_choice',
          question: 'Shoot architecture develops in repeating structural modules called:',
          options: ['Metamers or phytomers', 'Stolons', 'Plasmids', 'Cormlets'],
          correctAnswer: 'Metamers or phytomers',
          explanation: 'Shoot vegetative development is modular, consisting of repeating units termed phytomers (or metamers).',
          points: 10
        },
        {
          id: 'ph-q-42',
          type: 'multiple_choice',
          question: 'What four components constitute a single phytomer module in shoot architecture?',
          options: [
            'Root cap, RAM, zone of elongation, and root hair',
            'Node, internode, attached leaf, and axillary bud',
            'Xylem, phloem, cambium, and cortex',
            'Sepal, petal, stamen, and carpel'
          ],
          correctAnswer: 'Node, internode, attached leaf, and axillary bud',
          explanation: 'Slide 32 specifies: A phytomer consists of a node, an internode, an attached leaf, and an axillary bud.',
          points: 10
        },
        {
          id: 'ph-q-43',
          type: 'multiple_choice',
          question: 'What is the point on a stem where leaves and axillary buds attach called?',
          options: ['Internode', 'Node', 'Petiolule', 'Stipule'],
          correctAnswer: 'Node',
          explanation: 'A node is the specific structural point on a stem axis where leaves, buds, and branches arise.',
          points: 10
        },
        {
          id: 'ph-q-44',
          type: 'multiple_choice',
          question: 'What is the stem section between two successive nodes called?',
          options: ['Node', 'Internode', 'Phytomer', 'Apex'],
          correctAnswer: 'Internode',
          explanation: 'The internode is the stem segment between two adjacent nodes.',
          points: 10
        },
        {
          id: 'ph-q-45',
          type: 'multiple_choice',
          question: 'Where is an axillary bud located on a plant shoot?',
          options: [
            'At the tip of the primary taproot',
            'In the upper angle (axil) between the leaf petiole and the stem',
            'Underneath the root cap',
            'Inside the hollow lumen of xylem vessels'
          ],
          correctAnswer: 'In the upper angle (axil) between the leaf petiole and the stem',
          explanation: 'Axillary buds develop in the leaf axil (the angle between petiole and stem) and can form branches or flowers.',
          points: 10
        },
        {
          id: 'ph-q-46',
          type: 'multiple_choice',
          question: 'Which of the following is an example of an organ produced by the plant ground tissue system in leaves?',
          options: ['Cuticle', 'Mesophyll', 'Epidermis', 'Companion cell'],
          correctAnswer: 'Mesophyll',
          explanation: 'Leaf mesophyll (palisade and spongy) represents the ground tissue system specialized for photosynthesis.',
          points: 10
        },
        {
          id: 'ph-q-47',
          type: 'multiple_choice',
          question: 'Which cells remain alive and metabolically active at maturity?',
          options: ['Xylem vessel elements', 'Sclerenchyma fibers', 'Phloem companion cells', 'Tracheids'],
          correctAnswer: 'Phloem companion cells',
          explanation: 'Companion cells and parenchyma remain alive; tracheids, vessels, and sclerenchyma fibers are dead at maturity.',
          points: 10
        },
        {
          id: 'ph-q-48',
          type: 'multiple_choice',
          question: 'What is the primary function of sieve plates in phloem sieve tube elements?',
          options: [
            'They block water from escaping into the atmosphere',
            'They contain pores that allow continuous flow of sugar solution between adjacent sieve cells',
            'They secrete toxic resins to kill fungal pathogens',
            'They anchor the sieve cells to the lignified xylem'
          ],
          correctAnswer: 'They contain pores that allow continuous flow of sugar solution between adjacent sieve cells',
          explanation: 'Perforated sieve plates at end walls connect sieve tube elements for continuous sap translocation.',
          points: 10
        },
        {
          id: 'ph-q-49',
          type: 'multiple_choice',
          question: 'Which structural adaptation allows aquatic plants to float and aerate submerged tissues?',
          options: ['Chlorenchyma', 'Aerenchyma (parenchyma with large air spaces)', 'Sclerenchyma stone cells', 'Cork phellem'],
          correctAnswer: 'Aerenchyma (parenchyma with large air spaces)',
          explanation: 'Aerenchyma is a modified parenchyma containing large intercellular air chambers for buoyancy and gas exchange.',
          points: 10
        },
        {
          id: 'ph-q-50',
          type: 'multiple_choice',
          question: 'Which tissue is responsible for wound healing and regeneration when a plant stem is cut or injured?',
          options: ['Lignified sclerenchyma fibers', 'Parenchyma cells resuming mitotic division', 'Dead vessel elements', 'Mature cork cells'],
          correctAnswer: 'Parenchyma cells resuming mitotic division',
          explanation: 'Living parenchyma cells retain totipotency and can dedifferentiate to divide and regenerate wounded tissue.',
          points: 10
        }
      ]
    },
    {
      id: 'rev-histology-quiz-50',
      name: '50-Item Practice Quiz',
      fileName: 'Plant_Histology_50Q_Quiz.pdf',
      fileSnippet: '50 multiple choice questions evaluating plant tissues, meristems, cell types, tissue systems, and primary growth with shuffled options.',
      testDate: '2026-10-22',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [] // Populated by reference to rev-histology-notes questions in code
    },
    {
      id: 'rev-histology-id-15',
      name: '15-Item Identification Exam',
      fileName: 'Plant_Histology_15_Identification.pdf',
      fileSnippet: '15 identification items covering primary growth zones, meristems, cell classifications, and histology terms.',
      testDate: '2026-10-22',
      questionTypes: ['identification'],
      questionCount: 15,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [
        {
          id: 'ph-id-1',
          type: 'identification',
          question: 'What is the term for the microscopic study of plant tissue structure, cellular arrangement, and internal organization?',
          correctAnswer: 'Plant Histology',
          explanation: 'Plant histology is the branch of botany dedicated to microscopic tissue architecture.',
          points: 10
        },
        {
          id: 'ph-id-2',
          type: 'identification',
          question: 'What general category of plant tissue consists of undifferentiated, perpetually dividing cells undergoing active mitosis?',
          correctAnswer: 'Meristematic Tissue',
          explanation: 'Meristems or meristematic tissues are the actively dividing formative regions of plants.',
          points: 10
        },
        {
          id: 'ph-id-3',
          type: 'identification',
          question: 'Which specific meristem located at the extreme tips of roots and shoots is responsible for vertical lengthening (primary growth)?',
          correctAnswer: 'Apical Meristem',
          explanation: 'Apical meristems (RAM and SAM) drive primary growth in length.',
          points: 10
        },
        {
          id: 'ph-id-4',
          type: 'identification',
          question: 'Which meristem located at nodes and leaf bases in monocots like grasses facilitates rapid regrowth after grazing or mowing?',
          correctAnswer: 'Intercalary Meristem',
          explanation: 'Intercalary meristems permit rapid leaf extension in grasses following damage.',
          points: 10
        },
        {
          id: 'ph-id-5',
          type: 'identification',
          question: 'Name the most abundant simple permanent tissue, composed of living cells with thin primary cell walls and large vacuoles.',
          correctAnswer: 'Parenchyma',
          explanation: 'Parenchyma cells form the versatile, living bulk of plant organs.',
          points: 10
        },
        {
          id: 'ph-id-6',
          type: 'identification',
          question: 'What name is given to parenchyma tissue specialized for photosynthesis due to its high chloroplast density?',
          correctAnswer: 'Chlorenchyma',
          explanation: 'Chlorenchyma is photosynthetic parenchyma (e.g., palisade and spongy mesophyll).',
          points: 10
        },
        {
          id: 'ph-id-7',
          type: 'identification',
          question: 'Name the simple permanent tissue of living cells with unevenly thickened primary walls rich in pectin that supports young growing petioles.',
          correctAnswer: 'Collenchyma',
          explanation: 'Collenchyma provides plastic, flexible mechanical support without restricting growth.',
          points: 10
        },
        {
          id: 'ph-id-8',
          type: 'identification',
          question: 'What simple permanent tissue is dead at functional maturity with thick, heavily lignified secondary cell walls providing rigid strength?',
          correctAnswer: 'Sclerenchyma',
          explanation: 'Sclerenchyma tissue offers rigid structural defense and reinforcement.',
          points: 10
        },
        {
          id: 'ph-id-9',
          type: 'identification',
          question: 'What type of short, irregularly shaped sclerenchyma cells form the hard shells of nuts, seed coats, and pear grit?',
          correctAnswer: 'Sclereids',
          explanation: 'Sclereids (stone cells) are short, heavily lignified sclerenchyma cells.',
          points: 10
        },
        {
          id: 'ph-id-10',
          type: 'identification',
          question: 'Name the complex vascular tissue that conducts water and dissolved inorganic minerals upward from roots to foliage.',
          correctAnswer: 'Xylem',
          explanation: 'Xylem conducts water and dissolved minerals unidirectionally upwards.',
          points: 10
        },
        {
          id: 'ph-id-11',
          type: 'identification',
          question: 'What wider, open-ended water-conducting tube elements align end-to-end to form continuous vessels primarily in angiosperms?',
          correctAnswer: 'Vessel Elements',
          explanation: 'Vessel elements are the efficient, open-ended conducting cells of flowering plants.',
          points: 10
        },
        {
          id: 'ph-id-12',
          type: 'identification',
          question: 'Name the complex vascular tissue that translocates photosynthesized sucrose and organic nutrients from source to sink.',
          correctAnswer: 'Phloem',
          explanation: 'Phloem translocates sucrose and organic assimilates throughout the plant.',
          points: 10
        },
        {
          id: 'ph-id-13',
          type: 'identification',
          question: 'What nucleated metabolic support cells are connected to sieve tube elements via plasmodesmata to manage phloem loading and unloading?',
          correctAnswer: 'Companion Cells',
          explanation: 'Companion cells provide vital metabolic machinery and ATP to enucleated sieve tube elements.',
          points: 10
        },
        {
          id: 'ph-id-14',
          type: 'identification',
          question: 'What thimble-shaped structure caps the root apical meristem, secretes lubricating mucilage, and senses gravity?',
          correctAnswer: 'Root Cap',
          explanation: 'The root cap protects the root tip and directs root gravitropism.',
          points: 10
        },
        {
          id: 'ph-id-15',
          type: 'identification',
          question: 'What modular repeating unit of shoot architecture consists of a node, internode, attached leaf, and axillary bud?',
          correctAnswer: 'Phytomer',
          explanation: 'A phytomer (or metamer) is the basic structural modular unit of vegetative shoot growth.',
          points: 10
        }
      ]
    }
  ]
};

// Sync rev-histology-quiz-50 questions with rev-histology-notes questions
plantHistologySubject.reviewers[1].questions = [...plantHistologySubject.reviewers[0].questions];
