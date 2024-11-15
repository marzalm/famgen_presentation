'use client';

import SurveyPresentation from '../components/SurveyPresentation';

export default function Home() {
  return (
    <main>
      <SurveyPresentation />
    </main>
  );
}

// Add metadata
export const metadata = {
  title: 'Family Survey Presentation',
  description: 'Results of the family survey',
}