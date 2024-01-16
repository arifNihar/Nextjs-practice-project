import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = () => {
  return (
    <div>
      <form action={create} className="flex gap-2">
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-sky-500 border p-1 rounded-sm"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
