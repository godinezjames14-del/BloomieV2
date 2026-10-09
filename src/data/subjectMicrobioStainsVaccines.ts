import { Subject } from '../types';

export const microbioStainsVaccinesSubject: Subject = {
  id: 'subj-microbio-stains-vaccines',
  name: 'MICROBIOLOGY STAINS & TYPES OF VACCINE',
  description: 'PHBIOSCI 281 Laboratory module on simple, differential, Gram, acid-fast, and special stains, bacterial cell walls, and the 7 classifications of human and veterinary vaccines.',
  color: '#EC4899',
  reviewers: [
    {
      id: 'rev-stains-notes',
      name: 'Lecture Notes & Study Guide',
      fileName: 'Microbiology_Stains_and_Vaccines_PHBIOSCI281.pdf',
      fileSnippet: 'Complete 6-page laboratory guide on simple and differential staining, Gram stain mechanics, Ziehl-Neelsen acid-fast staining, special stains, and comprehensive vaccine classifications.',
      testDate: '2026-10-26',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'ms-n-1',
          title: 'Principles of Simple Staining vs. Differential Staining',
          category: 'Concept',
          content: '• Simple Staining:\n  - Staining procedure in which only one single dye is used (e.g., methylene blue, crystal violet, safranin).\n  - Purpose: Living bacteria are almost transparent and lack contrast with water; staining enhances optical contrast against the brightfield background.\n  - Utility: Determines bacterial morphology (cocci, bacilli, spirilla) and arrangement (clusters, chains, pairs), but cannot differentiate cell types or specific structures.\n  - Chemistry: Methylene blue is a basic stain carrying a positive charge; binds electrostatically to negatively charged bacterial components (nucleic acids, cell wall phosphate/teichoic acids).\n\n• Differential Staining:\n  - Microbiological technique utilizing multiple chemical reagents applied sequentially to distinguish between cell types or cellular structures based on chemical and physical properties.\n  - Standard Sequential Protocol:\n    1. Heat-Fixation: Smeared slide passed through flame to kill bacteria and adhere them firmly to the glass.\n    2. Primary Stain: Imparts initial color to all bacterial cells.\n    3. Mordant: Interacts with the primary stain to form an insoluble complex trapped in target structures.\n    4. Decolorizer: Selectively removes the primary stain from cells lacking specific structural barriers (the most critical step).\n    5. Counterstain: Contrasting secondary dye that stains decolorized cells for clear microscopic visualization.',
          importance: 'high',
          tags: ['Simple Staining', 'Differential Staining', 'Methylene Blue', 'Heat-Fixation', 'Mordant', 'Decolorizer', 'Counterstain'],
          highlighted: true
        },
        {
          id: 'ms-n-2',
          title: 'The Gram Stain: Reagents, Mechanism & Cell Wall Biochemistry',
          category: 'Key Takeaway',
          content: '• Historical Context & Significance:\n  - Formulated by Danish physician Dr. Hans Christian Gram to differentiate pneumonia-causing pathogens; fundamental tool for bacterial classification.\n\n• Cell Wall Differences:\n  - Gram-Positive: Thick, multi-layered peptidoglycan (murein) meshwork embedded with teichoic acid (TA) and lipoteichoic acid (LTA). Lacks an outer membrane.\n  - Gram-Negative: Thin single layer of peptidoglycan enclosed by an outer membrane (OM) containing lipopolysaccharides (LPS / endotoxin), porin protein channels, and Braun\'s lipoproteins.\n  - Peptidoglycan Chemistry: Alternating repeating disaccharide units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM), cross-linked by short peptide chains catalyzed by the transpeptidase enzyme.\n\n• Four Reagents of the Gram Stain:\n  1. Primary Stain: Crystal Violet (1 min) → stains all cells purple/violet.\n  2. Mordant: Gram\'s Iodine (aqueous I₂ + KI, 1 min) → forms insoluble CVI (crystal violet - iodine) complex inside the peptidoglycan.\n  3. Decolorizer: Acetone-Alcohol (acetone + 95% ethanol, 10 sec) → dissolves lipid outer membrane in Gram-negatives, washing out CVI complex; dehydrates thick peptidoglycan in Gram-positives, permanently trapping CVI.\n  4. Counterstain: Safranin (1 min) → basic dye staining decolorized Gram-negatives pink/red.',
          importance: 'high',
          tags: ['Gram Stain', 'Hans Christian Gram', 'Peptidoglycan', 'NAG', 'NAM', 'Transpeptidase', 'Crystal Violet', 'Gram Iodine', 'Acetone Alcohol', 'Safranin'],
          highlighted: true
        },
        {
          id: 'ms-n-3',
          title: 'Gram Stain Precautions, Pitfalls & Microscopic Interpretation',
          category: 'Summary',
          content: '• Critical Precautions:\n  1. Decolorization is the Most Critical Step: Over-decolorization leaches primary stain from Gram-positives (appear false Gram-negative); under-decolorization fails to remove dye from Gram-negatives (appear false Gram-positive).\n  2. Culture Age Requirement: Best results obtained from fresh cultures ≤ 24 hours old. Aging Gram-positive cultures lose cell wall integrity and appear Gram-variable (mixture of purple and pink cells).\n  3. Non-Detectable Bacteria: Gram stain cannot detect bacteria lacking cell walls (*Mycoplasma*, *Ureaplasma*, *Rickettsia*) or obligate intracellular pathogens (*Chlamydia*).\n  4. Under-Decolorization Prone Genera: *Neisseria*, *Moraxella*, and *Acinetobacter* are Gram-negative cocci/coccobacilli that resist decolorization and easily appear false Gram-positive.\n\n• Microscopic Interpretation:\n  - Gram-Positive: Dark blue, purple, or deep violet.\n  - Gram-Negative: Light red or bright pink.',
          importance: 'high',
          tags: ['Decolorization Pitfall', 'Gram Variable', 'Culture Age', 'Mycoplasma', 'Neisseria', 'Interpretation'],
          highlighted: true
        },
        {
          id: 'ms-n-4',
          title: 'Acid-Fast Staining: Ziehl-Neelsen, Kinyoun & AFB Biology',
          category: 'Definition',
          content: '• Principle of Acid-Fastness:\n  - Physical resistance to decolorization by strong acids due to abundant, waxy mycolic acids covalently linked to arabinogalactan and peptidoglycan in the cell wall.\n  - Acid-fast bacteria retain the primary lipophilic phenolic stain carbolfuchsin.\n\n• Acid-Fast Organisms & Structures:\n  - Bacterial Genera: Genus *Mycobacterium* (*M. tuberculosis*, *M. leprae*) and Genus *Nocardia* (*N. brasiliensis*, *N. cyriacigeorgica*, *N. farcinica*, *N. nova*).\n  - Non-Bacterial Acid-Fast Structures: Bacterial endospores, head of mammalian sperm, protozoan oocysts (*Cryptosporidium parvum*, *Isospora belli*, *Cyclospora cayetanensis*), *Taenia saginata* tapeworm eggs, hydatid cysts, *Sarcocystis*, and nuclear inclusion bodies in lead poisoning.\n\n• Staining Procedures:\n  - Ziehl-Neelsen (Hot Method):\n    1. Flood smear with Carbolfuchsin (CF) and heat with alcohol flame until steam rises (facilitates penetration through waxy mycolic acid layer without boiling; 10 min contact time).\n    2. Decolorize with Acid-Alcohol (3% HCl in 95% ethanol, 2–3 min) → completely decolorizes non-acid-fast bacteria.\n    3. Counterstain with Methylene Blue (1 min) → stains decolorized organisms.\n  - Kinyoun (Cold Method): Historic procedure without heat; currently obsolete.\n\n• Interpretation:\n  - Acid-Fast (AFB Positive): Vivid Red or Bright Pink.\n  - Non-Acid-Fast (AFB Negative): Deep Blue.',
          importance: 'high',
          tags: ['Acid Fast', 'Mycolic Acid', 'Mycobacterium', 'Nocardia', 'Ziehl Neelsen', 'Carbolfuchsin', 'Acid Alcohol', 'Methylene Blue', 'Cryptosporidium'],
          highlighted: true
        },
        {
          id: 'ms-n-5',
          title: 'Special Stains: Capsule Stain & Silver Stain',
          category: 'Concept',
          content: '• Capsule Stain (Negative Staining):\n  - Bacterial Glycocalyx: Polysaccharide outer layer; if loose and diffuse = *slime layer*; if dense, thick, and gelatinous = *capsule*.\n  - Pathological Role: Major virulence factor that inhibits phagocytosis by host macrophages/neutrophils, prevents desiccation, and promotes biofilm formation.\n  - Staining Method: Negative Staining—the glass background and bacterial cell body are stained, leaving the non-ionic capsule unstained as a clear halo.\n  - *CRITICAL*: Capsules are destroyed by heat; therefore, capsule staining is performed strictly without heat-fixation.\n\n• Silver Stain:\n  - Used for visualizing structures too thin for standard resolution: bacterial flagella (motility appendages) and slender spirochetes (e.g., *Treponema pallidum*).\n  - Mechanism: Silver nitrate and a mordant precipitate layer upon layer along the delicate flagellar filaments, thickening their diameter until visible under the light microscope.',
          importance: 'high',
          tags: ['Capsule Stain', 'Negative Stain', 'Glycocalyx', 'No Heat Fixing', 'Virulence Factor', 'Silver Stain', 'Flagella', 'Spirochetes'],
          highlighted: true
        },
        {
          id: 'ms-n-6',
          title: 'Comprehensive Classifications of Vaccines',
          category: 'Summary',
          content: 'Seven distinct vaccine categories based on antigenic formulation and manufacturing:\n\n1. Attenuated (Live Weakened) Vaccines:\n   - Viable pathogens with reduced virulence; elicit robust cellular and humoral immunity.\n   - *Caution*: Contraindicated in immunosuppressed individuals due to risk of reversion or active infection.\n   - *Viral Examples*: Adenovirus, Chicken pox (varicella), Measles (rubeola), Mumps, German measles (rubella), Oral Sabin polio, Rotavirus, Smallpox, Yellow fever.\n   - *Bacterial Examples*: BCG (tuberculosis), Cholera, Tularemia, Oral typhoid vaccine.\n\n2. Inactivated (Killed) Vaccines:\n   - Pathogens killed by heat or chemicals (formalin); safer for immunocompromised, faster to produce, but less immunogenic (require multiple booster doses).\n   - *Viral Examples*: Hepatitis A, Influenza, Japanese encephalitis, Arboviral encephalitides (EEE, WEE, Russian), Subcutaneous Salk polio, Rabies.\n   - *Bacterial Examples*: Anthrax, Cholera, Pertussis, Plague, Subcutaneous typhoid, Q fever.\n\n3. Subunit / Acellular Vaccines:\n   - Composed of isolated antigenic fragments (proteins/capsules) rather than intact microbes; low adverse reactions.\n   - *Examples*: Anthrax, Hepatitis B surface antigen (HBsAg), Acellular pertussis (whooping cough).\n\n4. Conjugate Vaccines:\n   - Poorly immunogenic bacterial capsular polysaccharides conjugated to immunogenic carrier proteins, inducing T-dependent immune memory in infants.\n   - *Examples*: Hib (*Haemophilus influenzae* type b), Meningococcal meningitis, Pneumococcal pneumonia.\n\n5. Toxoid Vaccines:\n   - Exotoxins detoxified with heat or chemicals while retaining antigenic specificity; neutralized in vivo by antitoxins.\n   - *Examples*: Diphtheria toxoid and Tetanus toxoid (DTaP).\n\n6. DNA Vaccines:\n   - Recombinant plasmid vectors encoding pathogen genes injected into muscle/skin tissues to produce antigens internally.\n   - *Examples*: ZyCoV-D, West Nile-Innovator / Equine West Nile vaccines.\n\n7. Autogenous Vaccines:\n   - Custom vaccines prepared from bacterial cultures isolated from a specific patient\'s localized lesion (e.g., staphylococcal boil), killed, and re-injected to boost antibody titers; used in refractory infections and veterinary medicine.',
          importance: 'high',
          tags: ['Vaccines', 'Attenuated', 'Inactivated', 'Subunit', 'Conjugate', 'Toxoid', 'DNA Vaccine', 'Autogenous', 'Sabin', 'Salk', 'BCG', 'Tetanus'],
          highlighted: true
        }
      ],
      questions: [
        {
          id: 'ms-q-1',
          type: 'multiple_choice',
          question: 'What is the primary objective of performing a simple staining procedure in microbiology?',
          options: [
            'To differentiate Gram-positive from Gram-negative bacteria',
            'To increase optical contrast between transparent bacteria and the bright background to observe morphology and arrangement',
            'To measure the exact thickness of peptidoglycan in nanometers',
            'To determine whether bacteria can ferment lactose'
          ],
          correctAnswer: 'To increase optical contrast between transparent bacteria and the bright background to observe morphology and arrangement',
          explanation: 'Living bacteria are colorless; simple staining applies a single dye to impart contrast against the background.',
          points: 10
        },
        {
          id: 'ms-q-2',
          type: 'multiple_choice',
          question: 'Why does methylene blue, a basic dye, bind strongly to bacterial cells during simple staining?',
          options: [
            'Because it has a negative charge and binds to positively charged cell membranes',
            'Because it has a positive charge that binds electrostatically to negatively charged bacterial nucleic acids and cell walls',
            'Because it dissolves bacterial lipid bilayers instantly',
            'Because it acts as an enzymatic substrate for transpeptidase'
          ],
          correctAnswer: 'Because it has a positive charge that binds electrostatically to negatively charged bacterial nucleic acids and cell walls',
          explanation: 'Basic dyes possess cationic chromophores that bind electrostatically to negatively charged bacterial structures.',
          points: 10
        },
        {
          id: 'ms-q-3',
          type: 'multiple_choice',
          question: 'How many chemical reagents applied sequentially are required in a typical differential staining procedure?',
          options: ['Only one chemical reagent', 'At least four chemical reagents', 'Exactly two basic stains', 'Ten alternating alcohols'],
          correctAnswer: 'At least four chemical reagents',
          explanation: 'Differential staining requires primary stain, mordant, decolorizer, and counterstain applied in sequence.',
          points: 10
        },
        {
          id: 'ms-q-4',
          type: 'multiple_choice',
          question: 'What is the purpose of heat-fixation of a bacterial smear before staining?',
          options: [
            'To melt the glass slide into a concave dish',
            'To kill the bacteria and adhere them firmly to the glass slide',
            'To destroy all peptidoglycan in the cell wall',
            'To activate bacterial flagella for swimming'
          ],
          correctAnswer: 'To kill the bacteria and adhere them firmly to the glass slide',
          explanation: 'Passing a smear through a flame coagulates cellular proteins, killing bacteria and preventing wash-off.',
          points: 10
        },
        {
          id: 'ms-q-5',
          type: 'multiple_choice',
          question: 'Who developed the Gram staining procedure to identify organisms responsible for pneumonia?',
          options: ['Louis Pasteur', 'Dr. Hans Christian Gram', 'Robert Koch', 'Alexander Fleming'],
          correctAnswer: 'Dr. Hans Christian Gram',
          explanation: 'Danish bacteriologist Dr. Hans Christian Gram formulated the Gram stain in 1884.',
          points: 10
        },
        {
          id: 'ms-q-6',
          type: 'multiple_choice',
          question: 'What is the fundamental biochemical basis of the Gram stain reaction?',
          options: [
            'Differences in the thickness and chemical composition of bacterial cell walls, especially peptidoglycan and lipid content',
            'Differences in bacterial ribosome 70S RNA sequences',
            'Differences in cytoplasmic water content',
            'Differences in plasmid replication speed'
          ],
          correctAnswer: 'Differences in the thickness and chemical composition of bacterial cell walls, especially peptidoglycan and lipid content',
          explanation: 'Gram differentiation relies on cell wall differences: thick peptidoglycan in Gram-positive vs thin peptidoglycan and lipid OM in Gram-negative.',
          points: 10
        },
        {
          id: 'ms-q-7',
          type: 'multiple_choice',
          question: 'What two alternating amino sugar subunits comprise the polysaccharide backbone of bacterial peptidoglycan (murein)?',
          options: [
            'Glucose and fructose',
            'N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM)',
            'Galactose and mannose',
            'Ribose and deoxyribose'
          ],
          correctAnswer: 'N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM)',
          explanation: 'Peptidoglycan is a polymer of alternating NAG and NAM glycan chains cross-linked by peptides.',
          points: 10
        },
        {
          id: 'ms-q-8',
          type: 'multiple_choice',
          question: 'Which enzyme cross-links adjacent layers of peptidoglycan via short peptide chains to provide cell wall rigidity?',
          options: ['DNA polymerase', 'Transpeptidase enzyme', 'Catalase', 'Amylase'],
          correctAnswer: 'Transpeptidase enzyme',
          explanation: 'Bacterial transpeptidase catalyzes peptide cross-linking of peptidoglycan chains.',
          points: 10
        },
        {
          id: 'ms-q-9',
          type: 'multiple_choice',
          question: 'Which cell wall components are uniquely embedded across the thick peptidoglycan layer of Gram-positive bacteria?',
          options: [
            'Lipopolysaccharide (LPS) and porins',
            'Teichoic acid (TA) and lipoteichoic acid (LTA)',
            'Arabinogalactan and mycolic acid',
            'Outer membrane lipid bilayers'
          ],
          correctAnswer: 'Teichoic acid (TA) and lipoteichoic acid (LTA)',
          explanation: 'Gram-positive walls possess teichoic and lipoteichoic acids spanning their thick peptidoglycan.',
          points: 10
        },
        {
          id: 'ms-q-10',
          type: 'multiple_choice',
          question: 'What major lipid-rich structure surrounds the thin peptidoglycan layer of Gram-negative bacteria?',
          options: [
            'A thick wax coat of mycolic acid',
            'An outer membrane (OM) containing lipopolysaccharide (LPS) and porin channels',
            'A calcified chitin exoskeleton',
            'A cellulose wall impregnated with lignin'
          ],
          correctAnswer: 'An outer membrane (OM) containing lipopolysaccharide (LPS) and porin channels',
          explanation: 'Gram-negative bacteria possess an asymmetrical outer membrane with lipopolysaccharide (endotoxin) and porins.',
          points: 10
        },
        {
          id: 'ms-q-11',
          type: 'multiple_choice',
          question: 'What is the primary stain in the Gram staining protocol, and what color does it initially impart?',
          options: [
            'Safranin (pink/red)',
            'Crystal violet (purple/violet)',
            'Carbolfuchsin (bright pink)',
            'Methylene blue (blue)'
          ],
          correctAnswer: 'Crystal violet (purple/violet)',
          explanation: 'Crystal violet is the primary stain that colors all bacterial cells purple initially.',
          points: 10
        },
        {
          id: 'ms-q-12',
          type: 'multiple_choice',
          question: 'What chemical solution serves as the mordant in Gram staining, and what does it form with crystal violet?',
          options: [
            'Acid-alcohol forming a lipid precipitate',
            'Gram\'s iodine (aqueous iodine and potassium iodide) forming an insoluble CVI complex',
            'Silver nitrate forming colloidal silver',
            'Hydrogen peroxide forming oxygen gas'
          ],
          correctAnswer: 'Gram\'s iodine (aqueous iodine and potassium iodide) forming an insoluble CVI complex',
          explanation: 'Gram\'s iodine acts as a mordant, forming large crystal violet-iodine (CVI) complexes within the cell wall.',
          points: 10
        },
        {
          id: 'ms-q-13',
          type: 'multiple_choice',
          question: 'What is the composition and action of the decolorizing agent in Gram staining?',
          options: [
            '10% sodium hypochlorite bleach that oxidizes all peptidoglycan',
            'Acetone-alcohol (acetone + 95% ethanol) that dissolves outer membrane lipids in Gram-negatives and dehydrates peptidoglycan in Gram-positives',
            '3% hydrochloric acid in water that destroys crystal violet',
            'Pure distilled water that rinses off unbound stain'
          ],
          correctAnswer: 'Acetone-alcohol (acetone + 95% ethanol) that dissolves outer membrane lipids in Gram-negatives and dehydrates peptidoglycan in Gram-positives',
          explanation: 'Acetone-alcohol strips lipids and permeabilizes Gram-negative walls while dehydrating Gram-positive peptidoglycan, trapping CVI.',
          points: 10
        },
        {
          id: 'ms-q-14',
          type: 'multiple_choice',
          question: 'What is the counterstain used in the Gram stain protocol, and what color does it impart to Gram-negative bacteria?',
          options: [
            'Methylene blue imparting deep blue',
            'Safranin imparting pink or light red',
            'Malachite green imparting emerald green',
            'Carbolfuchsin imparting dark violet'
          ],
          correctAnswer: 'Safranin imparting pink or light red',
          explanation: 'Safranin counterstains decolorized Gram-negative cells pink/red.',
          points: 10
        },
        {
          id: 'ms-q-15',
          type: 'multiple_choice',
          question: 'What is considered the single most critical and error-prone phase of the Gram staining procedure?',
          options: [
            'The initial water rinse',
            'The decolorization step with acetone-alcohol',
            'Air drying the clean slide',
            'Applying immersion oil to the lens'
          ],
          correctAnswer: 'The decolorization step with acetone-alcohol',
          explanation: 'Over- or under-decolorizing is the primary source of diagnostic error in Gram staining.',
          points: 10
        },
        {
          id: 'ms-q-16',
          type: 'multiple_choice',
          question: 'What artifact occurs if a Gram-stained smear is over-decolorized with acetone-alcohol?',
          options: [
            'Gram-positive organisms lose the primary stain and appear false Gram-negative (pink/red)',
            'Gram-negative organisms retain crystal violet and appear purple',
            'All bacteria completely dissolve and disappear from the slide',
            'The slide turns completely opaque black'
          ],
          correctAnswer: 'Gram-positive organisms lose the primary stain and appear false Gram-negative (pink/red)',
          explanation: 'Excessive decolorization leaches CVI from Gram-positive cells, causing them to appear false Gram-negative.',
          points: 10
        },
        {
          id: 'ms-q-17',
          type: 'multiple_choice',
          question: 'Why must Gram stains be performed on fresh bacterial cultures no older than 24 hours?',
          options: [
            'Older cultures stop producing safranin',
            'Aging Gram-positive cells lose cell wall peptidoglycan integrity and appear Gram-variable (mixed purple and pink)',
            'Bacteria become completely transparent after 24 hours',
            'Older cultures melt under the microscope light'
          ],
          correctAnswer: 'Aging Gram-positive cells lose cell wall peptidoglycan integrity and appear Gram-variable (mixed purple and pink)',
          explanation: 'Cell wall degradation in aging cultures impairs CVI retention, producing a misleading Gram-variable pattern.',
          points: 10
        },
        {
          id: 'ms-q-18',
          type: 'multiple_choice',
          question: 'Which of the following organisms CANNOT be detected by a standard Gram stain because they lack a peptidoglycan cell wall?',
          options: ['Staphylococcus aureus', 'Mycoplasma and Ureaplasma', 'Escherichia coli', 'Bacillus subtilis'],
          correctAnswer: 'Mycoplasma and Ureaplasma',
          explanation: 'Mycoplasma and Ureaplasma lack cell walls entirely and cannot be detected with Gram stain.',
          points: 10
        },
        {
          id: 'ms-q-19',
          type: 'multiple_choice',
          question: 'Which bacterial genera are naturally prone to under-decolorization and may mistakenly appear Gram-positive?',
          options: [
            'Streptococcus and Enterococcus',
            'Neisseria, Moraxella, and Acinetobacter',
            'Lactobacillus and Listeria',
            'Pseudomonas and Salmonella'
          ],
          correctAnswer: 'Neisseria, Moraxella, and Acinetobacter',
          explanation: 'Neisseria, Moraxella, and Acinetobacter resist decolorizer and readily appear false Gram-positive if not carefully decolorized.',
          points: 10
        },
        {
          id: 'ms-q-20',
          type: 'multiple_choice',
          question: 'What microscopic color appearance designates Gram-positive versus Gram-negative bacteria?',
          options: [
            'Gram-positive appear dark blue/purple; Gram-negative appear light red/pink',
            'Gram-positive appear green; Gram-negative appear yellow',
            'Gram-positive appear blue; Gram-negative appear green',
            'Gram-positive appear colorless; Gram-negative appear purple'
          ],
          correctAnswer: 'Gram-positive appear dark blue/purple; Gram-negative appear light red/pink',
          explanation: 'Gram-positive bacteria appear purple/violet; Gram-negative appear pink/red.',
          points: 10
        },
        {
          id: 'ms-q-21',
          type: 'multiple_choice',
          question: 'What unique chemical component in the cell walls of acid-fast bacteria confers acid-fastness?',
          options: ['Teichoic acid', 'Lipid-rich mycolic acids', 'Chitin polymers', 'Flagellin proteins'],
          correctAnswer: 'Lipid-rich mycolic acids',
          explanation: 'Mycolic acids are branched-chain beta-hydroxy fatty acids that form a waxy, acid-resistant barrier.',
          points: 10
        },
        {
          id: 'ms-q-22',
          type: 'multiple_choice',
          question: 'Which two major bacterial genera demonstrate acid-fastness in clinical diagnostic microbiology?',
          options: [
            'Staphylococcus and Streptococcus',
            'Mycobacterium and Nocardia',
            'Escherichia and Salmonella',
            'Clostridium and Bacillus'
          ],
          correctAnswer: 'Mycobacterium and Nocardia',
          explanation: 'Mycobacterium (e.g., M. tuberculosis, M. leprae) and Nocardia are classic acid-fast genera.',
          points: 10
        },
        {
          id: 'ms-q-23',
          type: 'multiple_choice',
          question: 'Which of the following non-bacterial biological structures also exhibits acid-fastness?',
          options: [
            'Cryptosporidium parvum oocysts and mammalian sperm heads',
            'Red blood cell hemoglobin',
            'Gram-negative endotoxin molecules',
            'Plant leaf stomatal pores'
          ],
          correctAnswer: 'Cryptosporidium parvum oocysts and mammalian sperm heads',
          explanation: 'Cryptosporidium oocysts, sperm heads, and bacterial endospores demonstrate acid-fast staining.',
          points: 10
        },
        {
          id: 'ms-q-24',
          type: 'multiple_choice',
          question: 'What is the primary stain used in the Ziehl-Neelsen acid-fast staining method?',
          options: ['Crystal violet', 'Carbolfuchsin (CF)', 'Safranin', 'Malachite green'],
          correctAnswer: 'Carbolfuchsin (CF)',
          explanation: 'Carbolfuchsin is a lipid-soluble phenolic primary stain that penetrates waxy mycolic acid.',
          points: 10
        },
        {
          id: 'ms-q-25',
          type: 'multiple_choice',
          question: 'Why is heat applied with an alcohol lamp until steam rises during the Ziehl-Neelsen acid-fast staining method?',
          options: [
            'To boil and vaporize all bacteria from the smear',
            'To soften the waxy mycolic acid barrier and facilitate stain penetration into the bacterial cell',
            'To activate flagellar enzymes for motility',
            'To turn the carbolfuchsin into safranin'
          ],
          correctAnswer: 'To soften the waxy mycolic acid barrier and facilitate stain penetration into the bacterial cell',
          explanation: 'Heating carbolfuchsin to steaming facilitates penetration across the waxy mycolic acid layer.',
          points: 10
        },
        {
          id: 'ms-q-26',
          type: 'multiple_choice',
          question: 'What is the decolorizing agent in acid-fast staining, and how does it differ from Gram stain decolorizer?',
          options: [
            'Acetone-alcohol; identical to Gram decolorizer',
            'Acid-alcohol (3% HCl in 95% ethanol); much more aggressive than Gram decolorizer',
            'Distilled water with liquid soap',
            '10% sodium hypochlorite bleach'
          ],
          correctAnswer: 'Acid-alcohol (3% HCl in 95% ethanol); much more aggressive than Gram decolorizer',
          explanation: 'Acid-alcohol contains 3% hydrochloric acid in ethanol, stripping stain from non-acid-fast bacteria.',
          points: 10
        },
        {
          id: 'ms-q-27',
          type: 'multiple_choice',
          question: 'What counterstain is applied in the Ziehl-Neelsen acid-fast procedure, and what color do non-acid-fast organisms become?',
          options: [
            'Safranin turning cells bright pink',
            'Methylene blue turning non-acid-fast organisms blue',
            'Crystal violet turning cells purple',
            'Gram\'s iodine turning cells yellow'
          ],
          correctAnswer: 'Methylene blue turning non-acid-fast organisms blue',
          explanation: 'Methylene blue provides contrast by staining decolorized non-acid-fast cells blue.',
          points: 10
        },
        {
          id: 'ms-q-28',
          type: 'multiple_choice',
          question: 'What microscopic color interpretation designates an acid-fast positive versus acid-fast negative organism?',
          options: [
            'Acid-fast appear red or pink; non-acid-fast appear blue',
            'Acid-fast appear blue; non-acid-fast appear pink',
            'Acid-fast appear green; non-acid-fast appear colorless',
            'Acid-fast appear purple; non-acid-fast appear green'
          ],
          correctAnswer: 'Acid-fast appear red or pink; non-acid-fast appear blue',
          explanation: 'Acid-fast bacilli (AFB) appear bright red/pink; background non-acid-fast flora appear blue.',
          points: 10
        },
        {
          id: 'ms-q-29',
          type: 'multiple_choice',
          question: 'How does the Kinyoun method of acid-fast staining differ from the Ziehl-Neelsen method?',
          options: [
            'It uses silver nitrate instead of carbolfuchsin',
            'It does not require heat (cold method), but is considered historic and obsolete',
            'It only stains Gram-positive bacteria',
            'It uses boiling sulfuric acid'
          ],
          correctAnswer: 'It does not require heat (cold method), but is considered historic and obsolete',
          explanation: 'The Kinyoun cold method uses a higher concentration of carbolfuchsin without heating, but is largely obsolete.',
          points: 10
        },
        {
          id: 'ms-q-30',
          type: 'multiple_choice',
          question: 'What is a bacterial capsule, and what pathogenic advantage does it provide to the microorganism?',
          options: [
            'A motility organelle that spins clockwise',
            'A thick, tightly bound polysaccharide glycocalyx that acts as a virulence factor preventing phagocytosis by host immune cells',
            'A reproductive cyst that produces millions of bacterial spores',
            'An endotoxin that lyses red blood cells'
          ],
          correctAnswer: 'A thick, tightly bound polysaccharide glycocalyx that acts as a virulence factor preventing phagocytosis by host immune cells',
          explanation: 'Capsules shield bacteria from macrophage recognition and phagocytosis, serving as potent virulence factors.',
          points: 10
        },
        {
          id: 'ms-q-31',
          type: 'multiple_choice',
          question: 'Why is heat-fixation strictly avoided during capsule staining procedures?',
          options: [
            'Because heat melts the microscope stage',
            'Because bacterial capsules are fragile and heat destroys or shrinks them, producing false artifacts',
            'Because heat converts capsules into toxic cyanide gas',
            'Because capsules turn purple when heated'
          ],
          correctAnswer: 'Because bacterial capsules are fragile and heat destroys or shrinks them, producing false artifacts',
          explanation: 'Heat-fixing destroys or distorts delicate polysaccharide capsules, so negative staining is done unfixed.',
          points: 10
        },
        {
          id: 'ms-q-32',
          type: 'multiple_choice',
          question: 'How do capsules appear microscopically under a negative capsule staining procedure?',
          options: [
            'As dense dark purple dots in the center of the cell',
            'As clear, unstained halos surrounding the stained bacterial cell against a dark background',
            'As bright yellow squiggly threads protruding from the cell',
            'As dark black granules scattered in the cytoplasm'
          ],
          correctAnswer: 'As clear, unstained halos surrounding the stained bacterial cell against a dark background',
          explanation: 'Negative staining leaves the non-ionic capsule unstained as a clear halo around the stained cell body.',
          points: 10
        },
        {
          id: 'ms-q-33',
          type: 'multiple_choice',
          question: 'Why is a silver stain employed to visualize bacterial flagella and thin spirochetes (e.g., Treponema pallidum)?',
          options: [
            'Because flagella are too acidic for basic dyes',
            'Because flagella and spirochetes are too thin to be seen under light microscopy, and silver nitrate precipitates to thicken them',
            'Because silver kills bacteria instantly without decolorization',
            'Because silver stain makes flagella glow with green fluorescence'
          ],
          correctAnswer: 'Because flagella and spirochetes are too thin to be seen under light microscopy, and silver nitrate precipitates to thicken them',
          explanation: 'Silver deposition layers along the ultra-thin flagellar shaft, thickening it past the light microscope resolution limit.',
          points: 10
        },
        {
          id: 'ms-q-34',
          type: 'multiple_choice',
          question: 'What are attenuated (live) vaccines?',
          options: [
            'Vaccines containing pathogens killed by boiling formalin',
            'Vaccines prepared from living but weakened pathogens with reduced virulence',
            'Vaccines containing pure viral plasmid DNA only',
            'Vaccines consisting of chemically synthesized amino acids'
          ],
          correctAnswer: 'Vaccines prepared from living but weakened pathogens with reduced virulence',
          explanation: 'Attenuated vaccines contain living organisms with diminished virulence that replicate without causing disease.',
          points: 10
        },
        {
          id: 'ms-q-35',
          type: 'multiple_choice',
          question: 'Why should attenuated (live) vaccines NOT be administered to immunosuppressed or immunocompromised individuals?',
          options: [
            'Because live vaccines are completely inactive in immunocompromised patients',
            'Because the weakened pathogen can replicate unchecked, causing severe or fatal vaccine-strain disease',
            'Because live vaccines neutralize all natural antibodies in the body',
            'Because immunosuppressed patients cannot swallow oral vaccines'
          ],
          correctAnswer: 'Because the weakened pathogen can replicate unchecked, causing severe or fatal vaccine-strain disease',
          explanation: 'Immunocompromised individuals cannot control even attenuated replication, risking disseminated vaccine-induced illness.',
          points: 10
        },
        {
          id: 'ms-q-36',
          type: 'multiple_choice',
          question: 'Which of the following is an example of an attenuated viral vaccine?',
          options: [
            'Subcutaneous Salk polio vaccine',
            'Oral Sabin polio, measles (rubeola), mumps, and rubella (MMR) vaccines',
            'Inactivated rabies vaccine',
            'Hepatitis B recombinant subunit vaccine'
          ],
          correctAnswer: 'Oral Sabin polio, measles (rubeola), mumps, and rubella (MMR) vaccines',
          explanation: 'Oral Sabin polio, MMR, varicella, and yellow fever are live attenuated viral vaccines.',
          points: 10
        },
        {
          id: 'ms-q-37',
          type: 'multiple_choice',
          question: 'Which attenuated bacterial vaccine is widely administered globally for protection against tuberculosis?',
          options: ['DTP toxoid', 'BCG (Bacille Calmette-Guérin) vaccine', 'Hib conjugate vaccine', 'Anthrax subunit vaccine'],
          correctAnswer: 'BCG (Bacille Calmette-Guérin) vaccine',
          explanation: 'BCG is a live attenuated bacterial vaccine derived from Mycobacterium bovis.',
          points: 10
        },
        {
          id: 'ms-q-38',
          type: 'multiple_choice',
          question: 'What are inactivated (killed) vaccines?',
          options: [
            'Vaccines produced by gene editing of patient stem cells',
            'Vaccines made from pathogens that have been killed using heat or chemicals',
            'Vaccines containing living viral capsids only',
            'Vaccines derived from plant cladophyll sap'
          ],
          correctAnswer: 'Vaccines made from pathogens that have been killed using heat or chemicals',
          explanation: 'Inactivated vaccines contain dead pathogens unable to replicate, offering enhanced safety.',
          points: 10
        },
        {
          id: 'ms-q-39',
          type: 'multiple_choice',
          question: 'What is a major clinical limitation of inactivated vaccines compared to live attenuated vaccines?',
          options: [
            'They are lethal to healthy adults',
            'They are generally less effective and require booster doses to maintain protective antibody titers',
            'They must be boiled immediately before injection',
            'They can only be produced for fungal organisms'
          ],
          correctAnswer: 'They are generally less effective and require booster doses to maintain protective antibody titers',
          explanation: 'Because non-replicating antigens stimulate weaker cellular immunity, inactivated vaccines require booster regimens.',
          points: 10
        },
        {
          id: 'ms-q-40',
          type: 'multiple_choice',
          question: 'Which of the following polio vaccines is an inactivated (killed) formulation administered subcutaneously?',
          options: ['Oral Sabin vaccine', 'Salk vaccine (inactivated polio vaccine)', 'BCG vaccine', 'ZyCoV-D vaccine'],
          correctAnswer: 'Salk vaccine (inactivated polio vaccine)',
          explanation: 'The Salk IPV is a killed formalin-inactivated polio vaccine administered by injection.',
          points: 10
        },
        {
          id: 'ms-q-41',
          type: 'multiple_choice',
          question: 'What defines a subunit or acellular vaccine?',
          options: [
            'It contains live bacteria mixed with mineral oil',
            'It uses specific antigenic portions (proteins or capsules) of a pathogen rather than the whole microbe',
            'It consists of whole killed viruses suspended in formaldehyde',
            'It uses non-pathogenic amoebas to deliver nutrients'
          ],
          correctAnswer: 'It uses specific antigenic portions (proteins or capsules) of a pathogen rather than the whole microbe',
          explanation: 'Subunit vaccines contain purified antigenic fragments, minimizing reactogenicity while eliciting targeted immunity.',
          points: 10
        },
        {
          id: 'ms-q-42',
          type: 'multiple_choice',
          question: 'Which common human immunization is a recombinant subunit vaccine?',
          options: ['Hepatitis B vaccine (recombinant surface antigen HBsAg)', 'Oral Sabin polio vaccine', 'BCG tuberculosis vaccine', 'Smallpox vaccine'],
          correctAnswer: 'Hepatitis B vaccine (recombinant surface antigen HBsAg)',
          explanation: 'Recombinant Hepatitis B vaccine uses cloned HBsAg protein produced in yeast cells.',
          points: 10
        },
        {
          id: 'ms-q-43',
          type: 'multiple_choice',
          question: 'How are conjugate vaccines constructed, and what immunological hurdle do they overcome?',
          options: [
            'They mix two live viruses together to create a hybrid strain',
            'They link poorly immunogenic bacterial capsular polysaccharides to protein carriers to stimulate robust T-dependent immune memory in infants',
            'They inject naked bacterial RNA directly into the liver',
            'They replace microbial cell walls with artificial plastics'
          ],
          correctAnswer: 'They link poorly immunogenic bacterial capsular polysaccharides to protein carriers to stimulate robust T-dependent immune memory in infants',
          explanation: 'Conjugating polysaccharide antigens to carrier proteins recruits helper T cells, enabling infants to mount protective memory.',
          points: 10
        },
        {
          id: 'ms-q-44',
          type: 'multiple_choice',
          question: 'Which life-saving childhood vaccine protects against Haemophilus influenzae type b using conjugate technology?',
          options: ['MMR vaccine', 'Hib vaccine', 'Salk polio vaccine', 'BCG vaccine'],
          correctAnswer: 'Hib vaccine',
          explanation: 'The Hib conjugate vaccine links H. influenzae capsular polysaccharide to a carrier protein.',
          points: 10
        },
        {
          id: 'ms-q-45',
          type: 'multiple_choice',
          question: 'What is a toxoid vaccine?',
          options: [
            'A vaccine composed of active fungal venom',
            'A bacterial exotoxin that has been rendered non-toxic by heat or chemical treatment while retaining immunogenicity',
            'A vaccine that injects live venomous snakes into horses',
            'An antibiotic solution mixed with safranin dye'
          ],
          correctAnswer: 'A bacterial exotoxin that has been rendered non-toxic by heat or chemical treatment while retaining immunogenicity',
          explanation: 'Toxoids are inactivated exotoxins (e.g., treated with formalin) that stimulate antitoxin production without causing toxicity.',
          points: 10
        },
        {
          id: 'ms-q-46',
          type: 'multiple_choice',
          question: 'Which two classic childhood immunizations are toxoid vaccines?',
          options: ['Diphtheria and tetanus toxoids', 'Measles and mumps vaccines', 'Hepatitis A and Hepatitis B vaccines', 'Polio and rabies vaccines'],
          correctAnswer: 'Diphtheria and tetanus toxoids',
          explanation: 'Diphtheria and tetanus vaccines are formulated as formalin-detoxified exotoxins (toxoids).',
          points: 10
        },
        {
          id: 'ms-q-47',
          type: 'multiple_choice',
          question: 'What is a DNA vaccine, such as ZyCoV-D or West Nile-Innovator?',
          options: [
            'A vaccine containing live human white blood cells',
            'A vaccine where a specific gene from a pathogen is inserted into plasmid DNA and injected into host tissues to express antigens',
            'A solution of pure viral DNA dissolved in acid-alcohol',
            'A vaccine containing synthetic ribosomes only'
          ],
          correctAnswer: 'A vaccine where a specific gene from a pathogen is inserted into plasmid DNA and injected into host tissues to express antigens',
          explanation: 'DNA vaccines deliver engineered plasmid vectors into host muscle/skin cells, driving endogenous antigen production.',
          points: 10
        },
        {
          id: 'ms-q-48',
          type: 'multiple_choice',
          question: 'What is an autogenous vaccine, and in what context is it primarily employed?',
          options: [
            'A vaccine produced globally for millions of school children',
            'A custom vaccine prepared from pathogens isolated from a patient\'s localized infection, killed, and injected back into the same individual when commercial vaccines fail',
            'A vaccine synthesized completely by computer artificial intelligence',
            'A live vaccine given only to healthy newborn infants'
          ],
          correctAnswer: 'A custom vaccine prepared from pathogens isolated from a patient\'s localized infection, killed, and injected back into the same individual when commercial vaccines fail',
          explanation: 'Autogenous vaccines are bespoke killed formulations prepared from a patient\'s own isolating culture (e.g., chronic veterinary herds or staphylococcal boils).',
          points: 10
        },
        {
          id: 'ms-q-49',
          type: 'multiple_choice',
          question: 'Which bacterial vaccine against whooping cough is formulated as an acellular preparation?',
          options: ['BCG vaccine', 'Acellular pertussis (aP in DTaP)', 'Salk polio vaccine', 'Hib conjugate vaccine'],
          correctAnswer: 'Acellular pertussis (aP in DTaP)',
          explanation: 'Acellular pertussis contains purified Bordetella pertussis antigens rather than whole killed cells.',
          points: 10
        },
        {
          id: 'ms-q-50',
          type: 'multiple_choice',
          question: 'What color do Mycobacterium tuberculosis cells appear after correct completion of the Ziehl-Neelsen acid-fast stain?',
          options: ['Dark purple / violet', 'Bright red / pink', 'Deep royal blue', 'Light amber yellow'],
          correctAnswer: 'Bright red / pink',
          explanation: 'Acid-fast M. tuberculosis retains the red/pink carbolfuchsin stain despite acid-alcohol decolorization.',
          points: 10
        }
      ]
    },
    {
      id: 'rev-stains-quiz-50',
      name: '50-Item Practice Quiz',
      fileName: 'Microbiology_Stains_Vaccines_50Q_Quiz.pdf',
      fileSnippet: '50 multiple choice questions testing staining mechanisms, cell wall biochemistry, acid-fastness, and all 7 vaccine types with shuffled choices.',
      testDate: '2026-10-26',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [] // Populated by reference to rev-stains-notes questions in code
    },
    {
      id: 'rev-stains-id-15',
      name: '15-Item Identification Exam',
      fileName: 'Microbiology_Stains_Vaccines_15_Identification.pdf',
      fileSnippet: '15 identification items covering stain reagents, cell wall enzymes, diagnostic AFB concepts, and vaccine types.',
      testDate: '2026-10-26',
      questionTypes: ['identification'],
      questionCount: 15,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [
        {
          id: 'ms-id-1',
          type: 'identification',
          question: 'What microbiological staining procedure applies only a single dye to observe bacterial morphology and arrangement without differentiating cell types?',
          correctAnswer: 'Simple Staining',
          explanation: 'Simple staining uses a single dye (e.g., methylene blue) for basic contrast and morphology.',
          points: 10
        },
        {
          id: 'ms-id-2',
          type: 'identification',
          question: 'Name the Danish physician who invented the Gram stain in 1884 while working to identify pneumonia pathogens.',
          correctAnswer: 'Hans Christian Gram',
          explanation: 'Dr. Hans Christian Gram formulated the differential Gram stain.',
          points: 10
        },
        {
          id: 'ms-id-3',
          type: 'identification',
          question: 'What are the two alternating chemical amino sugar subunits that form the polysaccharide backbone of bacterial peptidoglycan?',
          correctAnswer: 'N-acetylglucosamine and N-acetylmuramic acid',
          explanation: 'Peptidoglycan is composed of alternating NAG and NAM glycan subunits.',
          points: 10
        },
        {
          id: 'ms-id-4',
          type: 'identification',
          question: 'What bacterial enzyme catalyzes the cross-linking of peptidoglycan layers via short peptide chains to establish cell wall rigidity?',
          correctAnswer: 'Transpeptidase',
          explanation: 'Transpeptidase (penicillin-binding protein) forms peptide cross-links in peptidoglycan.',
          points: 10
        },
        {
          id: 'ms-id-5',
          type: 'identification',
          question: 'What is the primary stain in the Gram staining protocol that initially imparts a violet or purple color to all cells?',
          correctAnswer: 'Crystal Violet',
          explanation: 'Crystal violet is the primary stain in Gram staining.',
          points: 10
        },
        {
          id: 'ms-id-6',
          type: 'identification',
          question: 'What chemical reagent (aqueous iodine and potassium iodide) acts as the mordant in Gram staining, forming the insoluble CVI complex?',
          correctAnswer: 'Gram\'s Iodine',
          explanation: 'Gram\'s iodine acts as a mordant to trap crystal violet within peptidoglycan.',
          points: 10
        },
        {
          id: 'ms-id-7',
          type: 'identification',
          question: 'What reagent composed of acetone and 95% ethanol serves as the critical decolorizer in the Gram stain procedure?',
          correctAnswer: 'Acetone-Alcohol',
          explanation: 'Acetone-alcohol selectively decolorizes Gram-negative bacteria by dissolving their lipid outer membrane.',
          points: 10
        },
        {
          id: 'ms-id-8',
          type: 'identification',
          question: 'What basic dye serves as the counterstain in Gram staining, coloring decolorized Gram-negative bacteria pink or red?',
          correctAnswer: 'Safranin',
          explanation: 'Safranin imparts a pink/red color to decolorized Gram-negative cells.',
          points: 10
        },
        {
          id: 'ms-id-9',
          type: 'identification',
          question: 'What lipid-rich, waxy fatty acids in the cell walls of Mycobacterium and Nocardia are responsible for acid-fastness?',
          correctAnswer: 'Mycolic Acids',
          explanation: 'Mycolic acids create a waxy, hydrophobic barrier that prevents standard dye penetration and acid decolorization.',
          points: 10
        },
        {
          id: 'ms-id-10',
          type: 'identification',
          question: 'What is the hot carbolfuchsin staining procedure for acid-fast bacilli that uses steam heating to penetrate waxy cell walls called?',
          correctAnswer: 'Ziehl-Neelsen Method',
          explanation: 'The Ziehl-Neelsen hot method uses steaming carbolfuchsin to stain acid-fast bacilli.',
          points: 10
        },
        {
          id: 'ms-id-11',
          type: 'identification',
          question: 'What aggressive decolorizing agent consisting of 3% hydrochloric acid in 95% ethanol is utilized in acid-fast staining?',
          correctAnswer: 'Acid-Alcohol',
          explanation: 'Acid-alcohol strips carbolfuchsin from all non-acid-fast cells.',
          points: 10
        },
        {
          id: 'ms-id-12',
          type: 'identification',
          question: 'What counterstain is applied in the Ziehl-Neelsen method, rendering non-acid-fast organisms deep blue under the microscope?',
          correctAnswer: 'Methylene Blue',
          explanation: 'Methylene blue counterstains non-acid-fast bacteria and host background debris blue.',
          points: 10
        },
        {
          id: 'ms-id-13',
          type: 'identification',
          question: 'What staining technique detects gelatinous bacterial capsules as clear unstained halos without using heat-fixation?',
          correctAnswer: 'Capsule Stain',
          explanation: 'Capsule stain (negative staining) outlines the fragile capsule without heat distortion.',
          points: 10
        },
        {
          id: 'ms-id-14',
          type: 'identification',
          question: 'What class of vaccines uses living pathogens with reduced virulence that are strictly contraindicated in immunosuppressed patients?',
          correctAnswer: 'Attenuated Vaccines',
          explanation: 'Live attenuated vaccines (e.g., MMR, BCG, Sabin polio) contain weakened living microbes.',
          points: 10
        },
        {
          id: 'ms-id-15',
          type: 'identification',
          question: 'What type of vaccine is formulated by detoxifying bacterial exotoxins with heat or chemicals while preserving antigenicity (e.g., tetanus)?',
          correctAnswer: 'Toxoid Vaccines',
          explanation: 'Toxoids (such as tetanus and diphtheria toxoids) are inactivated bacterial exotoxins.',
          points: 10
        }
      ]
    }
  ]
};

// Sync rev-stains-quiz-50 questions with rev-stains-notes questions
microbioStainsVaccinesSubject.reviewers[1].questions = [...microbioStainsVaccinesSubject.reviewers[0].questions];
