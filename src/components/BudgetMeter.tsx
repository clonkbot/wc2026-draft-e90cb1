interface BudgetMeterProps {
  spent: number;
  total: number;
}

export function BudgetMeter({ spent, total }: BudgetMeterProps) {
  const remaining = total - spent;
  const percentage = (spent / total) * 100;
  const isLow = remaining < 50;
  const isCritical = remaining < 25;

  return (
    <div className="bg-slate-800/50 rounded-xl p-3 md:p-4 border border-slate-700/50 min-w-[200px] md:min-w-[280px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Budget</span>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded ${
            isCritical
              ? 'bg-red-500/20 text-red-400'
              : isLow
              ? 'bg-amber-500/20 text-amber-400'
              : 'bg-emerald-500/20 text-emerald-400'
          }`}
        >
          €{remaining}M left
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 md:h-3 bg-slate-900 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isCritical
              ? 'bg-gradient-to-r from-red-500 to-red-400'
              : isLow
              ? 'bg-gradient-to-r from-amber-500 to-amber-400'
              : 'bg-gradient-to-r from-amber-500 to-emerald-400'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs md:text-sm">
        <span className="text-slate-400">
          Spent: <span className="font-bold text-white">€{spent}M</span>
        </span>
        <span className="text-slate-400">
          Max: <span className="font-medium text-slate-300">€{total}M</span>
        </span>
      </div>
    </div>
  );
}
