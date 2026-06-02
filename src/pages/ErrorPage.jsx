export default function ErrorPage() {
  return (
    <div className="h-screen bg-secondary-500 flex justify-center p-16">
      <h1 className="text-xl md:text-3xl font-semibold text-primary-200">
        Oops!
        </h1>
      <p className="text-lg md:text-3xl font-semibold text-primary-200">
        Algo salió mal.
      </p>
    </div>
  )
}