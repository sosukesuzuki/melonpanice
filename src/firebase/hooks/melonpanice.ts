import { useState, useEffect } from "react";
import { melonpanice } from "../db";

type Size = {
  x: number;
  y: number;
};

export function useSize(): Size | null {
  const [size, setSize] = useState<Size | null>(null);

  useEffect(() => {
    const unsubscribe = melonpanice.onSnapshot(doc => {
      const { x, y } = doc.data()!;
      setSize({ x, y });
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return size;
}

export function useExplosionCount(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = melonpanice.onSnapshot(doc => {
      const { explosion_count } = doc.data()!;
      setCount(explosion_count);
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return count;
}
