// pages/dashboard.tsx
import type { NextPage } from 'next';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';



const Dashboard: NextPage = async () => {

  const {getUser} = getKindeServerSession();
  const user =  await getUser();
  

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h2>Informações do usuário:</h2>
      <p> Email: {user.email}</p>
      <p> Name: {user.given_name} {user.family_name} </p>
      


    </main>
  );
};

export default Dashboard;
