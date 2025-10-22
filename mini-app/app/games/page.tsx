import { title } from "@/lib/metadata";
import GameCard from "@/components/game-card";

const games = [
  {
    id: "1",
    name: "Crypto Quest",
    description: "Embark on a blockchain adventure.",
    rating: 4.5,
  },
  {
    id: "2",
    name: "NFT Racer",
    description: "Race with your NFT cars on the Base network.",
    rating: 4.0,
  },
];

export default function GamesPage() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">{title} – Games</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
