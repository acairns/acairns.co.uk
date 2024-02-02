import { type MetaFunction } from "@remix-run/react";

import Author from "~/components/Author";
import Discord from "~/components/icons/discord";
import Twitter from "~/components/icons/twitter";
import Default from "~/components/layouts/Default";

export default function Index() {
  return (
    <div>
      <Default title="Howdy!">
        <Author />
        <p>
          My name is Andrew Cairns and I'm a Software Content Creator and
          Engineer living in Scotland.
        </p>
        <p>
          I've built software since Turbo Pascal on Amstrad - an old language no
          one remembers for an old computer no one used.
        </p>
        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          I'm mostly creating content for my{" "}
          <a
              href="https://www.youtube.com/@metaphoricallyspeaking"
              target="_blank"
              className="bg-red-600 text-white rotate-2"
          >
            YouTube
          </a>{" "}
          channel while also doing some consultanting.
        </p>

        {/* <a
            href="https://trypatchwork.com"
            target="_blank"
            className="bg-indigo-600 text-white rotate-2"
          >
            Patchwork
          </a> */}

        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          Previously, I've held senior roles such as Staff Engineer and VP of
          Enginneering. I've worked at places like{" "}
          <a
              href="https://transfergo.com"
              target="_blank"
              className="bg-yellow-300 text-slate-700 -rotate-1"
          >
            TransferGo
          </a>{" "}
          building Compliance, Risk and Anti-money Laundering things.
        </p>

        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          I spend my spare time kayaking and coaching youth football.
        </p>

        <p className="prose-a:no-underline hover:prose-a:underline prose-a:px-2 prose-a:inline-block prose-a:rounded hover:prose-a:shadow-md">
          That's enough about me: introduce yourself!{" "}
          <a
              href="https://discord.gg/4xhhNW9v44"
              target="_blank"
              className="bg-[#7289da] fill-white -rotate-2"
          >
            <Discord className="w-6 h-6 inline" />
          </a>{" "}
          <a
              href="https://twitter.com/andrewcairns"
              target="_blank"
              className="bg-[#1DA1F2] fill-white rotate-3"
          >
            <Twitter className="mx-0.5 w-5 h-5 inline" />
          </a>
        </p>

      </Default>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "Andrew Cairns" },
    {
      property: "og:title",
      content: "Andrew Cairns",
    },
    {
      name: "description",
      content: "My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development.",
    },
    {
      name: "og:description",
      content: "My name is Andrew Cairns and I'm a Software Engineer living in Scotland. This is where I share my thoughts regarding software development.",
    },
  ];
};
