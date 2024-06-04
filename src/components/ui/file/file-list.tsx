import { Card, CardDescription, CardHeader, CardTitle } from "../card";
import {
  Table,
  TableBody,
  TableHead,
  TableCaption,
  TableHeader,
  TableRow,
} from "../table";

function List() {
  return (
    <Card className="latest-file-list">
      <CardHeader>
        <CardTitle>Latest Files</CardTitle>
        <CardDescription className="">
          <Table>
            <TableCaption>A list of your recent invoices</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Modified</TableHead>
                <TableHead className="text-right">Size</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default List;
