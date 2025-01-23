import React from 'react';
import { useFormState } from '../../components/multi-step-form/FormContext';
import { CheckIcon } from '@heroicons/react/outline';

const indicatorsByStep: Record<
  number,
  { checked: number[]; indicator: number }
> = {
  1: {
    checked: [],
    indicator: 0,
  },
  2: {
    checked: [],
    indicator: 0,
  },
  3: {
    checked: [0],
    indicator: 1,
  },
  4: {
    checked: [0, 1],
    indicator: 2,
  },
  5: {
    checked: [0, 1],
    indicator: 2,
  },
  6: {
    checked: [0, 1],
    indicator: 2,
  },
  7: {
    checked: [0, 1],
    indicator: 2,
  },
  8: {
    checked: [0, 1],
    indicator: 2,
  },
  9: {
    checked: [0, 1, 2, 3, 4],
    indicator: 0,
  },
  10: {
    checked: [0, 1, 2],
    indicator: 0,
  },
  11: {
    checked: [0, 1, 2],
    indicator: 0,
  },
  12: {
    checked: [0, 1, 2],
    indicator: 3,
  },
  13: {
    checked: [0, 1, 2, 3],
    indicator: 4,
  },
  14: {
    checked: [0, 1, 2, 3, 4],
    indicator: 0,
  },
  16: {
    checked: [0, 1, 2, 3, 4],
    indicator: 0,
  },
};

function StepIndicator() {
  const { step } = useFormState();
  const totalSteps = 5;
  const stepsArray = Array.from(
    { length: totalSteps },
    (_, index) => index + 1,
  );

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {stepsArray.map((stepNumber, stepIdx) => (
          <li
            key={stepIdx}
            className={`${
              stepIdx !== totalSteps - 1 ? 'pr-8 sm:pr-20' : ''
            } relative`}
          >
            {indicatorsByStep[step]?.checked?.includes(stepIdx) ? (
              <>
                <div
                  className="absolute inset-0 flex items-center transition-all duration-300"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-[#F9AB35]" />
                </div>
                <div className="relative w-8 h-8 flex items-center justify-center bg-[#F9AB35] rounded-full">
                  <CheckIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{stepNumber}</span>
                </div>
              </>
            ) : indicatorsByStep[step]?.indicator === stepIdx ? (
              <>
                <div
                  className="absolute inset-0 flex items-center transition-all duration-300"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#F9AB35] rounded-full"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 bg-[#F9AB35]  rounded-full"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{stepNumber}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center transition-all duration-300"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{stepNumber}</span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default StepIndicator;
