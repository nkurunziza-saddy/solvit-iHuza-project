import { UserIcon } from "lucide-react";
import { SimpleCard } from "../base/card";
import { IconCard } from "../icon-card";
import { Badge } from "../base/badge";
import { cn } from "../../utils";

const USERS = [
  {
    name: "John Smith",
    email: "john.smith@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "5 hours ago",
  },
  {
    name: "Michael Brown",
    email: "m.brown@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "1 day ago",
  },
  {
    name: "Emily Davis",
    email: "emily.d@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "3 days ago",
  },
  {
    name: "David Wilson",
    email: "d.wilson@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "6 hours ago",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "30 min ago",
  },
  {
    name: "Robert Taylor",
    email: "r.taylor@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "2 days ago",
  },
  {
    name: "Jennifer Miller",
    email: "j.miller@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "4 hours ago",
  },
  {
    name: "Christopher Lee",
    email: "c.lee@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "1 hour ago",
  },
  {
    name: "Amanda White",
    email: "a.white@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "1 week ago",
  },
];

export const Users = () => {
  return (
    <SimpleCard title={"Users"} asideText={"Add user"}>
      <div className="overflow-x-auto min-w-0">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-muted/80">
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground/90">
                User
              </th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground/90">
                Role
              </th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground/90">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground/90">
                Last login
              </th>
              <th className="px-4 py-3 text-sm font-medium text-muted-foreground/90">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => (
              <tr
                key={user.email}
                className={cn(
                  "border-b transition-colors",
                  "hover:bg-muted/60"
                )}
              >
                <td className="px-4 py-3">
                  <div className="flex gap-3 items-center">
                    <IconCard
                      icon={UserIcon}
                      variant="default"
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-foreground">
                        {user.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge text={user.role} />
                </td>
                <td className="px-4 py-3">
                  <Badge text={user.status} />
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 *:text-sm">
                    <button
                      className={cn(
                        "p-1.5 rounded-md transition-colors",
                        "text-primaryColor-400"
                      )}
                    >
                      Edit
                    </button>
                    <button
                      className={cn(
                        "p-1.5 rounded-md transition-colors",
                        "text-destructive"
                      )}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SimpleCard>
  );
};
