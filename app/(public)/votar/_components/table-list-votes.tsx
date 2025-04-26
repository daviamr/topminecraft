"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";

const data_players_votes = [
  {
    id: 1,
    username: "Steve",
    amount_likes: 256,
  },
  {
    id: 2,
    username: "Alex",
    amount_likes: 204,
  },
  {
    id: 3,
    username: "Herobrine",
    amount_likes: 190,
  },
  {
    id: 4,
    username: "Notch",
    amount_likes: 148,
  },
  {
    id: 5,
    username: "trug0at",
    amount_likes: 35,
  },
];

export default function TableListVotes() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="flex items-center gap-1 w-full">
              Username
              <Button type="button" variant="ghost" size="icon">
                <ArrowUpDown size={16} />
              </Button>
            </TableHead>
            <TableHead className="text-right">Votos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data_players_votes.map((players) => (
            <TableRow key={players.id}>
              <TableCell>{players.username}</TableCell>
              <TableCell className="text-right">
                {players.amount_likes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
