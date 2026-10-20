import { Subject } from '../types';

export const prescriptionAbbreviationsSubject: Subject = {
  id: 'subj-rx-abbreviations',
  name: 'PRESCRIPTION ABBREVIATIONS, ACRONYMS & SYMBOLS',
  description: 'Comprehensive clinical pharmacy and medical reviewer on Table 4.3: Latin prescription directions, patient signa instructions, dosage forms, routes of administration, clinical abbreviations, and ISMP safety warnings.',
  color: '#8B5CF6',
  reviewers: [
    {
      id: 'rev-rx-notes',
      name: 'Lecture Notes & Study Guide',
      fileName: 'Prescription_Abbreviations_Table_4.3.pdf',
      fileSnippet: 'Complete reference covering Latin prescription-filling directions, quantities/measurements, signa patient instructions, dosage forms, routes of administration, clinical abbreviations, and ISMP safety alerts.',
      testDate: '2026-11-05',
      questionTypes: ['multiple_choice', 'identification'],
      questionCount: 50,
      createdAt: '2026-10-20',
      notesScrollProgress: 0,
      notes: [
        {
          id: 'rx-n-1',
          title: 'Introduction: History of Latin in Medicine & Prescription Order Anatomy',
          category: 'Concept',
          content: '• Historical Origin of Latin in Prescribing:\n  - Latin served as the universal language of science, medicine, and pharmacy throughout medieval Europe and the Renaissance.\n  - Using Latin prevented patient panic regarding diagnosis, established international standardization, and enabled concise written abbreviations for busy apothecaries and prescribers.\n\n• The Core Parts of a Standard Prescription:\n  1. Superscription: The heading consisting of the Rx symbol (recipe = "take thou" or "take of").\n  2. Inscription: The body of the prescription designating the active drug name, dosage, and concentration.\n  3. Subscription: Compounding and dispensing directions to the pharmacist (*e.g., M. ft. ung.*, *disp. tab. No. xxx*).\n  4. Signa / Transcription (Sig): Specific patient administration instructions transcribed onto the prescription label (*e.g., 1 tab p.o. b.i.d. p.c.*).\n\n• Modern E-Prescribing Transition:\n  - While computerized electronic prescribing (CPOE) has minimized manual handwritten orders, standard Latin abbreviations remain deeply embedded in hospital charts, pharmacy management systems, and board licensing exams (NAPLEX, MPJE, Pharmacy Licensure).',
          importance: 'high',
          tags: ['Prescription Anatomy', 'Superscription', 'Subscription', 'Signa', 'Latin History'],
          highlighted: true
        },
        {
          id: 'rx-n-2',
          title: 'Prescription-Filling Directions (Pharmacist Subscription)',
          category: 'Definition',
          content: 'Directions directed to the pharmacist for compounding, preparing, and packaging the medication:\n\n• aa. (Latin: *ana*)\n  - Meaning: Of each (equal parts of each listed ingredient).\n\n• ad (Latin: *ad*)\n  - Meaning: Up to; to make (add vehicle up to a designated final volume or weight).\n\n• disp. (Latin: *dispensatur*)\n  - Meaning: Dispense (prepare and deliver to the patient).\n\n• div. (Latin: *dividatur*)\n  - Meaning: Divide (divide the bulk preparation into equal parts or unit doses).\n\n• d.t.d. (Latin: *dentur tales doses*)\n  - Meaning: Give of such doses (dispense the stated amount multiplied by the number of doses requested).\n\n• ft (Latin: *fiat*)\n  - Meaning: Make / let it be made (*e.g., ft. ung.* = make an ointment).\n\n• M. (Latin: *misce*)\n  - Meaning: Mix (thoroughly blend the ingredients together).\n\n• No. (Latin: *numero*)\n  - Meaning: Number (*e.g., No. xxiv* = number 24).\n\n• non rep. or NR (Latin: *non repetatur*)\n  - Meaning: Do not repeat / no refill.\n\n• q.s. (Latin: *quantum sufficit*)\n  - Meaning: A sufficient quantity.\n\n• q.s. ad (Latin: *quantum sufficiat ad*)\n  - Meaning: A sufficient quantity to make (add enough vehicle to achieve final specified total volume).\n\n• Sig. (Latin: *Signa*)\n  - Meaning: Write / label (directions to be transcribed on the prescription label for the patient).',
          importance: 'high',
          tags: ['Prescription-Filling', 'Compounding', 'disp', 'dtd', 'ft', 'misce', 'qs', 'Sig'],
          highlighted: true
        },
        {
          id: 'rx-n-3',
          title: 'Signa & Patient Frequency Instructions (Daily Dosing Cycles)',
          category: 'Definition',
          content: 'Standard frequency codes indicating how many times per day or at what intervals a drug must be administered:\n\n• s.i.d. (Latin: *semel in die*)\n  - Meaning: Once a day (once every 24 hours).\n\n• b.i.d. (Latin: *bis in die*)\n  - Meaning: Twice a day (typically every 12 hours).\n\n• t.i.d. (Latin: *ter in die*)\n  - Meaning: Three times a day (typically every 8 hours).\n\n• q.i.d. (Latin: *quarter in die*)\n  - Meaning: Four times a day (typically every 6 hours).\n\n• q (Latin: *quaque*)\n  - Meaning: Every (*e.g., q4h* = every 4 hours; *q8h* = every 8 hours).\n\n• qAM\n  - Meaning: Every morning.\n\n• ATC\n  - Meaning: Around the clock (scheduled uninterrupted intervals 24 hours/day, crucial for analgesic and antibiotic therapeutic levels).\n\n• d (Latin: *die*)\n  - Meaning: Day.\n\n• h. or hr. (Latin: *hora*)\n  - Meaning: Hour.\n\n• min. (Latin: *minutum*)\n  - Meaning: Minute.\n\n• wk.\n  - Meaning: Week (*e.g., 1x/wk* = once weekly).',
          importance: 'high',
          tags: ['Dosing Frequency', 'bid', 'tid', 'qid', 'sid', 'quaque', 'ATC'],
          highlighted: true
        },
        {
          id: 'rx-n-4',
          title: 'Administration Timing & Relation to Meals & Urgency',
          category: 'Definition',
          content: 'Instructions coordinating medication ingestion with meals, sleep, and medical urgency:\n\n• a.c. (Latin: *ante cibos*)\n  - Meaning: Before meals (*ante* = before, *cibos* = food/meals).\n  - Clinical application: Proton pump inhibitors (*omeprazole*), sucralfate, regular insulin.\n\n• p.c. (Latin: *post cibos*)\n  - Meaning: After meals (*post* = after, *cibos* = food/meals).\n  - Clinical application: NSAIDs, aspirin, metformin to minimize gastric irritation.\n\n• am (Latin: *ante meridiem*)\n  - Meaning: Morning / before noon.\n\n• pm (Latin: *post meridiem*)\n  - Meaning: Afternoon / evening.\n\n• h.s. (Latin: *hora somni*)\n  - Meaning: At bedtime / hour of sleep (*hora* = hour, *somni* = sleep).\n  - Clinical application: Statins, sedatives, H2 blockers.\n\n• noct. (Latin: *nocte*)\n  - Meaning: Night.\n\n• m&n.\n  - Meaning: Morning and night.\n\n• p.r.n. (Latin: *pro re nata*)\n  - Meaning: As needed / as the occasion arises (requires a clinical indication and interval, *e.g., p.r.n. pain q4h*).\n\n• s.o.s. (Latin: *si opus sit*)\n  - Meaning: If there is need / as needed (conventionally used for a single emergency dose).\n\n• stat. (Latin: *statim*)\n  - Meaning: Immediately / at once (highest clinical priority, *e.g., stat IV push*).\n\n• ut dict. (Latin: *ut dictum*)\n  - Meaning: As directed.',
          importance: 'high',
          tags: ['Timing', 'ac', 'pc', 'hs', 'prn', 'sos', 'stat', 'ut dict'],
          highlighted: true
        },
        {
          id: 'rx-n-5',
          title: 'Routes & Locations of Administration: Ear & Eye Distinctions',
          category: 'Definition',
          content: 'Critical Latin root pairings that are frequent targets of board exams and medication error prevention:\n\n• THE EAR (Auris / Otic):\n  - Remember: Letter "A" stands for *Auris* (Ear) or *Auditory*.\n  1. a.d. (Latin: *auris dextro*): Right ear (*dexter* = right).\n  2. a.s. (Latin: *auris sinistro*): Left ear (*sinister* = left).\n  3. a.u. (Latin: *auris utro*): Each ear / both ears (*uterque* = each/both).\n\n• THE EYE (Oculus / Ophthalmic):\n  - Remember: Letter "O" stands for *Oculus* (Eye) or *Ocular* / *Optic*.\n  1. o.d. (Latin: *oculo dextro*): Right eye (*dexter* = right).\n  2. o.s. (Latin: *oculo sinistro*): Left eye (*sinister* = left).\n  3. o.u. (Latin: *oculo utro*): Each eye / both eyes (*uterque* = each/both).\n\n• HIGH-ALERT ISMP SAFETY WARNING:\n  - *Do Not Confuse*: AD/AS/AU with OD/OS/OU.\n  - Mistaking an ear drop for an eye drop can cause severe chemical conjunctivitis and corneal ulceration due to differing pH, tonicity, and preservative tolerances.\n  - The Joint Commission and ISMP strongly urge spelling out "right ear", "left eye", etc., instead of abbreviations.',
          importance: 'high',
          tags: ['Routes', 'Ear', 'Eye', 'ad', 'as', 'au', 'od', 'os', 'ou', 'Ophthalmic', 'Otic'],
          highlighted: true
        },
        {
          id: 'rx-n-6',
          title: 'Parenteral, Enteral, Topical & Mucosal Routes of Administration',
          category: 'Definition',
          content: 'Systemic and localized pathways for drug delivery:\n\n• Enteral & Oral Routes:\n  - p.o. or PO (Latin: *per os*): By mouth / orally.\n  - NPO (Latin: *non per os*): Nothing by mouth (fasting prior to anesthesia or surgery).\n  - SL: Sublingual (placed beneath the tongue for rapid capillary absorption, bypassing first-pass hepatic metabolism, *e.g., NTG SL*).\n  - NGT: Nasogastric tube (passed through nose into stomach for enteral feeding or medication).\n\n• Parenteral Injection Routes:\n  - IV: Intravenous (directly into a vein).\n  - IVP: Intravenous push (rapid bolus over seconds to minutes).\n  - IVPB: Intravenous piggyback (secondary intermittent infusion linked into primary line, *e.g., antibiotic IVPB over 60 min*).\n  - IVB: Intravenous bolus.\n  - CIVI: Continuous intravenous infusion (uninterrupted 24-hour rate).\n  - IM: Intramuscular (injected into skeletal muscle mass, *e.g., deltoid, ventrogluteal*).\n  - SubQ or SC: Subcutaneously (injected into adipose subcutaneous layer beneath dermis, *e.g., insulin, enoxaparin*).\n  - ID: Intradermal (within dermis layer, *e.g., Mantoux TB tuberculin test, allergy testing*).\n  - IT: Intrathecal (injected into subarachnoid space surrounding spinal cord).\n\n• Topical & Cavity Routes:\n  - Top.: Topically (applied directly to skin or local surface).\n  - rect. (Latin: *pro recto*): Rectal / into rectum.\n  - V or PV (Latin: *pro vagina*): Vaginally / per vagina.',
          importance: 'high',
          tags: ['Parenteral', 'IV', 'IVP', 'IVPB', 'IM', 'SubQ', 'ID', 'IT', 'PO', 'NPO', 'SL'],
          highlighted: true
        },
        {
          id: 'rx-n-7',
          title: 'Dosage Forms & Pharmaceutical Vehicles',
          category: 'Definition',
          content: 'Physical delivery systems formulated for therapeutic active ingredients:\n\n• Solid Dosage Forms:\n  - tab. (Latin: *tabletta*): Tablet (compressed powder disc).\n  - cap.: Capsule (gelatin shell enclosing drug powder or liquid).\n  - pulv. (Latin: *pulvis*): Powder (finely divided solid particles).\n  - supp. (Latin: *suppositorium*): Suppository (solid base that melts or dissolves at body temperature for rectal/vaginal/urethral insertion).\n\n• Liquid Dosage Forms:\n  - sol. (Latin: *solutio*): Solution (homogeneous liquid mixture where solute is completely dissolved in solvent).\n  - susp.: Suspension (heterogeneous mixture containing finely divided insoluble solid drug particles dispersed in liquid vehicle; must be shaken before use).\n  - syr. (Latin: *syrupus*): Syrup (concentrated aqueous solution of sugar, typically sucrose, masking unpalatable drugs).\n  - elix.: Elixir (clear, sweetened, hydroalcoholic liquid preparation containing water and alcohol).\n  - inj.: Injection (sterile pyrogen-free liquid for parenteral administration).\n  - amp.: Ampule (sealed glass container holding a single sterile injectable dose; must be filtered with a filter needle before injection).\n\n• Semisolid Dosage Forms:\n  - oint. or ungt. (Latin: *unguentum*): Ointment (semisolid preparation with hydrocarbon or oleaginous base providing occlusive barrier).',
          importance: 'high',
          tags: ['Dosage Forms', 'tab', 'cap', 'sol', 'susp', 'syr', 'elix', 'ungt', 'supp', 'amp'],
          highlighted: true
        },
        {
          id: 'rx-n-8',
          title: 'Intravenous Fluids & Crystalloid Electrolyte Solutions',
          category: 'Definition',
          content: 'Standard crystalloid fluids, tonicities, and clinical indications:\n\n• D5W:\n  - Full Name: Dextrose 5% in Water.\n  - Tonicity: Isotonic in container (252 mOsm/L); physiologically hypotonic once dextrose is rapidly metabolized by liver and tissues, delivering free water.\n\n• D10W:\n  - Full Name: Dextrose 10% in Water.\n  - Tonicity: Hypertonic (505 mOsm/L); used for hypoglycemia or TPN transitions.\n\n• NS:\n  - Full Name: Normal Saline (0.9% Sodium Chloride).\n  - Tonicity: Isotonic (308 mOsm/L; contains 154 mEq/L Na⁺ and 154 mEq/L Cl⁻).\n  - Clinical application: Fluid resuscitation, hypovolemic shock, blood transfusion compatible.\n\n• 1/2NS:\n  - Full Name: Half-Strength Normal Saline (0.45% Sodium Chloride).\n  - Tonicity: Hypotonic (154 mOsm/L); supplies free water for cellular dehydration.\n\n• D5NS:\n  - Full Name: Dextrose 5% in Normal Saline (0.9% NaCl).\n  - Tonicity: Hypertonic in bag (560 mOsm/L); isotonic physiologically after dextrose uptake.\n\n• D5LR:\n  - Full Name: Dextrose 5% in Lactated Ringer’s.\n  - Tonicity: Hypertonic in bag (525 mOsm/L); supplies balanced electrolytes, lactate buffer, and calories.\n\n• RL, R/L or LR:\n  - Full Name: Ringer’s Lactate / Lactated Ringer’s.\n  - Tonicity: Isotonic (273 mOsm/L); contains physiological sodium, potassium, calcium, chloride, and sodium lactate which is metabolized to bicarbonate.',
          importance: 'high',
          tags: ['IV Fluids', 'D5W', 'D10W', 'NS', 'D5NS', 'D5LR', 'LR', 'Lactated Ringers'],
          highlighted: true
        },
        {
          id: 'rx-n-9',
          title: 'Quantities, Apothecary Symbols & Units of Measurement',
          category: 'Definition',
          content: 'Metric, household, and historical apothecary measurement units:\n\n• Apothecary & Household Units:\n  - gtt (Latin: *gutta*): Drop (*guttae* = drops).\n  - ss or s̄s̄ (Latin: *semissem*): One-half (1/2).\n  - flℨ or fℨ: Fluid dram (approx. 3.69 mL or 1 teaspoonful).\n  - fl℥ or f℥: Fluid ounce (approx. 29.57 mL or 30 mL).\n  - fl℥ss: Half-fluid ounce (approx. 15 mL or 1 tablespoonful).\n  - tsp.: Teaspoonful (standardized to 5 mL in modern medicine).\n  - tbsp.: Tablespoonful (standardized to 15 mL in modern medicine; 1 tbsp = 3 tsp).\n  - oz.: Ounce (weight: 28.35 g; volume: 30 mL).\n  - pt.: Pint (16 fluid ounces ≈ 473 mL or 500 mL).\n  - qt.: Quart (2 pints ≈ 946 mL or 1000 mL / 1 liter).\n  - Gal: Gallon (4 quarts = 128 fluid ounces ≈ 3.785 L).\n  - lb (Latin: *libra*): Pound (1 lb = 454 g; 2.2 lb = 1 kg).\n\n• Metric & Clinical Units:\n  - g: Gram | kg: Kilogram (1000 g) | mg: Milligram (0.001 g).\n  - mcg or µg: Microgram (0.001 mg).\n  - mL: Milliliter | L: Liter (1000 mL).\n  - cm³: Cubic centimeter (1 cm³ = 1 cc = 1 mL).\n  - I.U. or IU: International Unit(s).\n  - mEq: Milliequivalent (chemical activity based on valence).\n  - mOsm or mOsmol: Milliosmoles (osmotic concentration per liter).\n  - BSA: Body surface area (calculated in square meters, m² or M², using Mosteller or DuBois formulas for chemotherapy dosing).\n  - mg/kg: Milligrams per kilogram body weight.\n  - mg/m²: Milligrams per square meter body surface area.\n  - mL/h: Milliliters per hour (IV infusion pump flow rate).',
          importance: 'high',
          tags: ['Measurements', 'gtt', 'semissem', 'dram', 'ounce', 'tsp', 'tbsp', 'BSA', 'mEq'],
          highlighted: true
        },
        {
          id: 'rx-n-10',
          title: 'Prescription Medications & Commonly Used Drug Acronyms',
          category: 'Definition',
          content: 'Standard drug acronyms in pharmacotherapy and clinical practice:\n\n• APAP:\n  - Drug: Acetaminophen (Paracetamol).\n  - Origin: N-**a**cetyl-**p**-**a**mino**p**henol.\n  - Indications: Analgesic, antipyretic (lacks significant anti-inflammatory action); hepatotoxic in overdose.\n\n• ASA:\n  - Drug: Aspirin.\n  - Origin: **A**cetyl**s**alicylic **a**cid.\n  - Indications: Antiplatelet, anti-inflammatory, analgesic; irreversible COX-1 inhibitor.\n\n• AZT:\n  - Drug: Zidovudine.\n  - Origin: **A**zido**t**hymidine.\n  - Indications: Nucleoside reverse transcriptase inhibitor (NRTI) for HIV/AIDS antiretroviral therapy.\n\n• EES:\n  - Drug: Erythromycin ethylsuccinate.\n  - Indications: Macrolide antibiotic targeting bacterial 50S ribosomal subunit.\n\n• HC:\n  - Drug: Hydrocortisone.\n  - Indications: Short-acting glucocorticoid for adrenal insufficiency and inflammatory conditions.\n\n• HCTZ:\n  - Drug: Hydrochlorothiazide.\n  - Indications: Thiazide diuretic inhibiting Na⁺/Cl⁻ symporter in distal convoluted tubule; first-line antihypertensive.\n\n• MTX:\n  - Drug: Methotrexate.\n  - Indications: Dihydrofolate reductase inhibitor used as an antineoplastic agent and DMARD for rheumatoid arthritis.\n\n• NSAID:\n  - Drug Class: Nonsteroidal anti-inflammatory drug (*ibuprofen, naproxen, celecoxib*).\n  - Mechanism: Inhibits cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis.\n\n• NTG:\n  - Drug: Nitroglycerin (glyceryl trinitrate).\n  - Indications: Vasodilator generating nitric oxide; sublingually administered for acute angina pectoris.',
          importance: 'high',
          tags: ['Medications', 'APAP', 'ASA', 'AZT', 'EES', 'HC', 'HCTZ', 'MTX', 'NSAID', 'NTG'],
          highlighted: true
        },
        {
          id: 'rx-n-11',
          title: 'Clinical Diagnostic & Organ System Abbreviations',
          category: 'Definition',
          content: 'Clinical syndromes, pathologies, and organ acronyms:\n\n• Cardiovascular:\n  - Afib: Atrial fibrillation (irregular supraventricular tachycardia).\n  - BP / HBP: Blood pressure / High blood pressure.\n  - CAD: Coronary artery disease.\n  - CHD: Coronary heart disease.\n  - CHF: Congestive heart failure.\n  - CV: Cardiovascular.\n  - HR: Heart rate.\n  - HT or HTN: Hypertension.\n  - MI: Myocardial infarction / Myocardial ischemia.\n\n• Respiratory & ENT:\n  - COPD: Chronic obstructive pulmonary disease (emphysema + chronic bronchitis).\n  - ENT: Ears, nose, and throat (otolaryngology).\n  - SOB: Shortness of breath (dyspnea).\n  - URI: Upper respiratory infection.\n\n• Renal, Gastrointestinal & Genitourinary:\n  - BM: Bowel movement.\n  - CRF: Chronic renal failure.\n  - GERD: Gastrointestinal reflux disease.\n  - GFR: Glomerular filtration rate (key indicator of kidney function).\n  - GI: Gastrointestinal.\n  - GU: Genitourinary.\n  - N&V: Nausea and vomiting.\n  - TPN: Total parenteral nutrition (IV hyperalimentation).\n  - UA: Urine analysis (urinalysis).\n  - UTI: Urinary tract infection.\n\n• General Clinical Practice:\n  - ADR: Adverse drug reaction.\n  - BS: Blood sugar.\n  - HA: Headache.\n  - HRT: Hormone replacement therapy.\n  - IOP: Intraocular pressure.\n  - OA: Osteoarthritis.\n  - Pt: Patient.\n  - QL: Quality of life.\n  - RA: Rheumatoid arthritis.',
          importance: 'high',
          tags: ['Clinical', 'Afib', 'CAD', 'CHF', 'COPD', 'GERD', 'GFR', 'HTN', 'MI', 'UTI', 'TPN'],
          highlighted: true
        },
        {
          id: 'rx-n-12',
          title: 'ISMP & Joint Commission "Do Not Use" Safety Rules & Error Traps',
          category: 'Key Takeaway',
          content: 'Critical patient safety rules established by the Institute for Safe Medication Practices (ISMP) and The Joint Commission:\n\n• 1. Prohibited Latin Abbreviations ("Do Not Use" List):\n  - U or u (unit): Mistaken for "0" (zero), "4" (four), or "cc". Write "unit".\n  - IU (International Unit): Mistaken for "IV" (intravenous) or number "10". Write "International Unit".\n  - Q.D., QD, q.d., qd (daily): Mistaken for Q.O.D. or q.i.d. Write "daily".\n  - Q.O.D., QOD, q.o.d., qod (every other day): Mistaken for Q.D. or q.i.d. Write "every other day".\n  - Trailing Zero (*e.g., 5.0 mg*): If the decimal point is missed, 5.0 mg is misread as 50 mg (a 10-fold overdose!). Rule: NEVER use a trailing zero (*write 5 mg*).\n  - Lack of Leading Zero (*e.g., .5 mg*): If the period is overlooked, .5 mg is read as 5 mg. Rule: ALWAYS use a leading zero (*write 0.5 mg*).\n  - MS, MSO4, MgSO4: Confuses morphine sulfate with magnesium sulfate! Write "morphine sulfate" or "magnesium sulfate".\n\n• 2. Ear vs. Eye Ambiguity:\n  - AD, AS, AU (ears) vs. OD, OS, OU (eyes): When written hurriedly, "AD" looks like "OD", causing ear drops to be mistakenly instilled into the eye. Always specify "right ear", "left eye".\n\n• 3. Sound-Alike / Look-Alike Drug Abbreviations:\n  - APAP, HCTZ, MTX, AZT: Acronyms can lead to fatal dispensing mix-ups. Best practice is to write full nonproprietary generic names.',
          importance: 'high',
          tags: ['ISMP', 'Joint Commission', 'Do Not Use', 'Medication Safety', 'Trailing Zero', 'Leading Zero'],
          highlighted: true
        }
      ],
      questions: []
    },
    {
      id: 'rev-rx-quiz-50',
      name: 'Multiple Choice Quiz (50 Items)',
      fileName: 'Prescription_Abbreviations_50_Item_Quiz.json',
      fileSnippet: '50-item comprehensive multiple choice quiz testing prescription directions, signa instructions, dosage forms, routes of administration, and medical abbreviations.',
      testDate: '2026-11-05',
      questionTypes: ['multiple_choice'],
      questionCount: 50,
      createdAt: '2026-10-20',
      notes: [],
      questions: [
        {
          id: 'rx-q-1',
          type: 'multiple_choice',
          question: 'What is the meaning of the prescription abbreviation b.i.d. (Latin: bis in die)?',
          options: ['Twice a day', 'Three times a day', 'Four times a day', 'Every other day'],
          correctAnswer: 'Twice a day',
          explanation: 'b.i.d. stands for bis in die, meaning twice a day.',
          points: 1
        },
        {
          id: 'rx-q-2',
          type: 'multiple_choice',
          question: 'What is the Latin origin and meaning of t.i.d.?',
          options: ['Ter in die — three times a day', 'Quarter in die — four times a day', 'Bis in die — twice a day', 'Semel in die — once a day'],
          correctAnswer: 'Ter in die — three times a day',
          explanation: 't.i.d. stands for ter in die, meaning three times a day.',
          points: 1
        },
        {
          id: 'rx-q-3',
          type: 'multiple_choice',
          question: 'The abbreviation q.i.d. stands for quarter in die, which directs the patient to take the drug:',
          options: ['Four times a day', 'Every 4 hours', 'Every other day', 'Once a day'],
          correctAnswer: 'Four times a day',
          explanation: 'q.i.d. means four times a day (quarter in die).',
          points: 1
        },
        {
          id: 'rx-q-4',
          type: 'multiple_choice',
          question: 'What does the abbreviation a.c. (ante cibos) instruct the patient to do?',
          options: ['Take before meals', 'Take after meals', 'Take at bedtime', 'Take with water'],
          correctAnswer: 'Take before meals',
          explanation: 'a.c. is ante cibos, meaning before meals.',
          points: 1
        },
        {
          id: 'rx-q-5',
          type: 'multiple_choice',
          question: 'What does the abbreviation p.c. (post cibos) instruct the patient to do?',
          options: ['Take after meals', 'Take before meals', 'Take on an empty stomach', 'Take in the morning'],
          correctAnswer: 'Take after meals',
          explanation: 'p.c. is post cibos, meaning after meals.',
          points: 1
        },
        {
          id: 'rx-q-6',
          type: 'multiple_choice',
          question: 'The abbreviation h.s. stands for hora somni, meaning:',
          options: ['At bedtime / hour of sleep', 'In the morning', 'Every hour', 'Half-strength'],
          correctAnswer: 'At bedtime / hour of sleep',
          explanation: 'h.s. stands for hora somni, meaning at bedtime.',
          points: 1
        },
        {
          id: 'rx-q-7',
          type: 'multiple_choice',
          question: 'What does the Latin abbreviation p.r.n. (pro re nata) signify on a prescription?',
          options: ['As needed / as occasion arises', 'Immediately', 'Do not repeat', 'As directed'],
          correctAnswer: 'As needed / as occasion arises',
          explanation: 'p.r.n. means pro re nata (as needed).',
          points: 1
        },
        {
          id: 'rx-q-8',
          type: 'multiple_choice',
          question: 'What does stat. (statim) mean in medical orders?',
          options: ['Immediately / at once', 'As needed', 'At bedtime', 'Without food'],
          correctAnswer: 'Immediately / at once',
          explanation: 'stat. stands for statim, denoting immediate emergency administration.',
          points: 1
        },
        {
          id: 'rx-q-9',
          type: 'multiple_choice',
          question: 'The abbreviation p.o. (per os) instructs administration by which route?',
          options: ['By mouth (orally)', 'By rectum', 'By injection', 'Under the tongue'],
          correctAnswer: 'By mouth (orally)',
          explanation: 'p.o. stands for per os, meaning by mouth or orally.',
          points: 1
        },
        {
          id: 'rx-q-10',
          type: 'multiple_choice',
          question: 'NPO is a hospital order meaning non per os, instructing:',
          options: ['Nothing by mouth', 'Nothing per rectum', 'Normal saline push only', 'No physical exertion'],
          correctAnswer: 'Nothing by mouth',
          explanation: 'NPO stands for non per os, meaning nothing by mouth.',
          points: 1
        },
        {
          id: 'rx-q-11',
          type: 'multiple_choice',
          question: 'What is the meaning of the otic abbreviation a.d. (auris dextro)?',
          options: ['Right ear', 'Left ear', 'Both ears', 'Right eye'],
          correctAnswer: 'Right ear',
          explanation: 'a.d. stands for auris dextro (right ear). Dexter means right; auris means ear.',
          points: 1
        },
        {
          id: 'rx-q-12',
          type: 'multiple_choice',
          question: 'What is the meaning of the otic abbreviation a.s. (auris sinistro)?',
          options: ['Left ear', 'Right ear', 'Both ears', 'Left eye'],
          correctAnswer: 'Left ear',
          explanation: 'a.s. stands for auris sinistro (left ear). Sinister means left.',
          points: 1
        },
        {
          id: 'rx-q-13',
          type: 'multiple_choice',
          question: 'What does a.u. (auris utro) mean on a prescription?',
          options: ['Each ear (both ears)', 'Right ear only', 'Left ear only', 'Both eyes'],
          correctAnswer: 'Each ear (both ears)',
          explanation: 'a.u. stands for auris utro, meaning each ear or both ears.',
          points: 1
        },
        {
          id: 'rx-q-14',
          type: 'multiple_choice',
          question: 'What is the meaning of the ophthalmic abbreviation o.d. (oculo dextro)?',
          options: ['Right eye', 'Left eye', 'Both eyes', 'Right ear'],
          correctAnswer: 'Right eye',
          explanation: 'o.d. stands for oculo dextro (right eye). Oculus means eye.',
          points: 1
        },
        {
          id: 'rx-q-15',
          type: 'multiple_choice',
          question: 'What is the meaning of the ophthalmic abbreviation o.s. (oculo sinistro)?',
          options: ['Left eye', 'Right eye', 'Both eyes', 'Left ear'],
          correctAnswer: 'Left eye',
          explanation: 'o.s. stands for oculo sinistro (left eye).',
          points: 1
        },
        {
          id: 'rx-q-16',
          type: 'multiple_choice',
          question: 'What does o.u. (oculo utro) mean on a prescription?',
          options: ['Each eye (both eyes)', 'Right eye only', 'Left eye only', 'Both ears'],
          correctAnswer: 'Each eye (both eyes)',
          explanation: 'o.u. stands for oculo utro, meaning each eye or both eyes.',
          points: 1
        },
        {
          id: 'rx-q-17',
          type: 'multiple_choice',
          question: 'What does the route abbreviation SL stand for?',
          options: ['Sublingual (under the tongue)', 'Subcutaneous', 'Straight line', 'Standard level'],
          correctAnswer: 'Sublingual (under the tongue)',
          explanation: 'SL stands for sublingual, placed under the tongue for rapid systemic absorption.',
          points: 1
        },
        {
          id: 'rx-q-18',
          type: 'multiple_choice',
          question: 'What does the abbreviation SubQ or SC mean?',
          options: ['Subcutaneously (beneath the skin)', 'Sublingually', 'Skin cleansing', 'Surgically cleared'],
          correctAnswer: 'Subcutaneously (beneath the skin)',
          explanation: 'SubQ / SC stands for subcutaneous injection into the fatty tissue below dermis.',
          points: 1
        },
        {
          id: 'rx-q-19',
          type: 'multiple_choice',
          question: 'The abbreviation IM stands for:',
          options: ['Intramuscular', 'Intravenous', 'Intradermal', 'Intrathecal'],
          correctAnswer: 'Intramuscular',
          explanation: 'IM stands for intramuscular injection.',
          points: 1
        },
        {
          id: 'rx-q-20',
          type: 'multiple_choice',
          question: 'What does ID denote in injection routes?',
          options: ['Intradermal', 'Intramuscular', 'Identification', 'Infectious disease'],
          correctAnswer: 'Intradermal',
          explanation: 'ID stands for intradermal injection into the dermis layer (as in TB PPD tests).',
          points: 1
        },
        {
          id: 'rx-q-21',
          type: 'multiple_choice',
          question: 'The abbreviation IT in pharmacotherapy stands for:',
          options: ['Intrathecal (into spinal canal/subarachnoid space)', 'Intravenous total', 'Inhalation therapy', 'Intranasal test'],
          correctAnswer: 'Intrathecal (into spinal canal/subarachnoid space)',
          explanation: 'IT stands for intrathecal administration into the cerebrospinal fluid.',
          points: 1
        },
        {
          id: 'rx-q-22',
          type: 'multiple_choice',
          question: 'What does IVPB mean in intravenous therapy orders?',
          options: ['Intravenous piggyback', 'Intravenous push bolus', 'Intravenous peripheral bundle', 'Intravenous pure blood'],
          correctAnswer: 'Intravenous piggyback',
          explanation: 'IVPB stands for intravenous piggyback, a secondary intermittent infusion.',
          points: 1
        },
        {
          id: 'rx-q-23',
          type: 'multiple_choice',
          question: 'What does CIVI denote?',
          options: ['Continuous intravenous infusion', 'Central intravenous injection', 'Combined initial volume infusion', 'Carotid intravenous insertion'],
          correctAnswer: 'Continuous intravenous infusion',
          explanation: 'CIVI stands for continuous (24-hour) intravenous infusion.',
          points: 1
        },
        {
          id: 'rx-q-24',
          type: 'multiple_choice',
          question: 'What does the apothecary measurement gtt (gutta) represent?',
          options: ['Drop (or drops)', 'Grain', 'Gram', 'Gallon'],
          correctAnswer: 'Drop (or drops)',
          explanation: 'gtt stands for gutta (drop) or guttae (drops).',
          points: 1
        },
        {
          id: 'rx-q-25',
          type: 'multiple_choice',
          question: 'In prescription directions, the symbol ss or s̄s̄ (semissem) means:',
          options: ['One-half (1/2)', 'Single dose', 'Without', 'Standard solution'],
          correctAnswer: 'One-half (1/2)',
          explanation: 'ss or s̄s̄ stands for semissem, representing one-half (1/2).',
          points: 1
        },
        {
          id: 'rx-q-26',
          type: 'multiple_choice',
          question: 'The symbol c or c̄ (Latin: cum) means:',
          options: ['With', 'Without', 'Concentrated', 'Capsule'],
          correctAnswer: 'With',
          explanation: 'c or c̄ stands for cum, which translates to "with".',
          points: 1
        },
        {
          id: 'rx-q-27',
          type: 'multiple_choice',
          question: 'The symbol s or s̄ (Latin: sine) means:',
          options: ['Without', 'With', 'Single', 'Slowly'],
          correctAnswer: 'Without',
          explanation: 's or s̄ stands for sine, which translates to "without".',
          points: 1
        },
        {
          id: 'rx-q-28',
          type: 'multiple_choice',
          question: 'What is the meaning of aa. (Latin: ana)?',
          options: ['Of each', 'Up to', 'Before meals', 'As needed'],
          correctAnswer: 'Of each',
          explanation: 'aa. stands for ana, meaning "of each".',
          points: 1
        },
        {
          id: 'rx-q-29',
          type: 'multiple_choice',
          question: 'What does ad mean in compounding prescriptions (*e.g., aqua ad 100 mL*)?',
          options: ['Up to / to make', 'Add immediately', 'As directed', 'After dilution'],
          correctAnswer: 'Up to / to make',
          explanation: 'ad means up to or to make (adding solvent up to the designated volume).',
          points: 1
        },
        {
          id: 'rx-q-30',
          type: 'multiple_choice',
          question: 'What does q.s. (quantum sufficit) mean?',
          options: ['A sufficient quantity', 'Every shift', 'Quantity sold', 'Quick supply'],
          correctAnswer: 'A sufficient quantity',
          explanation: 'q.s. stands for quantum sufficit (a sufficient quantity).',
          points: 1
        },
        {
          id: 'rx-q-31',
          type: 'multiple_choice',
          question: 'What does d.t.d. (dentur tales doses) direct the pharmacist to do?',
          options: ['Give of such doses', 'Divide the total dose', 'Dispense twice daily', 'Dilute to dryness'],
          correctAnswer: 'Give of such doses',
          explanation: 'd.t.d. means dentur tales doses (give of such doses).',
          points: 1
        },
        {
          id: 'rx-q-32',
          type: 'multiple_choice',
          question: 'What does M. (misce) signify in compounding instructions?',
          options: ['Mix', 'Make', 'Morning', 'Mass'],
          correctAnswer: 'Mix',
          explanation: 'M. stands for misce, meaning "mix".',
          points: 1
        },
        {
          id: 'rx-q-33',
          type: 'multiple_choice',
          question: 'What does ft (fiat) mean in compounding instructions?',
          options: ['Make / let it be made', 'Fast technique', 'Filter thoroughly', 'Fluid total'],
          correctAnswer: 'Make / let it be made',
          explanation: 'ft stands for fiat, meaning "make" or "let it be made".',
          points: 1
        },
        {
          id: 'rx-q-34',
          type: 'multiple_choice',
          question: 'The abbreviation Sig. or Signa means:',
          options: ['Write / directions on label', 'Signed by physician', 'Significant reaction', 'Single dose only'],
          correctAnswer: 'Write / directions on label',
          explanation: 'Sig. stands for Signa, meaning "write" or label directions for the patient.',
          points: 1
        },
        {
          id: 'rx-q-35',
          type: 'multiple_choice',
          question: 'What does non rep. or NR mean?',
          options: ['Do not repeat / no refills', 'Non-reactive', 'Normal recovery', 'New prescription required'],
          correctAnswer: 'Do not repeat / no refills',
          explanation: 'non rep. stands for non repetatur (do not repeat).',
          points: 1
        },
        {
          id: 'rx-q-36',
          type: 'multiple_choice',
          question: 'What is the dosage form ungt. or oint. (unguentum)?',
          options: ['Ointment', 'Solution', 'Tincture', 'Syrup'],
          correctAnswer: 'Ointment',
          explanation: 'ungt. stands for unguentum, which is an ointment.',
          points: 1
        },
        {
          id: 'rx-q-37',
          type: 'multiple_choice',
          question: 'What is the dosage form pulv. (pulvis)?',
          options: ['Powder', 'Pill', 'Liquid', 'Paste'],
          correctAnswer: 'Powder',
          explanation: 'pulv. stands for pulvis (powder).',
          points: 1
        },
        {
          id: 'rx-q-38',
          type: 'multiple_choice',
          question: 'What dosage form is elix.?',
          options: ['Elixir (sweetened hydroalcoholic liquid)', 'Emulsion', 'Extract', 'Eye drop'],
          correctAnswer: 'Elixir (sweetened hydroalcoholic liquid)',
          explanation: 'elix. stands for elixir, a sweetened hydroalcoholic liquid preparation.',
          points: 1
        },
        {
          id: 'rx-q-39',
          type: 'multiple_choice',
          question: 'What does the IV fluid abbreviation D5W represent?',
          options: ['Dextrose 5% in Water', 'Dextrose 5% in Saline', 'Dextrose with 5 vitamins', 'Dialysis solution 5%'],
          correctAnswer: 'Dextrose 5% in Water',
          explanation: 'D5W stands for Dextrose 5% in Water.',
          points: 1
        },
        {
          id: 'rx-q-40',
          type: 'multiple_choice',
          question: 'What does NS represent in intravenous solutions?',
          options: ['Normal Saline (0.9% Sodium Chloride)', 'Non-sterile solution', 'New standard fluid', 'Neurological saline'],
          correctAnswer: 'Normal Saline (0.9% Sodium Chloride)',
          explanation: 'NS stands for Normal Saline, which is 0.9% Sodium Chloride.',
          points: 1
        },
        {
          id: 'rx-q-41',
          type: 'multiple_choice',
          question: 'What does LR or RL stand for in fluid resuscitation orders?',
          options: ['Lactated Ringer’s / Ringer’s Lactate', 'Lipid replacement', 'Liver recovery fluid', 'Low residue liquid'],
          correctAnswer: 'Lactated Ringer’s / Ringer’s Lactate',
          explanation: 'LR / RL stands for Lactated Ringer’s solution.',
          points: 1
        },
        {
          id: 'rx-q-42',
          type: 'multiple_choice',
          question: 'The medication acronym APAP corresponds to which drug?',
          options: ['Acetaminophen (Paracetamol)', 'Aspirin', 'Aripiprazole', 'Ampicillin'],
          correctAnswer: 'Acetaminophen (Paracetamol)',
          explanation: 'APAP is derived from N-acetyl-p-aminophenol (acetaminophen).',
          points: 1
        },
        {
          id: 'rx-q-43',
          type: 'multiple_choice',
          question: 'The medication acronym ASA corresponds to which drug?',
          options: ['Aspirin (Acetylsalicylic Acid)', 'Acetaminophen', 'Azathioprine', 'Ascorbic acid'],
          correctAnswer: 'Aspirin (Acetylsalicylic Acid)',
          explanation: 'ASA stands for acetylsalicylic acid (aspirin).',
          points: 1
        },
        {
          id: 'rx-q-44',
          type: 'multiple_choice',
          question: 'HCTZ is a common antihypertensive diuretic abbreviation for:',
          options: ['Hydrochlorothiazide', 'Hydralazine', 'Hydrocortisone', 'Hydroxychloroquine'],
          correctAnswer: 'Hydrochlorothiazide',
          explanation: 'HCTZ stands for hydrochlorothiazide.',
          points: 1
        },
        {
          id: 'rx-q-45',
          type: 'multiple_choice',
          question: 'NTG is the standard abbreviation for which cardiac vasodilator?',
          options: ['Nitroglycerin', 'Nitroprusside', 'Naratriptan', 'Nifedipine'],
          correctAnswer: 'Nitroglycerin',
          explanation: 'NTG stands for nitroglycerin.',
          points: 1
        },
        {
          id: 'rx-q-46',
          type: 'multiple_choice',
          question: 'What does MTX stand for in oncology and rheumatology?',
          options: ['Methotrexate', 'Metronidazole', 'Methylprednisolone', 'Mitoxantrone'],
          correctAnswer: 'Methotrexate',
          explanation: 'MTX stands for methotrexate.',
          points: 1
        },
        {
          id: 'rx-q-47',
          type: 'multiple_choice',
          question: 'What does GERD represent in gastroenterology?',
          options: ['Gastrointestinal reflux disease', 'Generalized enteritis disease', 'Gastric emptying rate deficit', 'Glomerular electrolyte reduction'],
          correctAnswer: 'Gastrointestinal reflux disease',
          explanation: 'GERD stands for gastrointestinal reflux disease.',
          points: 1
        },
        {
          id: 'rx-q-48',
          type: 'multiple_choice',
          question: 'What does GFR stand for in nephrology and renal dosing evaluations?',
          options: ['Glomerular filtration rate', 'Gastric fluid ratio', 'Glucose flow rate', 'Gross fecal residue'],
          correctAnswer: 'Glomerular filtration rate',
          explanation: 'GFR stands for glomerular filtration rate.',
          points: 1
        },
        {
          id: 'rx-q-49',
          type: 'multiple_choice',
          question: 'What does TPN stand for in hospital clinical nutrition orders?',
          options: ['Total parenteral nutrition', 'Total plasma nitrogen', 'Therapeutic protein nutrition', 'Timed pedal neuropathy'],
          correctAnswer: 'Total parenteral nutrition',
          explanation: 'TPN stands for total parenteral nutrition.',
          points: 1
        },
        {
          id: 'rx-q-50',
          type: 'multiple_choice',
          question: 'According to the Joint Commission and ISMP safety standards, why is writing "5.0 mg" prohibited?',
          options: ['If the decimal is missed, it can be misread as 50 mg (a 10-fold overdose)', 'It takes too long to write', 'Zero cannot be prescribed in pharmacy', 'It confuses mg with mcg'],
          correctAnswer: 'If the decimal is missed, it can be misread as 50 mg (a 10-fold overdose)',
          explanation: 'Trailing zeros (*e.g., 5.0 mg*) are strictly prohibited because a missing decimal point leads to a catastrophic 10-fold overdose (50 mg). Always write "5 mg".',
          points: 1
        }
      ]
    },
    {
      id: 'rev-rx-id-25',
      name: '25-Item Identification Exam',
      fileName: 'Prescription_Abbreviations_25_Item_ID.json',
      fileSnippet: 'Identification exam testing exact Latin meanings, clinical acronyms, routes of administration, and ISMP safety rules.',
      testDate: '2026-11-06',
      questionTypes: ['identification'],
      questionCount: 25,
      createdAt: '2026-10-20',
      notes: [],
      questions: [
        {
          id: 'rx-id-1',
          type: 'identification',
          question: 'What is the English meaning of the Latin prescription abbreviation b.i.d. (bis in die)?',
          correctAnswer: 'twice a day',
          explanation: 'b.i.d. means twice a day.',
          points: 2
        },
        {
          id: 'rx-id-2',
          type: 'identification',
          question: 'What is the English meaning of t.i.d. (ter in die)?',
          correctAnswer: 'three times a day',
          explanation: 't.i.d. means three times a day.',
          points: 2
        },
        {
          id: 'rx-id-3',
          type: 'identification',
          question: 'What is the English meaning of q.i.d. (quarter in die)?',
          correctAnswer: 'four times a day',
          explanation: 'q.i.d. means four times a day.',
          points: 2
        },
        {
          id: 'rx-id-4',
          type: 'identification',
          question: 'What is the English meaning of a.c. (ante cibos)?',
          correctAnswer: 'before meals',
          explanation: 'a.c. means before meals.',
          points: 2
        },
        {
          id: 'rx-id-5',
          type: 'identification',
          question: 'What is the English meaning of p.c. (post cibos)?',
          correctAnswer: 'after meals',
          explanation: 'p.c. means after meals.',
          points: 2
        },
        {
          id: 'rx-id-6',
          type: 'identification',
          question: 'What is the English meaning of h.s. (hora somni)?',
          correctAnswer: 'at bedtime',
          explanation: 'h.s. means at bedtime (hour of sleep).',
          points: 2
        },
        {
          id: 'rx-id-7',
          type: 'identification',
          question: 'What is the English meaning of p.r.n. (pro re nata)?',
          correctAnswer: 'as needed',
          explanation: 'p.r.n. means as needed.',
          points: 2
        },
        {
          id: 'rx-id-8',
          type: 'identification',
          question: 'What is the English meaning of stat. (statim)?',
          correctAnswer: 'immediately',
          explanation: 'stat. means immediately (or at once).',
          points: 2
        },
        {
          id: 'rx-id-9',
          type: 'identification',
          question: 'What does the route abbreviation p.o. (per os) mean?',
          correctAnswer: 'by mouth',
          explanation: 'p.o. means by mouth (or orally).',
          points: 2
        },
        {
          id: 'rx-id-10',
          type: 'identification',
          question: 'What does the order NPO (non per os) instruct?',
          correctAnswer: 'nothing by mouth',
          explanation: 'NPO means nothing by mouth.',
          points: 2
        },
        {
          id: 'rx-id-11',
          type: 'identification',
          question: 'What is the English meaning of a.d. (auris dextro)?',
          correctAnswer: 'right ear',
          explanation: 'a.d. means right ear.',
          points: 2
        },
        {
          id: 'rx-id-12',
          type: 'identification',
          question: 'What is the English meaning of a.s. (auris sinistro)?',
          correctAnswer: 'left ear',
          explanation: 'a.s. means left ear.',
          points: 2
        },
        {
          id: 'rx-id-13',
          type: 'identification',
          question: 'What is the English meaning of a.u. (auris utro)?',
          correctAnswer: 'each ear',
          explanation: 'a.u. means each ear (or both ears).',
          points: 2
        },
        {
          id: 'rx-id-14',
          type: 'identification',
          question: 'What is the English meaning of o.d. (oculo dextro)?',
          correctAnswer: 'right eye',
          explanation: 'o.d. means right eye.',
          points: 2
        },
        {
          id: 'rx-id-15',
          type: 'identification',
          question: 'What is the English meaning of o.s. (oculo sinistro)?',
          correctAnswer: 'left eye',
          explanation: 'o.s. means left eye.',
          points: 2
        },
        {
          id: 'rx-id-16',
          type: 'identification',
          question: 'What is the English meaning of o.u. (oculo utro)?',
          correctAnswer: 'each eye',
          explanation: 'o.u. means each eye (or both eyes).',
          points: 2
        },
        {
          id: 'rx-id-17',
          type: 'identification',
          question: 'What does the administration route SL stand for?',
          correctAnswer: 'sublingual',
          explanation: 'SL stands for sublingual (under the tongue).',
          points: 2
        },
        {
          id: 'rx-id-18',
          type: 'identification',
          question: 'What does the administration route SubQ or SC stand for?',
          correctAnswer: 'subcutaneously',
          explanation: 'SubQ / SC stands for subcutaneously.',
          points: 2
        },
        {
          id: 'rx-id-19',
          type: 'identification',
          question: 'What does the abbreviation gtt (gutta) represent?',
          correctAnswer: 'drop',
          explanation: 'gtt represents drop (or drops).',
          points: 2
        },
        {
          id: 'rx-id-20',
          type: 'identification',
          question: 'What does the symbol ss or s̄s̄ (semissem) represent?',
          correctAnswer: 'one-half',
          explanation: 'ss means one-half (1/2).',
          points: 2
        },
        {
          id: 'rx-id-21',
          type: 'identification',
          question: 'What does q.s. (quantum sufficit) mean?',
          correctAnswer: 'a sufficient quantity',
          explanation: 'q.s. means a sufficient quantity.',
          points: 2
        },
        {
          id: 'rx-id-22',
          type: 'identification',
          question: 'What does M. (misce) direct the pharmacist to do?',
          correctAnswer: 'mix',
          explanation: 'M. means mix.',
          points: 2
        },
        {
          id: 'rx-id-23',
          type: 'identification',
          question: 'What does the medication acronym APAP stand for?',
          correctAnswer: 'acetaminophen',
          explanation: 'APAP stands for acetaminophen (paracetamol).',
          points: 2
        },
        {
          id: 'rx-id-24',
          type: 'identification',
          question: 'What does the medication acronym ASA stand for?',
          correctAnswer: 'aspirin',
          explanation: 'ASA stands for aspirin (acetylsalicylic acid).',
          points: 2
        },
        {
          id: 'rx-id-25',
          type: 'identification',
          question: 'What does the medication acronym HCTZ stand for?',
          correctAnswer: 'hydrochlorothiazide',
          explanation: 'HCTZ stands for hydrochlorothiazide.',
          points: 2
        }
      ]
    }
  ]
};
