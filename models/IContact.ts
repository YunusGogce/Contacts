interface IContact {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  type: string;
  timestamp: number;
}

export default IContact;
