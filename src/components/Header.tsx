import Icon, { IconName } from "./Icon";

export interface Props {
  title: string;
}

export default ({ title }: Props) => {
  return (
    <header className="flex flex-row overflow-hidden pt-5 pb-10 sticky top-0 z-10 bg-gradient-to-b from-slate-900 to-transparent">
      <h1
        className="flex-1 select-none inline-block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-200"
        style={{ WebkitBackgroundClip: "text" }}
      >
        {title}
      </h1>
      <div className="flex-0">
        <div className="cursor-pointer p-3 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-zinc-900 inline-block transition-colors">
          <Icon
            iconName={IconName.Search}
            height="32px"
            width="32px"
            className="fill-white"
            onClick={() => {
              window._search.showModal();
            }}
          />
        </div>
      </div>
    </header>
  );
};
