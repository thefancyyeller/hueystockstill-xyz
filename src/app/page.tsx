import apps from "@/apps";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          hueystockstill.xyz
        </h1>
        <p className="mt-2 text-gray-400 text-sm">Select an app to get started</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            className={`group flex flex-col gap-3 rounded-xl border-l-4 ${app.color} bg-gray-900 p-6 transition-all duration-150 hover:bg-gray-800 hover:scale-[1.02]`}
          >
            <div className="text-4xl">{app.emoji}</div>
            <div>
              <h2 className="text-base font-semibold text-white group-hover:text-white">
                {app.name}
              </h2>
              <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                {app.description}
              </p>
            </div>
            <div className="mt-auto pt-2 text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
              Open →
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
