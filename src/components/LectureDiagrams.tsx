import React from 'react';
import { Shield, AlertTriangle, Flame, Droplets, CheckCircle2, ArrowDown, Sparkles, Wind, Users } from 'lucide-react';
import { useFlowerTheme } from '../context/ThemeContext';

/**
 * 1. Hierarchy of Controls (Inverted Pyramid)
 * Source: NIOSH Framework / Slide 24 of Microbiology Safety Lecture
 */
export const HierarchyOfControlsDiagram: React.FC = () => {
  const { theme } = useFlowerTheme();

  const tiers = [
    {
      level: 'ELIMINATION',
      subtitle: 'Physically remove the hazard',
      desc: 'Most effective control. Completely eliminating infectious agents from the workplace whenever feasible.',
      color: '#0D9488', // Emerald / Teal
      bg: '#F0FDFA',
      border: '#99F6E4',
      width: '100%',
      rank: 'Most Effective'
    },
    {
      level: 'SUBSTITUTION',
      subtitle: 'Replace the hazard',
      desc: 'Substitute dangerous pathogens with non-pathogenic surrogate strains for teaching and calibration.',
      color: '#0284C7', // Sky blue
      bg: '#F0F9FF',
      border: '#BAE6FD',
      width: '90%',
      rank: ''
    },
    {
      level: 'ENGINEERING CONTROLS',
      subtitle: 'Isolate people from the hazard',
      desc: 'Biological Safety Cabinets (BSCs Class I-III), negative room pressure, chemical fume hoods, sharps containers.',
      color: '#6366F1', // Indigo
      bg: '#EEF2FF',
      border: '#C7D2FE',
      width: '80%',
      rank: ''
    },
    {
      level: 'ADMINISTRATIVE CONTROLS',
      subtitle: 'Change the way people work',
      desc: 'Standard operating procedures, shift disinfection logs, safety signage, mandatory training, no-contact lens rule.',
      color: '#D97706', // Amber
      bg: '#FFFBEB',
      border: '#FDE68A',
      width: '70%',
      rank: ''
    },
    {
      level: 'PPE',
      subtitle: 'Protect worker with Personal Protective Equipment',
      desc: 'Gloves, gowns, surgical masks, respirators, face shields, goggles. Last line of defense.',
      color: '#E11D48', // Rose
      bg: '#FFF1F2',
      border: '#FECDD3',
      width: '60%',
      rank: 'Least Effective'
    }
  ];

  return (
    <div className="my-6 p-5 sm:p-7 bg-[#FCFAF9] rounded-2xl border border-[#F0E6E4]">
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#EFE5E3]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
              Lecture Diagram · Slide 24
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
              The NIOSH Hierarchy of Controls
            </h4>
          </div>
        </div>
        <span className="text-[11px] font-mono font-medium text-slate-400 hidden sm:inline">
          Inverted Pyramid
        </span>
      </div>

      <div className="space-y-2 max-w-2xl mx-auto pt-2">
        {tiers.map((tier, idx) => (
          <div
            key={tier.level}
            className="mx-auto rounded-xl p-3 border transition-all"
            style={{
              width: tier.width,
              backgroundColor: tier.bg,
              borderColor: tier.border
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center shrink-0"
                  style={{ backgroundColor: tier.color }}
                >
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {tier.level}
                </span>
                <span className="text-[11px] text-slate-500 hidden md:inline">
                  — {tier.subtitle}
                </span>
              </div>
              {tier.rank && (
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0"
                  style={{ backgroundColor: tier.color + '20', color: tier.color }}
                >
                  {tier.rank}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-600 mt-1 pl-7 leading-normal">
              {tier.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#EFE5E3] flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1 text-teal-700 font-medium">
          ▲ Highest protection at source
        </span>
        <span className="flex items-center gap-1 text-rose-700 font-medium">
          ▼ Dependent on individual compliance
        </span>
      </div>
    </div>
  );
};

/**
 * 2. PPE Donning & Doffing Sequence
 * Source: Slide 6 of Microbiology Safety Lecture
 */
export const PpeSequenceDiagram: React.FC = () => {
  const donningSteps = [
    { num: '1', name: 'Hand Hygiene', note: 'Thorough soap wash or alcohol rub' },
    { num: '2', name: 'Gown / Coat', note: 'Fasten neck and waist ties' },
    { num: '3', name: 'Mask / Respirator', note: 'Fit snug over nose & mouth' },
    { num: '4', name: 'Eye Protection', note: 'Goggles or clear face shield' },
    { num: '5', name: 'Gloves', note: 'Pull over wrist cuffs of gown' }
  ];

  const doffingSteps = [
    { num: '1', name: 'Gloves', note: 'Most contaminated! Remove first', highlight: true },
    { num: '2', name: 'Gown / Coat', note: 'Unfasten ties, peel away inside out' },
    { num: '3', name: 'Eye Protection', note: 'Remove by headband, do not touch front' },
    { num: '4', name: 'Mask / Respirator', note: 'Untie or grasp bottom elastic first' },
    { num: '5', name: 'Hand Hygiene', note: 'Wash immediately after all PPE removal' }
  ];

  return (
    <div className="my-6 p-5 sm:p-7 bg-[#FCFAF9] rounded-2xl border border-[#F0E6E4]">
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#EFE5E3]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">
              Lecture Diagram · Slide 6
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
              PPE Donning & Doffing Sequence
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* DONNING */}
        <div className="bg-white rounded-xl p-4 border border-emerald-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              1. DONNING (Putting On)
            </span>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Clean → Dirty
            </span>
          </div>

          <div className="space-y-2">
            {donningSteps.map((step) => (
              <div key={step.num} className="flex items-center gap-2.5 text-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                  {step.num}
                </span>
                <div>
                  <span className="font-bold text-slate-800">{step.name}</span>
                  <span className="text-[11px] text-slate-500 block">{step.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOFFING */}
        <div className="bg-white rounded-xl p-4 border border-rose-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-100">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
              2. DOFFING (Taking Off)
            </span>
            <span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
              Dirty First
            </span>
          </div>

          <div className="space-y-2">
            {doffingSteps.map((step) => (
              <div key={step.num} className="flex items-center gap-2.5 text-xs">
                <span
                  className={`w-5 h-5 rounded-full font-mono font-bold flex items-center justify-center text-[10px] shrink-0 ${
                    step.highlight ? 'bg-rose-600 text-white ring-2 ring-rose-200' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {step.num}
                </span>
                <div>
                  <span className={`font-bold ${step.highlight ? 'text-rose-900' : 'text-slate-800'}`}>
                    {step.name}
                  </span>
                  <span className="text-[11px] text-slate-500 block">{step.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Biological Safety Cabinets (BSCs) Classification
 * Source: Slides 18-20 of Microbiology Safety Lecture
 */
export const BscClassificationDiagram: React.FC = () => {
  return (
    <div className="my-6 p-5 sm:p-7 bg-[#FCFAF9] rounded-2xl border border-[#F0E6E4]">
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#EFE5E3]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Wind className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
              Lecture Diagram · Slides 18-20
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
              Biological Safety Cabinets (BSCs) Classification
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Class I */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2.5">
          <div className="pb-2 border-b border-slate-100">
            <span className="text-[10px] font-mono font-bold text-slate-400 block">CLASS I</span>
            <h5 className="font-bold text-xs text-slate-900">Open-Front Negative Pressure</h5>
          </div>
          <p className="text-[11px] text-slate-600 leading-normal">
            Room air enters cabinet and passes around work material. Only exhaust air is HEPA filtered.
          </p>
          <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px]">
            <div className="flex items-center justify-between text-emerald-700">
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between text-rose-600">
              <span>Product Protection:</span>
              <span className="font-bold">✗ None</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700">
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
          </div>
        </div>

        {/* Class II */}
        <div className="bg-white rounded-xl p-4 border border-teal-300 ring-1 ring-teal-200 space-y-2.5">
          <div className="pb-2 border-b border-teal-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-teal-600 block">CLASS II</span>
              <h5 className="font-bold text-xs text-slate-900">Vertical Laminar Flow</h5>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
              Standard
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-normal">
            Air is HEPA sterilized before flowing over materials AND before exhaust. Vertical air sheets act as physical barrier.
          </p>
          <div className="pt-2 border-t border-teal-100 space-y-1 text-[11px]">
            <div className="flex items-center justify-between text-emerald-700">
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700">
              <span>Product Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700">
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 pt-1">
            <strong>Type A:</strong> 70% recirculated, 30% exhaust. (Clinical standard)<br />
            <strong>Type B:</strong> 100% ducted outside for chemicals/radioisotopes.
          </div>
        </div>

        {/* Class III */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2.5">
          <div className="pb-2 border-b border-slate-100">
            <span className="text-[10px] font-mono font-bold text-slate-400 block">CLASS III</span>
            <h5 className="font-bold text-xs text-slate-900">Gas-Tight Glove Box</h5>
          </div>
          <p className="text-[11px] text-slate-600 leading-normal">
            Totally enclosed, gas-tight negative pressure. Operations conducted through heavy rubber arm-length gloves.
          </p>
          <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px]">
            <div className="flex items-center justify-between text-emerald-700">
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700">
              <span>Product Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
            <div className="flex items-center justify-between text-emerald-700">
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 pt-1">
            Required exclusively for <strong>BSL-4</strong> lethal pathogens.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 4. Biosafety Levels (BSL 1 to 4) Infographic
 * Source: Slide 21 of Microbiology Safety Lecture
 */
export const BslMatrixDiagram: React.FC = () => {
  const levels = [
    {
      level: 'BSL-1',
      title: 'Minimal Risk',
      agents: 'Bacillus subtilis, Naegleria gruberi',
      facility: 'Standard undergraduate teaching bench; open benchwork',
      ppe: 'Basic lab coat, gloves, eye protection as needed'
    },
    {
      level: 'BSL-2',
      title: 'Moderate Risk (Clinical Standard)',
      agents: 'HIV, Hepatitis B (HBV), Salmonella organisms',
      facility: 'Limited access, biohazard warning signs, Class II BSC for aerosols',
      ppe: 'Lab coat, double gloves, face shield, BSC containment'
    },
    {
      level: 'BSL-3',
      title: 'High Aerosol / Serious Pathogens',
      agents: 'Mycobacterium tuberculosis, Coxiella burnetii, systemic fungi',
      facility: 'Negative airflow, double door entry, all procedures in BSC',
      ppe: 'Respiratory protection (N95/PAPR), protective suit'
    },
    {
      level: 'BSL-4',
      title: 'Extreme Life-Threatening Agents',
      agents: 'Marburg virus, Ebola, Congo-Crimean hemorrhagic fever',
      facility: 'Maximum containment, airlocks, Class III BSC or positive pressure suit',
      ppe: 'Full-body positive pressure suit, chemical shower decontamination upon exit'
    }
  ];

  return (
    <div className="my-6 p-5 sm:p-7 bg-[#FCFAF9] rounded-2xl border border-[#F0E6E4]">
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#EFE5E3]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
              Lecture Diagram · Slide 21
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
              Biosafety Levels (BSL 1–4) Risk Matrix
            </h4>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {levels.map((item, idx) => {
          const colors = [
            'border-slate-200 bg-white text-slate-800',
            'border-teal-200 bg-teal-50/50 text-teal-900',
            'border-amber-200 bg-amber-50/50 text-amber-900',
            'border-rose-200 bg-rose-50/50 text-rose-900'
          ];
          const badgeColors = [
            'bg-slate-100 text-slate-800',
            'bg-teal-100 text-teal-800',
            'bg-amber-100 text-amber-800',
            'bg-rose-100 text-rose-800'
          ];

          return (
            <div key={item.level} className={`rounded-xl p-3 sm:p-4 border ${colors[idx]} transition-all`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${badgeColors[idx]}`}>
                    {item.level}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {item.title}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {item.facility}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t border-black/5">
                <div>
                  <strong className="text-slate-800">Representative Organisms:</strong> {item.agents}
                </div>
                <div>
                  <strong className="text-slate-800">Containment & PPE:</strong> {item.ppe}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * 5. NFPA 704 Chemical Hazard Diamond & Biohazard Signage
 * Source: Slide 10-12 of Microbiology Safety Lecture
 */
export const NfpaDiamondDiagram: React.FC = () => {
  return (
    <div className="my-6 p-5 sm:p-7 bg-[#FCFAF9] rounded-2xl border border-[#F0E6E4]">
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#EFE5E3]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
              Lecture Diagram · Slide 10
            </span>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
              NFPA 704 Standard Chemical Hazard Diamond
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-2">
        {/* SVG NFPA Diamond */}
        <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
            {/* Top: Red / Flammability */}
            <polygon points="50,4 96,50 50,50" fill="#EF4444" transform="rotate(-45 50 50)" />
            {/* Left: Blue / Health */}
            <polygon points="50,4 96,50 50,50" fill="#3B82F6" transform="rotate(-135 50 50)" />
            {/* Right: Yellow / Instability */}
            <polygon points="50,4 96,50 50,50" fill="#EAB308" transform="rotate(45 50 50)" />
            {/* Bottom: White / Special */}
            <polygon points="50,4 96,50 50,50" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" transform="rotate(135 50 50)" />

            {/* Labels */}
            <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FIRE</text>
            <text x="28" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">HEALTH</text>
            <text x="72" y="54" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="bold">REACT</text>
            <text x="50" y="75" textAnchor="middle" fill="#1E293B" fontSize="9" fontWeight="bold">SPEC</text>
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs flex-1 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-500 shrink-0" />
            <span className="font-bold text-slate-800">Red (Top):</span>
            <span className="text-slate-600">Flammability Hazard (0 = will not burn, 4 = flashpoint &lt; 73°F)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-500 shrink-0" />
            <span className="font-bold text-slate-800">Blue (Left):</span>
            <span className="text-slate-600">Health Hazard (0 = normal material, 4 = deadly)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-yellow-400 shrink-0" />
            <span className="font-bold text-slate-800">Yellow (Right):</span>
            <span className="text-slate-600">Instability / Reactivity (0 = stable, 4 = may detonate)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 shrink-0" />
            <span className="font-bold text-slate-800">White (Bottom):</span>
            <span className="text-slate-600">Special Hazard (OX = Oxidizer, W = Water-reactive, SA = Simple asphyxiant)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 6. 10% Household Bleach Protocol Card
 * Source: Slide 8 of Microbiology Safety Lecture
 */
export const BleachProtocolDiagram: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-5 bg-teal-50/60 rounded-2xl border border-teal-200">
      <div className="flex items-center gap-2 mb-2">
        <Droplets className="w-4 h-4 text-teal-700" />
        <h5 className="font-serif text-xs sm:text-sm font-bold text-teal-900">
          Standard 10% Bleach Container Labeling Specification (Slide 8)
        </h5>
      </div>

      <div className="bg-white rounded-xl p-3.5 border border-teal-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-[10px] text-slate-400 block font-medium">1. Solution Name</span>
          <span className="font-bold text-slate-900">10% Sodium Hypochlorite</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block font-medium">2. Dilution Ratio</span>
          <span className="font-bold text-teal-700">1:10 (v/v) Fresh Daily</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block font-medium">3. Expiration Standard</span>
          <span className="font-bold text-rose-700">Strictly 24 Hours</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block font-medium">4. Required Record</span>
          <span className="font-bold text-slate-900">Date, Time, Preparer Initials</span>
        </div>
      </div>
    </div>
  );
};
