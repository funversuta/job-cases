interface Props {
  readonly events: string[];
}

export function Events({ events }:Props) {
  return (
    <ul className="response">
    {
      events.map((event:string, index:number) =>
        <li key={ index++ }>{ event }</li>
      )
    }
    </ul>
  );
}