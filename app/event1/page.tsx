import { getCompanyByName } from "@/data/company"


const company = await getCompanyByName("Nova")

export default function Event1() {
  return (<div>
    {JSON.stringify(company)}
  </div>
  )
}
