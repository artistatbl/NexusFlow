import { onGetCurrentDomainInfo } from "@/actions/settings";
import { redirect } from "next/navigation";
import InfoBar from "@/components/infobar";
import Image from "next/image";
import { Check, GlobeIcon, LinkIcon } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Props = {
  params: {
    domain: string;
  };
};

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect('/dashboard');

  const isProduction = process.env.NODE_ENV === 'production';
  const baseDomain = isProduction ? 'nexusflow.io' : 'localhost:3000';
  const protocol = isProduction ? 'https' : 'http';
  const subdomain = domain.domains[0].subdomain;
  const subdomainLink = `${subdomain}.${baseDomain}`;
  const displaySubdomain = subdomain.length > 3 ? `${subdomain.substring(0, 3)}.` : subdomain;

  return (
    <>
      <InfoBar />
     
      <main className="flex-1  p-4 md:p-10">
        <div className="max-w-6xl mx-auto grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8">
            <div className="justify-center items-center rounded-lg overflow-hidden border border-main">
              <Image
                src={`https://ucarecdn.com/${domain.domains[0]?.icon}/`} // Assuming a placeholder image
                alt="Website Screenshot"
                width={800}
                height={400}
                className=" w-full h-[300px]  object-cover"
              />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-900 justify-center items-center rounded-lg p-6 grid gap-4 border border-main">
              <div className=" flex flex-col">

              <span className="text-lg font-bold  mb-2">{domain.domains[0].name}</span>
              <p className="text-sm  mb-10">{domain.domains[0].description}</p>

              <Separator />
              <div className="grid  gap-2 mt-10 text-black dark:text-white ">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Domain Status:</span>
                  <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-md text-sm text-green-500">
                    <Check className="w-4 h-4" />
                    <span>Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-black dark:text-white">
                  <LinkIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Subdomain:</span>
                  <a
                  href={`${protocol}://${subdomainLink}`}
                  className="inline-flex items-center gap-2  font-medium"
                  >
                    {displaySubdomain}.{baseDomain}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default DomainSettingsPage;
