export default function MoreButton({ path, children }) {
  return (
    <button className="p-3 h-14 w-full inline-flex items-center gap-5 hover:bg-[#eff3f41a] transition-colors font-bold">
      <div className="w-[26.25px] h-[26.25px] relative">
        <svg viewBox="0 0 24 24" width={24} height={24} className="block">
          <path fill="#e7e9ea" d={path} />
        </svg>
      </div>
      <span className="pr-4 text-xl">{children}</span>
    </button>
  )
}
