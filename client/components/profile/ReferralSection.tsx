import { Card } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const ReferralSection = () => {
  // Placeholder data
  const referrals = [
    { name: 'Alice', address: '9k2...1Xy', joined: '2024-05-30', reward: '10 pts' },
    { name: 'Bob', address: '7gk...9Xy', joined: '2024-05-25', reward: '10 pts' },
    { name: 'Charlie', address: '2h3...8Lm', joined: '2024-05-22', reward: '10 pts' },
  ];

  return (
    <Card className="w-full p-0 overflow-x-auto">
      <div className="p-6 pb-2 text-lg font-semibold text-white">Referred Users</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead>Reward</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {referrals.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.joined}</TableCell>
              <TableCell>{item.reward}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ReferralSection; 