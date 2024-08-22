import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import Link from "next/link";
import React from "react";

const classes = [1, 2, 3, 4, 5];

export default function PrimaryCurriculum() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Primary Curriculum</h1>
      <div className="flex flex-col gap-4">
        {classes.map((classNumber) => (
          <Card key={classNumber} className="max-w-sm mx-auto">
            <CardContent>
              <h2 className="text-xl font-semibold">Class {classNumber}</h2>
            </CardContent>
            <CardFooter>
              <Link href={`/curriculum/primary/${classNumber}`} passHref>
                <Button>View Curriculum</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

