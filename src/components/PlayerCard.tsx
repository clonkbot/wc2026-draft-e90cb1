import { Player } from '../data/players';

interface PlayerCardProps {
  player: Player;
  onAdd: () => void;
  isSelected: boolean;
  canAfford: boolean;
  isFull: boolean;
  index: number;
}

const positionColors: Record<string, { bg: string; text: string; border: string }> = {
  GK: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  DEF: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  MID: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  FWD: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
};

const priceTag = (price: number): { label: string; class: string } => {
  if (price >= 60) return { label: 'ELITE', class: 'bg-gradient-to-r from-amber-400 to-yellow-300 text-black' };
  if (price >= 40) return { label: 'STAR', class: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' };
  if (price >= 25) return { label: 'SOLID', class: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' };
  return { label: 'VALUE', class: 'bg-gradient-to-r from-slate-500 to-slate-400 text-white' };
};

export function PlayerCard({ player, onAdd, isSelected, canAfford, isFull, index }: PlayerCardProps) {
  const posColor = positionColors[player.position];
  const tag = priceTag(player.price);
  const disabled = isSelected || !canAfford || isFull;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
        isSelected
          ? 'bg-slate-800/30 border-slate-600/30 opacity-60'
          : disabled
          ? 'bg-slate-800/20 border-slate-700/30 opacity-50'
          : 'bg-slate-800/50 border-slate-700/50 hover:border-amber-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-amber-500/10'
      }`}
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Diagonal accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 ${posColor.bg} opacity-50`}
      />

      <div className="relative p-3 md:p-4">
        {/* Header row */}
        <div className="flex items-start justify-between mb-2 md:mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl">{player.countryFlag}</span>
            <div>
              <h3 className="font-bold text-white text-sm md:text-base leading-tight">{player.name}</h3>
              <p className="text-xs text-slate-400">{player.club}</p>
            </div>
          </div>
          <div
            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${posColor.bg} ${posColor.text} border ${posColor.border}`}
          >
            {player.position}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600/50">
                <span className="text-sm md:text-lg font-black text-white">{player.rating}</span>
              </div>
            </div>
            {/* Price tag */}
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${tag.class}`}>
              {tag.label}
            </span>
          </div>
          {/* Price */}
          <div className="text-right">
            <span className="text-lg md:text-xl font-black text-amber-400">€{player.price}M</span>
          </div>
        </div>

        {/* Add button */}
        <button
          onClick={onAdd}
          disabled={disabled}
          className={`w-full py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
            isSelected
              ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
              : !canAfford
              ? 'bg-red-900/30 text-red-400/50 cursor-not-allowed'
              : isFull
              ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] shadow-lg shadow-amber-500/20'
          }`}
        >
          {isSelected ? '✓ In Squad' : !canAfford ? 'Over Budget' : isFull ? 'Squad Full' : '+ Add to Squad'}
        </button>
      </div>
    </div>
  );
}
