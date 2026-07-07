"use client";

import { PropsWithChildren, ReactNode } from "react";
import NextLink from "next/link";

interface ILinkProps {
  href: string;
  className?: string;
  target?: string;
  children: ReactNode | ReactNode[];
}

export function Link(props: ILinkProps) {
  const isId = props.href.startsWith("#");

  return (
    <NextLink
      {...props}
      {...(isId ? { prefetch: false } : {})}
      onClick={(e) => {
        if (!isId) return;

        e.preventDefault();
        e.stopPropagation();

        const element = document.querySelector(props.href);
        if (!element) return;

        const y = element.getBoundingClientRect().top + window.scrollY;
        const offset = (element as HTMLDivElement).dataset.scrollOffset;
        const offsetY = offset ? parseInt(offset) : 0;

        window.scrollTo({ top: y + offsetY, behavior: "smooth" });
      }}
    >
      {props.children}
    </NextLink>
  );
}
