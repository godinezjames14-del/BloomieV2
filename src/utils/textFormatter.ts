/**
 * Text and Scientific Formatting Utility
 * Converts LaTeX formulas, arrows, math symbols, chemical formulas, and markdown
 * into clean, readable Unicode characters.
 */

const SUPERSCRIPTS: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ'
};

const SUBSCRIPTS: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

export function toSuperscript(str: string): string {
  return str.split('').map(ch => SUPERSCRIPTS[ch] || ch).join('');
}

export function toSubscript(str: string): string {
  return str.split('').map(ch => SUBSCRIPTS[ch.toLowerCase()] || ch).join('');
}

/**
 * Formats scientific text by converting LaTeX arrows, symbols,
 * isotopes, sub/superscripts, and removing unnecessary $ delimiters.
 */
export function formatScientificText(text: string): string {
  if (!text) return '';

  let res = text;

  // 1. Remove markdown bolding asterisks if any
  res = res.replace(/\*\*/g, '');

  // 2. Convert common LaTeX arrows
  res = res
    .replace(/\\longrightarrow/g, '→')
    .replace(/\\to/g, '→')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\longleftarrow/g, '←')
    .replace(/\\leftrightarrow/g, '↔')
    .replace(/\\implies/g, '⇒');

  // 3. LaTeX text blocks
  res = res.replace(/\\text\{([^}]+)\}/g, '$1');

  // 4. Comparison and math operators
  res = res
    .replace(/\\le\b/g, '≤')
    .replace(/\\ge\b/g, '≥')
    .replace(/\\leq\b/g, '≤')
    .replace(/\\geq\b/g, '≥')
    .replace(/\\times\b/g, '×')
    .replace(/\\div\b/g, '÷')
    .replace(/\\pm\b/g, '±')
    .replace(/\\mp\b/g, '∓')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\neq\b/g, '≠')
    .replace(/\\dots\b/g, '…')
    .replace(/\\cdots\b/g, '…');

  // 5. Greek letters
  res = res
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\gamma\b/g, 'γ')
    .replace(/\\delta\b/g, 'δ')
    .replace(/\\mu\b/g, 'µ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\sigma\b/g, 'σ')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\lambda\b/g, 'λ');

  // 6. Isotopes like $^{12}_6C$ or $^{29}_{15}P$ or $^{26}Al$
  res = res.replace(/\$\^\{?(\d+)\}?_\{?(\d+)\}?([A-Za-z]+)\$/g, (_, mass, atomic, elem) => {
    return `${toSuperscript(mass)}${toSubscript(atomic)}${elem}`;
  });
  res = res.replace(/\^\{?(\d+)\}?_\{?(\d+)\}?([A-Za-z]+)/g, (_, mass, atomic, elem) => {
    return `${toSuperscript(mass)}${toSubscript(atomic)}${elem}`;
  });
  res = res.replace(/\$\^\{?(\d+)\}?([A-Za-z]+)\$/g, (_, mass, elem) => {
    return `${toSuperscript(mass)}${elem}`;
  });
  res = res.replace(/\^\{?(\d+)\}?([A-Za-z]+)/g, (_, mass, elem) => {
    return `${toSuperscript(mass)}${elem}`;
  });

  // 7. Scientific notations like 10^{-4} or 2n^2
  res = res.replace(/\^\{?(-?\d+)\}?/g, (_, p) => toSuperscript(p));

  // 8. Chemical & variable subscripts inside or outside math mode:
  // e.g. I_2, Al_2O_3, CaF_2, m_l, m_s
  res = res.replace(/\$([A-Za-z])_([a-z0-9+-])\$/g, (_, base, sub) => `${base}${toSubscript(sub)}`);
  res = res.replace(/_\{?([a-z0-9+-]+)\}?/gi, (_, s) => toSubscript(s));

  // 9. Simple ions: p^+, e^-, n^0, Na^+, Ca^2+, Cl^-, O^2-
  res = res.replace(/([A-Za-z0-9])\^\{?([+0-]|(?:\d+[+-]))\}?/g, (_, base, ch) => {
    return `${base}${toSuperscript(ch)}`;
  });

  // 10. Strip surrounding single $ math delimiters, e.g. $Z$, $A$, $N$, $KCl$, $37 - 17 = 20$
  res = res.replace(/\$([^$]+)\$/g, '$1');
  // Strip any orphan $ signs
  res = res.replace(/\$/g, '');

  return res;
}
