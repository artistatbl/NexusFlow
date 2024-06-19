import { onGetCurrentDomainInfo } from "@/actions/settings";
import { redirect } from "next/navigation";
import InfoBar from "@/components/infobar";
import Image from "next/image";
import { CheckCircle } from 'lucide-react';

type Props = {
  params: {
    domain: string;
    icon: string;
  };
};

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect('/dashboard');

  return (
    <>
      <InfoBar />
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Organization Home</h1>
          <div className="border p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-32 h-24 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={`https://ucarecdn.com/${domain.domains[0].icon}/`} // Assuming a placeholder image
                    alt="Website Screenshot"
                    width={128}
                    height={96}
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-md font-bold text-gray-500">Domains</h2>
                  <p className="text-sm text-gray-500">{domain.domains[0].name}</p>
                  <div className="flex items-center mt-2">
                    <CheckCircle color="green" size={24} />
                    <span className="ml-2 text-green-600 font-medium">Active</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {/* Creation Date: <span>{new Date(domain.domains[0].created_at).toLocaleString()}</span> */}
                  </p>
                  <p className="text-sm text-gray-500">
                    Email: <span>{domain.domains[0].custom_domain}</span>
                  </p>
                </div>
              </div>
              <a href={`/manage-organization`} className="text-blue-600 hover:underline">Manage Organization</a>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Users</h2>
            <div className="border p-4 rounded-lg shadow-md">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">User</th>
                    <th className="py-2 px-4 border-b text-left">Role</th>
                    <th className="py-2 px-4 border-b text-left">Email</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {domain.users.map((user: any) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-b">{user.name}</td>
                      <td className="py-2 px-4 border-b">{user.role}</td>
                      <td className="py-2 px-4 border-b">{user.email}</td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainSettingsPage;
