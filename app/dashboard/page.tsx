import DashboardContents from "@/components/dashboardcontents";
import SimpleSidebar from "@/components/sidebar";


export default function Dashboard() {
  return (<>
    <SimpleSidebar>
        <DashboardContents />
    </SimpleSidebar>
  </>
  )
}
