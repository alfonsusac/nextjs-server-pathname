import type React from "react";

export default function BlogLayout(props: {
  children: React.ReactNode
}) {
  // Rerender Test
  // const rng = Math.random()
  return (
    <>
      {props.children}
    </>
  )
}