import axios from "axios";
import { z } from "zod";


export const divisionSchema = z.object({
  id: z.string(),
  division: z.string(),
  
});


export type Division = z.infer<typeof divisionSchema>;

export async function login({
  id,
  division,
}: {
  id: string;
  division: string;
}) {
  const res = await axios.post("/api/login", {
    id,
    division,
  });
  return res.data;
}

