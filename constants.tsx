
import React from 'react';
import type { PromptTip } from './types';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const QuestionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13a1 1 0 01-.293-.707l.542-3.447A1 1 0 016.793 8h10.414a1 1 0 01.948.845l.543 3.447a1 1 0 01-.293.707V15a2 2 0 01-2 2h-1.012a2 2 0 01-1.916-1.438l-.543-2.172a1 1 0 00-1.07-.662h-1.916a1 1 0 00-1.07.662l-.543 2.172A2 2 0 018.012 17H7a2 2 0 01-2-2v-2z" />
    </svg>
);

const ChecklistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

export const PROMPT_TIPS: PromptTip[] = [
    {
        id: 1,
        icon: <ChatIcon />,
        title: "Initiate a Conversation",
        description: "My absolute favorite. End any statement or question with this to switch the AI from a coder to a conversational partner. Perfect for brainstorming and clarifying ideas before implementation.",
        prompt: "DO NOT CODE, JUST CHAT WITH ME",
    },
    {
        id: 2,
        icon: <QuestionIcon />,
        title: "Request Clarification",
        description: "Often, we forget crucial details. This prompt forces the AI to think ahead, identify potential ambiguities, and ask for the information it needs to deliver a bug-free feature.",
        prompt: "Do you have any clarifying questions that would help you deploy this request without bugs?",
    },
    {
        id: 3,
        icon: <BrainIcon />,
        title: "Verify Understanding",
        description: "This prompt has multiple layers. Asking the AI 'why' its proposed solution will work is a powerful test of its genuine understanding of your request. Listen for its reasoning and objections.",
        prompt: "What do I need to do to help you with X? Before you proceed, answer me in great detail - Why do you think this will work? Wait for my approval.",
    },
    {
        id: 4,
        icon: <ChecklistIcon />,
        title: "Outline the Plan",
        description: "Similar to verifying understanding, but focused on the execution plan. This ensures you and the AI are aligned on the step-by-step process before any code is written.",
        prompt: "Let me know if you understand what the task is before making edits. Tell me what are you going to do, step by step, and wait for my approval.",
    },
    {
        id: 5,
        icon: <StarIcon />,
        title: "Get Project Feedback",
        description: "Once your project is done or you're out of inspiration, use this to get a structured evaluation and actionable suggestions for improvement. It's great for identifying blind spots.",
        prompt: "I want you to rate my project on a scale 1-10 in 3 criterias - idea, features, user experience. Please suggest 3-5 things that would make it a 10/10 app please.",
    },
];
