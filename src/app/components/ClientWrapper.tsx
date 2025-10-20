"use client";

import { useState } from "react";
import CursorSpark from "./CursorSpark";
import LoadingVideo from "./LoadingVideo";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CursorSpark />

      {loading && <LoadingVideo onFinish={() => setLoading(false)} />}

      {!loading && children}
    </>
  );
}
