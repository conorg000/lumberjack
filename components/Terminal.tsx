import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, DollarSign, Trees, XCircle } from 'lucide-react';
import { TerminalLine } from '../types';

const INITIAL_LINES: TerminalLine[] = [
  { id: '1', type: 'info', content: 'Lumberjack v1.0.4 initialized' },
];

const SEQUENCE = [
  { text: 'lumberjack --chop --rent', type: 'command', delay: 800 },
  { text: 'Scanning local git worktrees...', type: 'info', delay: 600 },
  { text: 'Found 12 stale worktrees (rotting wood).', type: 'warn', delay: 800 },
  { text: 'Revving chainsaw... VROOM!', type: 'info', delay: 1000 },
  { text: 'Chopping "feature/login-fix"... TIMBER!', type: 'success', delay: 400 },
  { text: 'Chopping "hotfix/broken-header"... TIMBER!', type: 'success', delay: 400 },
  { text: 'Chopping "refactor/everything"... TIMBER!', type: 'success', delay: 400 },
  { text: 'Proprietary AI assessing lumber quality...', type: 'info', delay: 1500 },
  { text: 'Selling wood to artisanal furniture makers...', type: 'info', delay: 1000 },
  { text: '+$420.00 deposited to Stripe.', type: 'money', delay: 200 },
  { text: '+$69.00 tip received from carpenter.', type: 'money', delay: 200 },
  { text: 'Worktrees cleared. Rent paid.', type: 'success', delay: 2000 }, // Long delay before reset
];

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTyped, setCurrentTyped] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const sequenceIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, currentTyped]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runSequence = () => {
      if (sequenceIndex.current >= SEQUENCE.length) {
        // Reset sequence
        timeout = setTimeout(() => {
          setLines(INITIAL_LINES);
          sequenceIndex.current = 0;
          runSequence();
        }, 4000);
        return;
      }

      const step = SEQUENCE[sequenceIndex.current];

      if (step.type === 'command') {
        // Typing effect
        setIsTyping(true);
        if (charIndex.current < step.text.length) {
           setCurrentTyped(prev => prev + step.text[charIndex.current]);
           charIndex.current++;
           timeout = setTimeout(runSequence, 50 + Math.random() * 50);
        } else {
          // Command finished
          setIsTyping(false);
          setLines(prev => [...prev, { id: Date.now().toString(), type: 'command', content: step.text }]);
          setCurrentTyped('');
          charIndex.current = 0;
          sequenceIndex.current++;
          timeout = setTimeout(runSequence, 300);
        }
      } else {
        // Output line
        setLines(prev => [...prev, { id: Date.now().toString(), type: step.type as any, content: step.text }]);
        sequenceIndex.current++;
        timeout = setTimeout(runSequence, step.delay);
      }
    };

    timeout = setTimeout(runSequence, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div className="bg-lj-dark rounded-t-lg p-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-gray-400 font-mono text-xs">user@dev-machine: ~</div>
        <TerminalIcon className="w-4 h-4 text-gray-500" />
      </div>
      <div 
        ref={scrollRef}
        className="bg-[#0c0c0c] p-6 h-96 overflow-y-auto font-mono text-sm md:text-base shadow-2xl rounded-b-lg border-x-4 border-b-4 border-lj-dark"
      >
        {lines.map((line) => (
          <div key={line.id} className="mb-2 break-all">
            {line.type === 'command' && (
              <span className="text-lj-paper mr-2">$</span>
            )}
            {line.type === 'info' && (
              <span className="text-blue-400 mr-2">[INFO]</span>
            )}
            {line.type === 'success' && (
              <span className="text-green-500 mr-2">[OK]</span>
            )}
            {line.type === 'warn' && (
              <span className="text-yellow-500 mr-2">[WARN]</span>
            )}
            {line.type === 'money' && (
              <span className="text-yellow-300 mr-2 font-bold">[$$$]</span>
            )}
            <span className={`
              ${line.type === 'command' ? 'text-lj-paper' : ''}
              ${line.type === 'info' ? 'text-gray-300' : ''}
              ${line.type === 'success' ? 'text-green-400' : ''}
              ${line.type === 'warn' ? 'text-yellow-400' : ''}
              ${line.type === 'money' ? 'text-yellow-200' : ''}
            `}>
              {line.content}
            </span>
          </div>
        ))}
        {isTyping && (
           <div className="mb-2">
            <span className="text-green-500 mr-2">$</span>
            <span className="text-gray-100">{currentTyped}</span>
            <span className="animate-pulse inline-block w-2 h-4 bg-green-500 ml-1 align-middle"></span>
           </div>
        )}
        {!isTyping && (
           <div className="mb-2">
            <span className="text-green-500 mr-2">$</span>
            <span className="animate-pulse inline-block w-2 h-4 bg-green-500 ml-1 align-middle"></span>
           </div>
        )}
      </div>
    </div>
  );
};