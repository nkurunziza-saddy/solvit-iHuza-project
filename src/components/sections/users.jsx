import React from "react";
import { Button } from "../button";
import { UserIcon } from "lucide-react";
import { SimpleCard } from "../card";
import { IconCard } from "../icon-card";
import { Badge } from "../badge";

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
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-2">User</th>
            <th className="pb-2">Role</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Last login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((user) => (
            <tr key={user.email} className="border-b hover:bg-gray-100">
              <td className="py-2">
                <div className="flex gap-1.5 items-center">
                  <IconCard icon={UserIcon} variant="default" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </div>
              </td>
              <td className="py-2">
                <Badge text={user.role} />
              </td>
              <td className="py-2">
                <Badge text={user.status} />
              </td>
              <td className="py-2">
                <span className="text-sm text-gray-500">{user.lastLogin}</span>
              </td>
              <td className="py-2">
                <a href="#" className="text-sm text-blue-500">
                  Edit
                </a>
                <a href="#" className="ml-4 text-sm text-red-500">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SimpleCard>
  );
};
