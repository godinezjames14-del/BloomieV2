import { Subject } from '../types';

export const atomicTheorySubject: Subject = {
  id: 'subj-atomic-theory',
  name: 'THE ATOMIC THEORY OF MATTER',
  description: 'Comprehensive study of atomic history, subatomic particles, atomic models (Dalton to Schrödinger), quantum numbers, electron configurations, and chemical bonding.',
  color: '#3B82F6',
  reviewers: [
    {
      id: 'rev-atomic-notes',
      name: 'Lecture Notes & Study Guide',
      fileName: 'The_Atomic_Theory_of_Matter.pdf',
      fileSnippet: 'Complete lecture notes on atomic theories, subatomic particles, Bohr and quantum mechanical models, four quantum numbers, electron configuration rules, and chemical bonding.',
      testDate: '2026-10-20',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'at-n-1',
          title: 'Foundations of the Atomic Concept: Democritus & John Dalton',
          category: 'Concept',
          content: '• Democritus (c. 460–370 BCE):\n  - Proposed that all matter is composed of tiny, indestructible particles called atomos (meaning indivisible or uncuttable).\n\n• John Dalton (1803):\n  - English schoolteacher hailed as the Founder of Modern Atomic Theory.\n  - Postulates of Dalton\'s Atomic Theory:\n    1. Each element is composed of extremely small particles called atoms.\n    2. All atoms of a given element are identical to one another in mass and properties, but atoms of one element differ from all other elements.\n    3. Atoms of an element cannot be changed into atoms of another element by chemical reactions; atoms are neither created nor destroyed in chemical reactions.\n    4. Compounds are formed when atoms of more than one element combine; a given compound always has the same relative number and kind of atoms.\n  - Dalton defined the atom as "the smallest particle of an element that retains the chemical identity of the element."',
          importance: 'high',
          tags: ['Democritus', 'John Dalton', 'Atomic Theory', 'Postulates', 'Atomos'],
          highlighted: true
        },
        {
          id: 'at-n-2',
          title: 'Subatomic Particles & Nuclear Composition',
          category: 'Definition',
          content: '• Subatomic Particle Summary:\n  - Proton (p⁺): Positively charged (+1), mass = 1.0073 amu (concentrated in nucleus).\n  - Neutron (n⁰): Electrically neutral (0), mass = 1.0087 amu (concentrated in nucleus).\n  - Electron (e⁻): Negatively charged (-1), mass = 5.486 × 10⁻⁴ amu (0.0005486 amu; orbits nucleus).\n\n• Key Nuclear Concepts:\n  - Nucleons: Collective name for protons and neutrons located inside the nucleus.\n  - Atomic Number (Z): Number of protons in an atom (equal to electron count in a neutral atom). Concept established by Henry Moseley.\n  - Mass Number (A): Sum of protons and neutrons in the nucleus (A = Z + N).\n  - Neutron Calculation: Number of neutrons N = A − Z.\n    - *Example 1*: ²⁹₁₅P has 29 − 15 = 14 neutrons.\n    - *Example 2*: ⁹⁴₄₀Zr has 94 − 40 = 54 neutrons.\n    - *Example 3*: Element with N = 35 and A = 70 has Z = 70 − 35 = 35 protons (Bromine).',
          importance: 'high',
          tags: ['Proton', 'Neutron', 'Electron', 'Nucleons', 'Atomic Number', 'Mass Number', 'Henry Moseley'],
          highlighted: true
        },
        {
          id: 'at-n-3',
          title: 'Isotopes, Isobars, and Isotones',
          category: 'Definition',
          content: '• Isotopes:\n  - Elemental forms that are chemically identical (same Z, same chemical properties) but have different mass numbers (A) due to different numbers of neutrons.\n  - *Examples*: Carbon isotopes (¹²₆C, ¹³₆C, ¹⁴₆C).\n  - *Aluminum Isotopes*: ²⁶Al (half-life 730,000 years), ²⁷Al (stable), ²⁸Al (half-life 2.3 minutes).\n\n• Isobars:\n  - Atoms of different elements that share the same mass number (A) but have different atomic numbers (Z).\n  - *Example*: ⁷⁶₃₂Ge and ⁷⁶₃₄Se (both have mass number 76).\n\n• Isotones:\n  - Atoms of different elements that possess the exact same number of neutrons (N).\n  - *Example*: ³⁷₁₇Cl (37 − 17 = 20 neutrons) and ³⁹₁₉K (39 − 19 = 20 neutrons).',
          importance: 'high',
          tags: ['Isotopes', 'Isobars', 'Isotones', 'Carbon-14', 'Half-Life'],
          highlighted: true
        },
        {
          id: 'at-n-4',
          title: 'Evolution of Atomic Models: Thomson, Rutherford, Bohr & Schrödinger',
          category: 'Summary',
          content: '• J.J. Thomson (1897): Plum-Pudding / Raisin-Bread Model\n  - Envisioned the atom as a diffuse sphere of positive charge with negatively charged electrons embedded like raisins in pudding.\n\n• Ernest Rutherford (1911): Nuclear Model\n  - Disproved Thomson using the Gold Foil Experiment (alpha particles directed at gold film).\n  - Concluded: Atom is mostly empty space; dense center (nucleus) holds (+) charge and nearly all mass; electrons revolve in empty space around nucleus.\n\n• Niels Bohr (1913): Planetary Model\n  - Electrons orbit the nucleus in fixed circular paths called orbitals/shells with quantized, constant energy levels (numbered 1, 2, 3, 4... or K, L, M, N).\n  - When an electron absorbs energy, it jumps to a higher shell farther from the nucleus; when it releases energy, it falls closer to the nucleus.\n  - Outermost shell: valence shell.\n\n• Erwin Schrödinger (1926): Quantum Mechanical Model (Electron Cloud Model)\n  - Current modern view: Electrons do not travel in fixed planetary tracks; they exist in 3D regions of high probability called orbitals / electron clouds.',
          importance: 'high',
          tags: ['Thomson', 'Rutherford', 'Bohr', 'Schrodinger', 'Gold Foil', 'Plum Pudding', 'Electron Cloud'],
          highlighted: true
        },
        {
          id: 'at-n-5',
          title: 'The Four Quantum Numbers',
          category: 'Formula',
          content: 'Four quantum numbers describe the address, energy, shape, orientation, and spin of electrons:\n\n1. Principal Quantum Number (n):\n   - Determines the main energy level and size of electron cloud. Values: n = 1, 2, 3, …, 7 (corresponds to K, L, M, N, O, P, Q shells).\n   - Maximum electron capacity of a shell: 2n² (e.g., n=1 → 2, n=2 → 8, n=3 → 18, n=4 → 32).\n\n2. Azimuthal / Subquantum Number (l):\n   - Defines the shape of the electron cloud/orbital. Values: l = 0 to n−1.\n   - l=0: s (sharp, spherical, 1 orbital, max 2 e⁻)\n   - l=1: p (principal, dumbbell-shaped, 3 orbitals, max 6 e⁻)\n   - l=2: d (diffuse, cloverleaf/four-lobed, 5 orbitals, max 10 e⁻)\n   - l=3: f (fundamental, complex, 7 orbitals, max 14 e⁻)\n\n3. Magnetic Quantum Number (mₗ):\n   - Specifies the spatial orientation of the orbital relative to x, y, z axes. Values: −l, …, 0, …, +l.\n\n4. Magnetic Spin Quantum Number (s or mₛ):\n   - Orientation of electron magnetic spin on its own axis. Values: +1/2 (clockwise) and -1/2 (counterclockwise).',
          importance: 'high',
          tags: ['Quantum Numbers', 'Principal', 'Azimuthal', 'Magnetic', 'Spin', '2n^2 Formula'],
          highlighted: true
        },
        {
          id: 'at-n-6',
          title: 'Principles Governing Electronic Configuration',
          category: 'Key Takeaway',
          content: 'Four fundamental rules dictate electron arrangements:\n\n1. Aufbau Principle:\n   - Electrons systematically fill the lowest available energy subshell first before moving to higher energy orbitals (1s < 2s < 2p < 3s < 3p < 4s < 3d …).\n\n2. Pauli Exclusion Principle:\n   - An individual orbital can hold a maximum of two electrons, and they must have opposite spins (no two electrons in an atom can have the exact same set of 4 quantum numbers).\n\n3. Hund\'s Rule of Maximum Multiplicity:\n   - Electrons fill degenerate (equal-energy) orbitals singly with parallel spins first before pairing up.\n\n4. Heisenberg\'s Uncertainty Principle:\n   - It is physically impossible to simultaneously determine both the exact position and momentum (speed) of a subatomic particle with absolute certainty.\n\n• Key Configurations:\n  - O (Z=8): 1s² 2s² 2p⁴ (6 valence electrons)\n  - P (Z=15): 1s² 2s² 2p⁶ 3s² 3p³ (5 valence electrons)\n  - K (Z=19): [Ar]4s¹ (1 valence electron)\n  - Zn (Z=30): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ (2 valence electrons)\n  - Cu (Z=29): [Ar]4s¹ 3d¹⁰ (exceptional stability of fully filled d-subshell)',
          importance: 'high',
          tags: ['Aufbau', 'Pauli Exclusion', 'Hunds Rule', 'Heisenberg Uncertainty', 'Configurations'],
          highlighted: true
        },
        {
          id: 'at-n-7',
          title: 'Periodic Law, Octet Rule, Chemical Bonding & Ionic Nomenclature',
          category: 'Concept',
          content: '• Fundamental Chemical Laws:\n  - Law of Conservation of Mass: Mass is neither created nor destroyed in a chemical reaction.\n  - Law of Constant Composition: Pure compounds have identical proportions of elements by mass regardless of source (e.g., natural vs synthetic Vitamin B).\n  - Periodic Law: Chemical and physical properties repeat periodically when elements are arranged by increasing atomic number (Z).\n\n• The Octet Rule:\n  - Atoms tend to gain, lose, or share electrons until their outermost s and p subshells hold 8 electrons, achieving noble gas stability.\n\n• Ions and Charges:\n  - Cation: Positively charged ion formed when a metal loses valence electrons (Na⁺, Ca²⁺, Al³⁺).\n  - Anion: Negatively charged ion formed when a nonmetal gains electrons (Cl⁻, O²⁻, N³⁻).\n  - Group I (+1), Group II (+2), Group III (+3), Group IV (+4), Group V (-3), Group VI (-2), Group VII (-1), Group VIII (0, inert noble gases).\n\n• Binary Ionic Nomenclature:\n  - Cation named first using element name, followed by anion root with ending -ide.\n  - *Examples*: KCl = Potassium chloride; Al₂O₃ = Aluminum oxide; CaF₂ = Calcium fluoride.',
          importance: 'high',
          tags: ['Octet Rule', 'Periodic Law', 'Cation', 'Anion', 'Ionic Compounds', 'Nomenclature'],
          highlighted: true
        }
      ],
      questions: [
        {
          id: 'at-q-1',
          type: 'multiple_choice',
          question: 'Who is recognized as the ancient Greek philosopher who proposed that all matter is composed of indivisible particles called "atomos"?',
          options: ['Aristotle', 'Democritus', 'John Dalton', 'Plato'],
          correctAnswer: 'Democritus',
          explanation: 'Democritus (c. 460–370 BCE) first conceptualized that matter consists of minute, indivisible particles termed "atomos".',
          points: 10
        },
        {
          id: 'at-q-2',
          type: 'multiple_choice',
          question: 'Which English schoolteacher is acclaimed as the founder of the Modern Atomic Theory?',
          options: ['J.J. Thomson', 'Ernest Rutherford', 'John Dalton', 'Robert Boyle'],
          correctAnswer: 'John Dalton',
          explanation: 'John Dalton formulated the modern atomic theory in the early 19th century based on experimental laws of chemical combination.',
          points: 10
        },
        {
          id: 'at-q-3',
          type: 'multiple_choice',
          question: 'According to Dalton\'s atomic theory, which of the following statements is TRUE?',
          options: [
            'Atoms can be transmuted into other elements during simple chemical reactions',
            'Atoms are neither created nor destroyed in chemical reactions',
            'All atoms of different elements have the same mass',
            'Compounds are formed by random and constantly changing numbers of atoms'
          ],
          correctAnswer: 'Atoms are neither created nor destroyed in chemical reactions',
          explanation: 'Dalton posited that atoms are indestructible units that merely rearrange during chemical transformations.',
          points: 10
        },
        {
          id: 'at-q-4',
          type: 'multiple_choice',
          question: 'What is the relative electrical charge and approximate mass of a proton in atomic mass units (amu)?',
          options: ['Neutral (0) and 1.0087 amu', 'Negative (-1) and 0.00055 amu', 'Positive (+1) and 1.0073 amu', 'Positive (+2) and 4.0026 amu'],
          correctAnswer: 'Positive (+1) and 1.0073 amu',
          explanation: 'Protons carry a +1 fundamental charge and have a rest mass of approximately 1.0073 amu.',
          points: 10
        },
        {
          id: 'at-q-5',
          type: 'multiple_choice',
          question: 'What term collectively refers to the protons and neutrons situated inside the atomic nucleus?',
          options: ['Leptons', 'Nucleons', 'Baryons', 'Positrons'],
          correctAnswer: 'Nucleons',
          explanation: 'Protons and neutrons reside together in the atomic nucleus and are collectively termed nucleons.',
          points: 10
        },
        {
          id: 'at-q-6',
          type: 'multiple_choice',
          question: 'Which scientist demonstrated that the atomic number (Z), representing nuclear charge, defines an element\'s identity?',
          options: ['Henry Moseley', 'Dmitri Mendeleev', 'J.J. Thomson', 'Niels Bohr'],
          correctAnswer: 'Henry Moseley',
          explanation: 'Henry Moseley established through X-ray spectroscopy that atomic number Z corresponds to nuclear proton count.',
          points: 10
        },
        {
          id: 'at-q-7',
          type: 'multiple_choice',
          question: 'An atom with an atomic number of 15 and a mass number of 29 contains how many neutrons?',
          options: ['15 neutrons', '29 neutrons', '14 neutrons', '44 neutrons'],
          correctAnswer: '14 neutrons',
          explanation: 'Neutron number = Mass number (A) - Atomic number (Z) = 29 - 15 = 14 neutrons.',
          points: 10
        },
        {
          id: 'at-q-8',
          type: 'multiple_choice',
          question: 'How many neutrons are present in an atom of Zirconium-94 with an atomic number of 40 (94_40 Zr)?',
          options: ['54 neutrons', '40 neutrons', '94 neutrons', '134 neutrons'],
          correctAnswer: '54 neutrons',
          explanation: 'Number of neutrons = 94 - 40 = 54 neutrons.',
          points: 10
        },
        {
          id: 'at-q-9',
          type: 'multiple_choice',
          question: 'An element has a mass number equal to 70 and contains 35 neutrons. How many protons does it have?',
          options: ['70 protons', '35 protons', '105 protons', '17 protons'],
          correctAnswer: '35 protons',
          explanation: 'Protons = Mass number - Neutrons = 70 - 35 = 35 protons.',
          points: 10
        },
        {
          id: 'at-q-10',
          type: 'multiple_choice',
          question: 'What term describes elemental forms that are chemically identical but have different numbers of neutrons and different masses?',
          options: ['Allotropes', 'Isobars', 'Isotones', 'Isotopes'],
          correctAnswer: 'Isotopes',
          explanation: 'Isotopes are atoms of the same element having identical atomic numbers (Z) but differing mass numbers (A).',
          points: 10
        },
        {
          id: 'at-q-11',
          type: 'multiple_choice',
          question: 'Which isotope of aluminum has a half-life of 730,000 years?',
          options: ['Al-27', 'Al-26', 'Al-28', 'Al-25'],
          correctAnswer: 'Al-26',
          explanation: 'As presented on Slide 2, Al-26 has a radioactive half-life of 730,000 years, whereas Al-27 is stable and Al-28 has a 2.3 min half-life.',
          points: 10
        },
        {
          id: 'at-q-12',
          type: 'multiple_choice',
          question: 'Two atoms that possess the same atomic weight or mass number (A) but different atomic numbers (Z) are termed:',
          options: ['Isotopes', 'Isobars', 'Isotones', 'Isomers'],
          correctAnswer: 'Isobars',
          explanation: 'Isobars are nuclides of different elements that share the same mass number (e.g., Ge-76 and Se-76).',
          points: 10
        },
        {
          id: 'at-q-13',
          type: 'multiple_choice',
          question: 'Chlorine-37 (Z=17) and Potassium-39 (Z=19) both possess 20 neutrons. These nuclides are examples of:',
          options: ['Isotopes', 'Isotones', 'Isobars', 'Allotropes'],
          correctAnswer: 'Isotones',
          explanation: 'Nuclides that have the same neutron count (N = 20) but different atomic numbers are called isotones.',
          points: 10
        },
        {
          id: 'at-q-14',
          type: 'multiple_choice',
          question: 'Which atomic model was developed by J.J. Thomson following his discovery of the electron?',
          options: ['Nuclear Model', 'Planetary Model', 'Plum-Pudding / Raisin-Bread Model', 'Quantum Mechanical Model'],
          correctAnswer: 'Plum-Pudding / Raisin-Bread Model',
          explanation: 'Thomson proposed that electrons are embedded in a spherical uniform positive charge like raisins in bread.',
          points: 10
        },
        {
          id: 'at-q-15',
          type: 'multiple_choice',
          question: 'What landmark experiment did Ernest Rutherford conduct that disproved J.J. Thomson\'s plum-pudding model?',
          options: ['Cathode Ray Tube Experiment', 'Oil Drop Experiment', 'Gold Foil / Film Experiment', 'Photoelectric Experiment'],
          correctAnswer: 'Gold Foil / Film Experiment',
          explanation: 'Rutherford fired alpha particles at thin gold foil and observed large-angle deflections, proving the existence of a dense positive nucleus.',
          points: 10
        },
        {
          id: 'at-q-16',
          type: 'multiple_choice',
          question: 'What major conclusion about the atom was drawn from Rutherford\'s gold foil experiment?',
          options: [
            'Electrons are stationary within the nucleus',
            'The atom consists mostly of empty space with a dense, positive nucleus',
            'Neutrons carry a negative charge',
            'All mass of the atom is evenly distributed throughout its volume'
          ],
          correctAnswer: 'The atom consists mostly of empty space with a dense, positive nucleus',
          explanation: 'Rutherford concluded that most of the atom is empty space, with nearly all mass concentrated in a central nucleus.',
          points: 10
        },
        {
          id: 'at-q-17',
          type: 'multiple_choice',
          question: 'Which scientist formulated the Planetary Model where electrons travel in circular orbits around the nucleus?',
          options: ['John Dalton', 'Niels Bohr', 'James Chadwick', 'Erwin Schrödinger'],
          correctAnswer: 'Niels Bohr',
          explanation: 'Niels Bohr proposed the Planetary Model in 1913, describing electrons orbiting the nucleus at quantized energy levels.',
          points: 10
        },
        {
          id: 'at-q-18',
          type: 'multiple_choice',
          question: 'Who developed the Quantum Mechanical Model describing electrons moving in 3D electron clouds?',
          options: ['Erwin Schrödinger', 'Ernest Rutherford', 'J.J. Thomson', 'Henry Moseley'],
          correctAnswer: 'Erwin Schrödinger',
          explanation: 'Erwin Schrödinger formulated wave equations representing electron clouds in three dimensions.',
          points: 10
        },
        {
          id: 'at-q-19',
          type: 'multiple_choice',
          question: 'According to Bohr\'s model, what happens when an electron absorbs energy?',
          options: [
            'It falls to a lower energy level closer to the nucleus',
            'It jumps to a higher energy level farther from the nucleus',
            'It converts into a neutron',
            'It stops revolving around the nucleus'
          ],
          correctAnswer: 'It jumps to a higher energy level farther from the nucleus',
          explanation: 'Gaining energy elevates an electron to an excited state orbital farther from the nucleus.',
          points: 10
        },
        {
          id: 'at-q-20',
          type: 'multiple_choice',
          question: 'What is the name given to the outermost orbital shell of an atom?',
          options: ['Core shell', 'Kernel shell', 'Valence shell', 'Stationary shell'],
          correctAnswer: 'Valence shell',
          explanation: 'The outermost electron shell containing valence electrons is known as the valence shell.',
          points: 10
        },
        {
          id: 'at-q-21',
          type: 'multiple_choice',
          question: 'Which quantum number determines the primary energy level and approximate size of the electron cloud?',
          options: ['Azimuthal quantum number (l)', 'Principal quantum number (n)', 'Magnetic quantum number (ml)', 'Spin quantum number (ms)'],
          correctAnswer: 'Principal quantum number (n)',
          explanation: 'The principal quantum number n (1, 2, 3...) designates main energy level and size.',
          points: 10
        },
        {
          id: 'at-q-22',
          type: 'multiple_choice',
          question: 'What does the Azimuthal (or subquantum) quantum number (l) specify about an electron\'s orbital?',
          options: ['Direction of electron spin', 'Spatial orientation relative to axes', 'Shape of the electron cloud', 'Total number of protons'],
          correctAnswer: 'Shape of the electron cloud',
          explanation: 'The azimuthal quantum number l indicates whether an orbital is spherical (s), dumbbell-shaped (p), or complex.',
          points: 10
        },
        {
          id: 'at-q-23',
          type: 'multiple_choice',
          question: 'What geometric shape corresponds to an "s" orbital (where l = 0)?',
          options: ['Dumbbell-shaped', 'Spherical', 'Four-lobed cloverleaf', 'Toroidal ring'],
          correctAnswer: 'Spherical',
          explanation: 'An s subshell (l=0) has spherical symmetry centered at the nucleus.',
          points: 10
        },
        {
          id: 'at-q-24',
          type: 'multiple_choice',
          question: 'What is the maximum number of electrons that can occupy a "p" subshell (containing 3 orbitals)?',
          options: ['2 electrons', '10 electrons', '6 electrons', '14 electrons'],
          correctAnswer: '6 electrons',
          explanation: 'A p subshell has 3 orbitals (px, py, pz), each holding up to 2 electrons, for a maximum of 6 electrons.',
          points: 10
        },
        {
          id: 'at-q-25',
          type: 'multiple_choice',
          question: 'How many orbitals and maximum electrons are present in a "d" subshell?',
          options: ['3 orbitals and 6 electrons', '5 orbitals and 10 electrons', '7 orbitals and 14 electrons', '1 orbital and 2 electrons'],
          correctAnswer: '5 orbitals and 10 electrons',
          explanation: 'A d subshell has 5 orbitals and can accommodate a maximum of 10 electrons.',
          points: 10
        },
        {
          id: 'at-q-26',
          type: 'multiple_choice',
          question: 'Which quantum number describes the spatial orientation of an electron orbital in 3D space?',
          options: ['Spin quantum number (ms)', 'Principal quantum number (n)', 'Magnetic quantum number (ml)', 'Azimuthal quantum number (l)'],
          correctAnswer: 'Magnetic quantum number (ml)',
          explanation: 'The magnetic quantum number ml (-l to +l) designates orientation in space along x, y, and z axes.',
          points: 10
        },
        {
          id: 'at-q-27',
          type: 'multiple_choice',
          question: 'What are the two possible values of the magnetic spin quantum number (s or ms)?',
          options: ['0 and 1', '+1 and -1', '+1/2 and -1/2', '+2 and -2'],
          correctAnswer: '+1/2 and -1/2',
          explanation: 'Electrons have two discrete spin orientations: +1/2 (clockwise) and -1/2 (counterclockwise).',
          points: 10
        },
        {
          id: 'at-q-28',
          type: 'multiple_choice',
          question: 'What formula gives the maximum number of electrons that can be held by a principal energy shell n?',
          options: ['2n', 'n^2', '2n^2', '4n + 2'],
          correctAnswer: '2n^2',
          explanation: 'Maximum electrons in shell n is given by 2n^2 (e.g., n=3 holds 2(3^2) = 18 electrons).',
          points: 10
        },
        {
          id: 'at-q-29',
          type: 'multiple_choice',
          question: 'For the third principal energy shell (n = 3), how many total electrons can it accommodate?',
          options: ['8 electrons', '18 electrons', '32 electrons', '2 electrons'],
          correctAnswer: '18 electrons',
          explanation: 'Using 2n^2 for n=3: 2(9) = 18 electrons.',
          points: 10
        },
        {
          id: 'at-q-30',
          type: 'multiple_choice',
          question: 'Which principle states that electrons naturally occupy the lowest available energy orbital first?',
          options: ['Pauli Exclusion Principle', 'Aufbau Principle', 'Hund\'s Rule', 'Heisenberg Uncertainty Principle'],
          correctAnswer: 'Aufbau Principle',
          explanation: 'The Aufbau principle dictates that electrons fill lower-energy subshells before higher ones.',
          points: 10
        },
        {
          id: 'at-q-31',
          type: 'multiple_choice',
          question: 'Which principle states that an individual orbital can hold only two electrons, and they must have opposite spins?',
          options: ['Aufbau Principle', 'Hund\'s Rule', 'Pauli Exclusion Principle', 'Bohr Postulate'],
          correctAnswer: 'Pauli Exclusion Principle',
          explanation: 'Pauli\'s exclusion principle establishes that no two electrons in an atom can have identical quantum numbers.',
          points: 10
        },
        {
          id: 'at-q-32',
          type: 'multiple_choice',
          question: 'Which rule dictates that electrons occupy degenerate orbitals singly with parallel spins before pairing up?',
          options: ['Hund\'s Rule of Multiplicity', 'Aufbau Principle', 'Pauli Principle', 'Octet Rule'],
          correctAnswer: 'Hund\'s Rule of Multiplicity',
          explanation: 'Hund\'s rule requires single occupancy of degenerate orbitals before pairing occurs.',
          points: 10
        },
        {
          id: 'at-q-33',
          type: 'multiple_choice',
          question: 'Which fundamental principle states that it is impossible to determine simultaneously both the exact position and momentum of a particle?',
          options: ['Dalton\'s Hypothesis', 'Heisenberg\'s Uncertainty Principle', 'Avogadro\'s Law', 'Rutherford\'s Postulate'],
          correctAnswer: 'Heisenberg\'s Uncertainty Principle',
          explanation: 'Heisenberg showed that measuring position disrupts momentum, making simultaneous exact values impossible.',
          points: 10
        },
        {
          id: 'at-q-34',
          type: 'multiple_choice',
          question: 'What is the ground-state electronic configuration of an Oxygen atom (Z = 8)?',
          options: ['1s2 2s2 2p6', '1s2 2s2 2p4', '1s2 2s4 2p2', '1s2 2s1 2p5'],
          correctAnswer: '1s2 2s2 2p4',
          explanation: 'Oxygen (Z=8) has 8 electrons: 1s2 2s2 2p4.',
          points: 10
        },
        {
          id: 'at-q-35',
          type: 'multiple_choice',
          question: 'What is the ground-state electron configuration of Phosphorus (Z = 15)?',
          options: ['1s2 2s2 2p6 3s1 3p4', '1s2 2s2 2p6 3s2 3p3', '1s2 2s2 2p6 3s3 3p2', '1s2 2s2 2p6 3d5'],
          correctAnswer: '1s2 2s2 2p6 3s2 3p3',
          explanation: 'Phosphorus (Z=15) fills 1s2 2s2 2p6 3s2 3p3.',
          points: 10
        },
        {
          id: 'at-q-36',
          type: 'multiple_choice',
          question: 'Using noble gas shorthand notation, how is the electron configuration of Potassium (Z = 19) represented?',
          options: ['[Ne] 3s2 3p5', '[Kr] 5s1', '[Ar] 4s1', '[Ar] 3d1'],
          correctAnswer: '[Ar] 4s1',
          explanation: 'Potassium follows Argon core ([Ar]) with one valence electron in the 4s subshell: [Ar] 4s1.',
          points: 10
        },
        {
          id: 'at-q-37',
          type: 'multiple_choice',
          question: 'How many valence electrons are present in a neutral Zinc atom (Z = 30; 1s2 2s2 2p6 3s2 3p6 4s2 3d10)?',
          options: ['12 valence electrons', '2 valence electrons', '10 valence electrons', '8 valence electrons'],
          correctAnswer: '2 valence electrons',
          explanation: 'The outermost principal energy level is n=4 with configuration 4s2, meaning Zinc has 2 valence electrons.',
          points: 10
        },
        {
          id: 'at-q-38',
          type: 'multiple_choice',
          question: 'Why does Copper (Z = 29) adopt an anomalous configuration of [Ar] 4s1 3d10 rather than [Ar] 4s2 3d9?',
          options: [
            'Because 4s orbitals hold only 1 electron for all transition metals',
            'Because completely filled d subshells (3d10) confer extra thermodynamic stability',
            'Because Copper lacks a 3d subshell',
            'Because 4s electrons are heavier than 3d electrons'
          ],
          correctAnswer: 'Because completely filled d subshells (3d10) confer extra thermodynamic stability',
          explanation: 'A fully filled 3d10 subshell offers lower energy and enhanced stability over a partially filled 3d9 state.',
          points: 10
        },
        {
          id: 'at-q-39',
          type: 'multiple_choice',
          question: 'Which law states that the mass of substances entering a chemical reaction equals the mass of products formed?',
          options: ['Law of Definite Proportions', 'Law of Conservation of Mass', 'Law of Multiple Proportions', 'Periodic Law'],
          correctAnswer: 'Law of Conservation of Mass',
          explanation: 'The Law of Conservation of Mass states matter cannot be created or destroyed in chemical reactions.',
          points: 10
        },
        {
          id: 'at-q-40',
          type: 'multiple_choice',
          question: 'The fact that pure Vitamin B extracted from yeast has the identical chemical composition as synthetically manufactured Vitamin B illustrates which law?',
          options: ['Law of Conservation of Energy', 'Law of Constant Composition (Definite Proportions)', 'Aufbau Principle', 'Hund\'s Rule'],
          correctAnswer: 'Law of Constant Composition (Definite Proportions)',
          explanation: 'Slide 76 explains that the Law of Constant Composition establishes that pure compounds from any source have identical proportions by mass.',
          points: 10
        },
        {
          id: 'at-q-41',
          type: 'multiple_choice',
          question: 'What is the Periodic Law?',
          options: [
            'Chemical properties repeat randomly regardless of atomic structure',
            'Properties of elements repeat periodically when arranged in order of increasing atomic number',
            'Elements gain electrons in order of increasing atomic mass',
            'Atomic radii decrease as mass number increases'
          ],
          correctAnswer: 'Properties of elements repeat periodically when arranged in order of increasing atomic number',
          explanation: 'The Periodic Law states that properties recur periodically when elements are arranged by increasing atomic number Z.',
          points: 10
        },
        {
          id: 'at-q-42',
          type: 'multiple_choice',
          question: 'In the Periodic Table, representative or main group elements (Group A) belong to which blocks?',
          options: ['d and f blocks', 's and p blocks', 'p and d blocks', 'f and s blocks'],
          correctAnswer: 's and p blocks',
          explanation: 'Group A elements reside in the s and p blocks, while transition elements (Group B) occupy d and f blocks.',
          points: 10
        },
        {
          id: 'at-q-43',
          type: 'multiple_choice',
          question: 'What is the Octet Rule?',
          options: [
            'Atoms require 8 protons to form stable bonds',
            'Atoms tend to prefer having 8 electrons in their outermost valence shell for greatest stability',
            'All period 2 elements form 8 covalent bonds',
            'Atoms can only hold 8 electrons in total'
          ],
          correctAnswer: 'Atoms tend to prefer having 8 electrons in their outermost valence shell for greatest stability',
          explanation: 'The octet rule reflects the stability achieved when outermost s and p subshells are filled with 8 electrons.',
          points: 10
        },
        {
          id: 'at-q-44',
          type: 'multiple_choice',
          question: 'Which group of the Periodic Table is known as the alkali metals?',
          options: ['Group II', 'Group VII', 'Group I', 'Group VIII'],
          correctAnswer: 'Group I',
          explanation: 'Group I elements (Li, Na, K, Rb, Cs, Fr) are the alkali metals with 1 valence electron.',
          points: 10
        },
        {
          id: 'at-q-45',
          type: 'multiple_choice',
          question: 'When a neutral metal atom loses valence electrons, what type of ion does it form?',
          options: ['Anion with negative charge', 'Cation with positive charge', 'Neutral isotope', 'Isobar'],
          correctAnswer: 'Cation with positive charge',
          explanation: 'Loss of electrons leaves an excess of nuclear protons, creating a positively charged cation.',
          points: 10
        },
        {
          id: 'at-q-46',
          type: 'multiple_choice',
          question: 'Group VII elements (halogens) have 7 valence electrons. When forming ions, what charge do they acquire?',
          options: ['+1 charge', '+7 charge', '-1 charge', '-2 charge'],
          correctAnswer: '-1 charge',
          explanation: 'Group VII nonmetals gain 1 electron to satisfy the octet rule, forming anions of charge -1.',
          points: 10
        },
        {
          id: 'at-q-47',
          type: 'multiple_choice',
          question: 'What is a chemical bond formed through the complete transfer of electrons from a metal to a non-metal called?',
          options: ['Covalent bond', 'Metallic bond', 'Ionic bond', 'Hydrogen bond'],
          correctAnswer: 'Ionic bond',
          explanation: 'Ionic bonding involves the electrostatic attraction between oppositely charged ions formed by electron transfer.',
          points: 10
        },
        {
          id: 'at-q-48',
          type: 'multiple_choice',
          question: 'What is the correct systematic name of the binary ionic compound KCl?',
          options: ['Potassium monochlorite', 'Potassium chlorite', 'Potassium chloride', 'Monopotassium chlorine'],
          correctAnswer: 'Potassium chloride',
          explanation: 'Binary ionic compounds take the metal name followed by the nonmetal root with the suffix -ide: Potassium chloride.',
          points: 10
        },
        {
          id: 'at-q-49',
          type: 'multiple_choice',
          question: 'What diagram uses dots placed around an element\'s chemical symbol to represent its valence electrons?',
          options: ['Lewis electron dot diagram', 'Bohr orbit diagram', 'Rutherford scattering diagram', 'Thomson matrix'],
          correctAnswer: 'Lewis electron dot diagram',
          explanation: 'Electron dot diagrams (Lewis structures) use dots around the chemical symbol to represent valence electrons.',
          points: 10
        },
        {
          id: 'at-q-50',
          type: 'multiple_choice',
          question: 'What is the chemical name for the binary ionic compound Al2O3?',
          options: ['Dialuminum trioxide', 'Aluminum oxide', 'Aluminum trioxygen', 'Aluminum oxygenide'],
          correctAnswer: 'Aluminum oxide',
          explanation: 'In binary ionic nomenclature, prefixes are not used for metals of fixed charge; Al2O3 is simply aluminum oxide.',
          points: 10
        }
      ]
    },
    {
      id: 'rev-atomic-quiz-50',
      name: '50-Item Practice Quiz',
      fileName: 'Atomic_Theory_50Q_Quiz.pdf',
      fileSnippet: '50 multiple choice questions testing atomic history, subatomic particles, quantum numbers, electron configurations, and chemical bonding with shuffled choices.',
      testDate: '2026-10-20',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [] // Populated by reference to rev-atomic-notes questions in code
    },
    {
      id: 'rev-atomic-id-15',
      name: '15-Item Identification Exam',
      fileName: 'Atomic_Theory_15_Identification.pdf',
      fileSnippet: '15 identification items testing essential atomic theory scientists, principles, models, and nuclear concepts.',
      testDate: '2026-10-20',
      questionTypes: ['identification'],
      questionCount: 15,
      createdAt: '2026-10-09',
      notesScrollProgress: 0,
      notes: [],
      questions: [
        {
          id: 'at-id-1',
          type: 'identification',
          question: 'Name the English schoolteacher who formulated the Modern Atomic Theory in the early 1800s.',
          correctAnswer: 'John Dalton',
          explanation: 'John Dalton published his atomic theory in 1803, proposing that elements consist of indivisible atoms.',
          points: 10
        },
        {
          id: 'at-id-2',
          type: 'identification',
          question: 'What ancient Greek philosopher coined the term "atomos" to describe fundamental indivisible particles of matter?',
          correctAnswer: 'Democritus',
          explanation: 'Democritus first proposed the philosophical concept of indivisible atomos in ancient Greece.',
          points: 10
        },
        {
          id: 'at-id-3',
          type: 'identification',
          question: 'What is the name of J.J. Thomson\'s atomic model, which pictured negative electrons embedded in a sphere of positive charge?',
          correctAnswer: 'Plum-Pudding Model',
          explanation: 'Thomson\'s model is known as the Plum-Pudding Model or Raisin-Bread Model.',
          points: 10
        },
        {
          id: 'at-id-4',
          type: 'identification',
          question: 'Name the landmark experiment conducted by Ernest Rutherford that disproved Thomson\'s model and revealed the atomic nucleus.',
          correctAnswer: 'Gold Foil Experiment',
          explanation: 'Rutherford\'s gold foil experiment (1911) demonstrated that the atom has a concentrated positive nucleus.',
          points: 10
        },
        {
          id: 'at-id-5',
          type: 'identification',
          question: 'Which Danish scientist proposed the Planetary Model of the atom with quantized circular orbits for electrons?',
          correctAnswer: 'Niels Bohr',
          explanation: 'Niels Bohr introduced the planetary model in 1913.',
          points: 10
        },
        {
          id: 'at-id-6',
          type: 'identification',
          question: 'Name the Austrian physicist who formulated the Quantum Mechanical Model describing electrons in 3D electron clouds.',
          correctAnswer: 'Erwin Schrödinger',
          explanation: 'Erwin Schrödinger developed the wave equations of modern quantum mechanics in 1926.',
          points: 10
        },
        {
          id: 'at-id-7',
          type: 'identification',
          question: 'What collective term is used for protons and neutrons residing together within the atomic nucleus?',
          correctAnswer: 'Nucleons',
          explanation: 'Protons and neutrons are collectively termed nucleons.',
          points: 10
        },
        {
          id: 'at-id-8',
          type: 'identification',
          question: 'Which British physicist discovered that atomic number (Z) represents the true nuclear charge and identity of an element?',
          correctAnswer: 'Henry Moseley',
          explanation: 'Henry Moseley established that elements are defined by atomic number Z rather than atomic weight.',
          points: 10
        },
        {
          id: 'at-id-9',
          type: 'identification',
          question: 'What term describes atoms of the same element that have identical atomic numbers but different mass numbers due to differing neutron counts?',
          correctAnswer: 'Isotopes',
          explanation: 'Isotopes are nuclides of the same element with different numbers of neutrons (e.g., C-12, C-13, C-14).',
          points: 10
        },
        {
          id: 'at-id-10',
          type: 'identification',
          question: 'What term designates atoms of different elements that share the exact same mass number (A) but differ in atomic number (Z)?',
          correctAnswer: 'Isobars',
          explanation: 'Isobars have equal mass numbers but different atomic numbers (e.g., Ge-76 and Se-76).',
          points: 10
        },
        {
          id: 'at-id-11',
          type: 'identification',
          question: 'What term refers to nuclides of different elements that possess the exact same number of neutrons?',
          correctAnswer: 'Isotones',
          explanation: 'Isotones have identical neutron counts (e.g., Cl-37 and K-39, both with 20 neutrons).',
          points: 10
        },
        {
          id: 'at-id-12',
          type: 'identification',
          question: 'Which quantum number, symbolized by l, defines the geometric shape of an electron\'s orbital?',
          correctAnswer: 'Azimuthal Quantum Number',
          explanation: 'The azimuthal (angular momentum) quantum number l specifies orbital shape (s, p, d, f).',
          points: 10
        },
        {
          id: 'at-id-13',
          type: 'identification',
          question: 'Which electronic configuration principle dictates that electrons fill the lowest available energy orbital before occupying higher levels?',
          correctAnswer: 'Aufbau Principle',
          explanation: 'The Aufbau principle governs the order of orbital filling from lowest to highest energy.',
          points: 10
        },
        {
          id: 'at-id-14',
          type: 'identification',
          question: 'Which quantum mechanical rule establishes that an orbital can hold at most two electrons, and they must have opposite spins?',
          correctAnswer: 'Pauli Exclusion Principle',
          explanation: 'Wolfgang Pauli formulated the exclusion principle stating no two electrons can share four identical quantum numbers.',
          points: 10
        },
        {
          id: 'at-id-15',
          type: 'identification',
          question: 'Which rule states that degenerate orbitals must be occupied singly with parallel spins before electrons begin pairing?',
          correctAnswer: 'Hund\'s Rule',
          explanation: 'Hund\'s rule of maximum multiplicity maximizes total spin by placing single electrons in orbitals before pairing.',
          points: 10
        }
      ]
    }
  ]
};

// Sync rev-atomic-quiz-50 questions with rev-atomic-notes questions
atomicTheorySubject.reviewers[1].questions = [...atomicTheorySubject.reviewers[0].questions];
