import Link from "next/link";

export default function GameCard({ game }: { game: { id: string; name: string; description: string; rating: number } }) {
  return (
    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold">{game.name}</h2>
      <p className="mt-1 text-muted-foreground">{game.description}</p>
      <p className="mt-1 text-muted-foreground">Rating: {game.rating}</p>
      <Link
        href={`/games/${game.id}`}
        className="mt-2 inline-block rounded-md bg-primary px-3 py-1 text-white hover:bg-primary/90"
      >
        Play
      </Link>
    </div>
  );
}
