import { NextResponse } from 'next/server'
import { IServerStatus } from '@/interfaces/server'
import { TableService } from '@/services/table';

let cachedData: IServerStatus[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutos
const tableService = new TableService();

export async function GET() {
  const now = Date.now();

  // Verifica se o cache é válido
  if (cachedData && now - lastFetchTime < CACHE_DURATION) {
    console.log('Dados do cache');
    return NextResponse.json(cachedData);
  }

  try {
    console.log('Buscando da API externa');
    const data = await tableService.fetchAllServers();
    // Atualiza o cache
    cachedData = data;
    lastFetchTime = now;

    return NextResponse.json(data);

  } catch (error) {
    console.log("Erro ao buscar da api externa: ", error);
    return NextResponse.json({ error: 'Erro ao buscar dados da API' }, { status: 500 });
  }

}