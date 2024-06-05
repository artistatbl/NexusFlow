import { onGetCurrentDomainInfo } from "@/actions/settings"
import { redirect } from "next/navigation"
import InfoBar from "@/components/infobar"
import {Separator} from "@/components/ui/separator"

type Props = {
	params: {
		domain: string
	}
}

const DomainSettingsPage = async ({ params }: Props) => {
	const domain = await onGetCurrentDomainInfo(params.domain)
	if (!domain) redirect('/dashboard')
	return (
		<>
			<InfoBar />
			<Separator />
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
				</div>
			</div>




		</>

	)
}

export default DomainSettingsPage

