import AgendaPage from "@/app/(website)/_components/AgendaPage";

export default function Page() {
  return (
    <>
      <h1 className="text-h1-mobile text-white md:text-h1">議程表</h1>
      <div className="hidden md:block">
        <DesktopAgenda />
      </div>
      <div className="md:hidden">
        <MobileAgenda />
      </div>
    </>
  );
}

import AgendaPage from "@/app/(website)/_components/AgendaPage";

export default function Page() {
  return <AgendaPage />;
}
