"use client";

import CursorSpark from "./CursorSpark";
// import LoadingVideo from "./LoadingVideo";

export default function ClientWrapper({ }: { children: React.ReactNode }) {

  return (
    <>
      <CursorSpark />

      {/* {loading && <LoadingVideo onFinish={() => setLoading(false)} />}

      {!loading && children} */}
    </>
  );
}
