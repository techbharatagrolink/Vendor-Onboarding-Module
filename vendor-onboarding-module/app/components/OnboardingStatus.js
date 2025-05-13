























































'use client';

import {
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

export default function OnboardingStatus() {
  const status = {
    progress: 80,
    sections: [
      {
        title: 'Mobile & Email Verification',
        items: [
          { label: 'Mobile Verification', completed: false },
          { label: 'Email Verification', completed: true },
        ],
      },
      {
        title: 'ID & Signature Verification',
        items: [
          { label: 'GSTIN', completed: true },
          { label: 'Full Company Name', completed: true },
          { label: 'Display | Business Name', completed: true },
          { label: 'Description', completed: true },
          { label: 'Signature Verification', completed: true },
        ],
      },
      {
        title: 'Store & Pickup Details',
        items: [
          { label: 'Pickup Address', completed: true },
          { label: 'State', completed: true },
          { label: 'City', completed: true },
        ],
      },
      {
        title: 'Product Listing',
        items: [
          { label: 'Listing Created', completed: false },
        ],
      },
    ],
  };

  return (
    <div className="max-w-sm w-[70%] rounded-lg border border-appGreen shadow-md">
      <div className="mb-4 bg-[#D2EEDF]">
        <p className="text-sm font-medium text-green-800 mb-1">
          Your onboarding completion status
        </p>
        <div className="w-full bg-green-100 h-3 rounded-full">
          <div
            className="bg-appRed h-3 rounded-full"
            style={{ width: `${status.progress}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-appRed mt-1 font-semibold">
          {status.progress}%
        </p>
      </div>

      {status.sections.map((section, idx) => (
        <div key={idx} className="mb-4 p-4 ">
          <h3 className="text-sm font-semibold text-appText mb-1">{section.title}</h3>
          <ul className="space-y-1">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-center text-sm text-appText">
                {item.completed ? (
                  <CheckCircleIcon className="h-5 w-5 text-appGreen mr-2" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-appRed mr-2" />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
