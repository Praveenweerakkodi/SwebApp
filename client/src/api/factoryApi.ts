import axios from "axios";
import { z } from "zod";


export const factorySchema = z.object({
  id: z.string(),
  factoryName: z.string(),
  
});


export type Factory = z.infer<typeof factorySchema>;

export async function login({
  id,
  factoryName,
}: {
  id: string;
  factoryName: string;
}) {
  const res = await axios.post("/api/login", {
    id,
    factoryName,
  });
  return res.data;
}

