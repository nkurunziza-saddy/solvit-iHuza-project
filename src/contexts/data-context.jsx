import { createContext, useContext, useState, useEffect } from "react";
import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_USERS,
} from "../data/seed";

const DataContext = createContext(null);

const PRODUCTS_STORAGE_KEY = "ihuza-products";
const CATEGORIES_STORAGE_KEY = "ihuza-categories";
const USERS_STORAGE_KEY = "ihuza-users";

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  // init data from local
  useEffect(() => {
    const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);

    setProducts(storedProducts ? JSON.parse(storedProducts) : INITIAL_PRODUCTS);
    setCategories(
      storedCategories ? JSON.parse(storedCategories) : INITIAL_CATEGORIES
    );
    setUsers(storedUsers ? JSON.parse(storedUsers) : INITIAL_USERS);
  }, []);

  // add to local storage on changes
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
  }, [users]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id, updates) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
    };
    setCategories((prev) => [newCategory, ...prev]);
    return newCategory;
  };

  const updateCategory = (id, updates) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
    // update category name in products if changed
    if (updates.name) {
      const oldCategory = categories.find((c) => c.id === id);
      if (oldCategory && oldCategory.name !== updates.name) {
        setProducts((prev) =>
          prev.map((p) =>
            p.categoryId === id ? { ...p, category: updates.name } : p
          )
        );
      }
    }
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const getCategoryById = (id) => {
    return categories.find((c) => c.id === id);
  };

  const getProductCountByCategory = (categoryId) => {
    return products.filter((p) => p.categoryId === categoryId).length;
  };

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      lastLogin: "Never",
    };
    setUsers((prev) => [newUser, ...prev]);
    return newUser;
  };

  const updateUser = (id, updates) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updates } : u))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const getUserById = (id) => {
    return users.find((u) => u.id === id);
  };

  // stats
  const getStats = () => {
    const totalProducts = products.length;
    const totalCategories = categories.length;
    const totalUsers = users.length;
    const lowStockProducts = products.filter(
      (p) => p.status === "Low Stock"
    ).length;
    const outOfStockProducts = products.filter(
      (p) => p.status === "Out of Stock"
    ).length;
    const totalValue = products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );

    return {
      totalProducts,
      totalCategories,
      totalUsers,
      lowStockProducts,
      outOfStockProducts,
      totalValue,
    };
  };

  return (
    <DataContext.Provider
      value={{
        // products
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
        // categories
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        getCategoryById,
        getProductCountByCategory,
        // users
        users,
        addUser,
        updateUser,
        deleteUser,
        getUserById,
        // stats
        getStats,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
