import { useState } from "react";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  UserIcon,
  Shield,
  ShieldAlert,
} from "lucide-react";
import { useData } from "../contexts/data-context";
import { useAuth } from "../contexts/auth-context";
import { SimpleCard } from "../components/base/card";
import { Button } from "../components/base/button";
import { Badge } from "../components/base/badge";
import { Modal } from "../components/base/modal";
import { Input } from "../components/base/input";
import { Select } from "../components/base/select";
import { IconCard } from "../components/icon-card";
import { cn } from "../utils";

export const UsersPage = () => {
  const { users, addUser, updateUser, deleteUser } = useData();
  const { user: currentUser } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Staff",
    status: "Active",
  });

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "Staff",
      status: "Active",
    });
    setEditingUser(null);
  };

  const handleOpenModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        password: "",
        role: user.role,
        status: user.status,
      });
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: formData.status,
    };

    if (formData.password) {
      userData.password = formData.password;
    }

    if (editingUser) {
      updateUser(editingUser.id, userData);
    } else {
      addUser({ ...userData, password: formData.password });
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    deleteUser(id);
    setDeleteConfirm(null);
  };

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Staff", label: "Staff" },
  ];

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin":
        return ShieldAlert;
      case "Manager":
        return Shield;
      default:
        return UserIcon;
    }
  };

  return (
    <>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primaryColor-500/50 focus:border-primaryColor-500"
        />
      </div>

      <SimpleCard
        title={"Users"}
        asideComponent={
          <Button onClick={() => handleOpenModal()}>
            <Plus className="size-4" />
            Add User
          </Button>
        }
      >
        <div className="overflow-x-auto min-w-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  User
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Role
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Last Login
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    {searchQuery
                      ? "No users found matching your search."
                      : "No users yet."}
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const RoleIcon = getRoleIcon(user.role);
                  const isCurrentUser = user.id === currentUser?.id;

                  return (
                    <tr
                      key={user.id}
                      className={cn(
                        "border-b transition-colors hover:bg-muted/30",
                        isCurrentUser && "bg-primaryColor-50/30"
                      )}
                    >
                      <td className="px-4 py-3">
                        <div className="flex gap-3 items-center">
                          <IconCard
                            icon={RoleIcon}
                            variant={
                              user.role === "Admin"
                                ? "accent"
                                : user.role === "Manager"
                                ? "primary"
                                : "default"
                            }
                            className="rounded-full shrink-0"
                          />
                          <div className="flex flex-col">
                            <span className="font-medium text-foreground flex items-center gap-2">
                              {user.name}
                              {isCurrentUser && (
                                <span className="text-xs text-primaryColor-500">
                                  (You)
                                </span>
                              )}
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
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {user.lastLogin}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleOpenModal(user)}
                            type="button"
                            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primaryColor-500"
                            title="Edit"
                          >
                            <Edit2 className="size-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(user)}
                            type="button"
                            disabled={isCurrentUser}
                            className={cn(
                              "p-2 rounded-lg transition-colors",
                              isCurrentUser
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                            )}
                            title={
                              isCurrentUser
                                ? "Cannot delete yourself"
                                : "Delete"
                            }
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </SimpleCard>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingUser ? "Edit User" : "Add User"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
          <Input
            label={
              editingUser ? "New Password (leave blank to keep)" : "Password"
            }
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={editingUser ? "Enter new password" : "Enter password"}
            required={!editingUser}
          />
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              options={roleOptions}
              required
            />
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={statusOptions}
              required
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCloseModal}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              {editingUser ? "Save Changes" : "Add User"}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Delete User"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete{" "}
            <span className="font-medium text-foreground">
              {deleteConfirm?.name}
            </span>
            ? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteConfirm(null)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => handleDelete(deleteConfirm.id)}
              className="flex-1"
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
