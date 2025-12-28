import { useState } from "react";
import { Plus, Search, Edit2, Trash2, BoxIcon } from "lucide-react";
import { useData } from "../contexts/data-context";
import { SimpleCard } from "../components/base/card";
import { Button } from "../components/base/button";
import { Badge } from "../components/base/badge";
import { Modal } from "../components/base/modal";
import { Input } from "../components/base/input";
import { Select } from "../components/base/select";
import { IconCard } from "../components/icon-card";
import { useAuth } from "../contexts/auth-context";
import { checkQuantityStatus } from "../utils";

export const ProductsPage = () => {
  const {
    products,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    getCategoryById,
  } = useData();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const { user, isAdmin } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    quantity: "",
    price: "",
  });

  const filteredProducts = products
    .filter((product) => {
      if (isAdmin) {
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else {
        return (
          product.createdBy === user.email &&
          (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
    })
    .map((p) => {
      return { ...p, category: getCategoryById(p.categoryId).name };
    });

  const resetForm = () => {
    setFormData({
      name: "",
      categoryId: "",
      quantity: "",
      price: "",
    });
    setEditingProduct(null);
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        categoryId: product.categoryId,
        quantity: String(product.quantity),
        price: String(product.price),
      });
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  console.log(filteredProducts);
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

    const category = categories.find((c) => c.id === formData.categoryId);

    if (!category) {
      setError({
        categoryId: "Category not found",
      });
      return;
    }

    if (formData.quantity < 0 || isNaN(formData.quantity)) {
      setError({
        quantity: "Quantity cannot be negative or not a number",
      });
      return;
    }

    if (formData.price < 0 || isNaN(formData.price)) {
      setError({
        name: "Price cannot be negative or not a number",
      });
      return;
    }

    const productData = {
      name: formData.name,
      categoryId: formData.categoryId,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    setDeleteConfirm(null);
  };

  const categoryOptions = categories.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  return (
    <>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primaryColor-500/50 focus:border-primaryColor-500"
        />
      </div>

      <SimpleCard
        title={"Products"}
        asideComponent={
          <Button onClick={() => handleOpenModal()}>
            <Plus className="size-4" />
            Add Product
          </Button>
        }
      >
        <div className="overflow-x-auto min-w-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Product
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Category
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Quantity
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Price
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    {searchQuery
                      ? "No products found matching your search."
                      : "No products yet. Add your first product!"}
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b transition-colors hover:bg-muted/30"
                  >
                    <td className="px-4 py-3">
                      <div className="flex gap-3 items-center">
                        <IconCard
                          icon={BoxIcon}
                          variant="primary"
                          className="rounded-lg shrink-0"
                        />
                        <span className="font-medium text-foreground">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {product.category}
                    </td>
                    <td className="px-4 py-3 text-sm">{product.quantity}</td>
                    <td className="px-4 py-3 text-sm font-medium">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <Badge text={checkQuantityStatus(product.quantity)} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleOpenModal(product)}
                          type="button"
                          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primaryColor-500"
                          title="Edit"
                        >
                          <Edit2 className="size-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(product)}
                          type="button"
                          className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                          title="Delete"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </SimpleCard>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingProduct ? "Edit Product" : "Add Product"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
          <Select
            label="Category"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            options={categoryOptions}
            placeholder="Select a category"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="0"
              min="0"
              required
            />
            <Input
              label="Price (rwf)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
              step="0.01"
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
              {editingProduct ? "Save Changes" : "Add Product"}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Delete Product"
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
