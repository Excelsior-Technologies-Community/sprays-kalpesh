# 🧴 Sprays — Luxury Fragrance Store
### A beginner-friendly React project guide

---

## 📌 What is this project?

This is a **Luxury Perfume E-commerce Website** built with **React**.
It has pages like Home, Shop, Wishlist, and Cart — just like a real online store.

---

## 🚀 How to Run the Project

```bash
# Step 1: Go into the project folder
cd sprays-kalpesh-workdo

# Step 2: Install all packages
npm install

# Step 3: Start the development server
npm run dev

# Step 4: Open your browser and go to:
# http://localhost:5173
```

---

## 📁 Project Folder Structure (Explained Simply)

```
src/
│
├── main.jsx           ← Entry point. This is where React starts.
├── App.jsx            ← Main app. Handles all page routes.
├── index.css          ← Global styles for the whole site.
│
├── components/        ← Reusable UI pieces (used on multiple pages)
│   ├── Navbar/        ← Top navigation bar with logo, menu, cart icon
│   ├── Hero/          ← Big banner section on homepage
│   ├── ProductCard/   ← A single product box (image, price, add to cart)
│   ├── Slider/        ← Product horizontally sliding carousel
│   ├── Footer/        ← Bottom section of the page
│   └── ...more components
│
├── context/           ← Shared data (state) across all pages
│   ├── CartContext.jsx      ← Cart data (add/remove/quantity)
│   └── WishlistContext.jsx  ← Wishlist data (save/remove items)
│
├── Cart/              ← Cart page (your cart with checkout)
│   ├── Cart.jsx
│   └── Cart.css
│
├── Wishlist/          ← Wishlist page
│   ├── Wishlist.jsx
│   └── Wishlist.css
│
├── Shop/              ← Shop/product listing page
│   ├── Shop.jsx
│   └── Shop.css
│
└── data/              ← Product data (like a fake database)
```

---

## 🧠 React Concepts Used — Learn Step by Step

---

### ✅ Step 1: Components

> **What:** A component is just a JavaScript function that returns HTML (called JSX).

```jsx
// Example: A simple component
function Hello() {
  return <h1>Hello World!</h1>;
}
```

In this project, every section is a component:
- `Navbar` = the top menu
- `Hero` = the homepage banner
- `ProductCard` = each product box
- `Cart` = the cart page

---

### ✅ Step 2: JSX (JavaScript + HTML together)

> **What:** JSX lets you write HTML inside JavaScript files.

```jsx
// Normal HTML
<button>Click Me</button>

// JSX (inside a React file)
function MyButton() {
  return <button>Click Me</button>;
}
```

**Rules of JSX:**
- Use `className` instead of `class`
- Every component must return ONE parent element
- Self-closing tags must have `/` → `<img />`, `<br />`

---

### ✅ Step 3: Props (Passing Data to Components)

> **What:** Props are like **parameters** you pass into a component.

```jsx
// Sending data (parent)
<ProductCard product={item} />

// Receiving data (child)
function ProductCard({ product }) {
  return <h2>{product.name}</h2>;
}
```

In `ProductCard.jsx`, the product info (name, price, image) is passed as props from the slider/shop page.

---

### ✅ Step 4: useState (Local State)

> **What:** `useState` stores a value that can change. When it changes, the component re-renders.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Used in this project:**
- `useState` in `ProductCard` → tracks selected weight, "Added!" button state
- `useState` in `Navbar` → tracks if mobile menu is open/closed
- `useState` in `Cart` → tracks special instructions text, gift wrap toggle

---

### ✅ Step 5: useEffect (Run code when something changes)

> **What:** `useEffect` runs code **after** the component renders, or when a value changes.

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`; // runs every time count changes
  }, [count]); // ← dependency array
}
```

**Used in this project:**
- `CartContext.jsx` → saves cart to `localStorage` every time cart changes
- `WishlistContext.jsx` → saves wishlist to `localStorage` every time it changes
- `Navbar.jsx` → adds/removes `no-scroll` class on body when mobile menu opens

---

### ✅ Step 6: Context API (Global Shared State)

> **What:** Context lets you share data with **any** component without passing props through every level.

Think of it like a **global store** — any page or component can read/update it.

```jsx
// 1. Create the context
const CartContext = createContext();

// 2. Wrap your app with a Provider
<CartContext.Provider value={{ cartItems, addToCart }}>
  <App />
</CartContext.Provider>

// 3. Use it anywhere
const { cartItems } = useContext(CartContext);
```

**Used in this project:**
- `CartContext.jsx` → cart items, add/remove/update, subtotal
- `WishlistContext.jsx` → wishlist items, add/remove

---

### ✅ Step 7: React Router (Multiple Pages)

> **What:** React Router lets you show different pages based on the URL without reloading.

```jsx
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to="/shop">Go to Shop</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
```

**Pages in this project:**
| URL | Page |
|-----|------|
| `/` | Home (hero, sliders, blog...) |
| `/shop` | Shop / All Products |
| `/wishlist` | Wishlist Page |
| `/cart` | Cart Page |

---

### ✅ Step 8: localStorage (Save data between page reloads)

> **What:** `localStorage` keeps data saved in the browser even after you refresh.

```jsx
// Save
localStorage.setItem('cart', JSON.stringify(cartItems));

// Load
const saved = localStorage.getItem('cart');
const parsed = saved ? JSON.parse(saved) : [];
```

**Used in this project:**
- Cart items saved to localStorage so they stay after refresh
- Wishlist items saved to localStorage too

---

### ✅ Step 9: .map() — Looping over a list

> **What:** `.map()` is how you show a list of items in React.

```jsx
const products = ['Rose', 'Oud', 'Jasmine'];

return (
  <ul>
    {products.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

> ⚠️ Always add a `key` prop when using `.map()` — React needs it to track each item.

**Used in this project:**
- Rendering all product cards in Shop
- Rendering all cart items in Cart page
- Rendering wishlist items in Wishlist page

---

### ✅ Step 10: Conditional Rendering

> **What:** Show different things based on a condition.

```jsx
// If cart is empty, show a message
{cartItems.length === 0 ? (
  <p>Your cart is empty!</p>
) : (
  <div>Show cart items...</div>
)}

// Short version (if only one side)
{isWishlisted && <span>❤️ Saved!</span>}
```

**Used in this project:**
- Cart page shows "empty cart" message when no items
- Navbar cart shows item count only when count > 0
- ProductCard shows "Added!" only after clicking Add to Cart

---

## 🔁 How Data Flows in this Project

```
User clicks "Add to Cart" on a ProductCard
    ↓
addToCart() function runs (from CartContext)
    ↓
cartItems state updates in CartContext
    ↓
Cart page and Navbar both re-render automatically
    ↓
Saved to localStorage (persists on refresh)
```

---

## 🎨 Styling Approach

- **Plain CSS files** — each component has its own `.css` file
- **No Tailwind, no Bootstrap** — just vanilla CSS
- **Google Fonts** — Inter font for clean typography
- **Responsive design** — mobile media queries in every CSS file

---

## 📦 Packages Used

| Package | What it does |
|---------|-------------|
| `react` | Core React library |
| `react-dom` | Renders React to the browser |
| `react-router-dom` | Client-side routing (multiple pages) |
| `swiper` | Touch-friendly product carousels |
| `vite` | Super fast development server |

---

## 📝 Key Files to Study First (for beginners)

1. `main.jsx` — How React starts and wraps context providers
2. `App.jsx` — How routing is set up
3. `context/CartContext.jsx` — How global state works
4. `components/ProductCard/ProductCard.jsx` — How props + state work together
5. `Cart/Cart.jsx` — How a full page component is built

---

## 💡 Tips for Beginners

- 🔄 React **re-renders** a component whenever state or props change
- 📦 Keep components **small and focused** — one job per component
- 🌐 Context is great for things needed **everywhere** (cart, auth, theme)
- 🗝️ Always add `key` when using `.map()` on a list
- 💾 Use `localStorage` to persist data across page refreshes
- 🚫 Never directly mutate state — always use the `set` function

---

*Built with ❤️ using React + Vite*
