import { useParams, Link } from 'react-router-dom'
import { comedians } from '../data/comedians'

export default function ComedianDetail() {
  const { id } = useParams()

  const comedian = comedians.find(
    c => c.id === Number(id)
  )

  if (!comedian) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <h1>Comedian not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <Link
        to="/"
        className="text-purple-400 hover:text-purple-300"
      >
        ← Back to Comedians
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        {comedian.name}
      </h1>

      <p className="text-purple-400 mt-2">
        {comedian.style}
      </p>

      <p className="mt-6 text-gray-300">
        {comedian.bio}
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Specials
      </h2>

      <div className="mt-4 space-y-3">
        {comedian.specials.map((special) => (
          <a
            key={special.title}
            href={special.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition"
          >
            <h3 className="font-semibold">
              {special.title}
            </h3>

            <p className="text-sm text-purple-400">
              {special.platform}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}