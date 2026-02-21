import { Player, Position } from '../data/players';

interface TeamFormationProps {
  players: Player[];
  onRemovePlayer: (playerId: string) => void;
  positionCounts: Record<Position, number>;
}

const positionColors: Record<Position, string> = {
  GK: 'from-amber-500 to-amber-600',
  DEF: 'from-blue-500 to-blue-600',
  MID: 'from-emerald-500 to-emerald-600',
  FWD: 'from-rose-500 to-rose-600',
};

const positionBorderColors: Record<Position, string> = {
  GK: 'border-amber-400/50 shadow-amber-500/20',
  DEF: 'border-blue-400/50 shadow-blue-500/20',
  MID: 'border-emerald-400/50 shadow-emerald-500/20',
  FWD: 'border-rose-400/50 shadow-rose-500/20',
};

export function TeamFormation({ players, onRemovePlayer }: TeamFormationProps) {
  const getPlayersByPosition = (position: Position) =>
    players.filter((p) => p.position === position);

  const gk = getPlayersByPosition('GK');
  const def = getPlayersByPosition('DEF');
  const mid = getPlayersByPosition('MID');
  const fwd = getPlayersByPosition('FWD');

  const renderPlayerSlot = (player: Player | undefined, position: Position, key: string) => {
    if (player) {
      return (
        <div
          key={key}
          className={`group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105`}
          onClick={() => onRemovePlayer(player.id)}
        >
          <div
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${positionColors[position]} flex items-center justify-center text-lg md:text-xl shadow-lg border-2 ${positionBorderColors[position]}`}
          >
            {player.countryFlag}
          </div>
          <div className="mt-1 px-2 py-0.5 bg-black/70 rounded text-[10px] md:text-xs font-semibold text-white truncate max-w-[60px] md:max-w-[80px] text-center">
            {player.name.split(' ').pop()}
          </div>
          <div className="text-[9px] md:text-[10px] text-amber-400 font-bold">€{player.price}M</div>
          {/* Remove hint */}
          <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <span className="text-white text-[10px] md:text-xs">×</span>
          </div>
        </div>
      );
    }
    return (
      <div key={key} className="flex flex-col items-center opacity-30">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center`}
        >
          <span className="text-slate-500 text-xs">{position}</span>
        </div>
        <div className="mt-1 text-[10px] text-slate-600">Empty</div>
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-green-800 to-green-900 rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5] shadow-2xl border border-green-700/50">
      {/* Pitch markings */}
      <div className="absolute inset-0">
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20" />
        {/* Center line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20" />
        {/* Goal box - top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-10 md:h-14 border-2 border-t-0 border-white/20 rounded-b-lg" />
        {/* Goal box - bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-10 md:h-14 border-2 border-b-0 border-white/20 rounded-t-lg" />
        {/* Grass stripes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-[12.5%] bg-green-700/20"
            style={{ top: `${i * 25}%`, display: i % 2 === 0 ? 'block' : 'none' }}
          />
        ))}
      </div>

      {/* Players */}
      <div className="relative z-10 h-full flex flex-col justify-between py-4 md:py-6 px-3 md:px-4">
        {/* Forwards */}
        <div className="flex justify-center gap-3 md:gap-4">
          {fwd.length > 0
            ? fwd.map((p) => renderPlayerSlot(p, 'FWD', p.id))
            : [0, 1, 2].map((i) => renderPlayerSlot(undefined, 'FWD', `fwd-empty-${i}`))}
        </div>

        {/* Midfielders */}
        <div className="flex justify-center gap-2 md:gap-3">
          {mid.length > 0
            ? mid.map((p) => renderPlayerSlot(p, 'MID', p.id))
            : [0, 1, 2, 3].map((i) => renderPlayerSlot(undefined, 'MID', `mid-empty-${i}`))}
        </div>

        {/* Defenders */}
        <div className="flex justify-center gap-2 md:gap-3">
          {def.length > 0
            ? def.map((p) => renderPlayerSlot(p, 'DEF', p.id))
            : [0, 1, 2, 3].map((i) => renderPlayerSlot(undefined, 'DEF', `def-empty-${i}`))}
        </div>

        {/* Goalkeeper */}
        <div className="flex justify-center">
          {gk.length > 0
            ? gk.map((p) => renderPlayerSlot(p, 'GK', p.id))
            : renderPlayerSlot(undefined, 'GK', 'gk-empty')}
        </div>
      </div>

      {/* Empty state overlay */}
      {players.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl mb-2">⚽</div>
            <p className="text-white/70 text-sm md:text-base font-medium">Start building your squad</p>
            <p className="text-white/40 text-xs mt-1">Add players from the market</p>
          </div>
        </div>
      )}
    </div>
  );
}
