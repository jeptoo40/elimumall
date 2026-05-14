import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const BooksAdmin = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  // 📥 LOAD BOOKS
  const fetchBooks = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/getBooks.php");
      const data = await res.json();

      setBooks(data);
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ➕ ADD BOOK
  const handleAdd = async () => {
    if (
      !form.name ||
      !form.category ||
      !form.price ||
      !form.image
    ) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("image", form.image);

    try {
      const res = await fetch("http://localhost:8000/addBook.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      console.log(result);

      if (result.success) {
        alert("Book added successfully");

        setForm({
          name: "",
          category: "",
          price: "",
          image: null,
        });

        fetchBooks();
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.log(err);
      alert("Failed to add book");
    }
  };

  // ❌ DELETE BOOK
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    try {
      const res = await fetch("http://localhost:8000/deleteBook.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();

      if (result.success) {
        fetchBooks();
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <h2>Manage Books</h2>

      {/* ➕ FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Book Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        {/* 📸 IMAGE BROWSE */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.files[0],
            })
          }
        />

        <button onClick={handleAdd}>
          Add Book
        </button>
      </div>

      {/* 📚 TABLE */}
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <table width="100%" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>

                <td>
                  <img
                    src={`http://localhost:8000/${book.image}`}
                    width="60"
                    alt={book.name}
                  />
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
};

export default BooksAdmin;