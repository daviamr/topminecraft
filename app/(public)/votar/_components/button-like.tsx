"use client";
import { useState } from "react";

import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonLike() {
  const [countLikeServer, setCountLikeServer] = useState(0);
  return (
    <>
      <Button
        type="button"
        variant="primary_orange"
        className="flex items-center gap-2 text-sm"
        onClick={() => setCountLikeServer((prevState) => prevState + 1)}
      >
        <ThumbsUp size={12} />
        Gostei {countLikeServer}
      </Button>
    </>
  );
}
