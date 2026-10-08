import { Exam, Reviewer } from '../types';

export const initialExams: Exam[] = [
  {
    id: 'exam-microbio-safety',
    title: 'Safety in the Microbiology Laboratory',
    code: 'MICRO-SAFETY-2026',
    description: 'Covers OSHA standard precautions, laboratory hazards, PPE donning/doffing, biological safety cabinets (BSCs), biosafety levels (BSL 1-4), and hierarchy of controls.',
    date: '2026-10-15',
    status: 'upcoming',
    subjects: [
      {
        id: 'subj-microbio-safety',
        name: 'SAFETY IN THE MICROBIOLOGY LABORATORY',
        description: 'Comprehensive guidelines and protocols for microbiological laboratory safety, OSHA standards, hazard mitigation, BSC engineering controls, and biosafety levels.',
        color: '#0D9488',
        reviewers: [
          {
            id: 'rev-microbio-notes',
            name: 'Lecture Notes',
            fileName: 'Safety_in_the_Microbiology_Laboratory.pdf',
            fileSnippet: 'Complete 24-slide lecture notes covering all regulatory requirements, housekeeping, lab hazards, BSC classes, biosafety levels, and control hierarchies.',
            testDate: '2026-10-15',
            questionTypes: ['multiple_choice', 'identification', 'enumeration', 'essay'],
            questionCount: 15,
            createdAt: '2026-10-07',
            notesScrollProgress: 0,
            notes: [
              {
                id: 'mb-n-1',
                title: 'Standard Precautions & Bloodborne Pathogens Standard',
                category: 'Concept',
                content: '• The **Occupational Safety and Health Administration (OSHA)** issued the final rule for the **Occupational Exposure to Bloodborne Pathogens Standard**.\n\n• **Universal Precautions** (now referred to as **Standard Precautions**) states that **all blood, body fluids, and unfixed tissues** are to be handled as though they are **potentially infectious**.\n\n• Core safe practices required:\n  1. **Hand hygiene**: The **single most important practice** to prevent infection spread.\n  2. **Food & Drink Prohibition**: Strictly **prohibit eating, drinking, or storing food/drinks** in laboratory refrigerators and workspaces.\n  3. **Pipetting**: Strict prohibition of **mouth pipetting** at all times.\n  4. **Sharps Disposal**: Immediate disposal of sharps into dedicated **puncture-resistant, labeled biohazard containers**.\n  5. **Needle Recapping**: **Strictly prohibited** — two-handed recapping is the specific practice during which **most needle stick injuries occur**.',
                importance: 'high',
                tags: ['OSHA', 'Bloodborne Pathogens', 'Standard Precautions', 'Needle Sticks'],
                highlighted: true
              },
              {
                id: 'mb-n-2',
                title: 'Personal Protective Equipment (PPE) Donning & Doffing Sequence',
                category: 'Definition',
                content: 'Proper sequence for putting on (**Donning**) and taking off (**Doffing**) PPE is critical to prevent self-contamination:\n\n• DONNING SEQUENCE (Putting On — Clean to Dirty):\n  1. **Hand Hygiene** (wash hands thoroughly with soap or apply alcohol-based rub)\n  2. **Gown / Lab Coat** (fasten securely at neck and waist ties)\n  3. **Mask / Respirator** (fit snug over bridge of nose and mouth)\n  4. **Eye Protection** (goggles or clear face shield)\n  5. **Gloves** (pull over the wrist cuffs of the gown)\n\n• DOFFING SEQUENCE (Taking Off — Dirty First):\n  1. **Gloves** (remove **first** as they are the **most contaminated**)\n  2. **Gown / Lab Coat** (unfasten ties and peel away inside-out)\n  3. **Eye Protection** (remove by headband; do not touch contaminated front)\n  4. **Mask / Respirator** (untie bottom elastic first; remove over head)\n  5. **Hand Hygiene** (perform **immediately** after removing all PPE)',
                importance: 'high',
                tags: ['PPE', 'Donning', 'Doffing', 'Sequence', 'Gloves'],
                highlighted: true
              },
              {
                id: 'mb-n-3',
                title: 'Housekeeping, Disinfection & 10% Bleach Protocol',
                category: 'Formula',
                content: '• Workspace Cleaning:\n  - All workspaces must be cleaned when procedures are completed and whenever the bench area or floor becomes **visibly contaminated**.\n  - Mandatory **documentation** of work area and equipment disinfection after **each shift**.\n\n• Decontamination Solution:\n  - Standard: **10% household bleach solution** (**1:10 volume/volume dilution**).\n  - Preparation: Must be **prepared fresh daily** because diluted hypochlorite degrades rapidly.\n\n• Mandatory 4-Point Container Labeling Requirements:\n  1. **Name of the solution** (10% Sodium Hypochlorite)\n  2. **Date and time prepared**\n  3. **Date and time of expiration** (strictly **24 hours from preparation**)\n  4. **Initials of the preparer**\n\n• Waste Disposal:\n  - All paper towels and absorbent materials used in decontamination must be disposed of as **biohazardous waste**.',
                importance: 'high',
                tags: ['Housekeeping', '10% Bleach', 'Disinfection', 'Biohazardous Waste', 'Shift Documentation'],
                highlighted: true
              },
              {
                id: 'mb-n-4',
                title: 'Occupational Hazard: Fire Safety Protocols',
                category: 'Key Takeaway',
                content: 'Essential laboratory fire protection standards:\n\n  1. **No-Smoking Policy**: Strict enforcement throughout the facility.\n  2. **Extinguisher Placement**: Fire extinguishers must be placed **every 75 feet**.\n  3. **Inspection Schedule**: Extinguishers must be **checked monthly** and **maintained annually**.\n  4. **Suppression Systems**: Adequate fire detection and suppression systems tested **every 3 months**.\n  5. **Alarm Pull Stations**: Placement of manual fire alarm boxes **near exit doors**.\n  6. **Written Fire Response Plan**: Written prevention and response procedures.\n  7. **Scheduled Drills**: Regular scheduled fire drills conducted for all laboratory staff.',
                importance: 'high',
                tags: ['Fire Hazard', '75 Feet', 'Fire Extinguishers', 'Suppression Systems'],
                highlighted: false
              },
              {
                id: 'mb-n-5',
                title: 'Occupational Hazard: Chemical Safety Protocols',
                category: 'Concept',
                content: 'Regulatory requirements under the Hazardous Chemicals in Laboratories standard:\n\n  1. **Container Labeling**: Label all containers properly with hazard warnings and **date opened**.\n  2. **Flammables Storage**: Store alcohol and flammable chemicals in approved safety cans at least **5 feet away from any heat source**.\n  3. **Fume Hood Ventilation**: Use certified **chemical fume hoods** when handling volatile hazardous chemicals.\n  4. **Appropriate PPE**: Gloves, lab coats, and safety goggles required.\n  5. **Bottle Carriers**: Use dedicated bottle carriers for glass bottles containing **more than 500 mL** of hazardous chemicals.\n  6. **Microscope Cleaning**: Use **alcohol-based solvents** specifically to clean microscope objectives.\n  7. **Contact Lens Prohibition**: **Strictly prohibit wearing contact lenses** when working with xylene, acetone, alcohols, formaldehyde, or volatile solvents (vapors can become trapped under lenses).\n  8. **Spill Protocol**: Established written chemical spill response procedures with mandatory staff training.',
                importance: 'high',
                tags: ['Chemical Hazards', '5 Feet Rule', 'Bottle Carriers', 'No Contact Lenses', 'Fume Hood'],
                highlighted: true
              },
              {
                id: 'mb-n-6',
                title: 'Occupational Hazard: Electrical Safety Protocols',
                category: 'Summary',
                content: 'Electrical safety practices in the microbiology laboratory:\n\n  1. **Grounding Standard**: Equipment must be **grounded (three-prong plug)** or double insulated.\n  2. **Strictly Prohibited Items**:\n     - **"Cheater adapters"** (ungrounded 3-to-2 prong adapters)\n     - **Gang plugs** (multiple cords plugged into a single receptacle)\n     - **Extension cords** and equipment with frayed cords or loose plugs\n     - Rolling heavy equipment over cords or cord abuse.\n  3. **Unplugging**: Always **pull the plug**, never pull on the cord itself.\n  4. **Defect Reporting**: Equipment causing **shock or tingling sensations** must be **turned off immediately, unplugged, tagged as defective, and reported**.\n  5. **Before Repair or Adjustment**:\n     - **Unplug the equipment**\n     - Ensure hands are **completely dry**\n     - **Remove all jewelry**',
                importance: 'medium',
                tags: ['Electrical Hazard', 'Grounding', 'Cheater Adapters', 'Cord Safety'],
                highlighted: false
              },
              {
                id: 'mb-n-7',
                title: 'Engineering Controls: Laboratory Environment & Airflow',
                category: 'Concept',
                content: '• Air-Handling Direction:\n  - Airflow must move from **lower risk areas toward higher risk areas**, **NEVER the reverse**.\n\n• Negative Pressure Containment:\n  - The microbiology laboratory should be under **negative pressure** relative to hallways to contain airborne pathogens.\n  - Air must **NOT be recirculated** back into general ventilation after passing through microbiology.\n\n• Biosafety Cabinet (BSC) Requirement:\n  - Procedures that generate aerosols (**mincing, grinding, vortexing, and preparing direct smears**) must be performed inside a **Biological Safety Cabinet (BSC)**.\n\n• Access Control & Pest Management:\n  - Facility access restricted strictly to **authorized personnel**.\n  - Maintain active **pest control programs** against insects and rodents.',
                importance: 'high',
                tags: ['Engineering Controls', 'Negative Pressure', 'Airflow', 'Aerosol Generation', 'Pest Control'],
                highlighted: true
              },
              {
                id: 'mb-n-8',
                title: 'Biological Safety Cabinets (BSCs): Class I, Class II & Class III',
                category: 'Definition',
                content: 'Classification of Biologic Safety Cabinets:\n\n• CLASS I CABINETS (Open-Front Negative Pressure):\n  - Unsterilized room air enters cabinet across work surface; only **exhaust air is HEPA filtered**.\n  - Protects: **Worker and environment**, but **NOT the product/specimen**.\n\n• CLASS II CABINETS (Vertical Laminar Flow Barrier):\n  - Air is HEPA filtered before flowing over work materials **AND** before exhaust.\n  - Protects: **Worker, environment, AND specimen/product**.\n  - **Type A (Class IIA)**: **70% recirculated, 30% exhausted** (standard in clinical microbiology).\n  - **Type B (Class IIB)**: Exhaust discharged 100% outside (required for radioisotopes or carcinogens).\n\n• CLASS III CABINETS (Gas-Tight Glove Box):\n  - Completely **gas-tight enclosure**; materials manipulated exclusively through **sealed heavy rubber arm-length gloves**.\n  - Supply and exhaust air are HEPA filtered.\n  - Provides **maximum containment** for high-consequence **BSL-4 pathogens**.',
                importance: 'high',
                tags: ['BSC', 'Class I', 'Class II Type A', 'Class II Type B', 'Class III', 'Laminar Flow'],
                highlighted: true
              },
              {
                id: 'mb-n-9',
                title: 'Classification of Biologic Agents Based on Hazard (BSL 1 to 4)',
                category: 'Key Takeaway',
                content: 'Four Biosafety Levels based on risk:\n\n• BIOSAFETY LEVEL 1 (BSL-1 — Minimal Hazard):\n  - Agents with no known potential for infecting healthy human adults.\n  - Used in undergraduate and secondary teaching labs.\n  - Representative agents: **Bacillus subtilis**, **Naegleria gruberi**.\n  - Precautions: Standard good microbiological practice.\n\n• BIOSAFETY LEVEL 2 (BSL-2 — Moderate Hazard):\n  - Agents commonly sought in clinical diagnostic specimens and teaching labs.\n  - Common etiologic agents: **HIV**, **Hepatitis B Virus (HBV)**, **Salmonella species**.\n  - Precautions: Biohazard warning signage, limited access, BSC for aerosol procedures.\n\n• BIOSAFETY LEVEL 3 (BSL-3 — Serious / Lethal Aerosol Risk):\n  - Transmitted primarily via **infectious aerosols** and cause serious or lethal disease.\n  - Examples: **Mycobacterium tuberculosis**, **Coxiella burnetii**, systemic fungi mold stages.\n  - Precautions: Controlled access, **negative pressure airflow**, **respirators**, all work in BSCs.\n\n• BIOSAFETY LEVEL 4 (BSL-4 — Maximum High-Risk Containment):\n  - Exotic, life-threatening agents with **no available vaccine or therapy**.\n  - Examples: **Marburg virus**, **Congo-Crimean hemorrhagic fever**, Ebola.\n  - Precautions: Positive-pressure suits, **Class III BSC**, full facility air locks.',
                importance: 'high',
                tags: ['Biosafety Levels', 'BSL-1', 'BSL-2', 'BSL-3', 'BSL-4', 'TB', 'Marburg', 'HIV'],
                highlighted: true
              },
              {
                id: 'mb-n-10',
                title: 'The Hierarchy of Controls (NIOSH Framework)',
                category: 'Concept',
                content: 'The inverted pyramid of hazard controls, ranked from **most effective** to **least effective**:\n\n  1. **ELIMINATION** (Most Effective):\n     - **Physically remove the hazard** completely from the workplace.\n  2. **SUBSTITUTION**:\n     - **Replace the hazard** with a non-pathogenic surrogate or safer alternative.\n  3. **ENGINEERING CONTROLS**:\n     - **Isolate workers from the hazard** using physical barriers (**Biological Safety Cabinets**, **negative pressure rooms**, **fume hoods**, **sharps boxes**).\n  4. **ADMINISTRATIVE CONTROLS**:\n     - **Change how people work** through standard operating procedures, safety signage, shift logs, and the no-contact lens rule.\n  5. **PPE** (Least Effective):\n     - **Protect the worker** with gloves, lab coats, respirators, and goggles.\n     - *Critical*: PPE is the **last line of defense** and relies entirely on user compliance.',
                importance: 'high',
                tags: ['Hierarchy of Controls', 'Elimination', 'Substitution', 'Engineering', 'Administrative', 'PPE'],
                highlighted: true
              }
            ],
            questions: [
              {
                id: 'mb-q-1',
                type: 'multiple_choice',
                question: 'What is the single most important practice to prevent the spread of infection in the microbiology laboratory?',
                options: [
                  'Handwashing / Hand hygiene',
                  'Wearing double latex gloves at all times',
                  'Using UV germicidal lamps overnight',
                  'Autoclaving all paper notebooks'
                ],
                correctAnswer: 'Handwashing / Hand hygiene',
                explanation: 'Hand hygiene (handwashing with soap and water or alcohol hand rub) is universally recognized by OSHA and CDC as the most critical practice to prevent infection transmission.',
                points: 10
              },
              {
                id: 'mb-q-2',
                type: 'multiple_choice',
                question: 'During which specific practice do the majority of laboratory needle stick injuries occur?',
                options: [
                  'Recapping needles after use',
                  'Centrifuging blood tubes',
                  'Performing venipuncture on patients',
                  'Disposing unbroken glass pipettes'
                ],
                correctAnswer: 'Recapping needles after use',
                explanation: 'Most needle stick injuries occur during two-handed needle recapping. OSHA standards strictly prohibit recapping needles; used sharps must be discarded directly into puncture-resistant sharps containers.',
                points: 10
              },
              {
                id: 'mb-q-3',
                type: 'multiple_choice',
                question: 'What is the correct concentration and preparation requirement for household bleach used to decontaminate laboratory work surfaces?',
                options: [
                  '10% bleach solution (1:10 v/v dilution), prepared fresh daily',
                  '50% bleach solution, prepared once a month',
                  'Undiluted bleach solution, prepared weekly',
                  '1% bleach solution stored in clear glass bottles indefinitely'
                ],
                correctAnswer: '10% bleach solution (1:10 v/v dilution), prepared fresh daily',
                explanation: 'A 10% household bleach solution (1:10 volume/volume dilution) prepared fresh daily is the standard disinfectant. Dilute sodium hypochlorite breaks down over time, so fresh daily preparation is required.',
                points: 10
              },
              {
                id: 'mb-q-4',
                type: 'multiple_choice',
                question: 'What is the correct sequence for DONNING (putting on) Personal Protective Equipment (PPE)?',
                options: [
                  'Hand hygiene → Gown → Mask → Eye Protection → Gloves',
                  'Gloves → Mask → Gown → Eye Protection → Hand hygiene',
                  'Gown → Gloves → Mask → Eye Protection → Hand hygiene',
                  'Mask → Eye Protection → Gown → Gloves → Hand hygiene'
                ],
                correctAnswer: 'Hand hygiene → Gown → Mask → Eye Protection → Gloves',
                explanation: 'According to standard protocols (Slide 6), donning starts with hand hygiene, followed by the gown, mask, eye protection (goggles), and finally gloves pulled over the gown cuffs.',
                points: 10
              },
              {
                id: 'mb-q-5',
                type: 'multiple_choice',
                question: 'What is the correct sequence for DOFFING (removing) Personal Protective Equipment (PPE)?',
                options: [
                  'Gloves → Gown → Eye Protection → Mask → Hand hygiene',
                  'Mask → Gown → Eye Protection → Gloves → Hand hygiene',
                  'Gown → Gloves → Mask → Eye Protection → Hand hygiene',
                  'Hand hygiene → Gloves → Eye Protection → Gown → Mask'
                ],
                correctAnswer: 'Gloves → Gown → Eye Protection → Mask → Hand hygiene',
                explanation: 'During doffing, gloves are removed first because they carry the highest biohazard load, followed by the gown, eye protection, mask, and finally thorough hand hygiene.',
                points: 10
              },
              {
                id: 'mb-q-6',
                type: 'multiple_choice',
                question: 'In a microbiology laboratory, fire extinguishers must be placed at intervals of no more than how many feet?',
                options: [
                  'Every 75 feet',
                  'Every 150 feet',
                  'Every 20 feet',
                  'Every 200 feet'
                ],
                correctAnswer: 'Every 75 feet',
                explanation: 'Occupational fire safety standards require fire extinguishers to be placed every 75 feet, inspected monthly, and maintained annually (Slide 9).',
                points: 10
              },
              {
                id: 'mb-q-7',
                type: 'multiple_choice',
                question: 'At what minimum distance must flammable chemicals and alcohol be stored away from any heat source?',
                options: [
                  'At least 5 feet',
                  'At least 1 foot',
                  'At least 25 feet',
                  'At least 50 feet'
                ],
                correctAnswer: 'At least 5 feet',
                explanation: 'Flammable chemicals and alcohol must be stored in approved safety cans or storage cabinets at least 5 feet away from heat sources (Slide 10).',
                points: 10
              },
              {
                id: 'mb-q-8',
                type: 'multiple_choice',
                question: 'Why is the wearing of contact lenses prohibited when working with organic solvents like xylene, acetone, and formaldehyde?',
                options: [
                  'Chemical fumes and vapors can become trapped underneath the contact lens, causing corneal damage',
                  'Contact lenses make microscopes blurry',
                  'Solvents instantly dissolve the glass of safety goggles',
                  'Contact lenses attract electrostatic charge from centrifuges'
                ],
                correctAnswer: 'Chemical fumes and vapors can become trapped underneath the contact lens, causing corneal damage',
                explanation: 'Volatile solvents produce vapors that can dissolve into or become trapped beneath contact lenses, preventing tear clearance and causing severe corneal irritation and chemical burns.',
                points: 10
              },
              {
                id: 'mb-q-9',
                type: 'multiple_choice',
                question: 'Which direction should the air-handling system move air in a microbiology laboratory?',
                options: [
                  'From lower risk areas to higher risk areas, never the reverse',
                  'From higher risk areas to lower risk areas',
                  'In a circular clockwise pattern into the lobby',
                  'Directly into the administrative staff offices'
                ],
                correctAnswer: 'From lower risk areas to higher risk areas, never the reverse',
                explanation: 'Airflow must always move inward from clean (lower risk) areas to dirty (higher risk) areas under negative pressure to prevent contaminated aerosols from escaping.',
                points: 10
              },
              {
                id: 'mb-q-10',
                type: 'multiple_choice',
                question: 'Which type of Biological Safety Cabinet (BSC) is most commonly used in hospital clinical microbiology laboratories, recirculating 70% of the air and exhausting 30%?',
                options: [
                  'Class II, Type A (Class IIA)',
                  'Class I Open-front',
                  'Class II, Type B (Class IIB)',
                  'Class III Glove Box'
                ],
                correctAnswer: 'Class II, Type A (Class IIA)',
                explanation: 'Class IIA BSCs are self-contained and recirculate 70% of the air through HEPA filters while exhausting 30%, making them the standard choice for clinical diagnostic labs (Slide 18).',
                points: 10
              },
              {
                id: 'mb-q-11',
                type: 'multiple_choice',
                question: 'When radioisotopes, carcinogens, or toxic volatile chemicals are used in conjunction with microbiological agents, which BSC type must be selected?',
                options: [
                  'Class II, Type B (Class IIB)',
                  'Class II, Type A (Class IIA)',
                  'Class I open-faced cabinet',
                  'Chemical storage cabinet without exhaust'
                ],
                correctAnswer: 'Class II, Type B (Class IIB)',
                explanation: 'Class IIB cabinets discharge exhaust air outside the building, preventing toxic chemical vapors or radionuclides from recirculating back into the room.',
                points: 10
              },
              {
                id: 'mb-q-12',
                type: 'multiple_choice',
                question: 'Which of the following organisms is classified under Biosafety Level 1 (BSL-1)?',
                options: [
                  'Bacillus subtilis',
                  'Mycobacterium tuberculosis',
                  'Marburg virus',
                  'Human Immunodeficiency Virus (HIV)'
                ],
                correctAnswer: 'Bacillus subtilis',
                explanation: 'Bacillus subtilis and Naegleria gruberi are standard BSL-1 agents that have no known potential for infecting healthy human adults (Slide 20).',
                points: 10
              },
              {
                id: 'mb-q-13',
                type: 'multiple_choice',
                question: 'Which infectious agents are classified as Biosafety Level 2 (BSL-2), the group most commonly sought in diagnostic clinical specimens?',
                options: [
                  'HIV, HBV (Hepatitis B), and Salmonella organisms',
                  'Marburg virus and Ebola virus',
                  'Bacillus subtilis and non-pathogenic E. coli',
                  'Mycobacterium tuberculosis and Coxiella burnetii'
                ],
                correctAnswer: 'HIV, HBV (Hepatitis B), and Salmonella organisms',
                explanation: 'BSL-2 agents include the common etiologic agents of clinical human disease such as HIV, HBV, and Salmonella species (Slide 21).',
                points: 10
              },
              {
                id: 'mb-q-14',
                type: 'multiple_choice',
                question: 'Mycobacterium tuberculosis and systemic fungi mold stages are classified under which Biosafety Level due to primary transmission by infectious aerosols?',
                options: [
                  'Biosafety Level 3 (BSL-3)',
                  'Biosafety Level 1 (BSL-1)',
                  'Biosafety Level 2 (BSL-2)',
                  'Biosafety Level 4 (BSL-4)'
                ],
                correctAnswer: 'Biosafety Level 3 (BSL-3)',
                explanation: 'M. tuberculosis, Coxiella burnetii, and the mold stages of systemic fungi are BSL-3 agents transmitted primarily through infectious aerosols (Slide 22).',
                points: 10
              },
              {
                id: 'mb-q-15',
                type: 'multiple_choice',
                question: 'According to the NIOSH Hierarchy of Controls, which method is considered the MOST effective and which is LEAST effective?',
                options: [
                  'Elimination is most effective; PPE is least effective',
                  'PPE is most effective; Elimination is least effective',
                  'Administrative controls are most effective; Engineering is least effective',
                  'Substitution is most effective; Administrative is least effective'
                ],
                correctAnswer: 'Elimination is most effective; PPE is least effective',
                explanation: 'Under the Hierarchy of Controls, Elimination (physically removing the hazard) is at the top (most effective), while PPE is at the bottom (least effective as it relies solely on user compliance) (Slide 24).',
                points: 10
              }
            ]
          },
          {
            id: 'rev-quiz-precautions',
            name: 'Quiz 1 – Standard Precautions & Lab Hazards',
            fileName: 'Quiz1_Standard_Precautions_Hazards.pdf',
            fileSnippet: 'Assessment testing OSHA compliance, PPE donning and doffing protocols, 10% bleach housekeeping, fire extinguisher intervals, and electrical safety.',
            testDate: '2026-10-15',
            questionTypes: ['multiple_choice'],
            questionCount: 10,
            createdAt: '2026-10-07',
            notesScrollProgress: 0,
            notes: [],
            questions: [
              {
                id: 'q1-1',
                type: 'multiple_choice',
                question: 'What fundamental concept defines Universal/Standard Precautions?',
                options: [
                  'All blood, body fluids, and unfixed tissues are handled as though they are potentially infectious',
                  'Only blood from confirmed HIV/HBV patients requires protective equipment',
                  'Laboratory coats must be worn outside the facility during lunch breaks',
                  'Gloves are only required when handling visibly red liquid specimens'
                ],
                correctAnswer: 'All blood, body fluids, and unfixed tissues are handled as though they are potentially infectious',
                explanation: 'Standard Precautions mandate treating all human blood, body fluids, and unfixed tissues as infectious regardless of patient status.',
                points: 10
              },
              {
                id: 'q1-2',
                type: 'multiple_choice',
                question: 'Which regulatory agency issued the final rule for the Occupational Exposure to Bloodborne Pathogens Standard?',
                options: [
                  'Occupational Safety and Health Administration (OSHA)',
                  'Environmental Protection Agency (EPA)',
                  'Food and Drug Administration (FDA)',
                  'Department of Transportation (DOT)'
                ],
                correctAnswer: 'Occupational Safety and Health Administration (OSHA)',
                explanation: 'The Occupational Safety and Health Administration (OSHA) issued the Bloodborne Pathogens Standard to protect healthcare and laboratory workers.',
                points: 10
              },
              {
                id: 'q1-3',
                type: 'multiple_choice',
                question: 'What is required when labeling the container of a freshly prepared 10% household bleach solution?',
                options: [
                  'Name of solution, date/time prepared, date/time of expiration, and preparer initials',
                  'Only the word "Bleach" in black marker',
                  'The room temperature and barcode number',
                  'The supervisor signature and laboratory license number'
                ],
                correctAnswer: 'Name of solution, date/time prepared, date/time of expiration, and preparer initials',
                explanation: 'Proper housekeeping labeling requires the chemical name, preparation timestamp, expiration timestamp (24 hours), and initials of the preparer (Slide 7).',
                points: 10
              },
              {
                id: 'q1-4',
                type: 'multiple_choice',
                question: 'How frequently must fire detection and suppression systems in the laboratory be tested?',
                options: [
                  'Every 3 months',
                  'Every month',
                  'Every 5 years',
                  'Annually'
                ],
                correctAnswer: 'Every 3 months',
                explanation: 'Adequate fire detection and suppression systems must be tested every 3 months (Slide 9).',
                points: 10
              },
              {
                id: 'q1-5',
                type: 'multiple_choice',
                question: 'What safety carrier must be used when transporting glass bottles of hazardous chemicals containing more than what volume?',
                options: [
                  'More than 500 mL',
                  'More than 50 mL',
                  'More than 2 Liters',
                  'More than 10 mL'
                ],
                correctAnswer: 'More than 500 mL',
                explanation: 'Bottle carriers are required for glass containers holding more than 500 mL of hazardous chemicals to prevent shattering and spills (Slide 11).',
                points: 10
              },
              {
                id: 'q1-6',
                type: 'multiple_choice',
                question: 'What type of adapters that allow 3-prong plugs to be inserted into 2-prong ungrounded outlets must be strictly avoided or prohibited in the lab?',
                options: [
                  '"Cheater adapters" (ungrounded 3-to-2 prong adapters)',
                  'Ground Fault Circuit Interrupters (GFCI)',
                  'Surge protectors with internal circuit breakers',
                  'Commercial laboratory grade power strips'
                ],
                correctAnswer: '"Cheater adapters" (ungrounded 3-to-2 prong adapters)',
                explanation: '"Cheater adapters" defeat equipment grounding, creating severe shock and fire hazards (Slide 12).',
                points: 10
              },
              {
                id: 'q1-7',
                type: 'multiple_choice',
                question: 'What three things must be done before attempting any repair or adjustment of electrical equipment in the laboratory?',
                options: [
                  'Unplug the equipment, ensure hands are dry, and remove jewelry',
                  'Wear wet rubber boots, turn off lights, and spray with bleach',
                  'Keep equipment plugged in, wear reading glasses, and use metal tweezers',
                  'Call the fire department, turn off the water main, and take off lab coat'
                ],
                correctAnswer: 'Unplug the equipment, ensure hands are dry, and remove jewelry',
                explanation: 'Slide 13 specifies: unplug equipment, dry hands, and remove all jewelry before any adjustment or repair.',
                points: 10
              },
              {
                id: 'q1-8',
                type: 'multiple_choice',
                question: 'How must all paper towels used in the laboratory decontamination process be disposed of?',
                options: [
                  'As biohazardous waste',
                  'In the municipal regular trash bin',
                  'In the recyclable paper bin',
                  'Washed and hung to dry for reuse'
                ],
                correctAnswer: 'As biohazardous waste',
                explanation: 'All absorbent materials and towels used to decontaminate biohazardous spills or work surfaces must be treated as biohazardous waste (Slide 8).',
                points: 10
              },
              {
                id: 'q1-9',
                type: 'multiple_choice',
                question: 'What solvent is specifically recommended to clean microscope objectives in the laboratory?',
                options: [
                  'Alcohol-based solvents',
                  '10% sodium hypochlorite bleach',
                  'Tap water with liquid hand soap',
                  'Concentrated hydrochloric acid'
                ],
                correctAnswer: 'Alcohol-based solvents',
                explanation: 'Slide 11 notes: "Use alcohol-based solvents to clean microscope objectives."',
                points: 10
              },
              {
                id: 'q1-10',
                type: 'multiple_choice',
                question: 'If a laboratory instrument causes a shock or tingling sensation when touched, what is the immediate required protocol?',
                options: [
                  'Turn off the instrument, unplug it, tag it as defective, and report the problem',
                  'Wipe it with a wet paper towel while running',
                  'Wrap the cord with masking tape and continue working',
                  'Plug it into a gang plug adapter with other instruments'
                ],
                correctAnswer: 'Turn off the instrument, unplug it, tag it as defective, and report the problem',
                explanation: 'Slide 13 instructs to immediately turn off, unplug, identify as defective, and report any electrical instrument that causes a shock or tingling sensation.',
                points: 10
              }
            ]
          },
          {
            id: 'rev-quiz-bsc-levels',
            name: 'Quiz 2 – BSCs, Biosafety Levels & Controls',
            fileName: 'Quiz2_BSCs_Biosafety_Levels.pdf',
            fileSnippet: 'Comprehensive assessment exclusively covering identification and enumeration of Biological Safety Cabinets (Classes I-III), BSL tiers 1-4, PPE sequences, and the Hierarchy of Controls.',
            testDate: '2026-10-15',
            questionTypes: ['identification', 'enumeration'],
            questionCount: 10,
            createdAt: '2026-10-07',
            notesScrollProgress: 0,
            notes: [],
            questions: [
              {
                id: 'q2-1',
                type: 'identification',
                question: 'Which class of Biological Safety Cabinet is a completely gas-tight enclosure where materials are manipulated exclusively through sealed heavy rubber arm-length gloves attached to the cabinet?',
                correctAnswer: 'Class III',
                explanation: 'Class III cabinets (glove boxes) provide maximum containment for extreme high-hazard pathogens (Slide 19).',
                points: 10
              },
              {
                id: 'q2-2',
                type: 'enumeration',
                question: 'Enumerate the 5 levels of the NIOSH Hierarchy of Controls in order from MOST effective to LEAST effective.',
                correctAnswer: [
                  'Elimination',
                  'Substitution',
                  'Engineering Controls',
                  'Administrative Controls',
                  'PPE'
                ],
                explanation: 'The NIOSH Hierarchy of Controls: 1. Elimination (most effective), 2. Substitution, 3. Engineering Controls, 4. Administrative Controls, 5. PPE (least effective) (Slide 24).',
                points: 10
              },
              {
                id: 'q2-3',
                type: 'identification',
                question: 'Name the non-pathogenic amoeboflagellate organism listed alongside Bacillus subtilis as an example of a Biosafety Level 1 (BSL-1) agent.',
                correctAnswer: 'Naegleria gruberi',
                explanation: 'Naegleria gruberi is a harmless organism used in educational settings classified under BSL-1 (Slide 20).',
                points: 10
              },
              {
                id: 'q2-4',
                type: 'enumeration',
                question: 'Enumerate the correct 5-step sequence for DONNING (putting on) Personal Protective Equipment (PPE).',
                correctAnswer: [
                  'Hand Hygiene',
                  'Gown',
                  'Mask',
                  'Eye Protection',
                  'Gloves'
                ],
                explanation: 'Slide 6 Donning Order: 1. Hand Hygiene → 2. Gown → 3. Mask/Respirator → 4. Eye Protection (Goggles/Shield) → 5. Gloves (over gown cuffs).',
                points: 10
              },
              {
                id: 'q2-5',
                type: 'enumeration',
                question: 'Enumerate the correct 5-step sequence for DOFFING (removing) Personal Protective Equipment (PPE).',
                correctAnswer: [
                  'Gloves',
                  'Gown',
                  'Eye Protection',
                  'Mask',
                  'Hand Hygiene'
                ],
                explanation: 'Slide 6 Doffing Order: 1. Gloves (most contaminated, removed first!) → 2. Gown → 3. Eye Protection → 4. Mask → 5. Hand Hygiene.',
                points: 10
              },
              {
                id: 'q2-6',
                type: 'identification',
                question: 'Name the infectious bacterial agent that causes tuberculosis, classified under Biosafety Level 3 (BSL-3) due to primary aerosol transmission.',
                correctAnswer: 'Mycobacterium tuberculosis',
                explanation: 'Mycobacterium tuberculosis is a high-risk aerosol-transmitted pathogen classified as BSL-3 (Slide 22).',
                points: 10
              },
              {
                id: 'q2-7',
                type: 'enumeration',
                question: 'Enumerate four laboratory procedures used to process specimens for culture that generate aerosols and must be performed inside a Biological Safety Cabinet (BSC).',
                correctAnswer: [
                  'Mincing',
                  'Grinding',
                  'Vortexing',
                  'Direct Smear Preparation'
                ],
                explanation: 'Slide 15 highlights that mincing, grinding, vortexing, and preparing direct smears for microscopic examination generate aerosols and must be performed inside a BSC.',
                points: 10
              },
              {
                id: 'q2-8',
                type: 'identification',
                question: 'In the Hierarchy of Controls, which category isolates workers from hazards using equipment such as Biological Safety Cabinets and negative pressure ventilation systems?',
                correctAnswer: 'Engineering Controls',
                explanation: 'Engineering controls isolate personnel from hazards through physical containment machinery and airflow controls.',
                points: 10
              },
              {
                id: 'q2-9',
                type: 'identification',
                question: 'What Biosafety Level (BSL) designation is required for handling exotic, lethal viral hemorrhagic fevers like Marburg virus and Congo-Crimean hemorrhagic fever?',
                correctAnswer: 'BSL-4',
                explanation: 'BSL-4 is designated for dangerous, exotic agents causing life-threatening disease with no available vaccine or therapy (Slide 23).',
                points: 10
              },
              {
                id: 'q2-10',
                type: 'enumeration',
                question: 'Enumerate the two major viral pathogens commonly sought in diagnostic clinical specimens that are classified under Biosafety Level 2 (BSL-2).',
                correctAnswer: [
                  'HIV',
                  'Hepatitis B Virus'
                ],
                explanation: 'Slide 21 specifies HIV and Hepatitis B Virus (HBV) along with Salmonella organisms as common BSL-2 etiologic agents.',
                points: 10
              }
            ]
          }
        ]
      }
    ]
  }
];
