import { Link } from 'react-router-dom'

export default function ComedianCard({ comedian }) {
  return (
    <Link to={`/comedian/${comedian.id}`}>
      <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition">
        <span className="text-xs text-purple-400 font-medium">
          {comedian.style}
        </span>

        <h2 className="text-lg font-bold mt-1">
          {comedian.name}
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          {comedian.bio}
        </p>
      </div>
    </Link>
  )
}