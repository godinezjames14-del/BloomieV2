import { Reviewer } from '../types';

export const initialReviewers: Reviewer[] = [
  {
    id: 'reviewer-microbio-safety',
    name: 'Safety in the Microbiology Laboratory',
    fileName: 'Safety_in_the_Microbiology_Laboratory.pdf',
    fileSnippet: 'Comprehensive lecture reviewer covering all 24 slides on OSHA standards, standard precautions, lab hazards, BSC classes, BSL levels, and control hierarchies.',
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
        content: '• The Occupational Safety and Health Administration (OSHA) issued the final rule for the Occupational Exposure to Bloodborne Pathogens Standard.\n• Universal Precautions, now referred to as Standard Precautions, states that all blood, body fluids, and unfixed tissues are to be handled as though they are potentially infectious.\n• Core safe practices required:\n  1. Hand hygiene (the single most important practice to prevent infection spread).\n  2. Prohibition of eating, drinking, or storing food/drinks in laboratory refrigerators and workspaces.\n  3. Strict prohibition of mouth pipetting.\n  4. Immediate disposal of sharps into dedicated puncture-resistant, labeled biohazard sharps containers.\n  5. Prohibition of needle recapping (the specific practice during which most needle stick injuries occur).',
        importance: 'high',
        tags: ['OSHA', 'Bloodborne Pathogens', 'Standard Precautions', 'Needle Sticks'],
        highlighted: true
      },
      {
        id: 'mb-n-2',
        title: 'Personal Protective Equipment (PPE) Donning & Doffing Sequence',
        category: 'Definition',
        content: 'Proper order of putting on (Donning) and taking off (Doffing) PPE is critical to prevent contamination:\n\n• DONNING SEQUENCE (Putting On):\n  1. Hand Hygiene (wash hands thoroughly or apply alcohol-based rub)\n  2. Gown / Lab Coat\n  3. Mask / Respirator\n  4. Eye Protection (Goggles or Face Shield)\n  5. Gloves (pull over wrist cuffs of gown)\n\n• DOFFING SEQUENCE (Taking Off):\n  1. Gloves (remove first as they are most contaminated)\n  2. Gown / Lab Coat\n  3. Eye Protection (Goggles / Face Shield)\n  4. Mask / Respirator\n  5. Hand Hygiene (perform immediately after removing all PPE)',
        importance: 'high',
        tags: ['PPE', 'Donning', 'Doffing', 'Sequence', 'Gloves'],
        highlighted: true
      },
      {
        id: 'mb-n-3',
        title: 'Housekeeping, Disinfection & 10% Bleach Protocol',
        category: 'Formula',
        content: '• Workspace Cleaning:\n  - All workspaces must be cleaned when procedures are completed and whenever the bench area or floor becomes visibly contaminated.\n• Decontamination Solution:\n  - 10% household bleach solution (1:10 volume/volume dilution) is used.\n  - Must be prepared fresh daily because diluted hypochlorite degrades rapidly.\n• Container Labeling Requirements:\n  - Name of the solution\n  - Date and time prepared\n  - Date and time of expiration (24 hours from preparation)\n  - Initials of the preparer\n• Waste Disposal & Documentation:\n  - All paper towels used in the decontamination process must be disposed of as biohazardous waste.\n  - Documentation of the disinfection of work areas and equipment after each shift is mandatory.',
        importance: 'high',
        tags: ['Housekeeping', '10% Bleach', 'Disinfection', 'Biohazardous Waste', 'Shift Documentation'],
        highlighted: true
      },
      {
        id: 'mb-n-4',
        title: 'Occupational Hazard: Fire Safety Protocols',
        category: 'Key Takeaway',
        content: 'Essential laboratory fire protection standards:\n1. Enforcement of strict no-smoking policy throughout the facility.\n2. Installation of appropriate fire extinguishers.\n3. Placement of fire extinguishers every 75 feet (extinguishers must be checked monthly and maintained annually).\n4. Adequate fire detection and suppression systems tested every 3 months.\n5. Placement of manual fire alarm boxes near the exit doors.\n6. Written fire prevention and response procedures (commonly known as the Fire Response Plan).\n7. Regular scheduled fire drills conducted for all laboratory staff.',
        importance: 'high',
        tags: ['Fire Hazard', '75 Feet', 'Fire Extinguishers', 'Suppression Systems'],
        highlighted: false
      },
      {
        id: 'mb-n-5',
        title: 'Occupational Hazard: Chemical Safety Protocols',
        category: 'Concept',
        content: 'Regulatory requirements under the Hazardous Chemicals in Laboratories standard:\n1. Label all chemical containers properly with hazard warnings and date opened.\n2. Strictly follow handling and storage requirements for each chemical.\n3. Store alcohol and other flammable chemicals in approved safety cans or storage cabinets at least 5 feet away from any heat source.\n4. Use adequate ventilation, such as chemical fume hoods, when handling volatile hazardous chemicals.\n5. Use appropriate Personal Protective Equipment (PPE).\n6. Use bottle carriers for glass bottles containing more than 500 mL of hazardous chemicals.\n7. Use alcohol-based solvents to clean microscope objectives.\n8. Prohibit the wearing of contact lenses when working with xylene, acetone, alcohols, formaldehyde, and other volatile solvents (vapors can trap under lenses).\n9. Establish written chemical spill response procedures with mandatory employee training.',
        importance: 'high',
        tags: ['Chemical Hazards', '5 Feet Rule', 'Bottle Carriers', 'No Contact Lenses', 'Fume Hood'],
        highlighted: true
      },
      {
        id: 'mb-n-6',
        title: 'Occupational Hazard: Electrical Safety Protocols',
        category: 'Summary',
        content: 'Electrical safety practices in the microbiology laboratory:\n1. Equipment must be grounded (three-prong plug) or double insulated.\n2. Strictly avoid or prohibit:\n   - "Cheater adapters" (ungrounded 3-to-2 prong adapters)\n   - Gang plugs (plugs allowing multiple cords in one outlet)\n   - Extension cords\n   - Equipment with loose plugs or frayed cords\n   - Stepping on cords, rolling heavy equipment over cords, and cord abuse.\n3. When unplugging, always pull the plug, NOT the cord.\n4. Equipment causing shock or tingling sensations must be turned off immediately, unplugged, tagged as defective, and reported.\n5. Before attempted repair or adjustment:\n   - Unplug the equipment\n   - Ensure hands are completely dry\n   - Remove all jewelry.',
        importance: 'medium',
        tags: ['Electrical Hazard', 'Grounding', 'Cheater Adapters', 'Cord Safety'],
        highlighted: false
      },
      {
        id: 'mb-n-7',
        title: 'Engineering Controls: Laboratory Environment & Airflow',
        category: 'Concept',
        content: '• Air-Handling Direction:\n  - Airflow in a microbiology laboratory must move from lower risk areas toward higher risk areas, NEVER the reverse.\n• Negative Pressure:\n  - Ideally, the microbiology laboratory should be under negative pressure relative to surrounding hallways to contain airborne pathogens.\n  - Air must NOT be recirculated back into general circulation after passing through microbiology.\n• Biosafety Cabinet Use:\n  - Procedures used to process specimens for culture that generate aerosols (mincing, grinding, vortexing, preparing direct smears for microscopic examination) must be performed inside a Biological Safety Cabinet (BSC).\n• Facility Access & Pest Control:\n  - Access limited strictly to employees and necessary authorized personnel.\n  - Maintain active pest control programs to prevent insect and rodent infestations.',
        importance: 'high',
        tags: ['Engineering Controls', 'Negative Pressure', 'Airflow', 'Aerosol Generation', 'Pest Control'],
        highlighted: true
      },
      {
        id: 'mb-n-8',
        title: 'Biological Safety Cabinets (BSCs): Class I, Class II & Class III',
        category: 'Definition',
        content: 'Classification of Biologic Safety Cabinets:\n\n• CLASS I CABINETS:\n  - Allow room (unsterilized) air to pass into the cabinet and around the work area/material, sterilizing only the air to be exhausted.\n  - Operates under negative pressure, ventilated to the outside, usually operated with an open front.\n  - Protects the worker and environment, but NOT the product/specimen.\n\n• CLASS II CABINETS (Vertical Laminar Flow):\n  - Sterilize air that flows over infectious material as well as exhaust air.\n  - Air flows in vertical "sheets" serving as barriers against outside particles and directing contaminated air into HEPA filters.\n  - Protects worker, product, and environment.\n  - Type A (Class IIA): Self-contained; 70% of air is recirculated, 30% exhausted. Mostly used in hospital clinical microbiology laboratories.\n  - Type B (Class IIB): Exhaust air is discharged outside the building. Selected when radioisotopes, toxic chemicals, or carcinogens will be used.\n\n• CLASS III CABINETS (Glove Box):\n  - Air entering and leaving is filter sterilized (HEPA).\n  - Infectious material is handled with heavy rubber gloves attached and sealed gas-tight to the cabinet.\n  - Maximum containment used for BSL-4 extreme pathogens.',
        importance: 'high',
        tags: ['BSC', 'Class I', 'Class II Type A', 'Class II Type B', 'Class III', 'Laminar Flow'],
        highlighted: true
      },
      {
        id: 'mb-n-9',
        title: 'Classification of Biologic Agents Based on Hazard (BSL 1 to 4)',
        category: 'Key Takeaway',
        content: 'Four Biosafety Levels based on risk:\n\n• BIOSAFETY LEVEL 1 (BSL-1):\n  - Agents with no known potential for infecting healthy human adults; well-characterized.\n  - Used in undergraduate and secondary teaching laboratories.\n  - Examples: Bacillus subtilis, Naegleria gruberi.\n  - Precautions: Standard good laboratory practice.\n\n• BIOSAFETY LEVEL 2 (BSL-2):\n  - Agents most commonly sought in clinical diagnostic specimens and teaching labs.\n  - Common infectious agents: HIV, HBV (Hepatitis B Virus), Salmonella organisms, and unusual pathogens.\n  - Precautions: Limited access, biohazard warning signs, BSC for aerosol-generating procedures.\n\n• BIOSAFETY LEVEL 3 (BSL-3):\n  - Unlikely in routine clinical labs; transmitted primarily via infectious aerosols and cause serious/fatal disease.\n  - Examples: Mycobacterium tuberculosis, Coxiella burnetii, mold stages of systemic fungi.\n  - Precautions: Controlled access, negative airflow, respirators, all work in BSCs.\n\n• BIOSAFETY LEVEL 4 (BSL-4):\n  - Exotic, high-risk agents causing life-threatening disease with no available vaccine or therapy.\n  - Examples: Marburg virus, Congo-Crimean hemorrhagic fever.\n  - Precautions: Maximum containment, positive-pressure suits, Class III BSC, complete facility decontamination upon exiting.',
        importance: 'high',
        tags: ['Biosafety Levels', 'BSL-1', 'BSL-2', 'BSL-3', 'BSL-4', 'TB', 'Marburg', 'HIV'],
        highlighted: true
      },
      {
        id: 'mb-n-10',
        title: 'The Hierarchy of Controls (NIOSH Framework)',
        category: 'Concept',
        content: 'The inverted pyramid of hazard controls, ranked from most effective to least effective:\n\n1. ELIMINATION (Most Effective):\n   - Physically remove the hazard completely.\n2. SUBSTITUTION:\n   - Replace the hazard with a safer alternative (e.g., using non-pathogenic strains when possible).\n3. ENGINEERING CONTROLS:\n   - Isolate people from the hazard (e.g., Biological Safety Cabinets, negative pressure rooms, chemical fume hoods, sharps disposal boxes).\n4. ADMINISTRATIVE CONTROLS:\n   - Change the way people work (e.g., standard operating procedures, training, safety signage, shift disinfection logs, no-contact lens policy).\n5. PPE (Least Effective):\n   - Protect the worker with Personal Protective Equipment (e.g., gloves, lab coats, masks, eye protection, face shields).\n   *Note: PPE is the last line of defense and relies heavily on individual compliance and correct technique.',
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
      }
    ]
  }
];
