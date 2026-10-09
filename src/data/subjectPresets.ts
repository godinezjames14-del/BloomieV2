import { Subject } from '../types';

export const predefinedSubjectPacks: {
  id: string;
  name: string;
  description: string;
  badge: string;
  color: string;
  sampleSourcesCount: number;
  subjectData: Subject;
}[] = [
  {
    id: 'pack-parasitology',
    name: 'Clinical Parasitology',
    description: 'Medical protozoology, helminthology, stool examinations, and parasite life cycles.',
    badge: 'Microbiology & Parasites',
    color: '#10B981',
    sampleSourcesCount: 2,
    subjectData: {
      id: 'subj-parasitology',
      name: 'Clinical Parasitology',
      description: 'Medical helminthology, intestinal protozoa, stool examination protocols, and life cycles.',
      color: '#10B981',
      reviewers: [
        {
          id: 'rev-para-notes',
          name: 'Lecture Notes – Intestinal Protozoa & Helminthes',
          fileName: 'Parasitology_Lecture_Intestinal_Helminthes.pdf',
          fileSnippet: 'Comprehensive coverage of Ascaris lumbricoides, Giardia duodenalis, hookworms, and fecal flotation techniques.',
          testDate: '2026-10-14',
          questionTypes: ['multiple_choice', 'identification', 'enumeration'],
          questionCount: 25,
          createdAt: '2026-10-09',
          notesScrollProgress: 0,
          notes: [
            {
              id: 'para-n-1',
              title: 'Ascaris lumbricoides (Giant Intestinal Roundworm)',
              category: 'Concept',
              content: 'Ascaris lumbricoides is the largest nematode parasitizing the human intestine. Transmission occurs via ingestion of embryonated infective ova in soil or contaminated food. Larval migration through the lungs causes Loeffler syndrome (pulmonary eosinophilia).',
              importance: 'high',
              tags: ['Nematode', 'Loeffler Syndrome', 'Soil-Transmitted'],
              highlighted: true
            },
            {
              id: 'para-n-2',
              title: 'Giardia duodenalis (Lamblia) Morphology',
              category: 'Definition',
              content: 'Flagellated protozoan causing malabsorption syndrome. The trophozoite is pear-shaped with bilateral symmetry, two nuclei ("falling-leaf" motility, "old man appearance"), and a ventral sucking disk used for duodenal adhesion.',
              importance: 'high',
              tags: ['Protozoa', 'Trophozoite', 'Falling-Leaf'],
              highlighted: true
            },
            {
              id: 'para-n-3',
              title: 'Hookworm Species Differentiation',
              category: 'Key Takeaway',
              content: 'Necator americanus possesses semilunar cutting plates, while Ancylostoma duodenale bears pairs of pointed ventral teeth. Both cause microcytic hypochromic iron deficiency anemia due to intestinal blood consumption.',
              importance: 'high',
              tags: ['Hookworm', 'Microcytic Anemia', 'Cutting Plates'],
              highlighted: false
            },
            {
              id: 'para-n-4',
              title: 'Formalin-Ethyl Acetate Concentration Technique (FECT)',
              category: 'Summary',
              content: '1. Formalin: fixes and preserves protozoan cysts and helminth eggs.\n2. Ethyl acetate: extracts lipids and organic debris.\n3. Centrifugation produces 4 layers: ethyl acetate, debris plug, formalin, and sediment containing parasites.',
              importance: 'medium',
              tags: ['FECT', 'Fecal Analysis', 'Laboratory Protocol'],
              highlighted: true
            }
          ],
          questions: [
            {
              id: 'para-q-1',
              type: 'multiple_choice',
              question: 'Which characteristic microscopic motility is diagnostic for Giardia duodenalis trophozoites in fresh wet mounts?',
              options: [
                'Rapid progressive darting motility',
                'Slow directional pseudopodial crawling',
                'Falling-leaf tumbling motility',
                'Rigid corkscrew spiral rotation'
              ],
              correctAnswer: 'Falling-leaf tumbling motility',
              explanation: 'Giardia duodenalis trophozoites characteristically exhibit a tumbling "falling-leaf" motion under brightfield microscopy.',
              points: 4
            },
            {
              id: 'para-q-2',
              type: 'multiple_choice',
              question: 'What morphological feature distinguishes Necator americanus adult worms from Ancylostoma duodenale?',
              options: [
                'Semilunar chitinous cutting plates in the buccal capsule',
                'Two pairs of sharp ventral teeth',
                'Three prominent trilobed lips with sensory papillae',
                'Terminal cuticular spine on the posterior extremity'
              ],
              correctAnswer: 'Semilunar chitinous cutting plates in the buccal capsule',
              explanation: 'Necator americanus (New World hookworm) has cutting plates, whereas Ancylostoma duodenale has ventral teeth.',
              points: 4
            },
            {
              id: 'para-q-3',
              type: 'identification',
              question: 'Name the transient pulmonary condition characterized by cough, wheezing, and marked eosinophilia caused by trans-alveolar larval migration of Ascaris.',
              correctAnswer: 'Loeffler syndrome',
              explanation: 'Loeffler syndrome (Loefflers pneumonia) occurs when helminth larvae migrate through alveolar capillaries.',
              points: 4
            },
            {
              id: 'para-q-4',
              type: 'enumeration',
              question: 'Enumerate three classic soil-transmitted helminths (STHs) targeted in global deworming programs.',
              correctAnswer: ['Ascaris lumbricoides', 'Trichuris trichiura', 'Necator americanus'],
              explanation: 'The classic unholy trinity of STHs comprises Ascaris (roundworm), Trichuris (whipworm), and hookworms.',
              points: 6
            }
          ]
        },
        {
          id: 'rev-para-quiz',
          name: 'Quiz 2 – Stool Concentration & Protozoan Cysts',
          fileName: 'Parasitology_Quiz2_Concentration_Cysts.pdf',
          fileSnippet: '25-item assessment covering FECT, Kato-Katz, Entamoeba histolytica vs E. coli, and malarial blood smears.',
          testDate: '2026-10-16',
          questionTypes: ['multiple_choice', 'identification'],
          questionCount: 25,
          createdAt: '2026-10-09',
          notes: [],
          questions: [
            {
              id: 'pq-1',
              type: 'multiple_choice',
              question: 'Which of the following differentiates the cyst of Entamoeba histolytica from Entamoeba coli?',
              options: [
                'Maximum of 8 nuclei with eccentric karyosome',
                'Maximum of 4 nuclei with central pinpoint karyosome and smooth chromatoid bars',
                'Presence of a large glycogen vacuole pushing nuclei to periphery',
                'Double-layered striated cell wall with polar plugs'
              ],
              correctAnswer: 'Maximum of 4 nuclei with central pinpoint karyosome and smooth chromatoid bars',
              explanation: 'Entamoeba histolytica cysts mature to 4 nuclei with centrally positioned karyosomes and rounded-end chromatoid bars.',
              points: 4
            },
            {
              id: 'pq-2',
              type: 'multiple_choice',
              question: 'In the Formalin-Ethyl Acetate Concentration Technique (FECT), where are the helminth eggs and protozoan cysts concentrated after centrifugation?',
              options: [
                'In the top solvent ethyl acetate layer',
                'Within the middle fatty debris plug',
                'Suspended in the aqueous formalin layer',
                'At the bottom sediment pellet'
              ],
              correctAnswer: 'At the bottom sediment pellet',
              explanation: 'FECT is a sedimentation procedure; heavy parasites settle at the bottom pellet.',
              points: 4
            },
            {
              id: 'pq-3',
              type: 'multiple_choice',
              question: 'Which helminth ovum characteristically features asymmetric bipolar prominences ("bipolar plugs") and a barrel shape?',
              options: [
                'Enterobius vermicularis',
                'Trichuris trichiura',
                'Taenia solium',
                'Strongyloides stercoralis'
              ],
              correctAnswer: 'Trichuris trichiura',
              explanation: 'Trichuris trichiura (whipworm) ova are barrel/football-shaped with distinct mucoid bipolar plugs.',
              points: 4
            },
            {
              id: 'pq-4',
              type: 'multiple_choice',
              question: 'What is the diagnostic method of choice for detecting Enterobius vermicularis (pinworm) pinworm ova?',
              options: [
                'Formalin-ethyl acetate sedimentation from morning stool',
                'Cellophane (Scotch) tape preparation applied to the perianal region',
                'Buffered charcoal yeast extract agar culture',
                'Modified acid-fast staining of gastric aspirate'
              ],
              correctAnswer: 'Cellophane (Scotch) tape preparation applied to the perianal region',
              explanation: 'Gravid female pinworms migrate nocturnally to oviposit on perianal folds, sampled best with adhesive tape upon waking.',
              points: 4
            },
            {
              id: 'pq-5',
              type: 'multiple_choice',
              question: 'Which Plasmodium species is recognized by crescent or banana-shaped gametocytes in peripheral blood smears?',
              options: [
                'Plasmodium vivax',
                'Plasmodium malariae',
                'Plasmodium falciparum',
                'Plasmodium ovale'
              ],
              correctAnswer: 'Plasmodium falciparum',
              explanation: 'Plasmodium falciparum produces distinctive elongated, crescentic gametocytes.',
              points: 4
            }
          ]
        }
      ]
    }
  },
  {
    id: 'pack-chemistry',
    name: 'Clinical Chemistry',
    description: 'Renal panels, liver enzymes, electrolyte balances, glucose metabolism, and lipid profiles.',
    badge: 'Clinical Pathology',
    color: '#0284C7',
    sampleSourcesCount: 2,
    subjectData: {
      id: 'subj-clin-chem',
      name: 'Clinical Chemistry',
      description: 'Serum electrolytes, renal function (BUN/creatinine), hepatic panel (AST/ALT/ALP), and metabolic markers.',
      color: '#0284C7',
      reviewers: [
        {
          id: 'rev-chem-notes',
          name: 'Lecture Notes – Renal Function & Serum Electrolytes',
          fileName: 'Clinical_Chemistry_Renal_Electrolytes.pdf',
          fileSnippet: 'In-depth notes on Jaffe reaction for creatinine, BUN:creatinine ratio, electrolyte anion gap, and glomerular filtration.',
          testDate: '2026-10-18',
          questionTypes: ['multiple_choice', 'identification', 'enumeration'],
          questionCount: 25,
          createdAt: '2026-10-09',
          notesScrollProgress: 0,
          notes: [
            {
              id: 'chem-n-1',
              title: 'Creatinine Clearance & Jaffe Reaction',
              category: 'Concept',
              content: 'Serum creatinine is an end-product of muscle creatine phosphate breakdown. The classic Jaffe alkaline picrate reaction produces an orange-red Janovski complex measured spectrophotometrically at 500-520 nm.',
              importance: 'high',
              tags: ['Creatinine', 'Jaffe Reaction', 'GFR'],
              highlighted: true
            },
            {
              id: 'chem-n-2',
              title: 'BUN to Serum Creatinine Ratio Interpretation',
              category: 'Summary',
              content: '1. Normal ratio: 10:1 to 20:1.\n2. Prerenal azotemia: > 20:1 with normal creatinine (dehydration, congestive heart failure).\n3. Renal azotemia: normal or < 10:1 with elevated creatinine (intrinsic tubular necrosis).\n4. Postrenal azotemia: > 20:1 with high creatinine (urinary obstruction).',
              importance: 'high',
              tags: ['BUN', 'Azotemia', 'Renal Diagnostics'],
              highlighted: true
            },
            {
              id: 'chem-n-3',
              title: 'Serum Anion Gap Calculation',
              category: 'Formula',
              content: 'Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Normal reference range is 8-16 mEq/L. An elevated gap (>16) suggests high-anion gap metabolic acidosis (MUDPILES: Methanol, Uremia, DKA, Paraldehyde, Iron/INH, Lactic acid, Ethylene glycol, Salicylates).',
              importance: 'high',
              tags: ['Anion Gap', 'Acid-Base', 'Electrolytes'],
              highlighted: true
            }
          ],
          questions: [
            {
              id: 'chem-q-1',
              type: 'multiple_choice',
              question: 'A patient presents with a BUN of 44 mg/dL and a serum creatinine of 1.2 mg/dL (BUN:Cr ratio of 36:1). Which condition is most strongly indicated?',
              options: [
                'Acute tubular necrosis (intrinsic renal failure)',
                'Prerenal azotemia secondary to severe volume depletion or dehydration',
                'Bilateral ureteral calculi causing postrenal obstruction',
                'Severe end-stage chronic glomerulonephritis'
              ],
              correctAnswer: 'Prerenal azotemia secondary to severe volume depletion or dehydration',
              explanation: 'A disproportionate increase in BUN relative to creatinine (>20:1) with near-normal creatinine is characteristic of prerenal hypoperfusion.',
              points: 4
            },
            {
              id: 'chem-q-2',
              type: 'multiple_choice',
              question: 'What reagent combination forms the classic orange-red colored Janovski complex in the Jaffe method for creatinine determination?',
              options: [
                'Picric acid under alkaline condition (NaOH)',
                'Diacetyl monoxime with ferric chloride in acid',
                'Phosphomolybdic acid with copper reduction',
                'Bromocresol green in citrate buffer'
              ],
              correctAnswer: 'Picric acid under alkaline condition (NaOH)',
              explanation: 'The Jaffe reaction utilizes picric acid in an alkaline medium to form an orange-red tautomer with creatinine.',
              points: 4
            },
            {
              id: 'chem-q-3',
              type: 'identification',
              question: 'Identify the predominant intracellular cation whose elevated serum concentration causes tented T waves on ECG and lethal cardiac arrhythmias.',
              correctAnswer: 'Potassium',
              explanation: 'Potassium (K+) is the chief intracellular cation; hyperkalemia disrupts myocardial repolarization.',
              points: 4
            }
          ]
        }
      ]
    }
  },
  {
    id: 'pack-hematology',
    name: 'Hematology & Hemostasis',
    description: 'Complete blood count (CBC), anemia morphology, leukemia markers, and coagulation cascades.',
    badge: 'Clinical Hematology',
    color: '#E11D48',
    sampleSourcesCount: 1,
    subjectData: {
      id: 'subj-hema',
      name: 'Hematology & Hemostasis',
      description: 'Erythrocyte indices, peripheral blood smears, white blood cell differentials, and PT/APTT coagulation.',
      color: '#E11D48',
      reviewers: [
        {
          id: 'rev-hema-notes',
          name: 'Lecture Notes – RBC Indices & Anemia Differential',
          fileName: 'Hematology_RBC_Indices_Anemia.pdf',
          fileSnippet: 'MCV, MCH, MCHC, RDW evaluations for microcytic, normocytic, and macrocytic anemia categories.',
          testDate: '2026-10-20',
          questionTypes: ['multiple_choice', 'identification', 'enumeration'],
          questionCount: 25,
          createdAt: '2026-10-09',
          notes: [
            {
              id: 'hema-n-1',
              title: 'Mean Corpuscular Volume (MCV) Formulas & Ranges',
              category: 'Formula',
              content: 'MCV = (Hematocrit % × 10) / RBC count (10^12/L). Reference range: 80–100 fL. MCV < 80 fL defines microcytosis (Iron deficiency, Thalassemia, Sideroblastic). MCV > 100 fL defines macrocytosis (Vitamin B12 or Folate deficiency).',
              importance: 'high',
              tags: ['MCV', 'RBC Indices', 'Anemia'],
              highlighted: true
            },
            {
              id: 'hema-n-2',
              title: 'Prothrombin Time (PT) vs Activated Partial Thromboplastin Time (APTT)',
              category: 'Summary',
              content: '1. PT evaluates Extrinsic & Common pathways (Factors VII, X, V, II, I); monitored using INR for warfarin/coumadin therapy.\n2. APTT evaluates Intrinsic & Common pathways (Factors XII, XI, IX, VIII, X, V, II, I); monitored for unfractionated heparin therapy.',
              importance: 'high',
              tags: ['Coagulation', 'PT', 'APTT', 'Hemostasis'],
              highlighted: true
            }
          ],
          questions: [
            {
              id: 'hq-1',
              type: 'multiple_choice',
              question: 'Which coagulation test is primarily utilized to monitor unfractionated heparin anticoagulant therapy by measuring the intrinsic pathway?',
              options: [
                'Prothrombin Time (PT / INR)',
                'Activated Partial Thromboplastin Time (APTT)',
                'Thrombin Time (TT)',
                'Bleeding Time (Duke method)'
              ],
              correctAnswer: 'Activated Partial Thromboplastin Time (APTT)',
              explanation: 'APTT measures the intrinsic and common pathways and is the standard assay for unfractionated heparin.',
              points: 4
            },
            {
              id: 'hq-2',
              type: 'multiple_choice',
              question: 'A peripheral blood smear demonstrates hypochromic, microcytic erythrocytes with a markedly widened RDW. What is the most common etiology?',
              options: [
                'Megaloblastic anemia secondary to pernicious anemia',
                'Iron deficiency anemia',
                'Aplastic anemia from bone marrow failure',
                'Cold autoimmune hemolytic anemia'
              ],
              correctAnswer: 'Iron deficiency anemia',
              explanation: 'Iron deficiency anemia presents with microcytic hypochromic red cells and an elevated red cell distribution width (RDW).',
              points: 4
            }
          ]
        }
      ]
    }
  }
];
