import { useState } from 'react'
import { comedians } from './data/comedians'

const filters = ['All', 'Dark Humour', 'Observational', 'Self-deprecating', 'Political']

function App() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? comedians
    : comedians.filter(c => c.style === active)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 px-8 py-4">
        <h1 className="text-xl font-bold text-purple-400">Comedy Finder</h1>
      </nav>
      <main className="max-w-5xl mx-auto px-8 py-10">
        <div className="flex gap-3 mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${active === f ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {filtered.map(comedian => (
            <div key={comedian.id} className="bg-gray-900 rounded-xl p-6">
              <span className="text-xs text-purple-400 font-medium">{comedian.style}</span>
              <h2 className="text-lg font-bold mt-1">{comedian.name}</h2>
              <p className="text-gray-400 text-sm mt-2">{comedian.bio}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
