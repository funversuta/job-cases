interface Props {
  readonly isConnected: boolean;
}

export function ConnectionState({isConnected}: Props) {
  console.log(isConnected);
  return <p>Подкючение к серверу: {"" + isConnected}</p>;
}
