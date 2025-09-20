import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [gambar, setGambar] = useState("https://i.pravatar.cc/48?u=1");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !gambar) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${gambar}?${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor=""> Nama</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor=""> Gambar</label>
      <input
        type="text"
        value={gambar}
        onChange={(e) => setGambar(e.target.value)}
      />

      <button type="submit" className="button">
        Tambah
      </button>
    </form>
  );
}
