"use client";

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import {StepperTwo} from '@/components/stepper/StepperTwo';
import {Stepper} from '@/components/stepper/Stepper';
import {StepperThree} from '@/components/stepper/StepperThree';
import {StepperFour} from '@/components/stepper/StepperFour';
import {StepperFive} from '@/components/stepper/StepperFive';
import {Container} from "@/components/layout/Container";
import { BookingHeader } from "@/components/booking/BookingHeader";

const BookingPage = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(2);

    const steps = [
        {id: 1, title: "Recherche", description: "Trouvez votre véhicule"},
        {id: 2, title: "Tarifs", description: "Comparez les prix"},
        {id: 3, title: "Options", description: "Personnalisez votre location"},
        {id: 4, title: "Devis", description: "Réservez votre véhicule"},
        {id: 5, title: "Confirmer", description: "Finalisez votre devis"}
    ];

    const handleStepClick = (stepId: number) => {
        if (stepId === 1) {
            router.push('/');
        } else {
            setCurrentStep(stepId);
        }
    };

    return (
        <div
            className="min-h-screen bg-gray-50"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4 py-8 max-w-full">
                <div className="top-0 z-50">
                    <BookingHeader />
                </div>

                {/* New Stepper Section */}
                <Container className="max-w-7xl">
                    <Stepper
                        steps={steps}
                        currentStep={currentStep}
                        onStepClick={handleStepClick}
                    />
                    {currentStep === 2 && (
                        <StepperTwo onNextStep={() => setCurrentStep(3)}/>
                    )}
                    {currentStep === 3 && (
                        <StepperThree 
                        onNextStep={() => setCurrentStep(4)}
                        onPreviousStep={() => setCurrentStep(2)}
                    />                    
                    )}
                    {currentStep === 4 && (
                        <StepperFour onNextStep={() => setCurrentStep(5)}/>
                    )}
                    {currentStep === 5 && (
                        <StepperFive onNextStep={() => router.push('/confirmation')}/>
                    )}
                </Container>

            </div>
        </div>
    );
};

export default BookingPage;
