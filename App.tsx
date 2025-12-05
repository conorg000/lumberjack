import React, { useState } from 'react';
import { Axe, Trees, DollarSign, Terminal as TerminalIcon, Copy, Check, Github, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Terminal } from './components/Terminal';
import { RetroButton } from './components/RetroButton';
import { FeatureCard } from './components/FeatureCard';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npm install -g @lumberjack/cli');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const RICK_ROLL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const openLink = () => {
    window.open(RICK_ROLL, '_blank');
  };

  return (
    <div className="min-h-screen font-serif overflow-x-hidden selection:bg-lj-rust selection:text-lj-paper">
      
      {/* Navigation */}
      <nav className="border-b-4 border-lj-dark bg-lj-paper sticky top-0 z-40 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-lj-rust p-2 rounded border-2 border-lj-dark">
            <Axe className="text-lj-paper w-6 h-6" />
          </div>
          <span className="font-mono font-black text-2xl text-lj-dark tracking-tighter">LUMBERJACK</span>
        </div>
        <div className="hidden md:flex gap-6 items-center font-mono font-bold text-lj-brown text-sm">
          <a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust uppercase">Features</a>
          <a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust uppercase">Demo</a>
          <a href={RICK_ROLL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lj-rust">
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-64">
        <div className="w-full md:w-5/12 space-y-8 z-10">
          <div className="inline-block bg-lj-brown text-lj-paper font-mono px-3 py-1 text-xs uppercase tracking-widest border border-lj-dark transform -rotate-2">
            v1.0.4 Now Available
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-lj-dark leading-[0.9] drop-shadow-sm">
            CHOP DOWN <br/>
            <span className="text-lj-rust">WORKTREES.</span><br/>
            MAKE MONEY.
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-lj-brown max-w-lg leading-relaxed border-l-4 border-lj-rust pl-6">
            The only CLI tool that turns worktrees into cold. hard. cash.
          </p>

          <div className="space-y-4">
            <div className="bg-white border-2 border-lj-dark p-2 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(74,55,40,1)] max-w-md transform transition-transform hover:-translate-y-1">
              <code className="font-mono text-lj-dark px-4 font-bold text-sm md:text-base">
                npm install -g @lumberjack/cli
              </code>
              <button 
                onClick={copyCommand}
                className="bg-lj-paper hover:bg-lj-rust hover:text-white border-l-2 border-lj-dark p-3 transition-colors"
                aria-label="Copy install command"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <RetroButton onClick={openLink}>
                Get Started
              </RetroButton>
              <RetroButton variant="secondary" onClick={openLink}>
                Read Docs
              </RetroButton>
            </div>
          </div>
        </div>

        <div className="w-full md:w-5/12 relative z-10" id="demo">
            {/* Decorative elements behind terminal */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-lj-rust opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-lj-green opacity-10 rounded-full blur-3xl"></div>
            <Terminal />
        </div>
      </header>

      {/* Marquee Separator */}
      <div className="bg-lj-dark text-lj-paper overflow-hidden py-3 border-y-4 border-lj-rust transform -rotate-1 shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-mono font-bold text-lg">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <DollarSign className="w-5 h-5 text-lj-rust" /> 
              DIGITAL DEFORESTATION 
              <Axe className="w-5 h-5 text-lj-paper" />
              PASSIVE INCOME
            </span>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 md:px-12 bg-[#EBE0CD]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-display text-4xl md:text-6xl text-lj-dark uppercase">
              The Right Tool for the Job
            </h2>
            <p className="font-serif text-xl text-lj-brown max-w-2xl mx-auto">
              Stop manually deleting branches. Let our rugged algorithms do the heavy lifting while you count your winnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0 mt-24">
            <FeatureCard 
              title="Worktree Removal" 
              description="Worktrees sitting around? What a waste of good wood. Lumberjack hungry."
              icon={<Trees className="w-8 h-8" />}
            />
            <FeatureCard 
              title="AI Wood Appraisal" 
              description="Our proprietary AI-powered engine analyzes your worktree wood grain and sells it to high-end furniture startups."
              icon={<Zap className="w-8 h-8" />}
            />
            <FeatureCard 
              title="Instant Deposits" 
              description="Connect your Stripe account. Every time you chop a branch, money appears in your terminal."
              icon={<DollarSign className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 md:px-12 bg-lj-rust text-lj-paper border-y-4 border-lj-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Trees className="w-16 h-16 mx-auto mb-8 opacity-50" />
          <blockquote className="font-display text-3xl md:text-5xl leading-tight mb-8">
            "I used to have 40 stale worktrees and $0. Now I have 0 worktrees and some money. Thanks Lumberjack."
          </blockquote>
          <cite className="font-mono text-lg opacity-80 not-italic block">
            — Senior Dev @ BigTech, probably
          </cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="bg-lj-brown text-lj-paper p-12 md:p-16 rounded-lg shadow-2xl border-4 border-lj-dark relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-lj-paper text-lj-dark font-mono font-bold px-6 py-2 border-2 border-lj-dark text-lg uppercase">
                Free Download
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Start Chopping Today</h2>
            <p className="font-serif text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Join thousands of developers who are reclaiming their disk space and their financial freedom.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                 <div className="bg-black/30 backdrop-blur-sm p-4 rounded border border-white/10 font-mono text-left flex items-center gap-4 min-w-[300px]">
                    <span className="text-green-400">$</span>
                    npm install -g @lumberjack/cli
                 </div>
                 <RetroButton onClick={openLink}>
                    Get The CLI
                 </RetroButton>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lj-dark text-[#8c8c8c] py-12 px-6 border-t-4 border-lj-rust">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-lj-paper">
              <Axe className="w-5 h-5" />
              <span className="font-bold text-lg">LUMBERJACK</span>
            </div>
            <p className="max-w-xs">
              The world's first deforestation-as-a-service CLI tool. Made with wood, sweat, and TypeScript.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lj-paper mb-4 uppercase">Product</h4>
            <ul className="space-y-2">
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Download</a></li>
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Changelog</a></li>
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Wood Prices</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lj-paper mb-4 uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Terms of Timber</a></li>
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Privacy Policy</a></li>
              <li><a href={RICK_ROLL} target="_blank" rel="noreferrer" className="hover:text-lj-rust">Lumber License</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} Lumberjack CLI. No actual trees were harmed in the making of this software.
        </div>
      </footer>
    </div>
  );
}