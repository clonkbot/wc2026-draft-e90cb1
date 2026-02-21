export type Position = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  club: string;
  position: Position;
  rating: number;
  price: number; // in millions
}

// World Cup 2026 players with realistic pricing
export const players: Player[] = [
  // Goalkeepers
  { id: 'gk1', name: 'Thibaut Courtois', country: 'Belgium', countryFlag: '🇧🇪', club: 'Real Madrid', position: 'GK', rating: 90, price: 35 },
  { id: 'gk2', name: 'Alisson Becker', country: 'Brazil', countryFlag: '🇧🇷', club: 'Liverpool', position: 'GK', rating: 89, price: 32 },
  { id: 'gk3', name: 'Marc-André ter Stegen', country: 'Germany', countryFlag: '🇩🇪', club: 'Barcelona', position: 'GK', rating: 88, price: 28 },
  { id: 'gk4', name: 'Ederson', country: 'Brazil', countryFlag: '🇧🇷', club: 'Man City', position: 'GK', rating: 88, price: 30 },
  { id: 'gk5', name: 'Mike Maignan', country: 'France', countryFlag: '🇫🇷', club: 'AC Milan', position: 'GK', rating: 87, price: 26 },
  { id: 'gk6', name: 'Diogo Costa', country: 'Portugal', countryFlag: '🇵🇹', club: 'Porto', position: 'GK', rating: 85, price: 18 },
  { id: 'gk7', name: 'Emiliano Martínez', country: 'Argentina', countryFlag: '🇦🇷', club: 'Aston Villa', position: 'GK', rating: 87, price: 24 },
  { id: 'gk8', name: 'Jordan Pickford', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Everton', position: 'GK', rating: 84, price: 15 },

  // Defenders
  { id: 'def1', name: 'Virgil van Dijk', country: 'Netherlands', countryFlag: '🇳🇱', club: 'Liverpool', position: 'DEF', rating: 89, price: 45 },
  { id: 'def2', name: 'Rúben Dias', country: 'Portugal', countryFlag: '🇵🇹', club: 'Man City', position: 'DEF', rating: 88, price: 42 },
  { id: 'def3', name: 'Antonio Rüdiger', country: 'Germany', countryFlag: '🇩🇪', club: 'Real Madrid', position: 'DEF', rating: 87, price: 35 },
  { id: 'def4', name: 'Achraf Hakimi', country: 'Morocco', countryFlag: '🇲🇦', club: 'PSG', position: 'DEF', rating: 86, price: 38 },
  { id: 'def5', name: 'Trent Alexander-Arnold', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Liverpool', position: 'DEF', rating: 87, price: 40 },
  { id: 'def6', name: 'Theo Hernández', country: 'France', countryFlag: '🇫🇷', club: 'AC Milan', position: 'DEF', rating: 86, price: 36 },
  { id: 'def7', name: 'William Saliba', country: 'France', countryFlag: '🇫🇷', club: 'Arsenal', position: 'DEF', rating: 86, price: 38 },
  { id: 'def8', name: 'Marquinhos', country: 'Brazil', countryFlag: '🇧🇷', club: 'PSG', position: 'DEF', rating: 87, price: 35 },
  { id: 'def9', name: 'Kyle Walker', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', position: 'DEF', rating: 84, price: 22 },
  { id: 'def10', name: 'Joško Gvardiol', country: 'Croatia', countryFlag: '🇭🇷', club: 'Man City', position: 'DEF', rating: 85, price: 32 },
  { id: 'def11', name: 'Alessandro Bastoni', country: 'Italy', countryFlag: '🇮🇹', club: 'Inter Milan', position: 'DEF', rating: 86, price: 34 },
  { id: 'def12', name: 'Alphonso Davies', country: 'Canada', countryFlag: '🇨🇦', club: 'Bayern Munich', position: 'DEF', rating: 85, price: 30 },
  { id: 'def13', name: 'João Cancelo', country: 'Portugal', countryFlag: '🇵🇹', club: 'Barcelona', position: 'DEF', rating: 85, price: 28 },
  { id: 'def14', name: 'Cristian Romero', country: 'Argentina', countryFlag: '🇦🇷', club: 'Tottenham', position: 'DEF', rating: 86, price: 32 },
  { id: 'def15', name: 'Dayot Upamecano', country: 'France', countryFlag: '🇫🇷', club: 'Bayern Munich', position: 'DEF', rating: 83, price: 22 },
  { id: 'def16', name: 'Nicolás Tagliafico', country: 'Argentina', countryFlag: '🇦🇷', club: 'Lyon', position: 'DEF', rating: 82, price: 12 },

  // Midfielders
  { id: 'mid1', name: 'Kevin De Bruyne', country: 'Belgium', countryFlag: '🇧🇪', club: 'Man City', position: 'MID', rating: 91, price: 55 },
  { id: 'mid2', name: 'Jude Bellingham', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Real Madrid', position: 'MID', rating: 90, price: 65 },
  { id: 'mid3', name: 'Rodri', country: 'Spain', countryFlag: '🇪🇸', club: 'Man City', position: 'MID', rating: 90, price: 50 },
  { id: 'mid4', name: 'Florian Wirtz', country: 'Germany', countryFlag: '🇩🇪', club: 'Bayer Leverkusen', position: 'MID', rating: 88, price: 55 },
  { id: 'mid5', name: 'Pedri', country: 'Spain', countryFlag: '🇪🇸', club: 'Barcelona', position: 'MID', rating: 87, price: 45 },
  { id: 'mid6', name: 'Bruno Fernandes', country: 'Portugal', countryFlag: '🇵🇹', club: 'Man United', position: 'MID', rating: 86, price: 38 },
  { id: 'mid7', name: 'Federico Valverde', country: 'Uruguay', countryFlag: '🇺🇾', club: 'Real Madrid', position: 'MID', rating: 88, price: 48 },
  { id: 'mid8', name: 'Jamal Musiala', country: 'Germany', countryFlag: '🇩🇪', club: 'Bayern Munich', position: 'MID', rating: 87, price: 52 },
  { id: 'mid9', name: 'Martin Ødegaard', country: 'Norway', countryFlag: '🇳🇴', club: 'Arsenal', position: 'MID', rating: 88, price: 46 },
  { id: 'mid10', name: 'Declan Rice', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Arsenal', position: 'MID', rating: 86, price: 42 },
  { id: 'mid11', name: 'Aurélien Tchouaméni', country: 'France', countryFlag: '🇫🇷', club: 'Real Madrid', position: 'MID', rating: 85, price: 38 },
  { id: 'mid12', name: 'Enzo Fernández', country: 'Argentina', countryFlag: '🇦🇷', club: 'Chelsea', position: 'MID', rating: 85, price: 40 },
  { id: 'mid13', name: 'Nicolò Barella', country: 'Italy', countryFlag: '🇮🇹', club: 'Inter Milan', position: 'MID', rating: 86, price: 38 },
  { id: 'mid14', name: 'Sandro Tonali', country: 'Italy', countryFlag: '🇮🇹', club: 'Newcastle', position: 'MID', rating: 84, price: 30 },
  { id: 'mid15', name: 'Mason Mount', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United', position: 'MID', rating: 83, price: 25 },
  { id: 'mid16', name: 'Alexis Mac Allister', country: 'Argentina', countryFlag: '🇦🇷', club: 'Liverpool', position: 'MID', rating: 85, price: 35 },
  { id: 'mid17', name: 'Sofyan Amrabat', country: 'Morocco', countryFlag: '🇲🇦', club: 'Fiorentina', position: 'MID', rating: 82, price: 18 },
  { id: 'mid18', name: 'Tyler Adams', country: 'USA', countryFlag: '🇺🇸', club: 'Bournemouth', position: 'MID', rating: 80, price: 12 },

  // Forwards
  { id: 'fwd1', name: 'Kylian Mbappé', country: 'France', countryFlag: '🇫🇷', club: 'Real Madrid', position: 'FWD', rating: 93, price: 80 },
  { id: 'fwd2', name: 'Erling Haaland', country: 'Norway', countryFlag: '🇳🇴', club: 'Man City', position: 'FWD', rating: 92, price: 75 },
  { id: 'fwd3', name: 'Vinícius Jr.', country: 'Brazil', countryFlag: '🇧🇷', club: 'Real Madrid', position: 'FWD', rating: 92, price: 72 },
  { id: 'fwd4', name: 'Lionel Messi', country: 'Argentina', countryFlag: '🇦🇷', club: 'Inter Miami', position: 'FWD', rating: 90, price: 50 },
  { id: 'fwd5', name: 'Harry Kane', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Bayern Munich', position: 'FWD', rating: 89, price: 48 },
  { id: 'fwd6', name: 'Lautaro Martínez', country: 'Argentina', countryFlag: '🇦🇷', club: 'Inter Milan', position: 'FWD', rating: 88, price: 45 },
  { id: 'fwd7', name: 'Bukayo Saka', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Arsenal', position: 'FWD', rating: 87, price: 48 },
  { id: 'fwd8', name: 'Phil Foden', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man City', position: 'FWD', rating: 88, price: 50 },
  { id: 'fwd9', name: 'Rodrygo', country: 'Brazil', countryFlag: '🇧🇷', club: 'Real Madrid', position: 'FWD', rating: 86, price: 42 },
  { id: 'fwd10', name: 'Rafael Leão', country: 'Portugal', countryFlag: '🇵🇹', club: 'AC Milan', position: 'FWD', rating: 86, price: 40 },
  { id: 'fwd11', name: 'Marcus Rashford', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', club: 'Man United', position: 'FWD', rating: 85, price: 35 },
  { id: 'fwd12', name: 'Randal Kolo Muani', country: 'France', countryFlag: '🇫🇷', club: 'PSG', position: 'FWD', rating: 84, price: 32 },
  { id: 'fwd13', name: 'Julián Álvarez', country: 'Argentina', countryFlag: '🇦🇷', club: 'Man City', position: 'FWD', rating: 85, price: 38 },
  { id: 'fwd14', name: 'Cody Gakpo', country: 'Netherlands', countryFlag: '🇳🇱', club: 'Liverpool', position: 'FWD', rating: 84, price: 32 },
  { id: 'fwd15', name: 'Khvicha Kvaratskhelia', country: 'Georgia', countryFlag: '🇬🇪', club: 'Napoli', position: 'FWD', rating: 86, price: 42 },
  { id: 'fwd16', name: 'Victor Osimhen', country: 'Nigeria', countryFlag: '🇳🇬', club: 'Napoli', position: 'FWD', rating: 87, price: 45 },
  { id: 'fwd17', name: 'João Félix', country: 'Portugal', countryFlag: '🇵🇹', club: 'Barcelona', position: 'FWD', rating: 83, price: 28 },
  { id: 'fwd18', name: 'Christian Pulisic', country: 'USA', countryFlag: '🇺🇸', club: 'AC Milan', position: 'FWD', rating: 82, price: 22 },
  { id: 'fwd19', name: 'Richarlison', country: 'Brazil', countryFlag: '🇧🇷', club: 'Tottenham', position: 'FWD', rating: 83, price: 25 },
  { id: 'fwd20', name: 'Leroy Sané', country: 'Germany', countryFlag: '🇩🇪', club: 'Bayern Munich', position: 'FWD', rating: 85, price: 35 },
  { id: 'fwd21', name: 'Dušan Vlahović', country: 'Serbia', countryFlag: '🇷🇸', club: 'Juventus', position: 'FWD', rating: 84, price: 30 },
  { id: 'fwd22', name: 'Jonathan David', country: 'Canada', countryFlag: '🇨🇦', club: 'Lille', position: 'FWD', rating: 83, price: 26 },
];
