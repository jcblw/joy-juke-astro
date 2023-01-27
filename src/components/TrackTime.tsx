export interface Props {
  millis: number;
}

export default function TrackTime({ millis }: Props) {
  const minutes = Math.floor(millis / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);
  return (
    <span>
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </span>
  );
}
