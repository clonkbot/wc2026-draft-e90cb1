import { useState, useMemo } from 'react';
import { PlayerCard } from './components/PlayerCard';
import { TeamFormation } from './components/TeamFormation';
import { BudgetMeter } from './components/BudgetMeter';
import { players, Player, Position } from './data/players';

const MAX_BUDGET = 300; // Million euros
const MAX_PLAYERS = 11;

type PositionFilter = 'ALL' | Position;

export default function App() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState<PositionFilter>('ALL');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'rating'>('rating');

  const spentBudget = useMemo(
    () => selectedPlayers.reduce((sum, p) => sum + p.price, 0),
    [selectedPlayers]
  );

  const remainingBudget = MAX_BUDGET - spentBudget;

  const filteredPlayers = useMemo(() => {
    return players
      .filter((p) => {
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.club.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPosition = positionFilter === 'ALL' || p.position === positionFilter;
        return matchesSearch && matchesPosition;
      })
      .sort((a, b) => {
        if (sortBy === 'price') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return b.rating - a.rating;
      });
  }, [searchQuery, positionFilter, sortBy]);

  const addPlayer = (player: Player) => {
    if (selectedPlayers.length >= MAX_PLAYERS) return;
    if (selectedPlayers.find((p) => p.id === player.id)) return;
    if (player.price > remainingBudget) return;
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const removePlayer = (playerId: string) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== playerId));
  };

  const clearTeam = () => setSelectedPlayers([]);

  const isPlayerSelected = (playerId: string) =>
    selectedPlayers.some((p) => p.id === playerId);

  const canAfford = (price: number) => price <= remainingBudget;

  const positionCounts = useMemo(() => {
    const counts: Record<Position, number> = { GK: 0, DEF: 0, MID: 0, FWD: 0 };
    selectedPlayers.forEach((p) => counts[p.position]++);
    return counts;
  }, [selectedPlayers]);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white overflow-x-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32V42.68L30 60L0 42.68V17.32L30 0z' fill='none' stroke='%23fbbf24' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-amber-500/20 bg-gradient-to-r from-[#0a0e17] via-[#111827] to-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform -skew-x-6 shadow-lg shadow-amber-500/30">
                <span className="text-2xl md:text-3xl transform skew-x-6">⚽</span>
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-black tracking-tight">
                  <span className="text-amber-400">WORLD CUP</span>{' '}
                  <span className="text-white">2026</span>
                </h1>
                <p className="text-xs md:text-sm text-slate-400 font-medium tracking-widest uppercase">
                  Fantasy Draft System
                </p>
              </div>
            </div>
            <BudgetMeter spent={spentBudget} total={MAX_BUDGET} />
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Panel - Team Formation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-amber-400 tracking-wide uppercase flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-400 rounded-full" />
                  Your Squad
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">
                    {selectedPlayers.length}/{MAX_PLAYERS}
                  </span>
                  {selectedPlayers.length > 0 && (
                    <button
                      onClick={clearTeam}
                      className="text-xs px-3 py-1.5 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <TeamFormation
                players={selectedPlayers}
                onRemovePlayer={removePlayer}
                positionCounts={positionCounts}
              />

              {/* Position summary */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {(['GK', 'DEF', 'MID', 'FWD'] as Position[]).map((pos) => (
                  <div
                    key={pos}
                    className="bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700/50"
                  >
                    <div className="text-xs text-slate-500 uppercase">{pos}</div>
                    <div className="text-lg font-bold text-white">{positionCounts[pos]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Player Market */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-bold text-amber-400 tracking-wide uppercase flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-400 rounded-full" />
                Player Market
              </h2>
              <span className="text-sm text-slate-400">{filteredPlayers.length} players</span>
            </div>

            {/* Filters */}
            <div className="bg-slate-800/30 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-slate-700/30">
              <div className="flex flex-col gap-3">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search players, clubs, countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-600/50 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                    🔍
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Position filters */}
                  <div className="flex flex-wrap gap-1">
                    {(['ALL', 'GK', 'DEF', 'MID', 'FWD'] as PositionFilter[]).map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setPositionFilter(pos)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                          positionFilter === pos
                            ? 'bg-amber-500 text-black'
                            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="ml-auto bg-slate-700/50 border-0 rounded-md px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
                  >
                    <option value="rating">Sort: Rating</option>
                    <option value="price">Sort: Price</option>
                    <option value="name">Sort: Name</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Player Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
              {filteredPlayers.map((player, index) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onAdd={() => addPlayer(player)}
                  isSelected={isPlayerSelected(player.id)}
                  canAfford={canAfford(player.price)}
                  isFull={selectedPlayers.length >= MAX_PLAYERS}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-xs text-slate-600">
            Requested by <span className="text-slate-500">@0xsnibbler</span> · Built by{' '}
            <span className="text-slate-500">@clonkbot</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
