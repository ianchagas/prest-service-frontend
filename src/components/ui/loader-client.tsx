"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Detecta rota ativa
import Loader from "./loader";

type Props = {
  children: React.ReactNode;
};

const LoaderClient = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="relative">
      {loading && <Loader />}
      <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
        {children}
      </div>
    </div>
  );
};

export default LoaderClient;
