import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <div>
      <Button className="p-6">
        <Link href="/teacher/create">New Course</Link>
      </Button>
    </div>
  );
};

export default CoursesPage;
