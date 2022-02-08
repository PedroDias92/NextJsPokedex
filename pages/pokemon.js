import React from "react";
import Layout from "../components/Layout";
import Link from "next/Link";
import { type } from "os";

export default function pokemon({ pokeman }) {
  return (
    <>
      <Layout title={pokeman.name}>
        <h1 className="text-4xl mb-2 text-center capitalize">{pokeman.name}</h1>
        <img src={pokeman.image} alt={pokeman.name} className="mx-auto" />
        <p>
          <span className="font-bold mr-2">Weight</span>: {pokeman.weight}
        </p>
        <p>
          <span className="font-bold mr-2">height</span>: {pokeman.height}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Types:</h2>
        {pokeman.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}

        <p className="mt-10 text-center">
          <Link href="/">
            <a className="underline">Home</a>
          </Link>
        </p>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();

    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;
    pokeman.image = image;

    return {
      props: { pokeman },
    };
  } catch (err) {
    console.log("err", err);
  }
}