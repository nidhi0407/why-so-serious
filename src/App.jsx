import { useState } from 'react'
import { comedians } from './data/comedians'
import ComedianCard from './components/ComedianCard'

const filters = ['All', 'Dark Humour', 'Observational', 'Self-deprecating', 'Political']

function App() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

const filtered = comedians.filter(comedian => {
  const matchesStyle =
    active === 'All' || comedian.style === active

  const matchesSearch =
    comedian.name
      .toLowerCase()
      .includes(search.toLowerCase())

  return matchesStyle && matchesSearch
})
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 px-8 py-4">
        <h1 className="text-xl font-bold text-purple-400">Comedy Finder</h1>
      </nav>
      <main className="max-w-5xl mx-auto px-8 py-10">
        <input
  type="text"
  placeholder="Search comedians..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white"
/>
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
  <ComedianCard
    key={comedian.id}
    comedian={comedian}
  />
))}
        
        </div>
      </main>
    </div>
  )
}

export default App
