import { AnnualProductionBarData } from "@/app/components/dashboard/overview/AnnualProduction";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-8 p-8">
        <div className="grid auto-rows-min gap-8 lg:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50">
            <AnnualProductionBarData />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <AnnualProductionBarData />
          </div>

          <div className="aspect-video rounded-xl bg-muted/50">
            <div className="aspect-video rounded-xl bg-muted/50">
              <AnnualProductionBarData />
            </div>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
