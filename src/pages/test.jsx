import React from "react";
import { useState } from "react";
import { Button } from "../components/base/button";
import { useEffect } from "react";
import { useEffectEvent } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);
  const onResize = useEffectEvent(() => {
    console.log(count);
  });
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Button onClick={() => setCount((c) => c + 1)}>Plus</Button>
    </div>
  );
};

export default TestPage;
