'use client';

import { ProgressSteps } from '@/components/form/progress-steps';
import { FormNavigation } from '@/components/form/form-navigation';
import { PersonalInfo } from '@/components/form/steps/personal-info';
import { Address } from '@/components/form/steps/address';
import { Preferences } from '@/components/form/steps/preferences';
import { Review } from '@/components/form/steps/review';
import { Card } from '@/components/ui/card';
import { useFormStore } from '@/lib/store';

export default function Home() {
  const currentStep = useFormStore((state) => state.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Address />;
      case 3:
        return <Preferences />;
      case 4:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6">
        <ProgressSteps />
        {renderStep()}
        <FormNavigation />
      </Card>
    </div>
  );
}