"use client";
import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export const Stepper = ({ steps, currentStep, onStepClick }: StepperProps) => {
  return (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
      <div className="flex justify-between relative">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="flex-1 cursor-pointer relative"
            onClick={() => onStepClick(step.id)}
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center z-10
                  ${currentStep >= step.id 
                    ? 'bg-yellow-400 text-black shadow-lg transform hover:scale-105 transition-all' 
                    : 'bg-gray-200 hover:bg-gray-300 transition-all'
                  }
                `}>
                  {currentStep > step.id ? <Check size={20} className="animate-bounce"/> : step.id}
                </div>
                <div className="text-left">
                  <div className="font-bold">{step.title}</div>
                  <div className="text-sm text-gray-500">{step.description}</div>
                </div>
              </div>
            </div>
            {step.id !== steps.length && (
              <div className={`
                absolute w-full h-1.5 top-5 left-10
                ${currentStep > step.id 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-sm' 
                  : 'bg-gray-200'
                } 
                transition-all duration-500 ease-in-out rounded-full
              `}/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
