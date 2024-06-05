import { onGetCurrentDomainInfo } from "@/actions/settings"
import { redirect } from "next/navigation"
import InfoBar from "@/components/infobar"
import {Separator} from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

type Props = {
	params: {
	  domain: string;
	};
   };
   
   const DomainSettingsPage = async ({ params }: Props) => {
	const domain = await onGetCurrentDomainInfo(params.domain);
	if (!domain) redirect('/dashboard');
   
	return (
	  <>
	    <InfoBar />
	    <Separator />
	    <div className="flex flex-col gap-4 p-4">
		 <div className="flex items-center justify-between">
		   <h1 className="text-2xl font-bold">Domain Details</h1>
		 </div>
		 {domain.domains.map((d: any) => (
		   <div key={d.id} className="border p-4 rounded-lg shadow-md">
			<div className="flex items-center">
			  {d.icon && <img src={d.icon} alt={d.name} className="w-12 h-12 mr-4" />}
			  <div>
			    <h2 className="text-xl font-semibold">{d.name}</h2>
			    <p className="text-sm text-gray-500">{d.description}</p>
			  </div>
			</div>
			<div className="mt-4">
			  <p><strong>Subdomain:</strong> {d.subdomain}</p>
			  <p><strong>Custom Domain:</strong> {d.custom_domain}</p>
			  <p><strong>User ID:</strong> {d.userId}</p>
			</div>
		   </div>
		 ))}
	    </div>
	  </>
	);
   };
   
   export default DomainSettingsPage;


