import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

export function InfoPanel({ algorithm }) {
    if (!algorithm) return null;

    return (
        <div className="flex flex-col gap-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm h-full overflow-hidden">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                    {algorithm.name}
                    {algorithm.cursed && (
                        <span className="px-2.5 py-1 text-xs font-bold bg-red-50 text-red-600 rounded-lg border border-red-100 uppercase tracking-widest">
              Cursed
            </span>
                    )}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
                    {algorithm.description}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs text-slate-400 mb-1 font-bold uppercase tracking-wider">Time</span>
                    <span className="font-mono text-indigo-600 text-base lg:text-lg">{algorithm.timeComplexity}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs text-slate-400 mb-1 font-bold uppercase tracking-wider">Space</span>
                    <span className="font-mono text-indigo-600 text-base lg:text-lg">{algorithm.spaceComplexity}</span>
                </div>
            </div>

            <div className="grow flex flex-col min-h-0">
                <h3 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-[0.2em]">JS-Implementation</h3>
                <div className="rounded-xl overflow-auto border border-slate-200 shadow-inner grow bg-slate-50">
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomOneLight}
                        customStyle={{
                            margin: 0,
                            padding: '1.25rem',
                            background: 'transparent',
                            fontSize: '1rem',
                            height: '100%',
                            minHeight: '100%'
                        }}
                        wrapLines={true}
                    >
                        {algorithm.jscode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}