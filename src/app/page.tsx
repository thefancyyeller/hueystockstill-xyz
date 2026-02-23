import apps from "@/apps";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center gap-6">
          <img
            src="/logo.jpg"
            alt="Huey P. Stockstill LLC"
            className="h-14 w-auto object-contain"
          />
          <div className="border-l border-gray-300 pl-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              User Portal
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Select an Application</h1>
          <p className="mt-1 text-sm text-gray-500">
            Choose a tool below to get started
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="group bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-150"
            >
              <h2 className="text-base font-semibold text-gray-900">
                {app.name}
              </h2>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                {app.description}
              </p>
              <span className="mt-5 inline-block text-xs font-medium text-blue-600 group-hover:underline">
                Open application →
              </span>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} Huey P. Stockstill LLC. All rights reserved.
      </footer>

    </div>
  );
}
