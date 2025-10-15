"use client";

import { useEffect, useState } from "react";
import Pokedex, { Pokemon } from "pokedex-promise-v2";
import Image from "next/image";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // console.log(pokemons);
  

  const P = new Pokedex();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await P.getPokemonByName(["raichu", "pikachu"]);
        // console.log(data);
        
        // pastikan hasilnya berupa array
        const pokemonList = Array.isArray(data) ? data : [data];
        setPokemons(pokemonList);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Error:", err.message);
        setError("Gagal mengambil data Pokémon 😢");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  });

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500 italic">
        Loading data Pokémon...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Pokémon List ⚡ (TypeScript)
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {pokemons.map((poke) => (
          <div
            key={poke.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={poke.sprites?.front_default ?? ""}
              alt={poke.name}
              width={300}
              height={300}
              className="w-24 h-24 mx-auto"
            />
            <h2 className="text-lg font-semibold capitalize text-center mt-2">
              {poke.name}
            </h2>
            <p className="text-center text-sm text-gray-500">
              Type:{" "}
              {poke.types
                ?.map((t) => t.type.name)
                .join(", ") || "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
