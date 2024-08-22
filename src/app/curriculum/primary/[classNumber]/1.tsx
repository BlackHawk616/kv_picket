// src/app/curriculum/primary/[classNumber]/1.tsx
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ClassCurriculum() {
  const router = useRouter();
  const { classNumber } = router.query;

  return (
    <div>
      <h1>Class {classNumber} Curriculum</h1>
      <div>
        TEST one 2 there
        
      </div>
      <Link href="/curriculum/primary">
        <Button>Back to Curriculum List</Button>
      </Link>
    </div>
  );
}
