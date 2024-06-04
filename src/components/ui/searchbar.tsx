import { Input } from "./input";
import { Button } from "./button";

function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="input" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </div>
  );
}

export { SearchBar };
