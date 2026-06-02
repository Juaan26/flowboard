import { useParams } from "react-router-dom"

 function ProjectPage() {
  const { id } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Proyecto {id}</h1>
      <p className="text-gray-500 mt-2">El kanban irá aquí.</p>
    </div>
  )
}
export default ProjectPage