import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Layers, FolderOpen } from "lucide-react";
import { useData } from "../contexts/data-context";
import { Button } from "../components/base/button";
import { Modal } from "../components/base/modal";
import { Input } from "../components/base/input";
import { Textarea } from "../components/base/textarea";
import { IconCard } from "../components/icon-card";

export const CategoriesPage = () => {
  const {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    getProductCountByCategory,
  } = useData();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
    });
    setEditingCategory(null);
  };

  const handleOpenModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        description: category.description || "",
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

    if (editingCategory) {
      updateCategory(editingCategory.id, formData);
    } else {
      addCategory(formData);
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    deleteCategory(id);
    setDeleteConfirm(null);
  };

  const variants = ["primary", "accent", "success", "warning", "error"];
  const getVariant = (index) => variants[index % variants.length];

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Categories</h1>
          <p className="text-sm text-muted-foreground">
            Organize your products by category
          </p>
        </div>
        <Button onClick={() => handleOpenModal()}>
          <Plus className="size-4" />
          Add Category
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primaryColor-500/50 focus:border-primaryColor-500"
        />
      </div>

      {filteredCategories.length === 0 ? (
        <div className="bg-background border rounded-xl p-8 text-center">
          <FolderOpen className="size-12 mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground">
            {searchQuery
              ? "No categories found matching your search."
              : "No categories yet. Add your first category!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCategories.map((category, index) => {
            const productCount = getProductCountByCategory(category.id);
            return (
              <div
                key={category.id}
                className="bg-background border rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconCard
                    icon={Layers}
                    variant={getVariant(index)}
                    size="lg"
                    className="rounded-xl"
                  />
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleOpenModal(category)}
                      type="button"
                      className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primaryColor-500"
                      title="Edit"
                    >
                      <Edit2 className="size-4" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(category)}
                      type="button"
                      className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                      title="Delete"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {category.description || "No description"}
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium text-foreground">
                    {productCount}
                  </span>
                  <span className="text-muted-foreground">
                    {productCount === 1 ? "product" : "products"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingCategory ? "Edit Category" : "Add Category"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Category Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter category name"
            required
          />
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter category description (optional)"
            rows={3}
          />
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
              {editingCategory ? "Save Changes" : "Add Category"}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Delete Category"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete{" "}
            <span className="font-medium text-foreground">
              {deleteConfirm?.name}
            </span>
            ?
            {getProductCountByCategory(deleteConfirm?.id) > 0 && (
              <span className="block mt-1 text-warning-foreground">
                Warning: This category has{" "}
                {getProductCountByCategory(deleteConfirm?.id)} products.
              </span>
            )}
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
