
import React from 'react';

interface PromptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  prompt: string;
  className?: string;
  isWide?: boolean;
}

export const PromptCard: React.FC<PromptCardProps> = ({ icon, title, description, prompt, className, isWide }) => {
  const cardClasses = `
    bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 
    flex flex-col h-full transition-all duration-300 ease-in-out 
    hover:border-teal-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10
    ${isWide ? 'lg:col-span-2' : ''}
    ${className || ''}
  `;

  return (
    <div className={cardClasses}>
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-400 mb-5 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-xs text-teal-400 mb-2 font-semibold">PROMPT:</p>
        <div className="bg-gray-900/70 p-4 rounded-lg border border-slate-700">
          <code className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
            {prompt}
          </code>
        </div>
      </div>
    </div>
  );
};
