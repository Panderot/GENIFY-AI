import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type GoalOption =
  | 'Automate repetitive tasks'
  | 'Integrate multiple tools'
  | 'Build custom workflows'
  | 'Other';

type UseCaseOption =
  | 'Marketing automation'
  | 'Sales & CRM'
  | 'Data processing'
  | 'Customer support';

export default function OnboardingModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<GoalOption | ''>('');
  const [useCases, setUseCases] = useState<UseCaseOption[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const totalSteps = 3;
  const percent = Math.round((step / totalSteps) * 100);

  // Handle body scroll lock and ESC key
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setGoal('');
      setUseCases([]);
      setName('');
      setEmail('');
      setCompany('');
    }
  }, [isOpen]);

  const canNext = useMemo(() => {
    if (step === 1) return Boolean(goal);
    if (step === 2) return useCases.length > 0;
    if (step === 3) return name.trim() !== '' && /.+@.+\..+/.test(email);
    return false;
  }, [step, goal, useCases, name, email]);

  const toggleUseCase = (value: UseCaseOption) => {
    setUseCases((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async () => {
    // You can wire to your backend/webhook here. For now just close.
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onMouseDown={handleBackdropClick}
      aria-modal
      role="dialog"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-2xl mx-4 rounded-2xl bg-custom-dark text-custom-light shadow-2xl border border-custom-light/10 animate-in fade-in-0 zoom-in-95 duration-200"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-[22px] md:text-2xl font-extrabold tracking-tight leading-snug">Find Your Automation Solution</h2>
            <div className="mt-3 flex items-center justify-between text-[11px] text-custom-light/70">
              <span>Step {step} of {totalSteps}</span>
              <span>{percent}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gradient-to-r from-custom-light/10 to-custom-light/5 overflow-hidden">
              <div
                className="h-full bg-custom-light transition-all duration-300 rounded-full"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="ml-4 text-custom-light/70 hover:text-custom-light p-1.5 rounded-md hover:bg-custom-light/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {step === 1 && (
            <div className="space-y-4 animate-in slide-in-from-left duration-300">
              <p className="text-sm text-custom-light/80 font-semibold">What is your main goal?</p>
              <div className="space-y-3">
                {(
                  [
                    'Automate repetitive tasks',
                    'Integrate multiple tools',
                    'Build custom workflows',
                    'Other',
                  ] as GoalOption[]
                ).map((opt) => {
                  const selected = goal === opt;
                  return (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${
                        selected
                          ? 'border-custom-light bg-custom-light/5 ring-1 ring-custom-light/60 shadow-[0_0_0_1px_rgba(240,241,240,0.6)_inset]'
                          : 'border-custom-light/10 hover:border-custom-light/20'
                      }`}
                    >
                      <input
                        type="radio"
                        className="h-4 w-4 accent-custom-light"
                        checked={selected}
                        onChange={() => setGoal(opt)}
                      />
                      <span className="text-sm text-custom-light/90 leading-relaxed">{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-right duration-300">
              <p className="text-sm text-custom-light/80 font-semibold">Which area do you want to automate?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  [
                    'Marketing automation',
                    'Sales & CRM',
                    'Data processing',
                    'Customer support',
                  ] as UseCaseOption[]
                ).map((opt) => {
                  const selected = useCases.includes(opt);
                  return (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${
                        selected
                          ? 'border-custom-light bg-custom-light/5 ring-1 ring-custom-light/60 shadow-[0_0_0_1px_rgba(240,241,240,0.6)_inset]'
                          : 'border-custom-light/10 hover:border-custom-light/20'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-custom-light"
                        checked={selected}
                        onChange={() => toggleUseCase(opt)}
                      />
                      <span className="text-sm text-custom-light/90 leading-relaxed">{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in slide-in-from-left duration-300">
              <p className="text-sm text-custom-light/80 font-semibold">Let's get in touch!</p>
              <input
                className="w-full rounded-xl border border-custom-light/10 bg-custom-light/5 px-4 py-3 text-sm text-custom-light placeholder-custom-light/40 outline-none focus:border-custom-light"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-custom-light/10 bg-custom-light/5 px-4 py-3 text-sm text-custom-light placeholder-custom-light/40 outline-none focus:border-custom-light"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-custom-light/10 bg-custom-light/5 px-4 py-3 text-sm text-custom-light placeholder-custom-light/40 outline-none focus:border-custom-light"
                placeholder="Your Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <p className="text-[11px] text-custom-light/50">By submitting, you agree to our Privacy Policy</p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-5 flex items-center justify-between border-t border-custom-light/10">
            <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              step === 1
                ? 'invisible'
                : 'border-custom-light/20 text-custom-light/80 hover:border-custom-light/40 hover:bg-custom-light/5'
            }`}
          >
            Back
          </button>
          {step < totalSteps ? (
            <button
              disabled={!canNext}
              onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
              className={`px-5 py-2 rounded-lg text-sm font-bold bg-custom-light text-custom-dark hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:translate-y-[1px]`}
            >
              Next
            </button>
          ) : (
            <button
              disabled={!canNext}
              onClick={handleSubmit}
              className={`px-5 py-2 rounded-lg text-sm font-bold bg-custom-light text-custom-dark hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:translate-y-[1px]`}
            >
              🚀 Start Free Consultation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


