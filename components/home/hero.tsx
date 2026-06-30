"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const lines = [
    `Hi, I'm ${siteConfig.author}.`,
  ];

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-20">
      <div className="space-y-6">
        {lines.map((line, index) => (
          <motion.h1
            key={line}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-balance text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            {line}
          </motion.h1>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3 pt-4"
        >
          <Button asChild size="lg">
            <Link href="/projects/">
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/blog/">Read Blog</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
