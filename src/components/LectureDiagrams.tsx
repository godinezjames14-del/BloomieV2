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
      bgLight: '#F0FDFA',
      borderLight: '#99F6E4',
      bgDark: 'rgba(13, 148, 136, 0.22)',
      borderDark: 'rgba(45, 212, 191, 0.4)',
      width: '100%',
      rank: 'Most Effective'
    },
    {
      level: 'SUBSTITUTION',
      subtitle: 'Replace the hazard',
      desc: 'Substitute dangerous pathogens with non-pathogenic surrogate strains for teaching and calibration.',
      color: '#0284C7', // Sky blue
      bgLight: '#F0F9FF',
      borderLight: '#BAE6FD',
      bgDark: 'rgba(2, 132, 199, 0.22)',
      borderDark: 'rgba(56, 189, 248, 0.4)',
      width: '90%',
      rank: ''
    },
    {
      level: 'ENGINEERING CONTROLS',
      subtitle: 'Isolate people from the hazard',
      desc: 'Biological Safety Cabinets (BSCs Class I-III), negative room pressure, chemical fume hoods, sharps containers.',
      color: '#6366F1', // Indigo
      bgLight: '#EEF2FF',
      borderLight: '#C7D2FE',
      bgDark: 'rgba(99, 102, 241, 0.22)',
      borderDark: 'rgba(129, 140, 248, 0.4)',
      width: '80%',
      rank: ''
    },
    {
      level: 'ADMINISTRATIVE CONTROLS',
      subtitle: 'Change the way people work',
      desc: 'Standard operating procedures, shift disinfection logs, safety signage, mandatory training, no-contact lens rule.',
      color: '#D97706', // Amber
      bgLight: '#FFFBEB',
      borderLight: '#FDE68A',
      bgDark: 'rgba(217, 119, 6, 0.22)',
      borderDark: 'rgba(251, 191, 36, 0.4)',
      width: '70%',
      rank: ''
    },
    {
      level: 'PPE',
      subtitle: 'Protect worker with Personal Protective Equipment',
      desc: 'Gloves, gowns, surgical masks, respirators, face shields, goggles. Last line of defense.',
      color: '#E11D48', // Rose
      bgLight: '#FFF1F2',
      borderLight: '#FECDD3',
      bgDark: 'rgba(225, 29, 72, 0.22)',
      borderDark: 'rgba(251, 113, 133, 0.4)',
      width: '60%',
      rank: 'Least Effective'
    }
  ];

  return (
    <div 
      className="my-6 p-5 sm:p-7 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div 
        className="flex items-center justify-between gap-3 mb-4 pb-2 border-b"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ 
              backgroundColor: theme.isInverted ? 'rgba(45, 212, 191, 0.2)' : '#CCFBF1',
              color: theme.isInverted ? '#5EEAD4' : '#0F766E'
            }}
          >
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span 
              className="text-[10px] font-bold uppercase tracking-wider block"
              style={{ color: theme.isInverted ? '#5EEAD4' : '#0F766E' }}
            >
              Lecture Diagram · Slide 24
            </span>
            <h4 
              className="font-serif text-sm sm:text-base font-bold"
              style={{ color: theme.fontPrimary }}
            >
              The NIOSH Hierarchy of Controls
            </h4>
          </div>
        </div>
        <span 
          className="text-[11px] font-mono font-medium hidden sm:inline"
          style={{ color: theme.fontMuted }}
        >
          Inverted Pyramid
        </span>
      </div>

      <div className="space-y-2 max-w-2xl mx-auto pt-2">
        {tiers.map((tier, idx) => {
          const bg = theme.isInverted ? tier.bgDark : tier.bgLight;
          const border = theme.isInverted ? tier.borderDark : tier.borderLight;

          return (
            <div
              key={tier.level}
              className="mx-auto rounded-xl p-3 border transition-all"
              style={{
                width: tier.width,
                backgroundColor: bg,
                borderColor: border
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center shrink-0 shadow-2xs"
                    style={{ backgroundColor: tier.color }}
                  >
                    {idx + 1}
                  </span>
                  <span 
                    className="text-xs font-bold"
                    style={{ color: theme.fontPrimary }}
                  >
                    {tier.level}
                  </span>
                  <span 
                    className="text-[11px] hidden md:inline"
                    style={{ color: theme.fontMuted }}
                  >
                    — {tier.subtitle}
                  </span>
                </div>
                {tier.rank && (
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0"
                    style={{ 
                      backgroundColor: theme.isInverted ? `${tier.color}35` : `${tier.color}20`, 
                      color: theme.isInverted ? '#FFFFFF' : tier.color 
                    }}
                  >
                    {tier.rank}
                  </span>
                )}
              </div>
              <p 
                className="text-[11px] mt-1 pl-7 leading-normal"
                style={{ color: theme.fontBody }}
              >
                {tier.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div 
        className="mt-4 pt-3 border-t flex items-center justify-between text-[11px]"
        style={{ borderColor: theme.borderSubtle }}
      >
        <span 
          className="flex items-center gap-1 font-medium"
          style={{ color: theme.isInverted ? '#5EEAD4' : '#0F766E' }}
        >
          ▲ Highest protection at source
        </span>
        <span 
          className="flex items-center gap-1 font-medium"
          style={{ color: theme.isInverted ? '#FDA4AF' : '#E11D48' }}
        >
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
  const { theme } = useFlowerTheme();

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
    <div 
      className="my-6 p-5 sm:p-7 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div 
        className="flex items-center justify-between gap-3 mb-4 pb-2 border-b"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ 
              backgroundColor: theme.isInverted ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF',
              color: theme.isInverted ? '#A5B4FC' : '#4F46E5'
            }}
          >
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span 
              className="text-[10px] font-bold uppercase tracking-wider block"
              style={{ color: theme.isInverted ? '#A5B4FC' : '#4F46E5' }}
            >
              Lecture Diagram · Slide 6
            </span>
            <h4 
              className="font-serif text-sm sm:text-base font-bold"
              style={{ color: theme.fontPrimary }}
            >
              PPE Donning & Doffing Sequence
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* DONNING */}
        <div 
          className="rounded-xl p-4 border space-y-3"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(13, 148, 136, 0.12)' : theme.bgPage,
            borderColor: theme.isInverted ? 'rgba(45, 212, 191, 0.3)' : '#A7F3D0'
          }}
        >
          <div 
            className="flex items-center justify-between pb-2 border-b"
            style={{ borderColor: theme.isInverted ? 'rgba(45, 212, 191, 0.2)' : '#D1FAE5' }}
          >
            <span 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: theme.isInverted ? '#6EE7B7' : '#065F46' }}
            >
              1. DONNING (Putting On)
            </span>
            <span 
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{ 
                backgroundColor: theme.isInverted ? 'rgba(16, 185, 129, 0.2)' : '#ECFDF5',
                color: theme.isInverted ? '#A7F3D0' : '#059669'
              }}
            >
              Clean → Dirty
            </span>
          </div>

          <div className="space-y-2">
            {donningSteps.map((step) => (
              <div key={step.num} className="flex items-center gap-2.5 text-xs">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-[10px] shrink-0 shadow-2xs">
                  {step.num}
                </span>
                <div>
                  <span className="font-bold" style={{ color: theme.fontPrimary }}>{step.name}</span>
                  <span className="text-[11px] block" style={{ color: theme.fontMuted }}>{step.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOFFING */}
        <div 
          className="rounded-xl p-4 border space-y-3"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(225, 29, 72, 0.12)' : theme.bgPage,
            borderColor: theme.isInverted ? 'rgba(251, 113, 133, 0.3)' : '#FECDD3'
          }}
        >
          <div 
            className="flex items-center justify-between pb-2 border-b"
            style={{ borderColor: theme.isInverted ? 'rgba(251, 113, 133, 0.2)' : '#FFE4E6' }}
          >
            <span 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: theme.isInverted ? '#FDA4AF' : '#9F1239' }}
            >
              2. DOFFING (Taking Off)
            </span>
            <span 
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{ 
                backgroundColor: theme.isInverted ? 'rgba(225, 29, 72, 0.2)' : '#FFF1F2',
                color: theme.isInverted ? '#FECDD3' : '#E11D48'
              }}
            >
              Dirty First
            </span>
          </div>

          <div className="space-y-2">
            {doffingSteps.map((step) => (
              <div key={step.num} className="flex items-center gap-2.5 text-xs">
                <span
                  className={`w-5 h-5 rounded-full font-mono font-bold flex items-center justify-center text-[10px] shrink-0 ${
                    step.highlight 
                      ? 'bg-rose-600 text-white ring-2 ring-rose-200' 
                      : theme.isInverted ? 'bg-rose-950 text-rose-300' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {step.num}
                </span>
                <div>
                  <span 
                    className="font-bold"
                    style={{ 
                      color: step.highlight 
                        ? (theme.isInverted ? '#FDA4AF' : '#881337') 
                        : theme.fontPrimary 
                    }}
                  >
                    {step.name}
                  </span>
                  <span className="text-[11px] block" style={{ color: theme.fontMuted }}>{step.note}</span>
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
  const { theme } = useFlowerTheme();

  return (
    <div 
      className="my-6 p-5 sm:p-7 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div 
        className="flex items-center justify-between gap-3 mb-4 pb-2 border-b"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ 
              backgroundColor: theme.isInverted ? 'rgba(14, 165, 233, 0.2)' : '#E0F2FE',
              color: theme.isInverted ? '#7DD3FC' : '#0284C7'
            }}
          >
            <Wind className="w-3.5 h-3.5" />
          </div>
          <div>
            <span 
              className="text-[10px] font-bold uppercase tracking-wider block"
              style={{ color: theme.isInverted ? '#7DD3FC' : '#0284C7' }}
            >
              Lecture Diagram · Slides 18-20
            </span>
            <h4 
              className="font-serif text-sm sm:text-base font-bold"
              style={{ color: theme.fontPrimary }}
            >
              Biological Safety Cabinets (BSCs) Classification
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Class I */}
        <div 
          className="rounded-xl p-4 border space-y-2.5"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(255, 255, 255, 0.04)' : theme.bgPage,
            borderColor: theme.borderSubtle
          }}
        >
          <div 
            className="pb-2 border-b"
            style={{ borderColor: theme.borderSubtle }}
          >
            <span className="text-[10px] font-mono font-bold block" style={{ color: theme.fontMuted }}>CLASS I</span>
            <h5 className="font-bold text-xs" style={{ color: theme.fontPrimary }}>Open-Front Negative Pressure</h5>
          </div>
          <p className="text-[11px] leading-normal" style={{ color: theme.fontBody }}>
            Room air enters cabinet and passes around work material. Only exhaust air is HEPA filtered.
          </p>
          <div 
            className="pt-2 border-t space-y-1 text-[11px]"
            style={{ borderColor: theme.borderSubtle }}
          >
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#FDA4AF' : '#E11D48' }}>
              <span>Product Protection:</span>
              <span className="font-bold">✗ None</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
          </div>
        </div>

        {/* Class II */}
        <div 
          className="rounded-xl p-4 border space-y-2.5"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(13, 148, 136, 0.15)' : theme.bgPage,
            borderColor: theme.isInverted ? 'rgba(45, 212, 191, 0.4)' : '#5EEAD4'
          }}
        >
          <div 
            className="pb-2 border-b flex items-center justify-between"
            style={{ borderColor: theme.isInverted ? 'rgba(45, 212, 191, 0.25)' : '#CCFBF1' }}
          >
            <div>
              <span className="text-[10px] font-mono font-bold block" style={{ color: theme.isInverted ? '#5EEAD4' : '#0D9488' }}>CLASS II</span>
              <h5 className="font-bold text-xs" style={{ color: theme.fontPrimary }}>Vertical Laminar Flow</h5>
            </div>
            <span 
              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: theme.isInverted ? 'rgba(45, 212, 191, 0.25)' : '#CCFBF1',
                color: theme.isInverted ? '#99F6E4' : '#0F766E'
              }}
            >
              Standard
            </span>
          </div>
          <p className="text-[11px] leading-normal" style={{ color: theme.fontBody }}>
            Air is HEPA sterilized before flowing over materials AND before exhaust. Vertical air sheets act as physical barrier.
          </p>
          <div 
            className="pt-2 border-t space-y-1 text-[11px]"
            style={{ borderColor: theme.isInverted ? 'rgba(45, 212, 191, 0.2)' : '#CCFBF1' }}
          >
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Product Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Yes</span>
            </div>
          </div>
          <div className="text-[10px] pt-1" style={{ color: theme.fontMuted }}>
            <strong>Type A:</strong> 70% recirculated, 30% exhaust. (Clinical standard)<br />
            <strong>Type B:</strong> 100% ducted outside for chemicals/radioisotopes.
          </div>
        </div>

        {/* Class III */}
        <div 
          className="rounded-xl p-4 border space-y-2.5"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(255, 255, 255, 0.04)' : theme.bgPage,
            borderColor: theme.borderSubtle
          }}
        >
          <div 
            className="pb-2 border-b"
            style={{ borderColor: theme.borderSubtle }}
          >
            <span className="text-[10px] font-mono font-bold block" style={{ color: theme.fontMuted }}>CLASS III</span>
            <h5 className="font-bold text-xs" style={{ color: theme.fontPrimary }}>Gas-Tight Glove Box</h5>
          </div>
          <p className="text-[11px] leading-normal" style={{ color: theme.fontBody }}>
            Totally enclosed, gas-tight negative pressure. Operations conducted through heavy rubber arm-length gloves.
          </p>
          <div 
            className="pt-2 border-t space-y-1 text-[11px]"
            style={{ borderColor: theme.borderSubtle }}
          >
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Personnel Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Product Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
            <div className="flex items-center justify-between" style={{ color: theme.isInverted ? '#6EE7B7' : '#047857' }}>
              <span>Environment Protection:</span>
              <span className="font-bold">✓ Maximum</span>
            </div>
          </div>
          <div className="text-[10px] pt-1" style={{ color: theme.fontMuted }}>
            Required exclusively for <strong style={{ color: theme.fontPrimary }}>BSL-4</strong> lethal pathogens.
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
  const { theme } = useFlowerTheme();

  const levels = [
    {
      level: 'BSL-1',
      title: 'Minimal Risk',
      agents: 'Bacillus subtilis, Naegleria gruberi',
      facility: 'Standard undergraduate teaching bench; open benchwork',
      ppe: 'Basic lab coat, gloves, eye protection as needed',
      bgLight: 'bg-transparent',
      borderLight: 'border-slate-200',
      badgeBgLight: 'bg-slate-100 text-slate-800',
      bgDark: 'rgba(255, 255, 255, 0.04)',
      borderDark: 'rgba(255, 255, 255, 0.1)',
      badgeBgDark: 'rgba(255, 255, 255, 0.12) text-slate-200'
    },
    {
      level: 'BSL-2',
      title: 'Moderate Risk (Clinical Standard)',
      agents: 'HIV, Hepatitis B (HBV), Salmonella organisms',
      facility: 'Limited access, biohazard warning signs, Class II BSC for aerosols',
      ppe: 'Lab coat, double gloves, face shield, BSC containment',
      bgLight: 'bg-teal-50/50',
      borderLight: 'border-teal-200',
      badgeBgLight: 'bg-teal-100 text-teal-800',
      bgDark: 'rgba(13, 148, 136, 0.15)',
      borderDark: 'rgba(45, 212, 191, 0.3)',
      badgeBgDark: 'rgba(45, 212, 191, 0.25) text-teal-200'
    },
    {
      level: 'BSL-3',
      title: 'High Aerosol / Serious Pathogens',
      agents: 'Mycobacterium tuberculosis, Coxiella burnetii, systemic fungi',
      facility: 'Negative airflow, double door entry, all procedures in BSC',
      ppe: 'Respiratory protection (N95/PAPR), protective suit',
      bgLight: 'bg-amber-50/50',
      borderLight: 'border-amber-200',
      badgeBgLight: 'bg-amber-100 text-amber-800',
      bgDark: 'rgba(217, 119, 6, 0.15)',
      borderDark: 'rgba(251, 191, 36, 0.3)',
      badgeBgDark: 'rgba(251, 191, 36, 0.25) text-amber-200'
    },
    {
      level: 'BSL-4',
      title: 'Extreme Life-Threatening Agents',
      agents: 'Marburg virus, Ebola, Congo-Crimean hemorrhagic fever',
      facility: 'Maximum containment, airlocks, Class III BSC or positive pressure suit',
      ppe: 'Full-body positive pressure suit, chemical shower decontamination upon exit',
      bgLight: 'bg-rose-50/50',
      borderLight: 'border-rose-200',
      badgeBgLight: 'bg-rose-100 text-rose-800',
      bgDark: 'rgba(225, 29, 72, 0.15)',
      borderDark: 'rgba(251, 113, 133, 0.3)',
      badgeBgDark: 'rgba(251, 113, 133, 0.25) text-rose-200'
    }
  ];

  return (
    <div 
      className="my-6 p-5 sm:p-7 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div 
        className="flex items-center justify-between gap-3 mb-4 pb-2 border-b"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ 
              backgroundColor: theme.isInverted ? 'rgba(251, 191, 36, 0.2)' : '#FEF3C7',
              color: theme.isInverted ? '#FCD34D' : '#B45309'
            }}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
          <div>
            <span 
              className="text-[10px] font-bold uppercase tracking-wider block"
              style={{ color: theme.isInverted ? '#FCD34D' : '#B45309' }}
            >
              Lecture Diagram · Slide 21
            </span>
            <h4 
              className="font-serif text-sm sm:text-base font-bold"
              style={{ color: theme.fontPrimary }}
            >
              Biosafety Levels (BSL 1–4) Risk Matrix
            </h4>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {levels.map((item) => {
          const bg = theme.isInverted ? item.bgDark : theme.bgPage;
          const border = theme.isInverted ? item.borderDark : undefined;

          return (
            <div 
              key={item.level} 
              className={`rounded-xl p-3 sm:p-4 border transition-all ${
                theme.isInverted ? '' : `${item.bgLight} ${item.borderLight}`
              }`}
              style={{
                backgroundColor: bg,
                borderColor: border
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-2">
                  <span 
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      theme.isInverted ? item.badgeBgDark : item.badgeBgLight
                    }`}
                  >
                    {item.level}
                  </span>
                  <span 
                    className="font-bold text-xs sm:text-sm"
                    style={{ color: theme.fontPrimary }}
                  >
                    {item.title}
                  </span>
                </div>
                <span 
                  className="text-[11px] font-medium"
                  style={{ color: theme.fontMuted }}
                >
                  {item.facility}
                </span>
              </div>
              <div 
                className="text-[11px] grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t"
                style={{ 
                  color: theme.fontBody,
                  borderColor: theme.isInverted ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <div>
                  <strong style={{ color: theme.fontPrimary }}>Representative Organisms:</strong> {item.agents}
                </div>
                <div>
                  <strong style={{ color: theme.fontPrimary }}>Containment & PPE:</strong> {item.ppe}
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
  const { theme } = useFlowerTheme();

  return (
    <div 
      className="my-6 p-5 sm:p-7 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div 
        className="flex items-center justify-between gap-3 mb-4 pb-2 border-b"
        style={{ borderColor: theme.borderSubtle }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ 
              backgroundColor: theme.isInverted ? 'rgba(244, 114, 182, 0.2)' : '#FFE4E6',
              color: theme.isInverted ? '#FDA4AF' : '#BE123C'
            }}
          >
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div>
            <span 
              className="text-[10px] font-bold uppercase tracking-wider block"
              style={{ color: theme.isInverted ? '#FDA4AF' : '#BE123C' }}
            >
              Lecture Diagram · Slide 10
            </span>
            <h4 
              className="font-serif text-sm sm:text-base font-bold"
              style={{ color: theme.fontPrimary }}
            >
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
            <polygon points="50,4 96,50 50,50" fill={theme.isInverted ? '#DC2626' : '#EF4444'} transform="rotate(-45 50 50)" />
            {/* Left: Blue / Health */}
            <polygon points="50,4 96,50 50,50" fill={theme.isInverted ? '#2563EB' : '#3B82F6'} transform="rotate(-135 50 50)" />
            {/* Right: Yellow / Instability */}
            <polygon points="50,4 96,50 50,50" fill={theme.isInverted ? '#D97706' : '#EAB308'} transform="rotate(45 50 50)" />
            {/* Bottom: White / Special */}
            <polygon 
              points="50,4 96,50 50,50" 
              fill={theme.isInverted ? '#1E293B' : '#F8FAFC'} 
              stroke={theme.isInverted ? '#475569' : '#CBD5E1'} 
              strokeWidth="1" 
              transform="rotate(135 50 50)" 
            />

            {/* Labels */}
            <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">FIRE</text>
            <text x="28" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">HEALTH</text>
            <text x="72" y="54" textAnchor="middle" fill={theme.isInverted ? '#FFFFFF' : '#1E293B'} fontSize="10" fontWeight="bold">REACT</text>
            <text x="50" y="75" textAnchor="middle" fill={theme.isInverted ? '#F1F5F9' : '#1E293B'} fontSize="9" fontWeight="bold">SPEC</text>
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs flex-1 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-500 shrink-0" />
            <span className="font-bold" style={{ color: theme.fontPrimary }}>Red (Top):</span>
            <span style={{ color: theme.fontBody }}>Flammability Hazard (0 = will not burn, 4 = flashpoint &lt; 73°F)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-500 shrink-0" />
            <span className="font-bold" style={{ color: theme.fontPrimary }}>Blue (Left):</span>
            <span style={{ color: theme.fontBody }}>Health Hazard (0 = normal material, 4 = deadly)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-yellow-400 shrink-0" />
            <span className="font-bold" style={{ color: theme.fontPrimary }}>Yellow (Right):</span>
            <span style={{ color: theme.fontBody }}>Instability / Reactivity (0 = stable, 4 = may detonate)</span>
          </div>
          <div className="flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded shrink-0 border" 
              style={{ 
                backgroundColor: theme.isInverted ? '#334155' : '#F1F5F9',
                borderColor: theme.borderSubtle
              }} 
            />
            <span className="font-bold" style={{ color: theme.fontPrimary }}>White (Bottom):</span>
            <span style={{ color: theme.fontBody }}>Special Hazard (OX = Oxidizer, W = Water-reactive, SA = Simple asphyxiant)</span>
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
  const { theme } = useFlowerTheme();

  return (
    <div 
      className="my-6 p-4 sm:p-5 rounded-2xl border transition-all"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Droplets 
          className="w-4 h-4 shrink-0" 
          style={{ color: theme.isInverted ? '#5EEAD4' : '#0F766E' }} 
        />
        <h5 
          className="font-serif text-xs sm:text-sm font-bold"
          style={{ color: theme.fontPrimary }}
        >
          Standard 10% Bleach Container Labeling Specification (Slide 8)
        </h5>
      </div>

      <div 
        className="rounded-xl p-3.5 border grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"
        style={{
          backgroundColor: theme.isInverted ? 'rgba(255, 255, 255, 0.04)' : theme.bgPage,
          borderColor: theme.borderSubtle
        }}
      >
        <div>
          <span 
            className="text-[10px] block font-medium"
            style={{ color: theme.fontMuted }}
          >
            1. Solution Name
          </span>
          <span className="font-bold" style={{ color: theme.fontPrimary }}>
            10% Sodium Hypochlorite
          </span>
        </div>
        <div>
          <span 
            className="text-[10px] block font-medium"
            style={{ color: theme.fontMuted }}
          >
            2. Dilution Ratio
          </span>
          <span 
            className="font-bold"
            style={{ color: theme.isInverted ? '#5EEAD4' : '#0F766E' }}
          >
            1:10 (v/v) Fresh Daily
          </span>
        </div>
        <div>
          <span 
            className="text-[10px] block font-medium"
            style={{ color: theme.fontMuted }}
          >
            3. Expiration Standard
          </span>
          <span 
            className="font-bold"
            style={{ color: theme.isInverted ? '#FDA4AF' : '#E11D48' }}
          >
            Strictly 24 Hours
          </span>
        </div>
        <div>
          <span 
            className="text-[10px] block font-medium"
            style={{ color: theme.fontMuted }}
          >
            4. Required Record
          </span>
          <span className="font-bold" style={{ color: theme.fontPrimary }}>
            Date, Time, Preparer Initials
          </span>
        </div>
      </div>
    </div>
  );
};
