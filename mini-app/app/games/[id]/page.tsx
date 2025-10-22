"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  name: string;
  description: string;
  rating: number;
}

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (!id) return;
    // In a real app, fetch game data by id
    setGame({
      id,
      name: `Game ${id}`,
      description: "Detailed description of the game.",
      rating: 4.2,
    });
  }, [id]);

  if (!game) return <div>Loading...</div>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{game.name}</h1>
      <p className="mt-2">{game.description}</p>
      <p className="mt-1 text-muted-foreground">Rating: {game.rating}</p>
    </main>
  );
}
