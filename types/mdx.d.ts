declare module "mdx/types" {
  import type { ComponentProps, JSX } from "react";

  export type MDXComponents = {
    [key: string]: React.ComponentType<ComponentProps<"div">>;
  };
}
