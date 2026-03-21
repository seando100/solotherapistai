export default function SoloTherapistLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 114.78 105.04" className="h-7 w-7" aria-hidden="true">
        <style>{`.st-dot{fill:#0e2745}.st-accent{fill:#EC4899}`}</style>
        {/* Row 1 */}
        <path className="st-dot" d="M14.96,0c8.26,0,14.96,6.77,14.96,15.13s-6.7,15.13-14.96,15.13S0,23.49,0,15.13,6.7,0,14.96,0"/>
        <path className="st-accent" d="M58.13,0c8.26,0,14.96,6.77,14.96,15.13s-6.7,15.13-14.96,15.13-14.96-6.77-14.96-15.13S49.87,0,58.13,0"/>
        <path className="st-dot" d="M99.83,0c8.26,0,14.96,6.77,14.96,15.13s-6.7,15.13-14.96,15.13-14.96-6.77-14.96-15.13S91.57,0,99.83,0"/>
        {/* Row 2 — person body */}
        <ellipse className="st-dot" cx="14.96" cy="51.04" rx="14.96" ry="15.13"/>
        <path className="st-accent" d="M73.43,37.22c0,8.36-6.7,31.48-14.96,31.48s-14.96-23.12-14.96-31.48,6.7,0,14.96,0,14.96-8.36,14.96,0Z"/>
        <ellipse className="st-dot" cx="99.83" cy="52.43" rx="14.96" ry="15.13"/>
        {/* Row 3 */}
        <ellipse className="st-dot" cx="14.96" cy="89.91" rx="14.96" ry="15.13"/>
        <ellipse className="st-dot" cx="58.3" cy="89.91" rx="14.96" ry="15.13"/>
        <ellipse className="st-dot" cx="99.83" cy="89.91" rx="14.96" ry="15.13"/>
      </svg>
      <span className="text-xl font-semibold tracking-tight text-[#0F2745]">
        Solo<span className="text-[#EC4899]">Therapist</span>AI
      </span>
    </div>
  );
}
