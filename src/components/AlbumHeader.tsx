import Icon, { IconName } from "./Icon";
import Image from "./Image";

export interface Props {
  title: string;
  artist: string;
  image: string;
  contentType: string;
  backgroundImage?: string;
}

export default ({
  title,
  backgroundImage,
  artist,
  image,
  contentType,
}: Props) => {
  return (
    <header
      className={`flex flex-col overflow-hidden relative top-0 z-10 ${
        backgroundImage ? `` : "bg-gradient-to-b from-slate-900 to-transparent"
      }`}
    >
      <img
        className="object-cover blur-sm w-full h-full absolute z-0 object-top scale-110"
        src={backgroundImage}
        alt="background"
      />
      <div className="top-0 flex z-10 pl-10 pr-10 pt-5 w-full">
        <div className="flex-1 flex items-center">
          <div className="cursor-pointer p-3 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-zinc-900 inline-block transition-colors">
            <Icon
              iconName={IconName.Back}
              height="24px"
              width="24px"
              className="fill-white"
              onClick={() => {
                window.history.back();
              }}
            />
          </div>
        </div>
        <div className="flex-0">
          <div className="cursor-pointer p-3 rounded-full bg-slate-900 hover:bg-slate-800 active:bg-zinc-900 inline-block transition-colors">
            <Icon
              iconName={IconName.Search}
              height="24px"
              width="24px"
              className="fill-white"
              onClick={() => {
                window._search.showModal();
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex z-10 pt-10 pb-5 pl-10 pr-10 w-full bg-gradient-to-b from-transparent to-slate-900">
        <div className="flex-1 flex items-start md:items-center flex-col md:flex-row">
          <Image
            src={image}
            alt={title}
            className="mb-4 md:mb-0 md:mr-3 rounded-sm self-center min-w-50 flex-0"
          />
          <div className="flex-1">
            {contentType && (
              <p>
                <span className="select-none text-slate-200">
                  {contentType}
                </span>
              </p>
            )}
            <h1 className=" select-none text-5xl font-extrabold text-white">
              {title}
            </h1>
            <h3 className="select-none text-xl text-slate-200">{artist}</h3>
          </div>
        </div>
      </div>
    </header>
  );
};
