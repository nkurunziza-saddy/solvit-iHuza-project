import { createContext, useContext, useState, useEffect } from "react";
import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_USERS,
} from "../data/seed";
import { useAuth } from "./auth-context";

const DataContext = createContext(null);

const PRODUCTS_STORAGE_KEY = "ihuza-products";
const CATEGORIES_STORAGE_KEY = "ihuza-categories";
const USERS_STORAGE_KEY = "ihuza-users";

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

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
    const existingProduct = products.find(
      (p) => p.name.toLowerCase() === product.name.toLowerCase()
    );
    if (existingProduct) {
      return { error: "Product name already exists" };
    }

    const newProduct = {
      ...product,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      createdBy: user.email,
    };

    setProducts((prev) => [newProduct, ...prev]);
    return { data: newProduct };
  };

  const updateProduct = (id, updates) => {
    const existingProduct = products.find((p) => p.id === id);
    if (!existingProduct) {
      return { error: "Product not found" };
    }
    if (user.role !== "Admin" && user.email !== existingProduct.createdBy) {
      return { error: "Unauthorized" };
    }
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
    return { data: "success" };
  };

  const deleteProduct = (id) => {
    const existingProduct = products.find((p) => p.id === id);
    if (!existingProduct) {
      return { error: "Product not found" };
    }
    if (user.role !== "Admin" && user.email !== existingProduct.createdBy) {
      return { error: "Unauthorized" };
    }
    setProducts((prev) => prev.filter((p) => p.id !== id));
    return { data: "success" };
  };

  const getProductById = (id) => {
    const foundProduct = products.find((p) => p.id === id);
    if (!foundProduct) {
      return { error: "Product not found" };
    }
    return { data: foundProduct };
  };

  const addCategory = (category) => {
    if (user.role !== "Admin") {
      return { error: "Unauthorized" };
    }

    const existingCat = categories.find(
      (c) => c.name.toLowerCase() === category.name.toLowerCase()
    );
    if (existingCat) {
      return { error: "Category name already exists" };
    }

    const newCategory = {
      ...category,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
    };
    setCategories((prev) => [newCategory, ...prev]);
    return { data: newCategory };
  };

  const updateCategory = (id, updates) => {
    const existingCategory = categories.find((c) => c.id === id);
    if (!existingCategory) {
      return { error: "Category not found" };
    }
    if (user.role !== "Admin") {
      return { error: "Unauthorized" };
    }
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
    return { data: "success" };
  };

  const deleteCategory = (id) => {
    const existingCategory = categories.find((c) => c.id === id);
    if (!existingCategory) {
      return { error: "Category not found" };
    }
    if (user.role !== "Admin") {
      return { error: "Unauthorized" };
    }
    setCategories((prev) => prev.filter((c) => c.id !== id));
    return { data: "success" };
  };

  const getCategoryById = (id) => {
    const foundCategory = categories.find((c) => c.id === id);
    if (!foundCategory) {
      return { error: "Category not found" };
    }
    return { data: foundCategory };
  };

  const getProductCountByCategory = (categoryId) => {
    const foundCategory = categories.find((c) => c.id === categoryId);
    if (!foundCategory) {
      return { error: "Category not found" };
    }
    const count = products.filter((p) => p.categoryId === categoryId).length;
    return { data: count };
  };

  const addUser = (userData) => {
    const existingByEmail = users.find(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase()
    );
    if (existingByEmail) {
      return { error: "Email already exists" };
    }

    const newUser = {
      ...userData,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      lastLogin: undefined,
    };
    setUsers((prev) => [newUser, ...prev]);
    return { data: newUser };
  };

  const updateUser = (id, updates) => {
    const existingUser = users.find((u) => u.id === id);
    if (!existingUser) {
      return { error: "User not found" };
    }
    if (user.role !== "Admin" && user.email !== existingUser.email) {
      return { error: "Unauthorized" };
    }
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updates } : u))
    );
    return { data: "success" };
  };

  const deleteUser = (id) => {
    const existingUser = users.find((u) => u.id === id);
    if (!existingUser) {
      return { error: "User not found" };
    }
    if (user.role !== "Admin" && user.email !== existingUser.email) {
      return { error: "Unauthorized" };
    }
    setUsers((prev) => prev.filter((u) => u.id !== id));
    return { data: "success" };
  };

  const getUserById = (id) => {
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser) {
      return { error: "User not found" };
    }
    return { data: foundUser };
  };

  // stats
  const getStats = () => {
    const totalProducts = products.length;
    const totalCategories = categories.length;
    const totalUsers = users.length;
    const lowStockProducts = products.filter((p) => p.quantity <= 10).length;
    const outOfStockProducts = products.filter((p) => p.quantity <= 0).length;
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
