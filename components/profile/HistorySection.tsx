import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const HistorySection = () => {
  // Placeholder data
  const history = [
    { date: '2024-06-01', to: '8k9...XyZ', amount: '2.00 SOL', status: 'Success' },
    { date: '2024-05-28', to: '7gk...9Xy', amount: '1.25 SOL', status: 'Success' },
    { date: '2024-05-20', to: '3h2...8Lm', amount: '0.50 SOL', status: 'Failed' },
  ];

  return (
    <Card className="w-full p-0 overflow-x-auto">
      <div className="p-6 pb-2 text-lg font-semibold text-white">Send History</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.to}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <span className={item.status === 'Success' ? 'text-green-400' : 'text-red-400'}>{item.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default HistorySection; 
