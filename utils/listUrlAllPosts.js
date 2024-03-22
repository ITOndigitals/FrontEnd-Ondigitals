import Link from "next/link";
import React from "react";

export default function ListUrlAllPosts({ data }) {
  if (!data) return null;
  return (
    <div style={{ display: "none" }}>
      {data.map((url, index) => {
        let href;
        if (url.locale === "en") {
          href = `/${url.params.slug}`;
        } else {
          href = `/${url.locale}/${url.params.slug}`;
        }
        return (
          <Link key={index} href={href}>
            {url.params.slug}
          </Link>
        );
      })}
    </div>
  );
}
