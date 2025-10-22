import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { modalVariants, backdropVariants, slideVariants } from '../animations/variants';

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

// Global form data that persists across modal sessions
let globalFormData = {
  main_goal: '',
  automation_areas: [] as UseCaseOption[],
  name: '',
  email: '',
  company: ''
};

export default function OnboardingModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<GoalOption | ''>(globalFormData.main_goal);
  const [useCases, setUseCases] = useState<UseCaseOption[]>(globalFormData.automation_areas);
  const [name, setName] = useState(globalFormData.name);
  const [email, setEmail] = useState(globalFormData.email);
  const [company, setCompany] = useState(globalFormData.company);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      setIsSubmitted(false);
      // Don't reset form data - keep global data
      setGoal(globalFormData.main_goal);
      setUseCases(globalFormData.automation_areas);
      setName(globalFormData.name);
      setEmail(globalFormData.email);
      setCompany(globalFormData.company);
    }
  }, [isOpen]);

  const canNext = useMemo(() => {
    if (step === 1) return Boolean(goal);
    if (step === 2) return useCases.length > 0;
    if (step === 3) return name.trim() !== '' && /.+@.+\..+/.test(email);
    return false;
  }, [step, goal, useCases, name, email]);

  const toggleUseCase = (value: UseCaseOption) => {
    setUseCases((prev) => {
      const newUseCases = prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value];
      globalFormData.automation_areas = newUseCases;
      console.log('Automation areas updated:', newUseCases);
      return newUseCases;
    });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async () => {
    try {
      // Use global form data to ensure all values are included
      const submitData = {
        name: globalFormData.name,
        email: globalFormData.email,
        company: globalFormData.company,
        main_goal: globalFormData.main_goal,
        automation_areas: globalFormData.automation_areas,
        timestamp: new Date().toISOString(),
        source: 'onboarding-modal'
      };

      console.log('Submitting form data:', submitData);

      const response = await fetch('https://n8nn.xyz/webhook/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      console.log('Response status:', response.status);
      console.log('Response:', response);

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        // Reset global form data after successful submission
        globalFormData = {
          main_goal: '',
          automation_areas: [],
          name: '',
          email: '',
          company: ''
        };
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error('Failed to submit form:', response.status, errorText);
        throw new Error(`Failed to submit form: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      // Don't close modal on error so user can try again
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onMouseDown={handleBackdropClick}
          aria-modal
          role="dialog"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            ref={dialogRef}
            className="w-full max-w-2xl mx-4 rounded-2xl bg-custom-dark text-custom-light shadow-2xl border border-custom-light/10"
            onMouseDown={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
          <motion.button
            aria-label="Close"
            onClick={onClose}
            className="ml-4 text-custom-light/70 hover:text-custom-light p-1.5 rounded-md hover:bg-custom-light/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {isSubmitted ? (
            <motion.div 
              className="text-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              >
                <motion.svg 
                  className="w-8 h-8 text-green-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              >
                <h3 className="text-xl font-bold text-custom-light">Thank You!</h3>
                <p className="text-custom-light/80 text-sm leading-relaxed">
                  We've received your information and will get back to you soon with your personalized automation solution.
                </p>
                <p className="text-custom-light/60 text-xs">
                  This window will close automatically in a few seconds...
                </p>
              </motion.div>
            </motion.div>
          ) : step === 1 && (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
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
                    <motion.label
                      key={opt}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${
                        selected
                          ? 'border-custom-light bg-custom-light/5 ring-1 ring-custom-light/60 shadow-[0_0_0_1px_rgba(240,241,240,0.6)_inset]'
                          : 'border-custom-light/10 hover:border-custom-light/20'
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <input
                        type="radio"
                        className="h-4 w-4 accent-custom-light"
                        checked={selected}
                        onChange={() => {
                          setGoal(opt);
                          globalFormData.main_goal = opt;
                          console.log('Main goal updated:', opt);
                        }}
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
                onChange={(e) => {
                  setName(e.target.value);
                  globalFormData.name = e.target.value;
                  console.log('Name updated:', e.target.value);
                }}
              />
              <input
                className="w-full rounded-xl border border-custom-light/10 bg-custom-light/5 px-4 py-3 text-sm text-custom-light placeholder-custom-light/40 outline-none focus:border-custom-light"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  globalFormData.email = e.target.value;
                  console.log('Email updated:', e.target.value);
                }}
              />
              <input
                className="w-full rounded-xl border border-custom-light/10 bg-custom-light/5 px-4 py-3 text-sm text-custom-light placeholder-custom-light/40 outline-none focus:border-custom-light"
                placeholder="Your Company"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  globalFormData.company = e.target.value;
                  console.log('Company updated:', e.target.value);
                }}
              />
              <p className="text-[11px] text-custom-light/50">By submitting, you agree to our Privacy Policy</p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {!isSubmitted && (
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
        )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


