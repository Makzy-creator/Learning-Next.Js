// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
  export type stepone = {
    id: string;
    name: string;
    email: string;
    image_url: string;
  };
  
  export type steptwo = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };
  
  export type Revenue = {
    month: string;
    revenue: number;
  };
  
  export type Steptwo = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
  };
  
  // The database returns a number for amount, but we later format it to a string with the formatCurrency function
  export type SteptwoRaw = Omit<Steptwo, 'amount'> & {
    amount: number;
  };
  
  export type SteptwoTable = {
    id: string;
    customer_id: string;
    name: string;
    email: string;
    image_url: string;
    date: string;
    amount: number;
    status: 'pending' | 'paid';
  };
  
  export type SteponeTableType = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: number;
    total_paid: number;
  };
  
  export type FormattedSteponeTable = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    total_invoices: number;
    total_pending: string;
    total_paid: string;
  };
  
  export type SteponeField = {
    id: string;
    name: string;
  };
  
  export type SteptwoForm = {
    id: string;
    customer_id: string;
    amount: number;
    status: 'pending' | 'paid';
  };