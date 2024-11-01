import { Layout } from "@/components/layout"
import Pagination from "@/app/ui/Invoices/pagination"
import Search from "@/app/ui/search"
import SteptwoTable from "@/app/ui/Invoices/table"
import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/Invoices/buttons';
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function StepOne(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <Layout>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        {/* <SteptwoTable query={query} currentPage={currentPage} /> */}
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </Layout>
  );
  }
  
  
  