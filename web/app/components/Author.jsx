import { Link } from "@remix-run/react";

import GitHub from "./icons/github";
import LinkedIn from "./icons/linkedin";
import Twitter from "./icons/twitter";
import Discord from "./icons/discord";
import YouTube from "./icons/youtube";

export default function Author() {
  return (
    <div className="shadow-md m-3 mr-8 -ml-1 float-left -rotate-2 rounded-xl overflow-hidden">
      <div
        className="w-48 h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(/andrewcairns_400x400.jpeg)`,
        }}
      />
      <div className="flex items-center justify-center space-x-4 -mt-1 bg-gray-700 p-3 text-white border-t border-gray-800">
        <Link to="https://twitter.com/andrewcairns">
          <Twitter className="w-4 h-4 fill-white" />
        </Link>
        <Link to="https://github.com/andrewcairns">
          <GitHub className="w-4 h-4 fill-white" />
        </Link>
        <Link to="https://www.linkedin.com/in/andrewcairns/">
          <LinkedIn className="w-4 h-4 fill-white -mt-1" />
        </Link>
        <Link to="https://youtube.com/@metaphoricallyspeaking">
          <YouTube className="w-5 h-5 fill-white" />
        </Link>
        <Link to="https://discord.gg/4xhhNW9v44">
          <Discord className="w-5 h-5 fill-white" />
        </Link>
      </div>
    </div>
  );
}
