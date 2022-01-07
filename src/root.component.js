import React from "react";
import { links } from "./constants/index.js";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      {links.map((link) => {
        return (
          <Link key={link.href} to={link.href}>
            {link.name}
          </Link>
        );
      })}
    </BrowserRouter>
  );
}
