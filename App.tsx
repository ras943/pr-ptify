
import React from 'react';
import { PROMPT_TIPS } from './constants';
import { PromptCard } from './components/PromptCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white font-sans">
      <main className="container mx-auto px-4 py-12 sm:py-20">
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
              AI Prompting Pro Tips
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            I've spent over 500 hours mastering AI tools. Here are five game-changing prompts to elevate your builds and get the clarity you need.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROMPT_TIPS.map((tip, index) => (
            <PromptCard
              key={tip.id}
              icon={tip.icon}
              title={tip.title}
              description={tip.description}
              prompt={tip.prompt}
              className={index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}
              isWide={index === 3 || index === 4}
            />
          ))}
        </div>
        
        <footer className="text-center mt-16 text-gray-500">
            <p>Master these prompts to build better, faster, and smarter with AI.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
