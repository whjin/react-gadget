import { useState } from "react";

export default function EditContact ({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  return (
    <>
      <section className="edit-contact">
        <label>
          名称：
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          邮箱：
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </section>
      <button onClick={() => {
        const updateData = {
          id: initialData.id,
          name,
          email
        };
        onSave(updateData);
      }}>保存</button>
      <button onClick={() => {
        setName(initialData.name);
        setEmail(initialData.email);
      }}>重置</button>
    </>
  );
}