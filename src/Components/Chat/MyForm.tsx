import { FormEvent, useState } from "react";
import { socket } from "../../Socket";

interface Props {
  readonly events: string[];
}

export function MyForm({events}: Props) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (events) setIsLoading(false);

    socket.timeout(5000).emit("message", value, () => {
      setIsLoading(false);
    });
    setValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
}
