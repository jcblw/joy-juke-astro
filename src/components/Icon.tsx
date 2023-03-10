export enum IconName {
  Search,
  Back,
  Play,
  Pause,
}

export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  iconName: IconName;
  className?: string;
  onClick?: () => void;
}

// From https://fonts.google.com/icons?category=Sans+Serif&icon.style=Rounded
export const IconMap: Record<IconName, string> = {
  [IconName.Search]:
    "M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z",
  [IconName.Back]: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z",
  [IconName.Play]: "M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z",
  [IconName.Pause]: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z",
};

export default ({
  iconName,
  color,
  width,
  height,
  className,
  onClick,
}: IconProps) => {
  const viewBox = `0 0 48 48`;
  return (
    <div className={`flex items-center justify-center`} onClick={onClick}>
      <svg height={height ?? "48"} width={width ?? "48"} viewBox={viewBox}>
        <path d={IconMap[iconName]} className={className} />
      </svg>
    </div>
  );
};
