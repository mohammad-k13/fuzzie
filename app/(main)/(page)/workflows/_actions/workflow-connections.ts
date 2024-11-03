"use server"

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onCreateWorkflow = async (name: string, description: string) => {
  const user = await currentUser();

  if (user) {
    const workFlow = await db.workflows.create({
      data: {
        userId: user.id,
        name,
        description,
      },
    });

    if(workFlow) return {message: "Your workflow has been created", isError: false};
    return {message: "Ops! Try Again", isError: true}
  }
};
