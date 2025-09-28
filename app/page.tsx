


import { redirect } from 'next/navigation';



export default function Page() {
  // Ovo će automatski preusmeriti korisnika na /landing
  redirect('/landing');
}