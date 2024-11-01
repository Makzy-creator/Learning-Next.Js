import Form from '@/app/ui/Invoices/create-form';
import Breadcrumbs from '@/app/ui/Invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/Invoices' },
          {
            label: 'Create Invoice',
            href: '/Invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}