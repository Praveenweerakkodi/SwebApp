import axios from "axios";
import { z } from "zod";


export const jobPositionSchema = z.object({
  id: z.string(),
  jobPosition: z.string(),
  
});


export type jobPosition = z.infer<typeof jobPositionSchema>;

export async function login({
  id,
  jobPosition,
  
}: {
  id: string;
  jobPosition: string;
  
}) {
  const res = await axios.post("/api/login", {
    id,
    jobPosition,

  });
  return res.data;
}

